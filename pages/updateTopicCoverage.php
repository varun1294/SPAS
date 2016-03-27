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
	
	if(!isset($_SESSION)) { 
		session_start(); 
	}
	
	$courseId = "CS1";
	
	$query = array();
	$query[0] = "UPDATE topiccoverage set coverage='$var[0]' WHERE courseid='$courseId' and topic='T1'";
	$query[1] = "UPDATE topiccoverage set coverage='$var[1]' WHERE courseid='$courseId' and topic='T2'";
	$query[2] = "UPDATE topiccoverage set coverage='$var[2]' WHERE courseid='$courseId' and topic='T3'";
	$query[3] = "UPDATE topiccoverage set coverage='$var[3]' WHERE courseid='$courseId' and topic='T4'";
	$query[4] = "UPDATE topiccoverage set coverage='$var[4]' WHERE courseid='$courseId' and topic='T5'";
	$query[5] = "UPDATE topiccoverage set coverage='$var[5]' WHERE courseid='$courseId' and topic='T6'";
	$query[6] = "UPDATE topiccoverage set coverage='$var[6]' WHERE courseid='$courseId' and topic='T7'";
	$query[7] = "UPDATE topiccoverage set coverage='$var[7]' WHERE courseid='$courseId' and topic='T8'";
	$query[8] = "UPDATE topiccoverage set coverage='$var[8]' WHERE courseid='$courseId' and topic='T9'";
	$query[9] = "UPDATE topiccoverage set coverage='$var[9]' WHERE courseid='$courseId' and topic='T10'";
	$query[10] = "UPDATE topiccoverage set coverage='$var[10]' WHERE courseid='$courseId' and topic='T11'";
	$query[11] = "UPDATE topiccoverage set coverage='$var[11]' WHERE courseid='$courseId' and topic='T12'";
	
	for($i = 0,$flag = 0; $i < 12; $i++) {
		if(mysql_query($query[$i],$con))
			$flag++;
	}
	
	if($flag == 12) {
		echo '<response>';
			echo 'Topic Coverage Updated';
		echo '</response>';
	}
	
	else {
		echo '<response>';
			echo 'Failed To Update Topic Coverage';
		echo '</response>';
	}
?>