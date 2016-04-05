<?php

	$totalNewStds = 11;
	$usn = "2sd12cs040";
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	for($i = 0; $i < $totalNewStds; $i++,$usn++) {
		/* INSERT INTO student */
		/* ********************************************************************************************************* */
			$name = 'dummy';
			$ia1 = 0; $ia2 = 0; $ia3 = 0; $ese = 0;
			$email = 'dummy@dummy.com';
			$passwd = 'abc';
			$seed = rand(2,10);
			$sem = 8;
		
			$sql = "INSERT INTO student VALUES ('$name','$usn','$ia1','$ia2','$ia3','$ese','$email','$sem','$passwd','$seed')";
			mysql_query($sql,$con);
		/* ********************************************************************************************************* */
		
		/* INSERT INTO activity */
		/* ************************************************************************* */
			$day = 1;
			$act = null;
			for($j = 0; $j < 112; $j++,$day++) {
				$seed = rand(11,35);
				if($seed % 2 == 0)
					$seed++;
					
				$sql = "INSERT INTO activity VALUES ('$usn','$day','$seed','$act')";
				mysql_query($sql,$con);
			}
		/* ************************************************************************* */
		
		/* INSERT INTO studentsess */
		/* **************************************************** */
			$sql = "INSERT INTO studentsess VALUES ('$usn',0)";
			mysql_query($sql,$con);
		/* **************************************************** */
	}

?>