import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const root = process.cwd();
const outputDir = join(root, "out");
const sourceDir = join(root, "outputs");
const pages = [
  "personal-archive-new.html",
  "design-corridor.html",
  "internship-room.html",
  "research-room.html",
];

const soundSystem = (musicFile, musicLabel, hoverSelectors, clickSelectors) => `
<style>
.siteMusic{position:fixed;z-index:12000;right:22px;bottom:22px;display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid #96774a88;color:#d8c08f;background:#100c08dc;backdrop-filter:blur(5px);font:12px Georgia,serif;letter-spacing:.08em;cursor:pointer}.siteMusic i{font-style:normal;font-size:17px}.siteMusic.off{opacity:.62}.siteMusic small{max-width:180px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
</style>
<script>(()=>{
let ctx,noiseBuffer,lastRustle=0;
const context=()=>ctx||(ctx=new(window.AudioContext||window.webkitAudioContext)());
function gainNode(c,volume){const g=c.createGain();g.gain.value=volume;g.connect(c.destination);return g}
function clickSound(kind='soft'){
  const c=context(),now=c.currentTime,o=c.createOscillator(),g=gainNode(c,kind==='switch'?.055:.025);
  o.type=kind==='switch'?'square':'sine';o.frequency.setValueAtTime(kind==='switch'?150:420,now);o.frequency.exponentialRampToValueAtTime(kind==='switch'?75:210,now+.07);g.gain.exponentialRampToValueAtTime(.0001,now+.09);o.connect(g);o.start(now);o.stop(now+.1)
}
function rustle(){
  const now=performance.now();if(now-lastRustle<180)return;lastRustle=now;
  const c=context();if(!noiseBuffer){noiseBuffer=c.createBuffer(1,c.sampleRate*.24,c.sampleRate);const d=noiseBuffer.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length)}
  const s=c.createBufferSource(),f=c.createBiquadFilter(),g=gainNode(c,.035);f.type='bandpass';f.frequency.value=1500;f.Q.value=.7;s.buffer=noiseBuffer;s.playbackRate.value=.88+Math.random()*.25;s.connect(f);f.connect(g);s.start()
}
const hover=${JSON.stringify(hoverSelectors)};const clicks=${JSON.stringify(clickSelectors)};
document.querySelectorAll(hover).forEach(el=>el.addEventListener('pointerenter',rustle));
document.querySelectorAll(clicks).forEach(el=>el.addEventListener('click',()=>clickSound(el.matches('.switch,#switchTarget,.submit')?'switch':'soft'),true));
${musicFile ? `
const audio=new Audio('/Personal-Profile/audio/${musicFile}');audio.loop=true;audio.preload='none';audio.volume=.035;
const button=document.createElement('button');button.className='siteMusic off';button.type='button';button.innerHTML='<i>♪</i><small>${musicLabel} · 音乐关闭</small>';document.body.appendChild(button);
let wanted=false;async function toggleMusic(){wanted=!wanted;button.classList.toggle('off',!wanted);button.querySelector('small').textContent='${musicLabel} · '+(wanted?'播放中':'音乐关闭');if(wanted){try{audio.volume=.01;await audio.play();let v=.01;const fade=setInterval(()=>{if(!wanted||v>=.055)return clearInterval(fade);v+=.003;audio.volume=Math.min(v,.055)},120)}catch{wanted=false;button.classList.add('off');button.querySelector('small').textContent='${musicLabel} · 请添加音频'}}else audio.pause()}
button.onclick=toggleMusic;
` : ''}
})();</script>`;

await mkdir(outputDir, { recursive: true });
await rm(join(outputDir, "personal information", "src", "assets"), { recursive: true, force: true });
await cp(
  join(root, "personal information", "src", "assets"),
  join(outputDir, "personal information", "src", "assets"),
  {
    recursive: true,
    filter: (source) => !/\.(obj|mtl)$/i.test(source),
  },
);

for (const file of pages) {
  let html = await readFile(join(sourceDir, file), "utf8");
  html = html
    .replaceAll("../personal%20information/", "./personal%20information/")
    .replaceAll("http://127.0.0.1:4174/room", "./room/")
    .replaceAll("./personal-archive-new.html", "/Personal-Profile/")
    .replaceAll('href="./"', 'href="/Personal-Profile/"');
  html = html.replace(
    /<a class="back" href="\/Personal-Profile\/">/g,
    '<a class="back" href="/Personal-Profile/" onclick="if(document.referrer.includes(\'/Personal-Profile/\')){event.preventDefault();history.back()}">',
  );
  if (file === "personal-archive-new.html") {
    html = html.replace("</body>", soundSystem("serenade-e-flat-major.mp3", "降E大调小夜曲", ".folderWrap,.secondaryProto,.originProto,.wall [role=link]", "button,[role=link],a") + "</body>");
  } else if (file === "design-corridor.html") {
    html = html.replace("</body>", soundSystem("debussy-clair-de-lune.mp3", "德彪西《月光》", ".introCard,.artHotspot", "button,a") + "</body>");
  } else if (file === "internship-room.html") {
    html = html.replace("</body>", soundSystem("", "", ".choice", "button,a") + "</body>");
  }
  const target = file === "personal-archive-new.html" ? "index.html" : basename(file);
  await writeFile(join(outputDir, target), html, "utf8");
}

await writeFile(
  join(outputDir, "404.html"),
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>返回个人档案</title><script>location.replace("/Personal-Profile/")</script></head><body style="margin:0;background:#050504;color:#c8b18a;display:grid;place-items:center;min-height:100vh;font-family:serif">正在返回个人档案……</body></html>`,
  "utf8",
);
