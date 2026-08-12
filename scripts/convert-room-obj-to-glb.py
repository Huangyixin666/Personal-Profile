import json, re, struct
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "personal information/src/assets/archive/paper"
OBJ = SOURCE / "8.10.obj"
MTL = SOURCE / "8.10.mtl"
OUT = ROOT / "public/assets/room-optimized/room.glb"

def parse_mtl(path):
    materials, current = [], None
    for raw in path.read_text(encoding="utf-8", errors="ignore").splitlines():
        parts = raw.strip().split(maxsplit=1)
        if not parts: continue
        key, value = parts[0], parts[1] if len(parts) > 1 else ""
        if key == "newmtl":
            current = {"name": value, "Kd": [1,1,1], "d": 1.0}
            materials.append(current)
        elif current is not None and key == "Kd": current["Kd"] = [float(x) for x in value.split()[:3]]
        elif current is not None and key in ("d", "Tr"): current["d"] = float(value) if key == "d" else 1-float(value)
        elif current is not None and key == "map_Kd": current["map"] = value.replace("\\", "/")
    return materials

source_materials = parse_mtl(MTL)
mat_index = {m["name"]: i for i,m in enumerate(source_materials)}
positions, uvs, normals = [], [], []
groups, current = {}, "FrontColor"

def resolve(i, size):
    n = int(i)
    return n-1 if n > 0 else size+n

for raw in OBJ.read_text(encoding="utf-8", errors="ignore").splitlines():
    line = raw.strip()
    if not line or line.startswith("#"): continue
    p = line.split()
    if p[0] == "v": positions.append(tuple(map(float,p[1:4])))
    elif p[0] == "vt": uvs.append(tuple(map(float,p[1:3])))
    elif p[0] == "vn": normals.append(tuple(map(float,p[1:4])))
    elif p[0] == "usemtl": current = " ".join(p[1:])
    elif p[0] == "f":
        face=[]
        for token in p[1:]:
            q=token.split("/")
            face.append((resolve(q[0],len(positions)), resolve(q[1],len(uvs)) if len(q)>1 and q[1] else -1, resolve(q[2],len(normals)) if len(q)>2 and q[2] else -1))
        dest=groups.setdefault(current,[])
        for i in range(1,len(face)-1): dest.extend((face[0],face[i],face[i+1]))

blob=bytearray(); views=[]; accessors=[]
def align():
    while len(blob)%4: blob.append(0)
def add_data(data, component_type, type_name, count, target=None, mins=None, maxs=None):
    align(); offset=len(blob); blob.extend(data)
    view={"buffer":0,"byteOffset":offset,"byteLength":len(data)}
    if target: view["target"]=target
    views.append(view)
    acc={"bufferView":len(views)-1,"componentType":component_type,"count":count,"type":type_name}
    if mins is not None: acc["min"]=mins
    if maxs is not None: acc["max"]=maxs
    accessors.append(acc); return len(accessors)-1

images=[]; textures=[]; gltf_materials=[]; webp_used=False
for m in source_materials:
    base=m["Kd"]+[m["d"]]
    gm={"name":m["name"],"pbrMetallicRoughness":{"baseColorFactor":base,"metallicFactor":0.0,"roughnessFactor":0.82},"doubleSided":True}
    if "map" in m:
        uri=m["map"]
        images.append({"uri":uri})
        textures.append({"source":len(images)-1})
        gm["pbrMetallicRoughness"]["baseColorTexture"]={"index":len(textures)-1}
        if uri.lower().endswith(".webp"): webp_used=True
    if m["d"] < .999:
        gm["alphaMode"]="BLEND"
    gltf_materials.append(gm)

primitives=[]
for name, refs in groups.items():
    unique={}; pos=[]; tex=[]; nor=[]; idx=[]
    has_uv=all(r[1]>=0 for r in refs); has_n=all(r[2]>=0 for r in refs)
    for ref in refs:
        if ref not in unique:
            unique[ref]=len(pos); pos.append(positions[ref[0]])
            if has_uv: tex.append((uvs[ref[1]][0],1.0-uvs[ref[1]][1]))
            if has_n: nor.append(normals[ref[2]])
        idx.append(unique[ref])
    flatp=[x for v in pos for x in v]
    attrs={"POSITION":add_data(struct.pack('<%sf'%len(flatp),*flatp),5126,"VEC3",len(pos),34962,[min(v[i] for v in pos) for i in range(3)],[max(v[i] for v in pos) for i in range(3)])}
    if has_uv:
        flatt=[x for v in tex for x in v]; attrs["TEXCOORD_0"]=add_data(struct.pack('<%sf'%len(flatt),*flatt),5126,"VEC2",len(tex),34962)
    if has_n:
        flatn=[x for v in nor for x in v]; attrs["NORMAL"]=add_data(struct.pack('<%sf'%len(flatn),*flatn),5126,"VEC3",len(nor),34962)
    maxidx=max(idx); fmt='H' if maxidx<65536 else 'I'; ctype=5123 if fmt=='H' else 5125
    ind=add_data(struct.pack('<%s%s'%(len(idx),fmt),*idx),ctype,"SCALAR",len(idx),34963,[0],[maxidx])
    primitives.append({"attributes":attrs,"indices":ind,"material":mat_index.get(name,mat_index.get("FrontColor",0)),"mode":4})

gltf={"asset":{"version":"2.0","generator":"Codex OBJ-to-GLB optimizer"},"scene":0,"scenes":[{"nodes":[0]}],"nodes":[{"mesh":0,"name":"Research Room"}],"meshes":[{"name":"Room","primitives":primitives}],"buffers":[{"byteLength":len(blob)}],"bufferViews":views,"accessors":accessors,"materials":gltf_materials,"images":images,"textures":textures}
if webp_used: gltf["extensionsUsed"]=["EXT_texture_webp"]
js=json.dumps(gltf,separators=(',',':')).encode(); js+=b' ' * ((4-len(js)%4)%4); align()
total=12+8+len(js)+8+len(blob)
with OUT.open('wb') as f:
    f.write(struct.pack('<4sII',b'glTF',2,total)); f.write(struct.pack('<I4s',len(js),b'JSON')); f.write(js); f.write(struct.pack('<I4s',len(blob),b'BIN\0')); f.write(blob)
print(f"{OBJ.stat().st_size/1048576:.2f} MB OBJ -> {OUT.stat().st_size/1048576:.2f} MB GLB; {len(primitives)} materials")
