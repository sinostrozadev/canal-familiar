import { mkdir, readFile, writeFile } from "node:fs/promises";

const key = process.env.AZURE_SPEECH_KEY;
const region = process.env.AZURE_SPEECH_REGION;
if (!key || !region) {
  throw new Error("Faltan AZURE_SPEECH_KEY y AZURE_SPEECH_REGION");
}

const narration = JSON.parse(await readFile("data/piloto/narracion-01-04.json", "utf8"));
await mkdir("build/piloto/audio", { recursive: true });

for (const segment of narration.segments) {
  const ssml = await readFile(`build/piloto/ssml/${segment.id}.ssml`, "utf8");
  const response = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": "audio-24khz-160kbitrate-mono-mp3",
      "User-Agent": "canal-familiar-pilot"
    },
    body: ssml
  });
  if (!response.ok) throw new Error(`${segment.id}: Azure respondió ${response.status} ${await response.text()}`);
  await writeFile(`build/piloto/audio/${segment.id}.mp3`, Buffer.from(await response.arrayBuffer()));
  console.log(`Sintetizado ${segment.id}`);
}
