<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$usn = "2sd12cs001";
	$sess = 0;
	
	$i = 1;
	while($i <= 6) {
		$sql = "INSERT INTO studentsess VALUES ('$usn','$sess')";
		if(mysql_query($sql,$con))
			echo 'success<br />';
		else
			echo 'fail<br />';
		$usn++;
		$i++;
	}
	/*$sql = "DELETE FROM studentsess";
	if(mysql_query($sql,$con))
			echo 'success<br />';
		else
			echo 'fail<br />';*/
?>