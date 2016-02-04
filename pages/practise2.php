<?php
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);

	$usn = "2sd12cs003";
	$day = 1;
	$startDate = 90;
	$endDate = 100;
	
	$sql = "UPDATE studentsess set totalsess = 0";
	mysql_query($sql,$con);
?>