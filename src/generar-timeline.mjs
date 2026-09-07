import { mkdir, readFile, writeFile } from "node:fs/promises";

const narration = JSON.parse(await readFile("data/piloto/narracion-01-04.json", "utf8"));
const wordsPerSecond = 2.65;
let cursor = 0;
const clips = narration.segments.map(segment => {
  const speechEstimate = Math.max(1.2, segment.text.trim().split(/\s+/).length / wordsPerSecond);
  const duration = Number((speechEstimate + segment.pauseAfterMs / 1000).toFixed(3));
  const clip = { ...segment, start: Number(cursor.toFixed(3)), speechEstimate: Number(speechEstimate.toFixed(3)), duration };
  cursor += duration;
  return clip;
});
await mkdir("build/piloto", { recursive: true });
await writeFile("build/piloto/timeline.json", JSON.stringify({ totalDuration: Number(cursor.toFixed(3)), clips }, null, 2));
console.log(`Timeline técnico: ${cursor.toFixed(2)} segundos`);
