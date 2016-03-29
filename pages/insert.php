<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	/*$usn = "2sd12cs001";
	$sess = 0;
	
	for($i = 0; $i < 6; $i++,$usn++) {
		$sql = "UPDATE studentsess SET totalsess = '$sess' WHERE usn = '$usn'";
		if(mysql_query($sql,$con))
			echo 'success<br />';
		else
			echo 'fail<br />';
	}*/
	
	$sql = "DELETE FROM activity WHERE usn = '2sd12cs042'";
	if(mysql_query($sql,$con))
		echo 'success<br />';
	else
		echo 'fail<br />';
		
	$sql = "DELETE FROM student WHERE usn = '2sd12cs042'";
	if(mysql_query($sql,$con))
		echo 'success<br />';
	else
		echo 'fail<br />';
		
	$sql = "DELETE FROM studentsess WHERE usn = '2sd12cs042'";
	if(mysql_query($sql,$con))
		echo 'success<br />';
	else
		echo 'fail<br />';
?>