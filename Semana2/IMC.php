<?php /*imc.php*/
$altura=1.6;
$peso=60;
$IMC=$peso/($altura*$altura);
$IMC=$peso/pow($altura,2);
echo "Su IMC es $IMC<br>";
if($IMC>=19&& $IMC<22){
	echo "Buena Salud";
}else{
	echo "ay no, vaya al hospital";
}	