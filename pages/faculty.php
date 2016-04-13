<?php
	if(!isset($_SESSION)) { 
		session_start(); 
	}
	
	include("updateFlotData.php");
	
	$loginFacName = "Prof. ";
	
	$fac_id = $_SESSION['loginFacId'];
	$loginFacName = $loginFacName.$_SESSION['loginFacName'];
	$courseId = $_SESSION['courseId'];
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$query = "SELECT * FROM topiccoverage WHERE courseid='$courseId'";
	$mydata = mysql_query($query,$con);
	
	$sql = "SELECT * FROM studenttopicdist WHERE courseid='$courseId'";
	$data = mysql_query($sql,$con);
	
	$var = array();
	$i = 0;
	while($res = mysql_fetch_array($data)) {
		$var[$i][0] = $res['topic'];
		$var[$i][1] = $res['actsdf'];
		$var[$i][2] = $res['actsrlr'];
		$var[$i][3] = $res['actsvlr'];
		
		/*echo '$var[$i][0] : '.$var[$i][0].'<br />';
		echo '$var[$i][1] : '.$var[$i][1].'<br />';
		echo '$var[$i][2] : '.$var[$i][2].'<br />';
		echo '$var[$i][3] : '.$var[$i][3].'<br />';*/
		$i++;
	}
	
	$i--;
?>


<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SPAS</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="../dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	
	<script src="../bower_components/flot/excanvas.min.js"></script>
    <script src="../bower_components/flot/jquery.flot.js"></script>
    <script src="../bower_components/flot/jquery.flot.pie.js"></script>
    <script src="../bower_components/flot/jquery.flot.resize.js"></script>
    <script src="../bower_components/flot/jquery.flot.time.js"></script>
    <script src="../bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
	<script src="../js/flot-data.js"></script>
	<!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>
	
	<!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

		<style type="text/css">
${demo.css}
		</style>
		<script type="text/javascript">
