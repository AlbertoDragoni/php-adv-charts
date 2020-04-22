$(document).ready(function(){
  // var data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
  var data = $('#grafico').data('database');
  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var ctx = $('#grafico');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: mesi,
          datasets: [{
              label: 'Grafico con Php',
              backgroundColor: 'blue',
              borderColor: 'black',
              data: data
          }]
      },

      // Configuration options go here
      options: {}
  });



});
