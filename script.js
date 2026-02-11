const darkMode = document.getElementById("dark");
let mainElement = document.getElementById("main");
darkMode.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
