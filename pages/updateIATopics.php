<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("spas",$con);

?>