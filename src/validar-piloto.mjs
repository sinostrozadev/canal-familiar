import { readFile } from "node:fs/promises";
import { validateUniqueRuleBreaker } from "./lib/validacion.mjs";

const round = JSON.parse(await readFile("data/piloto/ronda-04.json", "utf8"));
const answer = validateUniqueRuleBreaker(round);
console.log(`OK ${round.id}: respuesta única = ${answer.id}`);
