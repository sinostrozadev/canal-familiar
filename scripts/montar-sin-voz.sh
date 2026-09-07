#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"
mkdir -p build/piloto/video
node src/generar-timeline.mjs
TOTAL_DURATION="$(node -p 'JSON.parse(require("fs").readFileSync("build/piloto/timeline.json","utf8")).totalDuration')"

node -e '
const fs=require("fs");
const path=require("path");
const timeline=JSON.parse(fs.readFileSync("build/piloto/timeline.json","utf8"));
const lines=[];
const q=String.fromCharCode(39);
for(const clip of timeline.clips){
  const png=path.resolve(`build/piloto/png/${clip.scene.replaceAll("/","-")}.png`);
  lines.push(`file ${q}${png}${q}`);
  lines.push(`duration ${clip.duration}`);
}
const last=path.resolve(`build/piloto/png/${timeline.clips.at(-1).scene.replaceAll("/","-")}.png`);
lines.push(`file ${q}${last}${q}`);
fs.writeFileSync("build/piloto/stills.txt",lines.join("\n")+"\n");
'

ffmpeg -nostdin -hide_banner -loglevel error -y \
  -f concat -safe 0 -i build/piloto/stills.txt \
  -t "$TOTAL_DURATION" \
  -vf "scale=1280:720,format=yuv420p" -r 24 \
  -c:v libx264 -preset ultrafast -crf 28 \
  build/piloto/video/bloque-01-sin-voz.mp4

echo "Montaje generado: build/piloto/video/bloque-01-sin-voz.mp4"
