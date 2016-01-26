<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$eleName = "seed001";
	$subName = "subm001";
	
	$usn = "2sd12cs001";
	$i = 0;
	while($i < 100) {
		if(isset($_POST["$subName"])) {
			$var = $_POST["$eleName"];
			$query = "UPDATE student set seed='$var' WHERE usn='$usn'";
			
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
		}
		
		else {
			$subName++;
			$eleName++;
			$usn++;
			$i++;
		}
	}

?>