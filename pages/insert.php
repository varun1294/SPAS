<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	/*for($i = 0, $usn = '2sd12cs001'; $i < 50; $i++,$usn++) {
		for($j = 0, $courseid = 'CS1'; $j < 6; $j++,$courseid++) {
			$var = 0;
			$sql = "INSERT INTO marks VALUES ('$usn','$courseid','ia1','$var')";
			$sql2 = "INSERT INTO marks VALUES ('$usn','$courseid','ia2','$var')";
			$sql3 = "INSERT INTO marks VALUES ('$usn','$courseid','ia3','$var')";
			$sql4 = "INSERT INTO marks VALUES ('$usn','$courseid','ese','$var')";
			
			mysql_query($sql,$con);
			mysql_query($sql2,$con);
			mysql_query($sql3,$con);
			mysql_query($sql4,$con);
		}
	}*/
	
	for($i = 0, $usn = '2sd12cs001'; $i < 50; $i++,$usn++) {
		for($j = 0, $courseid = 'CS1'; $j < 6; $j++,$courseid++) {
			$var = 0;
			$marks = rand(5,20);
			//$sql = "INSERT INTO marks VALUES ('$usn','$courseid','ia1','$marks')";
			$sql = "UPDATE marks SET marks = '$marks' WHERE usn = '$usn' and courseid = '$courseid' and type = 'ia2'";
			if(mysql_query($sql,$con))
				echo 'success<br />';
			else
				echo 'fail<br />';
		}
	}
	
	/*$sql = "DELETE FROM marks";
	if(mysql_query($sql,$con))
		echo 'success<br />';
	else
		echo 'fail<br />';*/
?>