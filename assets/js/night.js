const btnSun = document.getElementById("id-sun");
const btnNight = document.getElementById("id-moon");

const NUMBERS_QUESTION_ACCORDION = ["One","Two","Three","Four"];
const NUMBERS_CRIPTO_ACCORDION = ["0", "1", "2","4"];

const sunMode = () => {

  //Es una funcion para quitar de las etiquetas las clases que tienen la propiedad nocturna, se le envia como  argumentos el id de la etiqueta y la clase para esa etiqueta
  removingDarkMode("page", "dark-mode");
  removingDarkMode("body", "dark-mode");
  removingDarkMode("navNight", "dark-mode2");

  //Cripto Acordion
  NUMBERS_CRIPTO_ACCORDION.forEach(NCA => {
    removingDarkMode("accordion"+NCA, "accordionContent");
    removingDarkMode("btnAccordion"+NCA, "dark-mode3");
  });

  //Acordion de preguntas frecuentes
  NUMBERS_QUESTION_ACCORDION.forEach(i => {
    removingDarkMode("btnA"+i,"dark-mode3");
    removingDarkMode("collapse"+i,"accordionContent");
  });

  nightModeActive = false;
  //classlist para traer el arreglo de las clases que tiene esa etiqueta en el html  y asi podemos buscar una clase especifica y removerla o agregarla 
  document.getElementById("id-moon").classList.remove("active");
  btnSun.classList.add("active");
};

const removingDarkMode = (id, className) => {
  let dark = document.getElementById(id);
  if(dark !=null){
    dark.classList.remove(className);
  }
  // document.getElementById(id).classList.remove(className);
};
//Es una funcion para agregar a las etiquetas las clases nocturna, se le envia como  argumentos el id de la etiqueta y la clase para esa etiqueta
const nightMode = () => {
  addingNightMode("page", "dark-mode");
  addingNightMode("body", "dark-mode");
  addingNightMode("navNight", "dark-mode2");

  //Cripto Acordion
  NUMBERS_CRIPTO_ACCORDION.forEach(NCA => {
    addingNightMode("accordion"+NCA, "accordionContent");
    addingNightMode("btnAccordion"+NCA, "dark-mode3");
  });

  NUMBERS_QUESTION_ACCORDION.forEach(i =>{
    addingNightMode("btnA"+i,"dark-mode3");
    addingNightMode("collapse"+i,"accordionContent");
  })
  
  nightModeActive = true;

  document.getElementById("id-sun").classList.remove("active");
  btnNight.classList.add("active");
};

const addingNightMode = (id, classMode) => {
  let night = document.getElementById(id);
  if(night != null){
    night.classList.add(classMode);
  }
};
btnSun.onclick = function () {
  sunMode();
};
btnNight.onclick = function () {
  nightMode();
};
