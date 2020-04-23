<?php
include 'data2.php';
header('Content-Type: application/json');
$datiSecondoGraph =  $graphs['fatturato_by_agent']['data'];
$tipoSecondoGraph = $graphs['fatturato_by_agent']['type'];
echo $datiSecondoGraph;
echo $tipoSecondooGraph;
 ?>
