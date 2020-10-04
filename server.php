<?php

$conteudo = trim(file_get_contents("php://input"));
$conteudo .= "\r\n";
$arquivo = fopen("dadosDigitados.txt", "a+");
fwrite($arquivo,$conteudo);
fclose($arquivo);

?>