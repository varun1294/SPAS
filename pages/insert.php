<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$usn = "2sd12cs001";
	$name = "dummy";
	$email="dummy@dummy.com";
	$sem = 7;
	$pd = "abc";
	$seed = 9;
	
	$i = 128;
	while($i <= 132) {
		$query = "INSERT INTO student values('$name','$usn','$email','$sem','$pd','$seed')";
		$usn++;
		$seed = rand(2,9);
		mysql_query($query,$con);
		$i++;
	}
?>