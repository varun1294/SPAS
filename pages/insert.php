<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$dummy = "Dummy Notification";
	$query = "SELECT * FROM notifications";
	
	for($i = 0; $i < 8; $i++) {
		$dummy = "<a href=\"#\" class=\"list-group-item\">";
		$dummy = $dummy."<i class=\"fa fa-bolt fa-fw\">";
		$dummy = $dummy."Dummy Notification";
		$dummy = $dummy."</span>";
		echo $dummy;
		
		echo'<br />';
		echo'<br />';
	}
?>