<?php
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);
	
	$usn = "2sd12cs004";
	$day = 99;
	
	$sql = "SELECT * FROM activity WHERE usn = '$usn' ORDER BY day";
	
	$mydata = mysql_query($sql,$con);
	
	while($res = mysql_fetch_array($mydata)) {
		echo 'Day : '.$res['day'].' ';
		echo 'Seed : '.$res['seed'];
		echo '<br />';
	}
?>