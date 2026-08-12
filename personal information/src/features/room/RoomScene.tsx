import { ThreeEvent, useLoader } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Box3, Group, Mesh, MeshPhongMaterial, Vector3 } from 'three'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

const MODEL_SCALE = 0.003

export function RoomScene({ onComputerClick, lightsOn }: { onComputerClick: () => void; lightsOn: boolean }) {
  const materials = useLoader(MTLLoader, '/Personal-Profile/assets/room-optimized/room.mtl')
  const loaded = useLoader(OBJLoader, '/Personal-Profile/assets/room-optimized/room.obj', (loader) => loader.setMaterials(materials))

  const model = useMemo(() => {
    const clone = loaded.clone(true) as Group
    clone.scale.setScalar(MODEL_SCALE)
    clone.updateMatrixWorld(true)
    const bounds = new Box3().setFromObject(clone)
    const center = bounds.getCenter(new Vector3())
    clone.position.set(-center.x, -bounds.min.y + 2.5, -center.z)
    clone.traverse((child) => {
      if (!(child instanceof Mesh)) return
      child.castShadow = true
      child.receiveShadow = true
      const meshMaterials = Array.isArray(child.material) ? child.material : [child.material]
      meshMaterials.forEach((material) => {
        if (material instanceof MeshPhongMaterial) {
          material.shininess = Math.min(material.shininess, 24)
          if (material.name === 'computer') {
            material.emissive.set('#153b66')
            material.emissiveIntensity = lightsOn ? 0.22 : 0
          }
        }
      })
    })
    return clone
  }, [loaded, lightsOn])

  useEffect(() => () => { document.body.style.cursor = 'default' }, [])

  const isComputerScreen = (event: ThreeEvent<PointerEvent | MouseEvent>) => {
    const hit = event.object as Mesh
    const meshMaterials = Array.isArray(hit.material) ? hit.material : [hit.material]
    return meshMaterials.some((material) => material?.name === 'computer')
  }

  return <group>
    <hemisphereLight args={['#eef4ff', '#463a34', lightsOn ? 2.35 : 0]} />
    <directionalLight castShadow position={[7, 14, 9]} intensity={lightsOn ? 3.6 : 0} color="#fff0d2" shadow-mapSize={[1024, 1024]} />
    <spotLight castShadow position={[0, 8.3, .2]} target-position={[0, 3.7, 0]} angle={.62} penumbra={.72} intensity={lightsOn ? 75 : 0} distance={18} color="#ffd99b" />
    <pointLight position={[0, 8.18, .16]} intensity={lightsOn ? 22 : 0} distance={6} color="#ffca77" />
    <primitive
      object={model}
      onPointerOver={(event: ThreeEvent<PointerEvent>) => { if (lightsOn && isComputerScreen(event)) document.body.style.cursor = 'pointer' }}
      onPointerOut={() => { document.body.style.cursor = 'default' }}
      onClick={(event: ThreeEvent<MouseEvent>) => { if (!lightsOn || !isComputerScreen(event)) return; event.stopPropagation(); onComputerClick() }}
    />
  </group>
}
