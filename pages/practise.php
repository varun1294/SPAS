<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("SPAS",$con);
	
	for($i = 0, $usn = '2sd12cs001'; $i < 50; $i++,$usn++) {
		$var = rand(0,1);
		if($var == 0)
			$var1 = 'M';
		else
			$var1 = 'F';
		$sql = "UPDATE student SET gender = '$var1' WHERE usn = '$usn'";
		mysql_query($sql,$con);
	}
	
?>