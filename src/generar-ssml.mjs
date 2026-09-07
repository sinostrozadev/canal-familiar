import { mkdir, readFile, writeFile } from "node:fs/promises";
import { escapeXml } from "./lib/svg.mjs";

const narration = JSON.parse(await readFile("data/piloto/narracion-01-04.json", "utf8"));
await mkdir("build/piloto/ssml", { recursive: true });

for (const segment of narration.segments) {
  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${narration.locale}"><voice name="${narration.voice}"><prosody rate="${narration.rate}" pitch="${narration.pitch}">${escapeXml(segment.text)}</prosody></voice></speak>`;
  await writeFile(`build/piloto/ssml/${segment.id}.ssml`, ssml);
}

console.log(`Generados ${narration.segments.length} archivos SSML para ${narration.voice}`);
