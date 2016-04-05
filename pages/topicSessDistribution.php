<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("spas",$con);
	
	/* **** Read rAllStdDFActs **** */
		$allStdsDFAct = 0;
		$file = fopen("RScripts/rAllStdDFActs.txt","r");
		while(! feof($file)) {
			$rArrayDF[$allStdsDFAct++] = fgets($file);
		}
		fclose($file);
		$allStdsDFAct--;
	/* ***************************** */
		
	/* **** Read rAllStdRLRActs **** */
		$allStdsRLRAct = 0;
		$file = fopen("RScripts/rAllStdRLRActs.txt","r");
		while(! feof($file)) {
			$rArrayRLR[$allStdsRLRAct++] = fgets($file);
		}
		fclose($file);
		$allStdsRLRAct--;
	/* ***************************** */
		
	/* **** Read rAllStdVLRActs **** */
		$allStdsVLRAct = 0;
		$file = fopen("RScripts/rAllStdVLRActs.txt","r");
		while(! feof($file)) {	
			$rArrayVLR[$allStdsVLRAct++] = fgets($file);
		}
		fclose($file);
		$allStdsVLRAct--;
	/* ***************************** */

	$sql = "SELECT COUNT(DISTINCT usn) FROM activity";
	
	$mydata = mysql_query($sql,$con);
	$res = mysql_fetch_array($mydata);
	
	$totalNoOfStds = $res['COUNT(DISTINCT usn)'];
	
	$sql = "SELECT * FROM topiccoverage WHERE coverage != 1";
	
	$mydata = mysql_query($sql,$con);
	
	$var = array();
	$count = 0;
	$k = 0;
	while($res = mysql_fetch_array($mydata)) {
		$var[$count][$k++] = $res['courseid'];
		$var[$count][$k++] = $res['topic'];
		$var[$count][$k] = $res['coverage'];
		$count++;
		$k = 0;
	}
	
	for($rr = 0; $rr < $count; $rr++) {
		print_r($var[$rr]);
		echo '<br /><br />';
	}
	
	$randArr1 = array();
	$randArr2 = array();
	$randArr3 = array();
	
	$sum = 0;
	for($k = 0; $k < $count; $k++) {
		$r = rand(2,9);
		$randArr1[$k] = $r;
		$sum += $r;
	}
	
	$sum = 0;
	for($k = 0; $k < $count; $k++) {
		$r = rand(2,9);
		$randArr2[$k] = $r;
		$sum += $r;
	}
	
	$sum = 0;
	for($k = 0; $k < $count; $k++) {
		$r = rand(2,9);
		$randArr3[$k] = $r;
		$sum += $r;
	}
	
	$partsDF = array();
	
	$sql = "DELETE FROM studenttopicdist WHERE ";
	mysql_query($sql,$con);
	
	for($i = 0,$usn="2sd12cs001"; $i < $totalNoOfStds; $i++,$usn++) {
		$totalActsDF = $rArrayDF[$i];
		$totalActsRLR = $rArrayRLR[$i];
		$totalActsVLR = $rArrayVLR[$i];
		
		for($k = 0; $k < $count; $k++) {
			
			$r = ($randArr1[$k]/$sum) * $rArrayDF[$i];
			$partsDF[$k] = intval($r);
			
			$r = ($randArr2[$k]/$sum) * $rArrayRLR[$i];
			$partsRLR[$k] = intval($r);
			
			$r = ($randArr3[$k]/$sum) * $rArrayVLR[$i];
			$partsVLR[$k] = intval($r);
			
			$r1 = $var[$k][0];
			$r2 = $var[$k][1];
			
			$sql = "INSERT INTO studenttopicdist VALUES ('$usn','$r1','$r2','$partsDF[$k]','$partsRLR[$k]','$partsVLR[$k]')";
			
			if(mysql_query($sql,$con)) {}
			else {
				$sql = "UPDATE studenttopicdist SET actsdf = '$partsDF[$k]', actsrlr = '$partsRLR[$k]', actsvlr = '$partsVLR[$k]' WHERE usn = '$usn' and courseid = '$r1' and topic = '$r2'";
				if(mysql_query($sql,$con)){}
				else {}
			}
		}
	}

?>