<?php

	header('Content-Type: text/xml');
	echo'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$type = $_GET["v"];
	//$type = "ia1";
	
	$sql = "SELECT * FROM student";
	
	$mydata = mysql_query($sql,$con);
	
	$marks = array();
	$usns = array();
	$i = 0;
	
	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
	
	while($res = mysql_fetch_array($mydata)) {
		$usns[$i] = $res['usn'];
		$marks[$i] = "$res[$type]";
		$i++;
	}
	
	/*echo $usns[0].'<br />';
	echo $marks[0].'<br />';
	
	$dummy = '[\"'.$usns[0].'\",'.$marks[0].'],';
	echo $dummy;
	echo'<br /><br />';*/

?>

<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawStuff);
	  
	  /*var var1 = localStorage.getItem("work");
	  var var2 = localStorage.getItem("eat");
	  var var3 = localStorage.getItem("commute");
	  var var4 = localStorage.getItem("watchTv");
	  var var5 = localStorage.getItem("sleep");
	  
	  var1 = parseInt(var1);
	  var2 = parseInt(var2);
	  var3 = parseInt(var3);
	  var4 = parseInt(var4);
	  var5 = parseInt(var5);*/

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['USN', 'Marks'],
          <?php
			for($i = 0; $i < 10; $i++) {
				$dummy = '["'.$usns[$i].'",'.$marks[$i].'],';
				echo $dummy;
			}
		  //["Work", var1],
          ?>
		  /*["Eat", 23],
          ["Commute", 21],
          ["Watch Tv", 5],
          ['Sleep', 50]*/
        ]);

        var options = {
          title: 'My Daily Activities',
          width: 900,
          legend: { position: 'none' },
          //chart: { title: '',
                   //subtitle: 'popularity by percentage' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Hours'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };

        var chart = new google.charts.Bar(document.getElementById('underInput'));
        chart.draw(data, options);
		
		var myVar=setInterval(function () {myTimer()}, 3000);
	  
	  function myTimer() {
		var var6 = localStorage.getItem("Refresh");
		var6 = parseInt(var6);
		var flag = localStorage.getItem("barFlag");
		flag = parseInt(flag);
		
		if((var6 == 0) && (flag==1))
		{
			localStorage.setItem("barFlag", 0);
			//localStorage.setItem("Refresh", 1);
			window.location.reload();
		}
	  }
      };
    </script>
  </head>
  <body>
	<?php
		echo '<response>';
		
		$var = '<div id="underInput" style="width: 900px; height: 500px;"></div>';
		echo $var.'<br /><br />';
		//echo 'Hello World';
		
		echo '</response>';
	?>
    <!--<div id="top_x_div" style="width: 900px; height: 500px;"></div>-->
  </body>
</html>