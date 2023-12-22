export const rollTablePickerTemplate = (label, optionList) => {
  return `
    <form>
      <div class="form-group">
        <label for="journal">${label}</label>
        <select name="journal" id="journal">
        ${optionList.map(
          (option) => `<option value="${option._id}">${option.name}</option>`
        )}
        </select>
      </div>
    </form>
  `;
};
