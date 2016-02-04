<?php

	/* Session Variables */
	$totalDaysSinceBenOfSem = 4;
	$totalstds = 4;
	/* ***************** */
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$eleName = 1;
	
	$i = 0;
	
	if(isset($_POST["submit"])) {
		$stdUSN = $_POST["hid"];
		echo $stdUSN.'<br />';
		
		while($i < $totalDaysSinceBenOfSem) {
			
			$var = $_POST["$eleName"];
			if( ($var % 10) == 0)
				$var++;
			$query = "UPDATE activity set seed='$var' WHERE usn='$stdUSN' and day='$eleName'";
			
			if(mysql_query($query,$con)) {
			}
			else {
				echo'<script type="text/javascript">
					alert("Unsuccessfull!");
					</script>';
			}
			
			$i++;
			$eleName++;
		}
	}
	
	header('Location: studentSeed.php');

?>