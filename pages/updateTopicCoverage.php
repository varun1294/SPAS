<?php

	/*header('Content-Type: text/xml');
	echo'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';*/

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$var = array();
	
	$var[0] = intval($_GET['T1']);
	$var[1] = $_GET['T2'];
	$var[2] = $_GET['T3'];
	$var[3] = $_GET['T4'];
	$var[4] = $_GET['T5'];
	$var[5] = $_GET['T6'];
	$var[6] = $_GET['T7'];
	$var[7] = $_GET['T8'];
	$var[8] = $_GET['T9'];
	$var[9] = $_GET['T10'];
	$var[10] = $_GET['T11'];
	$var[11] = $_GET['T12'];
	
	$var[12] = $_GET['D1'];
	$var[13] = $_GET['D2'];
	$var[14] = $_GET['D3'];
	$var[15] = $_GET['D4'];
	$var[16] = $_GET['D5'];
	$var[17] = $_GET['D6'];
	$var[18] = $_GET['D7'];
	$var[19] = $_GET['D8'];
	$var[20] = $_GET['D9'];
	$var[21] = $_GET['D10'];
	$var[22] = $_GET['D11'];
	$var[23] = $_GET['D12'];
	
	if(!isset($_SESSION)) { 
		session_start(); 
	}
	
	$courseId = "CS1";
	
	$query = array();
	$query[0] = "UPDATE topiccoverage set coverage='$var[0]', deficulty='$var[12]' WHERE courseid='$courseId' and topic='T1'";
	$query[1] = "UPDATE topiccoverage set coverage='$var[1]', deficulty='$var[13]' WHERE courseid='$courseId' and topic='T2'";
	$query[2] = "UPDATE topiccoverage set coverage='$var[2]', deficulty='$var[14]' WHERE courseid='$courseId' and topic='T3'";
	$query[3] = "UPDATE topiccoverage set coverage='$var[3]', deficulty='$var[15]' WHERE courseid='$courseId' and topic='T4'";
	$query[4] = "UPDATE topiccoverage set coverage='$var[4]', deficulty='$var[16]' WHERE courseid='$courseId' and topic='T5'";
	$query[5] = "UPDATE topiccoverage set coverage='$var[5]', deficulty='$var[17]' WHERE courseid='$courseId' and topic='T6'";
	$query[6] = "UPDATE topiccoverage set coverage='$var[6]', deficulty='$var[18]' WHERE courseid='$courseId' and topic='T7'";
	$query[7] = "UPDATE topiccoverage set coverage='$var[7]', deficulty='$var[19]' WHERE courseid='$courseId' and topic='T8'";
	$query[8] = "UPDATE topiccoverage set coverage='$var[8]', deficulty='$var[20]' WHERE courseid='$courseId' and topic='T9'";
	$query[9] = "UPDATE topiccoverage set coverage='$var[9]', deficulty='$var[21]' WHERE courseid='$courseId' and topic='T10'";
	$query[10] = "UPDATE topiccoverage set coverage='$var[10]', deficulty='$var[22]' WHERE courseid='$courseId' and topic='T11'";
	$query[11] = "UPDATE topiccoverage set coverage='$var[11]', deficulty='$var[23]' WHERE courseid='$courseId' and topic='T12'";
	
	for($i = 0,$flag = 0; $i < 12; $i++) {
		if(mysql_query($query[$i],$con))
			$flag++;
	}
	
	if($flag == 12) {
		echo '<response>';
			echo 'Topic Coverage & Difficulty Levels Updated';
		echo '</response>';
	}
	
	else {
		echo '<response>';
			echo 'Failed To Update Topic Coverage';
		echo '</response>';
	}
?>