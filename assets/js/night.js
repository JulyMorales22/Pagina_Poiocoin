const btnSun = document.getElementById("id-sun");
const btnNight = document.getElementById("id-moon");

const sunMode = () => {
  removingDarkMode("page", "dark-mode");
  removingDarkMode("body", "dark-mode");
  removingDarkMode("navNight", "dark-mode2");
  document.getElementById("id-moon").classList.remove("active");
  btnSun.classList.add("active");
};

const removingDarkMode = (id, className) => {
  document.getElementById(id).classList.remove(className);
};

const nightMode = () => {
  removingSunMode("page", "dark-mode");
  removingSunMode("body", "dark-mode");
  removingSunMode("navNight", "dark-mode2");
  document.getElementById("id-sun").classList.remove("active");
  btnNight.classList.add("active");
};
const removingSunMode = (id, classMode) => {
  document.getElementById(id).classList.add(classMode);
};
btnSun.onclick = function () {
  sunMode();
};
btnNight.onclick = function () {
  nightMode();
};
