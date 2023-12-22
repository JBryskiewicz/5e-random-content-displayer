import { rollTablePickerTemplate } from "../templates/rollTablePickerTemplate.js";
import { simulateRollTable } from "./simulateRollTable.js";

export const rollFromGivenJournal = (mainFolder) => {
  new Dialog({
    title: "Roll Table picker: ",
    content: rollTablePickerTemplate("Choose journal:", mainFolder.content),
    buttons: {
      ok: {
        label: "Submit",
        callback: async (html) => {
          const journal = game.journal.get(html.find("#journal").val());
          const journalPages = journal.pages._source.length;
          const rollResult = await simulateRollTable(journalPages);
          journal.sheet.render(true, { pageIndex: rollResult });
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
