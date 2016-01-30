<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	/*$day = "day110";
	$i = 110;
	while($i <= 112) {
		$sql = "ALTER TABLE `activity` ADD `$day` VARCHAR(100) NOT NULL";
		$day++;
		if(mysql_query($sql,$con))
			echo 'Success<br />';
		else
			echo 'Fail<br />';
		$i++;
	}*/
	
	$usn = "2sd12cs133";
	$day = 1;
	$seed = 1;
	
	for($i = 0; $i < 4; $i++,$day++) {
		$sql = "DELETE FROM activity";
		if(mysql_query($sql,$con))
			echo 'Success<br />';
		else
			echo 'Fail<br />';
	}
?>