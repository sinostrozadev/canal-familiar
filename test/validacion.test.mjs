import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { validateRound } from "../src/lib/validacion.mjs";

const load = async number => JSON.parse(await readFile(`data/piloto/ronda-${number}.json`, "utf8"));
const clone = value => structuredClone(value);

test("acepta las cuatro rondas válidas", async () => {
  for (const number of ["01", "02", "03", "04"]) {
    const round = await load(number);
    assert.doesNotThrow(() => validateRound(round));
  }
});

test("rechaza una ronda sin respuesta", async () => {
  const round = clone(await load("01"));
  round.items[3].top.size = "large";
  round.items[3].bottom.size = "small";
  assert.throws(() => validateRound(round), /respuesta única/);
});

test("rechaza una ronda con dos respuestas", async () => {
  const round = clone(await load("02"));
  round.items[2].shadowDirection = "down-left";
  assert.throws(() => validateRound(round), /respuesta única/);
});

test("rechaza una memoria con dos cambios", async () => {
  const round = clone(await load("03"));
  round.after[1].color = "#000000";
  assert.throws(() => validateRound(round), /cambio único/);
});

test("rechaza una solución declarada incorrectamente", async () => {
  const round = clone(await load("04"));
  round.expectedAnswer = 2;
  assert.throws(() => validateRound(round), /expectedAnswer|declarada/);
});
