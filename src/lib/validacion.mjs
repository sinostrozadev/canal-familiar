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
