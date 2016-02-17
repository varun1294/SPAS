<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);
	
	$usn = array();
	$marks1 = array();
	$marks2 = array();
	$marks3 = array();
	$marks4 = array();
	$query = "SELECT usn,ia1,ia2,ia3,ese FROM student";
	$data = mysql_query($query,$con);
	
	$i = 0;
	while($res = mysql_fetch_array($data)) {
		$usn[$i] = $res['usn'];
		$usn[$i] = substr($usn[$i], 5);
		$marks1[$i] = $res['ia1'];
		$marks2[$i] = $res['ia2'];
		$marks3[$i] = $res['ia3'];
		$marks4[$i] = $res['ese'];
		$i++;
	}
	//$i--;
	
	//print_r($usn);

?>

<!DOCTYPE html>
<head>
	<title>HTML5 Bar Graph Example</title>
</head>

<body>
	<!--[if IE]><script src="excanvas.js"></script><![endif]-->
	
	<center>
		<div id="graphDiv1"></div>
		<br />
		<div id="graphDiv2"></div>
		<br />
		<div id="graphDiv3"></div>
	</center>
	
	<script src="html5-canvas-bar-graph.js"></script>
	<script>(function () {
		var num = 1;
	
		function createCanvas(divName) {
			
			var div = document.getElementById(divName);
			var canvas = document.createElement('canvas');
			div.appendChild(canvas);
			if (typeof G_vmlCanvasManager != 'undefined') {
				canvas = G_vmlCanvasManager.initElement(canvas);
			}	
			var ctx = canvas.getContext("2d");
			return ctx;
		}
		
		<?php
			$dummy = "var labels = new Array(\"";
			$var1 = "var marks1 = new Array(";
			$var2 = "var marks2 = new Array(";
			$var3 = "var marks3 = new Array(";
			$var4 = "var marks4 = new Array(";
			$j = 0;
			while($j != $i-1) {
				$dummy = $dummy.$usn[$j]."\",\"";
				$var1 = $var1.$marks1[$j].",";
				$var2 = $var2.$marks2[$j].",";
				$var3 = $var3.$marks3[$j].",";
				$var4 = $var4.$marks4[$j].",";
				$j++;
			}
			$dummy = $dummy.$usn[$j]."\");";
			$var1 = $var1.$marks1[$j].");";
			$var2 = $var2.$marks2[$j].");";
			$var3 = $var3.$marks3[$j].");";
			$var4 = $var4.$marks4[$j].");";
			
			echo $dummy;
			echo $var1;
			echo $var2;
			echo $var3;
			echo $var4;
		?>
		
		var ctx = createCanvas("graphDiv1");
		
		var graph = new BarGraph(ctx);
		graph.maxValue = 30;
		graph.margin = 2;
		graph.width = 450;
		graph.height = 150;
		
		graph.xAxisLabelArr = labels;
		graph.update(marks1);
		
		var ctx = createCanvas("graphDiv2");
		
		var graph = new BarGraph(ctx);
		graph.maxValue = 30;
		graph.margin = 2;
		graph.width = 450;
		graph.height = 150;
		
		graph.xAxisLabelArr = labels;
		graph.update(marks2);
		
		var ctx = createCanvas("graphDiv3");
		
		var graph = new BarGraph(ctx);
		graph.maxValue = 30;
		graph.margin = 2;
		graph.width = 450;
		graph.height = 150;
		
		graph.xAxisLabelArr = labels;
		graph.update(marks3);
		
		/*setInterval(function () {
			if(num == 1) {
				graph.update(marks1);
				//alert(1);
				num = 2;
			}
			
			else if(num == 2) {
				//alert(2);
				graph.update(marks2);
				num = 3;
			}
			
			else if(num == 3) {
				//alert(3);
				graph.update(marks3);
				num = 1;
			}
			
			/*else {
				graph.update(marks4);
				num = 1;
			}*
		}, 1000);*/
		//var marks = new Array(10,20,25,15);
		//graph.update(marks1);
		
		/*var ctx2 = createCanvas("graphDiv2");
		
		var graph2 = new BarGraph(ctx2);
		graph2.margin = 2;
		graph2.width = 450;
		graph2.height = 150;
		graph2.xAxisLabelArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
		setInterval(function () {
			graph2.update([Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20]);
		}, 1500);*/

	}());</script>
</body>
</html>

