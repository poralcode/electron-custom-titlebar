// Import required module for IPC communication
const { ipcRenderer } = require("electron");

// Event listener when the DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  // Get references to the control buttons
  const btnMinimize = document.getElementById("minimize");
  const btnMaximize = document.getElementById("maximize");
  const btnClose = document.getElementById("close");

  // Event listeners for control button clicks
  btnMinimize.addEventListener("click", () => {
    ipcRenderer.send("minimize-window"); // Send IPC message to minimize the window
  });

  btnMaximize.addEventListener("click", () => {
    ipcRenderer.send("maximize-window"); // Send IPC message to maximize/unmaximize the window
  });

  btnClose.addEventListener("click", () => {
    ipcRenderer.send("close-window"); // Send IPC message to close the window
  });

  // IPC event listeners to handle window maximize/unmaximize events
  ipcRenderer.on("unmaximize-window", () => {
    btnMaximize.classList.remove("maximized"); // Update button class to unmaximized | This is for icon change.
    btnMaximize.classList.add("unmaximized");
  });

  ipcRenderer.on("maximized-window", () => {
    btnMaximize.classList.remove("unmaximized"); // Update button class to maximized | This is for icon change.
    btnMaximize.classList.add("maximized");
  });
});
