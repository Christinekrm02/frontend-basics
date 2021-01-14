/*Exchangs active class per event */
const panels = document.querySelectorAll(".panel");
panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveAlasses();
    panel.classList.add("active");
  });
});

function removeActiveAlasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}
