<?php /*insert.php*/
$db=new mysqli("localhost","usuario","123456","lineas telefonicas");


if (isset($_POST['num'])) {
	$num = $_POST['num'];
	$oper = $_POST['oper'];
	$plan = $_POST['plan'];
	$marcel = $_POST['marcel'];
	$modcel = $_POST['modcel'];
	$feccon = $_POST['feccon'];
	$plames = $_POST['plames'];
	/* inser into TABLA(COLUMNAS) values(DATOS)*/
	$consulta = $db->prepare
	("insert into lineas(numero, operador, plan, marcacelular, modelocelular, fechafirmacontrato, plazomeses) values (?,?,?,?,?,?,?)");
	$consulta->bind_param("isssssi", $num, $oper, $plan, $marcel, $modcel, $feccon, $plames);
	$consulta->execute();
	if($consulta->affected_rows>0){
		echo"<h2>Insercion Exitosa</h2>";
		echo"<a href='index.php'>Regresar</a>";
	}else{
		echo "<h2>Fallo al Insertar</h2>";
		echo "<h3>".$db->error."</h3>";
		echo "<a href='index.php'>Regresar</a>";
	}
	
}else echo"<a href='index.php'>Regresar</a>";
	

$db->close();
?>


<h2>Lineas Telefonicas</h2>
<form action="crear.php" method="post" >
Numero: <br><input type="text" name="num"><br>
Operador: <br><input type="text" name="oper"><br>
Plan: <br><input type="text" name="plan"><br>
Marca Celular: <br><input type="text" name="marcel"><br>
Modelo Celular: <br><input type="text" name="modcel"><br>
Fecha Firma Contrato(AAAA-MM-DD):<br> <input type="text" name="feccon"><br>
Plazos Meses:<br> <input type="text" name="plames"><br>
<button type="submit" >Crear</button>
</form>