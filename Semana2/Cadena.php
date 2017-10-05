<?php /*Cadena.php*/
$nombre="Jonathan Ramirez";
echo "<h2>Tamaños</h2>";
echo "Longitud: ".strlen($nombre)."<br>";
echo "Palabras: ".str_word_count($nombre)."<br>";

echo "<h3>Transformaciones</h2>";
echo "Minuscula: ".strtolower($nombre)."<br>";
echo "Matuscula: ".strtoupper($nombre)."<br>";

echo "<h2>Expansion y Rellenado</h2>";
$rell1=str_pad($nombre,25,".");
$rell2=str_pad($nombre,25,".",STR_PAD_LEFT);
$rell3=str_pad($nombre,25,".",STR_PAD_BOTH);
echo "Rellenado der: $rell1<br>";
echo "Rellenado izq: $rell2<br>";
echo "Rellenado centro: $rell3<br>";

$estrellas=str_repeat("*",6);
echo "6 estrellas: $estrellas";

$cad1=str_repeat($nombre,3);
echo "mi nombre 3 veces: $cad1   <br>";

echo "<h2>Subcadenas y Busqueda</h2>";
echo "subcadena: ".substr($nombre,2,5)."<br>";
$fecha="12/09/2017";
$año=substr($fecha,6,4);
echo "El año es $año<br>";

$pos=strpos($nombre,"Ram");
echo "La position de 'Ram' es: $pos<br>";

$pos=strpos($nombre,"asds");
if($pos===FALSE)
{
echo "La position de 'asds' no fue encontrada <br>";
}

$subcadena=strstr($nombre,"Ram");
echo "Subcaneda Encontrada: $subcadena<br>";

echo "<h2>Dividir y Unir Cadenas</h2>";
$datos="Samsung,Galaxy S8,450000";
$datos=explode(",",$datos);

/* print_ r mustra el contenido de un arreglo*/
print_r($datos);
$nueva=implode(" - ",$datos);
echo "$nueva<br>";


?>