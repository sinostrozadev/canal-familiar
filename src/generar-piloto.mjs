import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import { escapeXml, symbolLayout } from "./lib/svg.mjs";
import { validateUniqueRuleBreaker } from "./lib/validacion.mjs";

const FONT = "assets/fonts/DejaVuSans.ttf";
const FONT_BOLD = "assets/fonts/DejaVuSans-Bold.ttf";
await Promise.all([access(FONT), access(FONT_BOLD)]);

const round = JSON.parse(await readFile("data/piloto/ronda-04.json", "utf8"));
validateUniqueRuleBreaker(round);

const positions = [[145, 235], [720, 235], [1295, 235], [145, 625], [720, 625], [1295, 625]];
const strokes = ["#f0645a", "#22b8a7", "#7957d5", "#22b8a7", "#f0645a", "#7957d5"];
const panels = round.panels.map((panel, index) => {
  const [x, y] = positions[index];
  return `<g transform="translate(${x} ${y})">
    <rect width="480" height="315" rx="25" class="frame" stroke="${strokes[index]}"/>
    ${symbolLayout(panel)}
    <rect x="204" y="326" width="72" height="42" rx="21" class="number-bg"/>
    <text x="240" y="356" text-anchor="middle" class="number">${panel.id}</text>
  </g>`;
}).join("\n");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="3840" height="2160" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="background" y2="1"><stop stop-color="#fffbea"/><stop offset="1" stop-color="#f8df8f"/></linearGradient>
    <style>
      .title{font-weight:700;font-size:58px;font-family:"DejaVu Sans",sans-serif;fill:#132238}
      .subtitle{font-weight:400;font-size:29px;font-family:"DejaVu Sans",sans-serif;fill:#3b4858}
      .number{font-weight:700;font-size:27px;font-family:"DejaVu Sans",sans-serif;fill:#fff}
      .frame{fill:#fff7e8;stroke-width:15}
      .line{fill:none;stroke:#22b8a7;stroke-width:13;stroke-linecap:round}
      .circle{fill:#f0645a}.triangle{fill:#7957d5}.number-bg{fill:#172554}
    </style>
  </defs>
  <rect width="1920" height="1080" fill="url(#background)"/>
  <circle cx="115" cy="105" r="50" fill="#f6c84c"/>
  <text x="115" y="117" text-anchor="middle" class="number">04</text>
  <text x="190" y="105" class="title">${escapeXml(round.question)}</text>
  <text x="192" y="154" class="subtitle">${escapeXml(round.hint)}</text>
  ${panels}
  <g transform="translate(1740 100)"><circle r="58" fill="none" stroke="#fff" stroke-width="13"/><path d="M0-58A58 58 0 1 1-55 18" fill="none" stroke="#f6c84c" stroke-width="13" stroke-linecap="round"/><text y="12" text-anchor="middle" class="title" style="font-size:38px">${round.seconds}</text></g>
</svg>`;

await mkdir("build/piloto/ronda-04", { recursive: true });
await writeFile("build/piloto/ronda-04/tablero.svg", svg);
console.log("Generado build/piloto/ronda-04/tablero.svg");
