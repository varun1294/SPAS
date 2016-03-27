<?php

	if(!isset($_SESSION)) { 
		session_start(); 
	}
	
	$loginName = "Prof.Varun";
	$courseId = "CS1";
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$query = "SELECT * FROM topiccoverage WHERE courseid='$courseId'";
	
	$mydata = mysql_query($query,$con);
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>

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
	
		<script>
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
				}
			}
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

<body>

    <!--<div id="wrapper">-->

        <!-- Navigation -->

        <!--<div id="page-wrapper">-->
            <div class="row">
                <div class="col-lg-12">
                    <center><h1 class="page-header">Dashboard</h1></center>
                </div>
                <!-- /.col-lg-12 -->
            </div>
			
	<center>
		<b>Topic Coverage</b>
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
		while($res = mysql_fetch_array($mydata)) {
			$dummy = "<input type=\"range\" value=\"".$res['coverage']."\" id=\"".$name."\" min=\"1\" max=\"10\" step=\"1\">";

			//echo '<tr>';
				
				echo'<td>';
					echo $dummy;
				echo'</td>';
				
			//echo '</tr>';		
					
			$name++;
		}
			
	?>
	</tr>
	</table>
	
	<br />
	<center> <input type="button" value="Update" onclick="sendInfo();"> </center>
	<center> <div id="underInput" /> </center>
	
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
            <!-- /.row -->
        <!--</div>-->
        <!-- /#page-wrapper -->

    <!--</div>-->
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Flot Charts JavaScript -->
    <script src="../bower_components/flot/excanvas.min.js"></script>
    <script src="../bower_components/flot/jquery.flot.js"></script>
    <script src="../bower_components/flot/jquery.flot.pie.js"></script>
    <script src="../bower_components/flot/jquery.flot.resize.js"></script>
    <script src="../bower_components/flot/jquery.flot.time.js"></script>
    <script src="../bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
    <script src="../js/flot-data.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>
