<?php /*index.php*/
echo "<hr><h1>Crear Linea Telefonica</h1>";
	echo "<a href='crear.php'>Crear</a><br>"; 
	echo "<hr><h1>Detalles Linea Telefonica</h1>";
	echo "<a href='detalles.php'>Detalles</a><br>";	
echo "<hr><h1>Lineas Telefonicas</h1>";	
	
	$db=new mysqli("localhost","usuario","123456","lineas telefonicas");
	$sql="select * from lineas"; // where FILTRO
    $consulta=$db->query($sql);	 
    echo "<table border = '1'> \n";
	while($fila=$consulta->fetch_assoc()){		
     echo "<tr><th>Numero</th><th>Operador</th><th>Plan</th>
	<th>MarcaCelular</th><th>ModeloCelular</th>
	<th>FechaContrato</th><th>PlazoMeses</th></tr> \n"; 		
	echo "<tr><td>$fila[numero]</td> <td>$fila[operador]</td>
	<td>$fila[plan]</td> <td>$fila[marcacelular]</td>
	<td>$fila[modelocelular]</td> <td>$fila[fechafirmacontrato]</td>
	<td>$fila[plazomeses]</td></tr>";		
	}
	echo "</table>";
	
 $db-> close();
?>