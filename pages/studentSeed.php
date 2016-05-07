<?php
	/* Session Variables */
	$totalDaysSinceBenOfSem = 4;
	$stdUSN = "2sd12cs133";
	/* ***************** */
	
	$con = $_SESSION['con'];
	
	/*$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);*/
	
	$query = "SELECT usn FROM studentsess";
	
	$mydata = mysql_query($query,$con);
?>

<html> 
	<head> 
		<script>
			var request;
function sendInfo() {
	var v=document.getElementById("opt").value;
	var url="displaySeed.php?usn="+v;

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
  width: 200px;
  height: 100px;

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
		<br />
		<center>
			<select class="element select medium" id="opt" name="opt" onchange="sendInfo();">
			<option value="" selected="selected"></option>
			<?php
				while($res = mysql_fetch_array($mydata)) {
					$var = $res['usn'];
					echo "<option value=".$var." >".$res['usn']."</option>";
				}
			?>
			</select>
		</center>
		<br />
		<div id="underInput" />
		
		<!--
		<form id="form_990483" name="spas" method="post" action="updateSeed.php">
		
		<table border="1" cellpadding="2" cellspacing="2" width="100%">
			<tr>
				<th>Day</th>
				<th>Current Seed</th>
				<th>Set Seed</th>
			</tr>
			
			<?php
				/*$name = 1;
				while($res = mysql_fetch_array($mydata)) {
					$dummy = "<tr align=\"center\">
						<td>". $res['day'] ."</td>
						<td>". $res['seed'] ."</td>
						<td> <input type=\"range\" value=\"".$res['seed']."\" name=\"".$name."\" min=\"13\" max=\"56\">
					</tr>";
					echo $dummy;
					$name++;
				}*/
			?>
		<table>
		
		<br /><br />
		
		<center><input type="submit" value="Update Seeds" name="submit"></center>
		
		</form>-->
	</body> 
</html> 
