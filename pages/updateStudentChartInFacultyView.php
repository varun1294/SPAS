<?php

	//$usn = '2sd12cs001';
	//$courseid = 'CS1';
	
	$usn = $_GET['usn'];
	$courseId = $_SESSION['courseId'];
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$query = "SELECT * FROM topiccoverage WHERE courseid='$courseid'";
	$mydata = mysql_query($query,$con);
	
	$sql = "SELECT * FROM studenttopicdist WHERE courseid='$courseid' and usn = '$usn' and actsdf != 0";
	$data = mysql_query($sql,$con);
	
	$var = array();
	$i = 0;
	while($res = mysql_fetch_array($data)) {
		$var[$i][0] = $res['topic'];
		$var[$i][1] = $res['actsdf'];
		$var[$i][2] = $res['actsrlr'];
		$var[$i][3] = $res['actsvlr'];

		$i++;
	}
	
	$i--;
	
	if(!isset($_SESSION)) { 
		session_start(); 
	}
	
	$_SESSION['varResultOfChart'] = $var;
	$_SESSION['iResultOfChart'] = $i;

?>
