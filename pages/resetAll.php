<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$sql = "SELECT COUNT(DISTINCT usn) FROM activity";
	
	$mydata = mysql_query($sql,$con);
	$res = mysql_fetch_array($mydata);
	
	$totalNoOfStds = $res['COUNT(DISTINCT usn)'];
	
	for($i = 0, $var = null, $usn = '2sd12cs001'; $i < $totalNoOfStds; $i++,$usn++) {
		$sql = "UPDATE activity SET act='$var' WHERE usn = '$usn'";
		mysql_query($sql,$con);
	}
	
	$sql = "UPDATE studentsess SET totalsess = 0";
	mysql_query($sql,$con);
	
	$sql = "UPDATE studenttopicdist SET actsdf = 0, actsrlr = 0, actsvlr = 0";
	mysql_query($sql,$con);
	
	$sql = "UPDATE topiccoverage SET coverage = 1, deficulty = 1";
	mysql_query($sql,$con);
	
	$sql = "UPDATE student SET ia1 = 0, ia2 = 0, ia3 = 0, ese = 0";
	mysql_query($sql,$con);
	
?>