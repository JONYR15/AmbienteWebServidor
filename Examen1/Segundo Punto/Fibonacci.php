<html>
<head>
	<title>Fibonacci</title>
</head>
<body>
<h3>Secuencia Fibonacci de los primeros 20 numeros naturales</h3>
<?php
function calcular($num){		
		$total=0;
		$x=1;
		$y=0;		
		for ($i = 0; $i < $num; $i++) {			
				$total=$x+$y;
				$y=$x;
				$x=$total;	
				print_r(($i+1).": ".$total."<br>");
		}		
}
calcular(20);
?>
</body>
</html>