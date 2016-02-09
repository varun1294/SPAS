<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$usn = "2sd12cs127";
	$sess = 0;
	
	//for($i = 0; $i < 6; $i++) {
		$a1 = rand(13,19);
		$a2 = rand(14,20);
		$a3 = rand(12,18);
		$se = rand(40,92);
		
		$sql = "UPDATE student SET ia1 = '$a1', ia2 = '$a2', ia3 = '$a3', ese = '$se' WHERE usn = '$usn'";
		if(mysql_query($sql,$con))
			echo 'success<br />';
		else
			echo 'fail<br />';
	//}
	
	
	/*$sql = "DELETE FROM studentsess";
	if(mysql_query($sql,$con))
			echo 'success<br />';
		else
			echo 'fail<br />';*/
?>