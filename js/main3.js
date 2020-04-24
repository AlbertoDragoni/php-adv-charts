
// SETTE GRAFICO ----------------------------------------

$.ajax({
  url: 'server-level.php',
  method: 'GET',
  success: function(data){
    console.log(data);

     $('.button').click(function(){
       var livello = $('.selettore').val();
       console.log(livello);
       if (livello == 'guest') {
         getGraficoSette(data);
       } else if (livello == 'employee') {
        getGraficoSette(data);
        getGraficoOtto(data);
       } else if (livello == 'clevel') {
        getGraficoSette(data);
        getGraficoOtto(data);
        getGraficoNove(data);
     }
     });
  },
  error: function(){
    alert('ERRORE');
  }
})

function getGraficoSette(dat) {
  var dati = dat;
  // console.log(dati);
  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var ctx = $('#line-chart-sette');
  var chart = new Chart(ctx, {
      type: dati[1],
      data: {
          labels: mesi,
          datasets: [{
              label: 'My Third dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: dati[0]
          }]
      },
  });
}

function getGraficoOtto(dat) {
  var dati = dat;
  // console.log(dati);
  var ctx = $('#line-chart-otto');
  var chart = new Chart(ctx, {
      type: dati[2],
      data: {
          labels: dati[3],
          datasets: [{
              label: 'Qualità Venditori',
              backgroundColor: ['pink', 'red', 'blue', 'green'],
              borderColor: 'white',
              data: dati[4]
          }]
      },
  });
}

function getGraficoNove(dat) {
  var dati = dat;
  // console.log(dati);
  console.log(dati[7]);
    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var ctx = $('#line-chart-nove');
  var chart = new Chart(ctx, {
      type: dati[5],
        data: {
            labels: mesi,
            datasets: [{
                label: dati[6][0],
                borderColor: '#B61827',
                data: dati[7][0]
            },
            {
                label: dati[6][1],
                borderColor: '#0288D1',
                data: dati[7][1]
            },
            {
                label: dati[6][2],
                borderColor: '#43A047',
                data: dati[7][2]
            }],
        },
  });
}
