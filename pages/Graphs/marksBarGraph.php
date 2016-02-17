<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);
	
	$usn = array();
	$query = "SELECT usn FROM student";
	$data = mysql_query($query,$con);
	
	$i = 0;
	while($res = mysql_fetch_array($data)) {
		$usn[$i] = $res['usn'];
		$i++;
	}
	
	print_r($usn);

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
	</center>
	
	<script src="html5-canvas-bar-graph.js"></script>
	<script>(function () {
	
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
		
		var ctx = createCanvas("graphDiv1");
		
		var graph = new BarGraph(ctx);
		graph.maxValue = 30;
		graph.margin = 2;
		graph.colors = ["#49a0d8", "#d353a0", "#ffc527", "#df4c27"];
		var labels = new Array("Varun", "Tuna", "Bacon", "Bucky");
		graph.xAxisLabelArr = labels;
		
		/*setInterval(function () {
			graph.update([Math.random() * 30, Math.random() * 30, Math.random() * 30, Math.random() * 30]);
		}, 1000);*/
		graph.update([10,25,25,30]);
		
		var ctx2 = createCanvas("graphDiv2");
		
		var graph2 = new BarGraph(ctx2);
		graph2.margin = 2;
		graph2.width = 450;
		graph2.height = 150;
		graph2.xAxisLabelArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
		setInterval(function () {
			graph2.update([Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20]);
		}, 1500);

	}());</script>
</body>
</html>

