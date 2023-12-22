export const simulateRollTable = async (pages) => {
  const contentRoll = await new Roll(`2d${pages}`).roll();
  return Math.floor(contentRoll.total / 2) - 1;
};
