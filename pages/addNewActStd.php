<?php
	
	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
	
	/* Session Variables */
	
	$startDate = $_SESSION['startDate'];
	$endDate = $_SESSION['stopDate'];
	$stdUSN = $_SESSION['stdUSN'];
	$totalSessionsStd = ($_SESSION['totalSessionsStd']) + 1;
	
	/* ***************** */
	
	$con = $_SESSION['con'];
	
	/*$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);*/
	
	
	$sql = "SELECT * FROM activity WHERE usn = '$stdUSN'";
	$data = mysql_query($sql,$con);

	$j = $startDate;
	for($i = $startDate+5; $i <= $endDate+5; $i++,$j++) {
		$res = mysql_fetch_array($data);
		$dummy = genDay($res['seed']);
		/* Write code to Insert $dummy into DB */
		/* One day's activity of stdUSN will be generated by genDay() */
		$query = "UPDATE activity SET act = '$dummy' WHERE usn = '$stdUSN' and day = '$j'";
		mysql_query($query,$con);
	}
	
	function genDay($seed) {
		GLOBAL $totalSessionsStd;
		
		$var = intval($seed / 10);
		if($var == 1)
			$var = 2;
		
		$a = "";
		$count = 0;
		while($var > 0) {
			$b = genSess($seed); /* Generates activity for one session */
			if( (($var != 1) || ($count != 0) ) && ($a != "") )
				$a = $a.';';
			$a = $a.$b;
			$var--;
			$totalSessionsStd++;
			$count++;;
		}
		
		return $a;
	}
	
	function genSess($seed) {
		GLOBAL $totalSessionsStd;
		
		$var = $seed % 10;
		$var = rand($var--,$var++);
		
		$a = "";
		$count = 0;
		while($var > 0) {
			$b = gen($seed);
			if( (($var != 1) || ($count != 0) ) && ($a != "") )
				$a = $a.';';
			$a = $a.$b;
			$var--;
			$count++;
		}
		
		return $a;
	}
	
	function gen($seed) {
		GLOBAL $totalSessionsStd;
		$std = "<";
		$std = $std.' S';
		$std = $std.$totalSessionsStd.';';
		$var = genDVR();
		$std = $std.$var.';';
		$std = $std.'A'.';';
		$var = rand(($seed-1),($seed+1));
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

?>