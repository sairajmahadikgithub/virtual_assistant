
// Show Commands Popup
document.addEventListener("DOMContentLoaded", function () {
  const showCommandsButton = document.getElementById("showCommandsButton");
  const commandsPopup = document.getElementById("commandsPopup");
  const closeCommandsPopup = document.getElementById("closeCommandsPopup");

  showCommandsButton.addEventListener("click", () => {
      commandsPopup.style.display = "block";
  });

  closeCommandsPopup.addEventListener("click", () => {
      commandsPopup.style.display = "none";
  });
});




