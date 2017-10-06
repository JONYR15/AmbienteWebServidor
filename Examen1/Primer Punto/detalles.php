<h1>Detalles de persona</h1>
<h2>Ingrese Numero Telefonico</h2>
<form action="detalles.php" method="get">
	<input type="text" name="numero">
	<input type="submit" name="buscador" value="Buscar" placeholder="Ponga un numero telefonico a buscar">
</form>
<?php
$db=new mysqli("localhost","user","1234","lineas telefonicas");
if (isset($_GET['numero'])) {
	$num=$_GET['numero'];
	$consulta=$db->prepare("select * from lineas where numero=?");
	$consulta->bind_param("i",$num);
	$consulta->execute();
	$filas = $consulta->get_result();	
	$miFila=$filas->fetch_assoc();
	echo "<table border='1'>";
	echo "<tr><td>Numero</td><td>Operador</td><td>Plan</td><td>Marca celular</td><td>Modelo de celular</td><td>Fecha de Contrato</td><td>Plazo en meses</td></tr>\n";
		echo "<tr><td>".$miFila['numero']."</td><td>".$miFila['operador']."</td><td>".$miFila['plan']."</td><td>".$miFila['marcacelular']."</td><td>".$miFila['modelocelular']."</td><td>".$miFila['fechafirmacontrato']."</td><td>".$miFila['plazomeses']."</td></tr>";
		echo "</table>\n";
	echo "<hr><a href='index.php'>Regresar</a>";
}else echo "<a href='index.php'>Regresar</a>";
$db->close();
?>


