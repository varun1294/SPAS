<!DOCTYPE html>

<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$query = "SELECT usn,seed FROM student";
	$data = mysql_query($query,$con);
	
	/*while($res = mysql_fetch_array($data)) {
		echo $res['usn'];
		echo $res['seed'].'<br />';
	}*/

?> 
<html> 
	<head> 
		<style type="text/css">

input[type=range] {
  -webkit-appearance: none;
  width: 40%;
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
  -webkit-appearance: none;
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
		<!--2SD12CS133<br />
		<input type="range" value="4" name="points" min="0" max="10">-->
		
		<table border="1" cellpadding="10" cellspacing="10" width="100%">
			<tr>
				<th>USN</th>
				<th>Seed Setting</th>
				<th>Update</th>
			</tr>
			
			<?php
				$i = "seed001";
				$j = "subm001";
				while($res = mysql_fetch_array($data)) {
					echo "<tr align=\"center\">
						<td>".$res['usn']."</td>
						<td> <input type=\"range\" value=".$res['seed']." name=".$i." min=\"0\" max=\"10\"> </td>
						<td> <input type=\"submit\" name=".$j."> </td>
					</tr>";
					$i++;
					$j++;
				}
			?>
		<table>
	</body> 
</html> 
