<?php

	if(isset($_POST['Submit'])) {
	
		$userName = $_POST['element_1'];
		$passwd = $_POST['element_2'];
		
		$con = mysql_connect("localhost","Admin","pkvcobas132");
		if(!$con)
			die("Reason : ".mysql_error());
                
		mysql_select_db("spas",$con);
		
		$sql = "SELECT * FROM  student";
		$mydata = mysql_query($sql,$con);
		
		while($record = mysql_fetch_array($mydata)) {
			
			$var1 = $record['email'];
			$var2 = $record['password'];
			
			if(($var1 == $userName) && ($var2 == $passwd)) {
				$_SESSION['loginUsn']=$record['usn'];
				$_SESSION['loginName'] = $record['name'];
				include("index.php");
			}
		}
	}

?>