<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="container">
      <canvas id="grafico"></canvas>
      <script>
        $(document).ready(function(){

          var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
          <?php $data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]; ?>;
          var data = <?php echo json_encode($data); ?>;
          var ctx = $('#grafico');
          var chart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: mesi,
                  datasets: [{
                      label: 'Grafico con Php',
                      backgroundColor: 'blue',
                      borderColor: 'black',
                      data: data
                  }]
              },

              options: {}
          });
        });
      </script>
    </div>
   <!-- <script src="js/main.js" charset="utf-8"></script> -->
  </body>
</html>
