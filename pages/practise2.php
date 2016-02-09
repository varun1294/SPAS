<?php
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);

	$usn = "2sd12cs133";
	$day = 1;
	$startDate = 90;
	$endDate = 100;
	
	$sql = "UPDATE studentsess set totalsess = 0";
	mysql_query($sql,$con);

	/*for($i = 0; $i < 112; $i++,$day++) {
		$seed = rand(11,35);
		if($seed % 2 == 0)
			$seed++;
		
		$sql ="UPDATE activity SET seed = '$seed' WHERE usn = '$usn' and day = '$day'";
		$mydata = mysql_query($sql,$con);
	}*/
?>