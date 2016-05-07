<?php

	/* Enter Your System Credentials */
		$dbUserName = 'Admin';
		$dbPassword = 'pkvcobas132';
		
		$pathToSPAS = '';
		
	/* ***************************** */
	$con = mysql_connect("localhost",$dbUserName,$dbPassword);
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$_SESSION['con'] = $con;

?>