// SECONDA MILESTONE--------------------
$(document).ready(function(){
  // CHIAMATA PER PRIMO GRAFICO
  // $.ajax({
  //   url: 'server-fatturato.php',
  //   method: 'GET',
  //   success: function(data){
  //     console.log(data.data);
  //     var dati = data.data;
  //     var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  //     var ctx = $('#grafico');
  //     var chart = new Chart(ctx, {
  //         type: data.type,
  //         data: {
  //             labels: mesi,
  //             datasets: [{
  //                 label: 'Grafico Line MST',
  //                 backgroundColor: 'blue',
  //                 borderColor: 'black',
  //                 data: dati
  //             }]
  //         },
  //         options: {}
  //     });
  //   },
  //   error: function(){
  //     alert('ciao');
  //   }
  // });
  // CHIAMATA PER SECONDO GRAFICO
  $.ajax({
    url: 'server-fattagent.php',
    method: 'GET',
    success: function(data){
      var array = data.data;
      // var arrayNomi = Object.keys(data.data);
      // var arrayDati = Object.values(data.data);
      var arrayNomi = [];
      var arrayDati = [];
      for (var key in array) {
      console.log(key);
      console.log(array[key])
      arrayNomi.push(key);
      arrayDati.push(array[key]);
      }

      var ctx = $('#grafico');
      var chart = new Chart(ctx, {
          type: data.type,
          data: {
              labels: arrayNomi,
              datasets: [{
                  label: 'Grafico Line MST',
                  backgroundColor: ['blue', 'yellow', 'green', 'red'],
                  borderColor: 'black',
                  data: arrayDati
              }]
          },
          options: {}
      });
    },
    error: function(){
      alert('ciao');
    }
  });
});
