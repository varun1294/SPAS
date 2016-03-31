<?php

	$loginUsn = '2sd12cs001';
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("SPAS",$con);
	
	$sql = "SELECT DISTINCT(courseid) FROM topiccoverage WHERE coverage != 1";
	
	$mydata = mysql_query($sql,$con);
	
	$courseIds = array();
	$i = 0;
	while($res = mysql_fetch_array($mydata)) {
		$courseIds[$i++] = $res['courseid'];
	}
	
	$maxDFTopic = array();
	$maxRLRTopic = array();
	$maxVLRTopic = array();
	
	for($j = 0; $j < $i; $j++) {
		$var = $courseIds[$j];
		
		/* To Select Topic Which Has MAXIMUM DF Activity On It */
		$sql = "SELECT courseid, topic 
				FROM studenttopicdist 
				WHERE actsdf =(
					SELECT max(actsdf) FROM studenttopicdist WHERE usn = '$loginUsn' and courseid = '$var'
				)";
	
		$mydata = mysql_query($sql,$con);
		$res = mysql_fetch_array($mydata);
	
		$maxDFTopic[$j][0] = $res['courseid'];
		$maxDFTopic[$j][1] = $res['topic'];
		
		/* To Select Topic Which Has MAXIMUM RLR Activity On It */
		$sql = "SELECT courseid, topic 
				FROM studenttopicdist 
				WHERE actsrlr =(
					SELECT max(actsrlr) FROM studenttopicdist WHERE usn = '$loginUsn' and courseid = '$var'
				)";

		$mydata = mysql_query($sql,$con);
		$res = mysql_fetch_array($mydata);
	
		$maxRLRTopic[$j][0] = $res['courseid'];
		$maxRLRTopic[$j][1] = $res['topic'];
		
		/* To Select Topic Which Has MAXIMUM VLR Activity On It */
		$sql = "SELECT courseid, topic 
				FROM studenttopicdist 
				WHERE actsvlr =(
					SELECT max(actsvlr) FROM studenttopicdist WHERE usn = '$loginUsn' and courseid = '$var'
				)";

		$mydata = mysql_query($sql,$con);
		$res = mysql_fetch_array($mydata);
	
		$maxVLRTopic[$j][0] = $res['courseid'];
		$maxVLRTopic[$j][1] = $res['topic'];
	}
	
	$_SESSION['maxDFTopic'] = $maxDFTopic;
	$_SESSION['maxRLRTopic'] = $maxRLRTopic;
	$_SESSION['maxVLRTopic'] = $maxVLRTopic;
	$_SESSION['maxTopicCount'] = $j;

?>