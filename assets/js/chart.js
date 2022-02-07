new Morris.Line({
  // ID del elemento en el que dibujar el gráfico.
  element: "myfirstchart",
  // Registros de datos del gráfico: cada entrada en esta matriz corresponde a un punto en
  // el gráficot.
  data: [
    { year: "2018", value: 3000, value1: 1900, value2: 1900, value3: 0.8 },
    { year: "2019", value: 5500, value1: 2000, value2: 2500, value3: 0.8 },
    { year: "2020", value: 6700, value1: 3500, value2: 2100, value3: 0.8 },
    { year: "2021", value: 7860, value1: 4000, value2: 4000, value3: 1.2 },
    { year: "2022", value: 8350, value1: 3132.13, value2: 43917, value3: 1 },
  ],
  // El nombre del atributo de registro de datos que contiene valores de x.
  xkey: "year",
  // Una lista de nombres de atributos de registros de datos que contienen valores y.
  ykeys: ["value", "value1", "value2", "value3"],
  // Las etiquetas que proporcionan el nombre al pasar el cursos

  labels: ["pioCoin", "ethereum","Bitcoin","Tether"],
  resize: true,
  lineColors: ["#8e44ad", "#FF6961", "#64DF38","#66FFFF "],
  gridTextColor    : '#fff',
  fillOpacity : 1.0,
  gridTextSize     : 18,
  gridTextFamily   : 'Open Sans'

  
});
