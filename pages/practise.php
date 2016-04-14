<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("SPAS",$con);
	
	$sql = "SELECT COUNT(DISTINCT usn) FROM activity";
	
	$mydata = mysql_query($sql,$con);
	$res = mysql_fetch_array($mydata);
	
	$totalNoOfStds = $res['COUNT(DISTINCT usn)'];
	$totalNoOfStds = 50;
	
	/* **** Read rAllActs **** */
		$allAct = 0;
		$file = fopen("RScripts/rAllActs.txt","r");
		while(! feof($file)) {
			$rArrayALL[$allAct++] = fgets($file);
		}
		fclose($file);
		$allAct--;
	/* ***************************** */
	
	$courseid = 'CS1';
	$sql = "SELECT * FROM marks WHERE courseid = '$courseid'";
	$mydata = mysql_query($sql,$con);
	
	$ia1MarksAllStds = array();
	$ia2MarksAllStds = array();
	
	$i = 0;
	$j = 0;
	while($res = mysql_fetch_array($mydata)) {
		if($res['type'] == 'ia1')
			$ia1MarksAllStds[$i++] = $res['marks'];
		else if($res['type'] == 'ia2')
			$ia2MarksAllStds[$j++] = $res['marks'];
	}
?>

<html>
	<head>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
		<script type="text/javascript">
			$(function () {
    $('#container').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Student Activities vs IA-1 & IA-2'
        },
        subtitle: {
            text: 'Source: SPAS'
        },
        xAxis: [{
			
			<?php
			
				$var = 'categories: [';
				for($i = 0; $i < $totalNoOfStds-1; $i++) {
					$var = $var."'".($i+1)."',";
				}
				$var = $var."'".($i + 1)."'],";
				
				echo $var;
			
			?>
            /*categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],*/
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'All Activities',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'All Activities',
            type: 'column',
            yAxis: 1,
			<?php
			
				$var = 'data: [';
				for($i = 0; $i < $totalNoOfStds-1; $i++) {
					$var = $var.$rArrayALL[$i].', ';
				}
				
				$var = $var.$rArrayALL[$i].'],';
				echo $var;
			
			?>
            //data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'IA-1 Marks',
            type: 'spline',
            yAxis: 2,
            
			<?php
			
				$var = 'data: [';
				for($i = 0; $i < $totalNoOfStds-1; $i++) {
					$var = $var.$ia1MarksAllStds[$i].', ';
				}
				
				$var = $var.$ia1MarksAllStds[$i].'],';
				echo $var;
			
			?>
			
			//data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'IA-2 Marks',
            type: 'spline',
            
			<?php
			
				$var = 'data: [';
				for($i = 0; $i < $totalNoOfStds-1; $i++) {
					$var = $var.$ia2MarksAllStds[$i].', ';
				}
				
				$var = $var.$ia2MarksAllStds[$i].'],';
				echo $var;
			
			?>
			
			//data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
});



		</script>
		
		
	</head>
	<body>
	<div id="container" style="min-width: 310px; height: 400px; max-width: 1400px; margin: 0 auto"></div>
	</body>
</html>