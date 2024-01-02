export const simulateRollTable = async (pages) => {
  const firstDice = await new Roll(`1d${pages}`).roll();
  const secondDice = await new Roll(`1d${pages + 1}`).roll();
  const contentRoll = firstDice.total + secondDice.total;
  return Math.floor(contentRoll / 2) - 1;
};
