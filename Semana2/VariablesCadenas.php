<?php /* Variables_Cadenas.php */
$año=1991; 
$nombre="Andrea";
$edad=date('Y')-$año;
echo "<h2>$nombre edad=$edad</h2>";

if($edad<18){
	echo "<h2>Andrea es menor de edad</h2>";
}
else{
	echo "<h2>Andrea es mayor de edad</h2>";
}

if($edad>20 && $edad<30){
	echo "<p>Andrea es joven</p>";
}

/*ciclos*/

for($i=1;$i<6;$i++){
	
echo "$i<br>";

}


?>