<?php

	/* Session Variables */
	$totalDaysSinceBenOfSem = 4;
	$stdUSN = "2sd12cs133";
	$totalstds = 4;
	/* ***************** */
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$eleName = 1;
	
	$i = 0;
	while($i < $totalstds) {
		if(isset($_POST["submit"])) {
			$var = $_POST["$eleName"];
			$query = "UPDATE activity set seed='$var' WHERE usn='$stdUSN' and day='$eleName'";
			
			if(mysql_query($query,$con)) {
				echo'<script type="text/javascript">
					alert("Successfull!");
					</script>';
			}
			else {
				echo'<script type="text/javascript">
					alert("Unsuccessfull!");
					</script>';
			}
			
			$i++;
			$eleName++;
		}
		
		else {
			$subName++;
			$eleName++;
			$usn++;
			$i++;
		}
	}

?>