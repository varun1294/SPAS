<?php

//$usn = '2sd12cs001';
	//$courseid = 'CS1';
	
	$usn = $_GET['usn'];
	$courseid = $_GET['courseid'];
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$query = "SELECT * FROM topiccoverage WHERE courseid='$courseid'";
	$mydata = mysql_query($query,$con);
	
	$sql = "SELECT * FROM studenttopicdist WHERE courseid='$courseid' and usn = '$usn' and actsdf != 0";
	$data = mysql_query($sql,$con);
	
	$var = array();
	$i = 0;
	while($res = mysql_fetch_array($data)) {
		$var[$i][0] = $res['topic'];
		$var[$i][1] = $res['actsdf'];
		$var[$i][2] = $res['actsrlr'];
		$var[$i][3] = $res['actsvlr'];

		$i++;
	}
	
	$i--;
	
?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Highcharts Example</title>

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<style type="text/css">
${demo.css}
		</style>
		<script type="text/javascript">
function chart() {
	alert("Call");
    $('#container1').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Height Versus Weight of 507 Individuals by Gender'
        },
        subtitle: {
            text: 'Source: Heinz  2003'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Height (cm)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Weight (kg)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        <?php
			$ll = "series: [{
            name: 'DF',
            color: 'rgba(223, 83, 83, .5)',";
			
			$ll = $ll."data: [";
			
			for($j = 0; $j < $i ; $j++) {
				//$ll = $ll.'['.$var[$j][1].', '.$var[$j][0].'], ';
				$ll = $ll.'['.$var[$j][1].', ';
				/* Topics are from 1 to 12. From 1 to 9, we can directly use $var[$j][0][1]. But for 10 to 12 we need to input extra work */
				$len = strlen($var[$j][0])-1;
				if($len == 1)
					$ll = $ll.$var[$j][0][1].'], ';
				else {
					$sum = ($var[$j][0][1] * 10) + ($var[$j][0][2]);
					$ll = $ll.$sum.'], ';
				}
			}
			
			if($i > 0) {
				//$ll = $ll.'['.$var[$j][1].', '.$var[$j][0].']]},';
				$ll = $ll.'['.$var[$j][1].', ';
				$len = strlen($var[$j][0])-1;
				if($len == 1)
					$ll = $ll.$var[$j][0][1].']]}, ';
				else {
					$sum = ($var[$j][0][1] * 10) + ($var[$j][0][2]);
					$ll = $ll.$sum.']]}, ';
				}
			}
			
			echo $ll;
			
			$ll = "{";
			
			$ll = $ll."name: 'VLR', color: 'rgba(119, 152, 191, .5)', data: [";
			
			for($j = 0; $j < $i ; $j++) {
				//$ll = $ll.'['.$var[$j][3].', '.$var[$j][0].'], ';
				$ll = $ll.'['.$var[$j][3].', ';
				/* Topics are from 1 to 12. From 1 to 9, we can directly use $var[$j][0][1]. But for 10 to 12 we need to input extra work */
				$len = strlen($var[$j][0])-1;
				if($len == 1)
					$ll = $ll.$var[$j][0][1].'], ';
				else {
					$sum = ($var[$j][0][1] * 10) + ($var[$j][0][2]);
					$ll = $ll.$sum.'], ';
				}
			}
			
			if($i > 0) {
				//$ll = $ll.'['.$var[$j][3].', '.$var[$j][0].']]},';
				$ll = $ll.'['.$var[$j][3].', ';
				$len = strlen($var[$j][0])-1;
				if($len == 1)
					$ll = $ll.$var[$j][0][1].']]}, ';
				else {
					$sum = ($var[$j][0][1] * 10) + ($var[$j][0][2]);
					$ll = $ll.$sum.']]},';
				}
			}
			
			echo $ll;
			
			$ll = "{";
			$ll = $ll."name: 'RLR', color: 'rgba(200, 110, 150, .5)', data: [";
			
			for($j = 0; $j < $i ; $j++) {
				//$ll = $ll.'['.$var[$j][2].', '.$var[$j][0].'], ';
				$ll = $ll.'['.$var[$j][2].', ';
				/* Topics are from 1 to 12. From 1 to 9, we can directly use $var[$j][0][1]. But for 10 to 12 we need to input extra work */
				$len = strlen($var[$j][0])-1;
				if($len == 1)
					$ll = $ll.$var[$j][0][1].'], ';
				else {
					$sum = ($var[$j][0][1] * 10) + ($var[$j][0][2]);
					$ll = $ll.$sum.'], ';
				}
			}
			
			if($i > 0) {
				//$ll = $ll.'['.$var[$j][2].', '.$var[$j][0].']]}]';
				$ll = $ll.'['.$var[$j][2].', ';
				$len = strlen($var[$j][0])-1;
				if($len == 1)
					$ll = $ll.$var[$j][0][1].']]}]';
				else {
					$sum = ($var[$j][0][1] * 10) + ($var[$j][0][2]);
					$ll = $ll.$sum.']]}]';
				}
			}
			
			echo $ll;
		?>
    });
}

		</script>
	</head>
	<body onload="chart()">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<div id="container1" style="min-width: 310px; height: 400px; max-width: 800px; margin: 0 auto"></div>

	<input type="button" value="Toggle" onclick="chart();">
	</body>
</html>
