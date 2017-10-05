<?php /*index.php*/

echo "<h1>Index</h1>";

$db=new mysqli("localhost","usuario","1234","semana4");

$sql="select * from personas"; // where FILTRO
$consulta=$db->query($sql);
if ($consulta===FALSE) {
	echo "<h2>Error. ".$db->error."</h2>";
}

while($fila=$consulta->fetch_assoc()){
	$link="detalles.php?Cedula=".$fila['Cedula'];
	$nombre=$fila['Nombre']." ".$fila['Apellido'];
	echo "<a herf='$link'>$nombre</a><br>";  
}

$db->close();

?>


<h2>Insertar Dato</h2>
<form action="insert.php" method="post">
Cedula: <input type="text" name="ced"><br>
Nombre: <input type="text" name="nom"><br>
Apellido: <input type="text" name="ape"><br>
Fecha Nacimiento (AAAA-MM-DD): <input type="text" name="fec"><br>
Profesion: <input type="text" name="pro"><br>
<button type="submit">Crear</button>
</form>