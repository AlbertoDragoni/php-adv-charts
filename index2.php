<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <meta charset="utf-8">
    <title>Metodo 2 e 3</title>
  </head>
  <body>
    <div class="container">
      <?php include 'data.php' ?>;
      <canvas id="grafico" data-database="<?php echo $database; ?>"></canvas>
      <script>

      </script>
    </div>
   <script src="js/main.js" charset="utf-8"></script>
  </body>
</html>
