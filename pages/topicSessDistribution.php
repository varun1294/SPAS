<?php

	include("init.php");
	$loginStdSlNo = $_SESSION['loginStdSlNo'];
	$loginUsn = $_SESSION['loginUsn'];
	$totalNoOfStds = $_SESSION['totalNoOfStds'];
	
	$rArrayDF = $_SESSION['rArrayDF'];
	$rArrayVLR = $_SESSION['rArrayVLR'];
	$rArrayRLR = $_SESSION['rArrayRLR'];
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("spas",$con);
	
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
	
	for($j = 0; $j < $count; $j++) {
		for($k = 0; $k < 3; $k++)
			echo $var[$j][$k].' ';
		echo'<br />';
	}
	
	/*echo 'DF Acts : '.$rArrayDF[$loginStdSlNo-1].'<br />';
	echo 'RLR Acts : '.$rArrayRLR[$loginStdSlNo-1].'<br />';
	echo 'VLR Acts : '.$rArrayVLR[$loginStdSlNo-1].'<br />';*/
	
	$randArr = array();
	
	$sum = 0;
	for($k = 0; $k < $count; $k++) {
		$r = rand(2,9);
		$randArr[$k] = $r;
		$sum += $r;
	}
	
	//echo $rArrayDF[$loginStdSlNo-1].'<br />';
	$partsDF = array();
	
	$sql = "DELETE FROM studenttopicdist";
	mysql_query($sql,$con);
	
	for($i = 0,$usn="2sd12cs001"; $i < $totalNoOfStds; $i++,$usn++) {
		$totalActsDF = $rArrayDF[$i];
		$totalActsRLR = $rArrayRLR[$i];
		$totalActsVLR = $rArrayVLR[$i];
		
		for($k = 0; $k < $count; $k++) {
			
			$r = ($randArr[$k]/$sum) * $rArrayDF[$i];
			$partsDF[$k] = intval($r);
			
			$r = ($randArr[$k]/$sum) * $rArrayRLR[$i];
			$partsRLR[$k] = intval($r);
			
			$r = ($randArr[$k]/$sum) * $rArrayVLR[$i];
			$partsVLR[$k] = intval($r);
			
			$r1 = $var[$k][0];
			$r2 = $var[$k][1];
			
			/*echo $r1.'<br />';
			echo $r2.'<br />';*/
			
			$sql = "INSERT INTO studenttopicdist VALUES ('$usn','$r1','$r2','$partsDF[$k]','$partsRLR[$k]','$partsVLR[$k]')";
			
			if(mysql_query($sql,$con)) {}
				//echo 'Success 1<br />';
			else {
				$sql = "UPDATE studenttopicdist SET actsdf = '$partsDF[$k]', actsrlr = '$partsRLR[$k]', actsvlr = '$partsVLR[$k]' WHERE usn = '$usn' and courseid = '$r1' and topic = '$r2'";
				if(mysql_query($sql,$con)){}
					//echo 'Success 2<br />';
				else {}
					//echo 'Fail 2<br />';
			}
		}
	}

?>