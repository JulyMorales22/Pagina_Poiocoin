

new Morris.Line({   
    // ID del elemento en el que dibujar el gráfico.
    element: 'myfirstchart',
    // Registros de datos del gráfico: cada entrada en esta matriz corresponde a un punto en
    // el gráficot.
    data: [
      { year: '2018', value: 3000 ,value1:1900,value2:1900},
      { year: '2019', value: 5500 ,value1:2000,value2:1900},
      { year: '2020', value: 6700 ,value1:3500,value2:1900},
      { year: '2021', value: 7860 ,value1:4000,value2:1900},
      { year: '2022', value: 8350 ,value1:4600,value2:1900}
    ],
    // El nombre del atributo de registro de datos que contiene valores de x.
    xkey: 'year',
    // Una lista de nombres de atributos de registros de datos que contienen valores y.
    ykeys: ['value','value1','value2','value3'],
    // Las etiquetas que proporcionan el nombre al pasar el cursos 

    labels: ['pioCoin','ethereum'],
    resize:true,
    lineColors:['#8e44ad','#2980b9']
  });

