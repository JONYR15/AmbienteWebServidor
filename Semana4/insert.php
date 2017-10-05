<?php /*insert.php*/
$db=new mysqli("localhost","usuario","1234","semana4");

if(isset($_POST['ced'])){
	$nomb=$_POST['nom'];
	$apel=$_POST['ape'];
	$cedu=$_POST['ced'];
	$prof=$_POST['pro'];
	$fecha=$_POST['fec'];
	}else echo"<a href='index.php'>Regresar</a>";
	$consulta=$db->prepare
	("insert into personas(Cedula, Nombre, Apellido, Fecha Nacimiento, Profesion) values (?,?,?,?,?)");
	$consulta->bind_param("issss",$cedu,$nomb,$apel,$fecha,$prof);
	$consulta->execute();
	if($consulta->affected_rows>0){
		echo"<h2>Insercion Exitosa</h2>";
		echo"<a href='index.php'>Regresar</a>";
	}else{
		echo "<h2>Fallo al Insertar</h2>";
		echo "<h3>".$db->error."</h3>";
		echo "<a href='index.php'>Regresar</a>";
	}
	echo"<a href='index.php'>Regresar</a>";
	

	
	

$db->close();
?>