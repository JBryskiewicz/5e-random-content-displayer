import { initializeProgram } from "./initializeProgram.js";

console.log("5e roll table tool");

Hooks.on("init", function () {
  addTokenControlsButton();
});

function addTokenControlsButton() {
  const addButton = (controls, button) => {
    controls.push(button);
    return controls;
  };

  Hooks.on("getSceneControlButtons", (controls) => {
    const tokenControlsButton = controls.find(
      (button) => button.name === "token"
    );

    if (tokenControlsButton) {
      addButton(tokenControlsButton.tools, {
        name: "EncounterRoller",
        title: "Roll Encounter",
        icon: "fa-solid fa-helmet-battle",
        onClick: () => {
          initializeProgram();
        },
        button: true,
      });
    }
  });
}
