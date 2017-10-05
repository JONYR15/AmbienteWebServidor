<h1>Detalles de Persona</h1>

<?php /*detalles*/
$db=new mysqli("localhost","usuario","1234","semana4");
if(isset($_GET['cedula'])){
	$ced=$_GET['cedula'];
	$consulta->execute();
	$filas=$consulta->get_result();
	/*como es solamente una fila, no necesito un while*/
	$miFila=$filas->fetch_assoc();
	echo "<h2>".$miFila['nombre']."</h2>";
	echo "Fecha Nac: ".$miFila['fechanac'];
	echo "<hr><a href='index.php'>Regresar</a>";
	
}else{
	echo"<a href='index.php'>Regresar</a>";
}


$db->close();
?>