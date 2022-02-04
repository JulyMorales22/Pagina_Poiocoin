const btnSun = document.getElementById("id-sun");
const btnNight = document.getElementById("id-moon");

const sunMode = () => {
  removingDarkMode("page", "dark-mode");
  removingDarkMode("body", "dark-mode");
  removingDarkMode("navNight", "dark-mode2");
  //Acordion
  removingDarkMode("accordion0", "accordionContent");
  removingDarkMode("btnAccordion0", "dark-mode3");
  removingDarkMode("accordion1", "accordionContent");
  removingDarkMode("btnAccordion1", "dark-mode3");
  removingDarkMode("accordion2", "accordionContent");
  removingDarkMode("btnAccordion2", "dark-mode3");

  nightModeActive = false;

  document.getElementById("id-moon").classList.remove("active");
  btnSun.classList.add("active");
};

const removingDarkMode = (id, className) => {
  document.getElementById(id).classList.remove(className);
};

const nightMode = () => {
  addingNightMode("page", "dark-mode");
  addingNightMode("body", "dark-mode");
  addingNightMode("navNight", "dark-mode2");

   //Acordion
  addingNightMode("accordion0", "accordionContent");
  addingNightMode("btnAccordion0", "dark-mode3");
  addingNightMode("accordion1", "accordionContent");
  addingNightMode("btnAccordion1", "dark-mode3");
  addingNightMode("accordion2", "accordionContent");
  addingNightMode("btnAccordion2", "dark-mode3");

  nightModeActive = true;

  document.getElementById("id-sun").classList.remove("active");
  btnNight.classList.add("active");
};
const addingNightMode = (id, classMode) => {
  document.getElementById(id).classList.add(classMode);
};
btnSun.onclick = function () {
  sunMode();
};
btnNight.onclick = function () {
  nightMode();
};