function drawChart() {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Activities of students on all topics'
        },
        subtitle: {
            text: 'Course : <?php echo $courseId ?>'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Activities'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Topics'
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
                    //pointFormat: '{point.x} cm, {point.y} kg'
					pointFormat: '{point.x} activities, Topic : {point.y}'
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
	
	g2sd12cs001();
}

	var request;
			
			function sendInfo() {
				var v1=document.getElementById("id01").value;
				var v2=document.getElementById("id02").value;
				var v3=document.getElementById("id03").value;
				var v4=document.getElementById("id04").value;
				var v5=document.getElementById("id05").value;
				var v6=document.getElementById("id06").value;
				var v7=document.getElementById("id07").value;
				var v8=document.getElementById("id08").value;
				var v9=document.getElementById("id09").value;
				var v10=document.getElementById("id10").value;
				var v11=document.getElementById("id11").value;
				var v12=document.getElementById("id12").value;
				
				var d1=document.getElementById("df01").value;
				var d2=document.getElementById("df02").value;
				var d3=document.getElementById("df03").value;
				var d4=document.getElementById("df04").value;
				var d5=document.getElementById("df05").value;
				var d6=document.getElementById("df06").value;
				var d7=document.getElementById("df07").value;
				var d8=document.getElementById("df08").value;
				var d9=document.getElementById("df09").value;
				var d10=document.getElementById("df10").value;
				var d11=document.getElementById("df11").value;
				var d12=document.getElementById("df12").value;
				
				var url="updateTopicCoverage.php?T1="+v1;
				url = url+"&T2="+v2;
				url = url+"&T3="+v3;
				url = url+"&T4="+v4;
				url = url+"&T5="+v5;
				url = url+"&T6="+v6;
				url = url+"&T7="+v7;
				url = url+"&T8="+v8;
				url = url+"&T9="+v9;
				url = url+"&T10="+v10;
				url = url+"&T11="+v11;
				url = url+"&T12="+v12;
				
				url = url+"&D1="+d1;
				url = url+"&D2="+d2;
				url = url+"&D3="+d3;
				url = url+"&D4="+d4;
				url = url+"&D5="+d5;
				url = url+"&D6="+d6;
				url = url+"&D7="+d7;
				url = url+"&D8="+d8;
				url = url+"&D9="+d9;
				url = url+"&D10="+d10;
				url = url+"&D11="+d11;
				url = url+"&D12="+d12;
				
				
				if(window.XMLHttpRequest) {
					request=new XMLHttpRequest();
				}
				else if(window.ActiveXObject) {
					request=new ActiveXObject("Microsoft.XMLHTTP");
				}
				try {
					request.onreadystatechange=getInfo;
					request.open("GET",url,true);
					request.send();
				} catch(e) {
					alert("Unable to connect to server");
				}
			}
			function getInfo() {
				if(request.readyState==4){
					var val=request.responseText;
					document.getElementById('underInput').innerHTML=val;
					setTimeout(dummy,3000);
				}
			}
			
			function dummy() {
				document.getElementById('underInput').innerText="";
			}
			
			function sendInfo2() {
				var usn=document.getElementById("selectUSN").value;
				switch(usn) {
					<?php
						$sql = "SELECT COUNT(DISTINCT usn) FROM activity";

						$mydata2 = mysql_query($sql,$con);
						$res = mysql_fetch_array($mydata2);
	
						$totalNoOfStds = $res['COUNT(DISTINCT usn)'];
					
						for($i = 0,$usn='2sd12cs001'; $i < $totalNoOfStds; $i++,$usn++) {
							$dummy = 'case "'.$usn.'" : g'.$usn.'();break;';
							echo $dummy;
						}

					?>
					//case "2sd12cs001" : g2sd12cs001();
						//				break;
				}
			}
			
			
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		
		<?php
		for($m = 0, $usn = '2sd12cs001'; $m < $totalNoOfStds; $m++,$usn++) {
	
			$sql = "SELECT * FROM studenttopicdist WHERE courseid='$courseId' and usn = '$usn' and actsdf != 0";
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
			$ll = "
		
		function g".$usn."() {
		$('#container2').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Activities of student ".$usn." on all topics'
        },
        subtitle: {
            text: 'Course : <?php echo $courseId ?>'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Activities'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Topics'
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
                    //pointFormat: '{point.x} cm, {point.y} kg'
					pointFormat: '{point.x} activities, Topic : {point.y}'
                }
            }
        },";
		
			$ll = $ll."series: [{
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
			
			echo "});}";
		}
		?>



		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */
		/* ********************************************************************************************************************************** */

		
		
		</script>
		
		
		<style type="text/css">
		input[type=range] {
  -webkit-appearance: none;
  width: 100px;
  height: 15px;
  margin: 3.3px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 40%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 2.4px #000000, 0px 0px 1px #0d0d0d;
  background: #6cff67;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0.8px 0.8px 9.5px #86c06e, 0px 0px 0.8px #95c880;
  border: 2.7px solid rgba(255, 0, 0, 0.78);
  height: 15px;
  width: 29px;
  border-radius: 10px;
  background: #e7e700;
  cursor: pointer;
  -webkit-appearance: slider-vertical;
  margin-top: -3.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #d9ffd7;
}
input[type=range]::-moz-range-track {
  width: 40%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 2.4px #000000, 0px 0px 1px #0d0d0d;
  background: #6cff67;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0.8px 0.8px 9.5px #86c06e, 0px 0px 0.8px #95c880;
  border: 2.7px solid rgba(255, 0, 0, 0.78);
  height: 15px;
  width: 29px;
  border-radius: 10px;
  background: #e7e700;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 40%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #08f600;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 2.4px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #6cff67;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 2.4px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 0.8px 0.8px 9.5px #86c06e, 0px 0px 0.8px #95c880;
  border: 2.7px solid rgba(255, 0, 0, 0.78);
  height: 15px;
  width: 29px;
  border-radius: 10px;
  background: #e7e700;
  cursor: pointer;
  height: 8.4px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #6cff67;
}
input[type=range]:focus::-ms-fill-upper {
  background: #d9ffd7;
}
	</style>
		
		
	</head>
	<body onload="drawChart();">
	<div class="row">
        <div class="col-lg-12">
			<center><h1 class="page-header">SPAS v1.1 &nbsp; &nbsp; Welcome <?php echo $loginFacName ?> <br />Dashboard</h1></center>
        </div>
    </div>
	<center>
		<b>Topic Coverage / Topic Difficulty</b>
	</center>
	
	<br />
	
	<table border="1" cellpadding="10" cellspacing="30" width="100%">
	<tr>
		<th>Topic 1</th>
		<th>Topic 2</th>
		<th>Topic 3</th>
		<th>Topic 4</th>
		<th>Topic 5</th>
		<th>Topic 6</th>
		<th>Topic 7</th>
		<th>Topic 8</th>
		<th>Topic 9</th>
		<th>Topic 10</th>
		<th>Topic 11</th>
		<th>Topic 12</th>
	</tr>
		
	<tr>
	<?php
		$name = "id01";
		$topic = "Topic 1";
		$diff = array();
		$l = 0;
		while($res = mysql_fetch_array($mydata)) {
			$dummy = "<input type=\"range\" value=\"".$res['coverage']."\" id=\"".$name."\" min=\"1\" max=\"10\" step=\"1\">";
			
			echo'<td>';
				echo $dummy;
			echo'</td>';	
					
			$name++;
			
			$diff[$l++] = $res['deficulty'];
		}
			
	?>
	</tr>
	
	<tr>
	<?php
		for($z = 0,$dif="df01"; $z < $l; $z++,$dif++) {
			$dummy = "<input type=\"range\" value=\"".$diff[$z]."\" id=\"".$dif."\" min=\"1\" max=\"3\" step=\"1\">";
			echo'<td>';
				echo $dummy;
			echo'</td>';
		}
	?>
	</tr>
	</table>
	
	<br />
	<center> <input type="button" value="Update Details" onclick="sendInfo();"> </center>
	<center> <div id="underInput" /> </center>
	
	<br />
	
	<center>
		<a href="selectIATopics.php" target="_blank">Click here to select IA Topics</a>
	</center>
	<br />
	
	<center>
		<a href="logout.php" >logout</a>
	</center>
	<br />
	
	<div id="container" style="min-width: 310px; height: 400px; max-width: 800px; margin: 0 auto"></div>
	<br />
	
	<center>
		<a href="login.php" >logout</a>
	</center>
	
	<br />
	
	
	<br />
	
	<center>
		Select USN :
		<select id="selectUSN" name="v" onchange="sendInfo2();">
			<!--<option value="" selected="selected"></option>-->
		<?php
	
			$sql = "SELECT usn FROM student";
		
			$mydata = mysql_query($sql,$con);
		
			while($res = mysql_fetch_array($mydata)) {
				echo '<option value='.$res['usn'].'>'.$res['usn'].'</option>';
			}
	
		?>
		</select>
	</center>
	
	<br />
	<div id="container2" style="min-width: 310px; height: 400px; max-width: 800px; margin: 0 auto"></div>
	<br />
	
	<br />
	<div class="row">
				
				<div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <center>Cluster Activities</center>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <div class="flot-chart-content" id="flot-line-chart"></div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
				
                <!-- /.col-lg-8 -->
                <!-- /.col-lg-4 -->
            </div>

	</body>
</html>