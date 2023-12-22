export const baseFolderCreator = (folderName) => {
  new Dialog({
    title: "Initialization",
    content: `<p>Create "Random Encounters" folder?</p>`,
    buttons: {
      ok: {
        label: "Agree",
        callback: async () => {
          await Folder.create({ name: folderName, type: "JournalEntry" });
        },
      },
      cancel: {
        label: "Cancel",
      },
    },
  }).render(true);
};
