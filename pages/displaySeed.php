<?php

	header('Content-Type: text/xml');
echo'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);

echo '<response>';

	$usn = $_GET['usn'];
	
	$query = "SELECT * FROM activity WHERE usn = '$usn'";
	
	$mydata = mysql_query($query,$con);
	
	$name = 1;
	$dummy = "<form id=\"form_990483\" name=\"spas\" method=\"post\" action=\"updateSeed.php\">
		USN : <input type = \"text\" name=\"hid\"value=".$usn.">
		
		<table border=\"1\" cellpadding=\"2\" cellspacing=\"2\" width=\"100%\">
			<tr>
				<th>Day</th>
				<th>Current Seed</th>
				<th>Set Seed</th>
			</tr>";
				while($res = mysql_fetch_array($mydata)) {
					$dummy = $dummy."<tr align=\"center\">
						<td>". $res['day'] ."</td>
						<td>". $res['seed'] ."</td>
						<td> <input type=\"range\" value=\"".$res['seed']."\" name=\"".$name."\" min=\"11\" max=\"59\">
					</tr>";
					$name++;
				}
		$dummy = $dummy."<table>
		
		<br /><br />
		
		<center><input type=\"submit\" value=\"Update Seeds\" name=\"submit\"></center>
		
		</form>";
		echo $dummy;
		
echo '</response>';
?>