
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
		
		$loginStdSlNo = 0;
		$valid=0;
		while($record = mysql_fetch_array($mydata)) {
			
			$var1 = $record['usn'];
			$var2 = $record['password'];
			
			if(($var1 == $userName) && ($var2 == $passwd)) {
				if(!isset($_SESSION)) { 
					session_start(); 
				}
				
				$_SESSION['loginUsn']=$record['usn'];
				$_SESSION['loginName'] = $record['name'];
				
				$loginStdSlNo++;
				$_SESSION['loginStdSlNo'] = $loginStdSlNo;
				
				$login = true;
				$_SESSION['login'] = $login;
				
				include("index.php");
				$valid=1;
			}
			
			$loginStdSlNo++;
		}
		
		$sql = "SELECT * FROM faculty";
		$mydata = mysql_query($sql,$con);
		
		while($record = mysql_fetch_array($mydata)) {
			
			$var1 = $record['fac_id'];
			$var2 = $record['password'];
			
			if(($var1 == $userName) && ($var2 == $passwd)) {
				$_SESSION['loginFacId']=$record['fac_id'];
				$_SESSION['loginFacName'] = $record['name'];
				$_SESSION['courseId'] = $record['courseid'];
				
				$login = true;
				$_SESSION['login'] = $login;
				
				include("faculty.php");
				$valid=1;
			}
		}
		
		if($valid==0){
			echo'<script type="text/javascript">
			alert("Incorrect login credentials");
			
		window.location.href="login.html";
		</script>';
		}
	}


?>
