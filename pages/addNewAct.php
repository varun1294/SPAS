<?php
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);
	
	$totalSessionsStd = 0;
	
	if(isset($_POST['submit'])) {
		$sql2 = "SELECT * FROM studentsess";
		$mydata = mysql_query($sql2,$con);
		
		$startDate = $_POST['start'];
		$stopDate = $_POST['stop'];
		
		while($res2 = mysql_fetch_array($mydata)) {
			$totalSessionsStd = $res2['totalsess'];
			generate($res2['usn'],$startDate,$stopDate);
		}
	}
	
	/* Below Code generates random activities for a given USN, startDate and endDate */
	
	/* *************************************************************************************************************************** */
	/* *************************************************************************************************************************** */
	
	function generate($stdUSN,$startDate,$endDate) {
		GLOBAL $con, $totalSessionsStd;
		
		/*echo 'stdUSN : '.$stdUSN.'<br />';
		echo 'startDate : '.$startDate.'<br />';
		echo 'endDate : '.$endDate.'<br />';
		echo 'totalSessionsStd : '.$totalSessionsStd.'<br />';*/
		
		$totalSessionsStd++;
		$sql = "SELECT * FROM activity WHERE usn = '$stdUSN' and day >= '$startDate' and day <= '$endDate'";
		$data = mysql_query($sql,$con);

		$j = $startDate;
		for($i = $startDate; $i <= $endDate; $i++,$j++) {
			//echo 'Day : '.($i).'<br />';
			$res = mysql_fetch_array($data);
			//echo 'Day : '.$res['day'].'<br />';
			//echo 'Seed : '.$res['seed'].'<br />';
			$dummy = genDay($res['seed']);
			//echo '<br /><br />';
			/* Write code to Insert $dummy into DB */
			/* One day's activity of stdUSN will be generated by genDay() */
			$query = "UPDATE activity SET act = '$dummy' WHERE usn = '$stdUSN' and day = '$j'";
			mysql_query($query,$con);
		}
		
		/* Update the total sessions of stdUSN */
			$q = "UPDATE studentsess SET totalsess = '$totalSessionsStd' WHERE usn = '$stdUSN'";
			mysql_query($q,$con);
	}
	
	function genDay($seed) {
		GLOBAL $totalSessionsStd;
		
		$var = intval($seed / 10);
		//echo 'Total Sessions : '.$var.'<br />';
		
		$a = "";
		$count = 0;
		$flag = 0;
		while($var > 0) {
			$b = genSess($seed); /* Generates activity for one session */
			//echo $b.'<br /><br />';
			if( (($var != 1) || ($count != 0) ) && ($a != "") )
				$a = $a.',';
			$a = $a.$b;
			$var--;
			$totalSessionsStd++;
			$count++;;
			$flag++;
		}
		
		if($flag == 0)
			$totalSessionsStd--;
		
		return $a;
	}
	
	function genSess($seed) {
		GLOBAL $totalSessionsStd;
		
		$var = $seed % 10;
		if($var == 0)
			$var = 3;
		$var = rand($var--,$var++);
		//echo 'Total Activity in each session : '.$var.'<br />';
		
		$a = "";
		$count = 0;
		while($var > 0) {
			$b = gen();
			if( (($var != 1) || ($count != 0) ) && ($a != "") )
				$a = $a.',';
			$a = $a.$b;
			$var--;
			$count++;
		}
		
		return $a;
	}
	
	function gen() {
		GLOBAL $totalSessionsStd;
		$std = "<";
		$std = $std.' S';
		$std = $std.$totalSessionsStd.';';
		$var = genDVR();
		$std = $std.$var.';';
		$std = $std.'A'.';';
		$var = rand(3,10);
		$std = $std.$var.'>';
		return $std;
	}
	
	function genDVR() {
		$arr = array(3);
		$arr[0] = "D";
		$arr[1] = "V";
		$arr[2] = "R";
		
		return ($arr[rand(0,2)]);
	}
	
	/* *************************************************************************************************************************** */
	/* *************************************************************************************************************************** */

?>

<html>
	<head>
		<title>SPAS</title>
	</head>
	
	<body>
		<center>
			<form action="#" method="POST">
				Enter start date : <input type = "number" name = "start"><br /><br />
				Enter stop date : <input type = "number" name = "stop"><br /><br />
				
				<input type = "submit" value = "Submit" name="submit">
			</form>
		</center>
	</body>
</html>