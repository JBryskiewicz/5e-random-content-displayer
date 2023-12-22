import { baseFolderCreator } from "./baseFolderCreator.js";
import { rollFromGivenJournal } from "./rollFromGivenJournal.js";

const FOLDER_NAME = "_Random_Encounters";

export const initializeProgram = () => {
  const mainFolder = game.folders.find((folder) => folder.name === FOLDER_NAME);

  !mainFolder
    ? baseFolderCreator(FOLDER_NAME)
    : rollFromGivenJournal(mainFolder);
};
