export function validateUniqueRuleBreaker(round) {
  const fields = Object.keys(round.rule);
  const matches = panel => fields.every(field => panel[field] === round.rule[field]);
  const answers = round.panels.filter(panel => !matches(panel));

  if (answers.length !== 1) {
    throw new Error(
      `${round.id}: se esperaba una respuesta única; se encontraron ${answers.length}: ` +
      (answers.map(item => item.id).join(", ") || "ninguna")
    );
  }

  if (answers[0].id !== round.expectedAnswer) {
    throw new Error(
      `${round.id}: la respuesta calculada es ${answers[0].id}, ` +
      `pero expectedAnswer declara ${round.expectedAnswer}`
    );
  }

  return answers[0];
}

function assertExpectedId(round, answers) {
  if (answers.length !== 1) {
    throw new Error(`${round.id}: se esperaba una respuesta única; se encontraron ${answers.length}`);
  }
  if (answers[0].id !== round.expectedAnswer) {
    throw new Error(`${round.id}: respuesta calculada ${answers[0].id}; declarada ${round.expectedAnswer}`);
  }
  return answers[0];
}

export function validateSizeOrder(round) {
  const validSizes = new Set(["small", "large"]);
  for (const item of round.items) {
    if (!validSizes.has(item.top?.size) || !validSizes.has(item.bottom?.size)) {
      throw new Error(`${round.id}: tamaños inválidos en el elemento ${item.id}`);
    }
  }
  return assertExpectedId(round, round.items.filter(item =>
    !(item.top.size === "large" && item.bottom.size === "small")
  ));
}

export function validateShadowDirection(round) {
  if (!round.expectedShadowDirection) throw new Error(`${round.id}: falta expectedShadowDirection`);
  return assertExpectedId(round, round.items.filter(item =>
    item.shadowDirection !== round.expectedShadowDirection
  ));
}

export function validateMemoryChange(round) {
  const before = new Map(round.before.map(item => [item.id, item]));
  const after = new Map(round.after.map(item => [item.id, item]));
  if (before.size !== after.size || [...before.keys()].some(id => !after.has(id))) {
    throw new Error(`${round.id}: los objetos antes y después no coinciden`);
  }

  const changes = [];
  for (const [id, first] of before) {
    const second = after.get(id);
    const keys = new Set([...Object.keys(first), ...Object.keys(second)]);
    keys.delete("id");
    for (const property of keys) {
      if (first[property] !== second[property]) {
        changes.push({ itemId: id, property, from: first[property], to: second[property] });
      }
    }
  }

  if (changes.length !== 1) {
    throw new Error(`${round.id}: se esperaba un cambio único; se encontraron ${changes.length}`);
  }
  const expected = round.expectedChange;
  const actual = changes[0];
  if (["itemId", "property", "from", "to"].some(key => actual[key] !== expected[key])) {
    throw new Error(`${round.id}: el cambio calculado no coincide con expectedChange`);
  }
  return actual;
}

export function validateRound(round) {
  if (round.type === "size-order") return validateSizeOrder(round);
  if (round.type === "shadow-direction") return validateShadowDirection(round);
  if (round.type === "memory-change") return validateMemoryChange(round);
  if (round.type === "rule-breaker") return validateUniqueRuleBreaker(round);
  throw new Error(`${round.id}: tipo de ronda desconocido: ${round.type}`);
}
