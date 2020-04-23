// SECONDA MILESTONE--------------------
$(document).ready(function(){
  // CHIAMATA PER PRIMO GRAFICO
  $.ajax({
    url: 'server-fatturato.php',
    method: 'GET',
    success: function(data){
      console.log(data.data);
      var dati = data.data;
      var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
      var ctx = $('#grafico');
      var chart = new Chart(ctx, {
          type: data.type,
          data: {
              labels: mesi,
              datasets: [{
                  label: 'Grafico con Php',
                  backgroundColor: 'blue',
                  borderColor: 'black',
                  data: dati
              }]
          },
          options: {}
      });
    },
    error: function(){
      alert('ciao');
    }
  });
  // CHIAMATA PER SECONDO GRAFICO

  });
