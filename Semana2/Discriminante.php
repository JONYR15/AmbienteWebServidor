<?php /*Discriminante.php*/
if(isset($_POST['b'])){
	$a=$_POST['a'];
	$b=$_POST['b'];
	$c=$_POST['c'];
}



$disc=pow($b,2)-(4*$a*$c);

if($disc<0){
	echo "No Tiene: $disc<br>";
}else{
	echo "Tiene $disc<br>";
}

echo "<a href='discriminante.html'>Regresar</a>";
?>