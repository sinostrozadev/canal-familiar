import { readFile } from "node:fs/promises";
import { validateRound } from "./lib/validacion.mjs";

for (const number of ["01", "02", "03", "04"]) {
  const round = JSON.parse(await readFile(`data/piloto/ronda-${number}.json`, "utf8"));
  const result = validateRound(round);
  console.log(`OK ${round.id}: ${JSON.stringify(result)}`);
}
