<?php

	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
	
	//include("init.php");
	
	$loginUsn = $_SESSION['loginUsn'];
	$rArrayDFCluster = $_SESSION['rArrayDFCluster'];
	$rArrayVLRCluster = $_SESSION['rArrayVLRCluster'];
	$rArrayRLRCluster = $_SESSION['rArrayRLRCluster'];
	$rArrayDF = $_SESSION['rArrayDF'];
	$rArrayVLR = $_SESSION['rArrayVLR'];
	$rArrayRLR = $_SESSION['rArrayRLR'];
	$loginStdSlNo = $_SESSION['loginStdSlNo'];
	$totalNoOfStds = $_SESSION['totalNoOfStds'];
	
	$ia1Marks = $_SESSION['ia1Marks'];
	$ia2Marks = $_SESSION['ia2Marks'];
	$ia3Marks = $_SESSION['ia3Marks'];
	$eseMarks = $_SESSION['eseMarks'];
	$marksCounterarks = $_SESSION['marksCounterarks'];
	$rArrayALLCluster = $_SESSION['rArrayALLCluster'];
	$rArrayALL = $_SESSION['rArrayALL'];
	$marksPresence = $_SESSION['marksPresence'];
	
	$arr = array();
	
	$loggedInStdCluster = array();
	
	$arrCount = 0;
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("spas",$con);
	
	$clusterZone = array();
	$clusterZone1 = array();
	$clusterZone2 = array();
	$clusterZone3 = array();
	$clusterZone4 = array();
	
	$clusterZone1[0] = $rArrayDFCluster[$totalNoOfStds];
	$clusterZone1[1] = $rArrayDFCluster[$totalNoOfStds+1];
	$clusterZone1[2] = $rArrayDFCluster[$totalNoOfStds+2];
	
	$clusterZone2[0] = $rArrayRLRCluster[$totalNoOfStds];
	$clusterZone2[1] = $rArrayRLRCluster[$totalNoOfStds+1];
	$clusterZone2[2] = $rArrayRLRCluster[$totalNoOfStds+2];
	
	$clusterZone3[0] = $rArrayVLRCluster[$totalNoOfStds];
	$clusterZone3[1] = $rArrayVLRCluster[$totalNoOfStds+1];
	$clusterZone3[2] = $rArrayVLRCluster[$totalNoOfStds+2];
	
	$clusterZone4[0] = $rArrayALLCluster[$totalNoOfStds];
	$clusterZone4[1] = $rArrayALLCluster[$totalNoOfStds+1];
	$clusterZone4[2] = $rArrayALLCluster[$totalNoOfStds+2];
	
	sort($clusterZone1);
	sort($clusterZone2);
	sort($clusterZone3);
	sort($clusterZone4);
	
	for($i = $totalNoOfStds, $j = 0; $j < 3; $j++,$i++) {
		if($rArrayDFCluster[$i] == $clusterZone1[0]) {
			$clusterZone[$j][0] = $j+1;
			$clusterZone[$j][1] = 'UNSAFE';
			$clusterZone[$j][2] = 'RED';
		}
		else if($rArrayDFCluster[$i] == $clusterZone1[1]) {
			$clusterZone[$j][0] = $j+1;
			$clusterZone[$j][1] = 'MODERATELY SAFE';
			$clusterZone[$j][2] = 'YELLOW';
		}
		else {
			$clusterZone[$j][1] = 'SAFE';
			$clusterZone[$j][0] = $j+1;
			$clusterZone[$j][2] = 'GREEN';
		}
	}
	
	for($i = $totalNoOfStds, $j = 0; $j < 3; $j++,$i++) {
		if($rArrayRLRCluster[$i] == $clusterZone2[0]) {
			$clusterZone[$j+3][0] = $j+1;
			$clusterZone[$j+3][1] = 'UNSAFE';
			$clusterZone[$j+3][2] = 'RED';
		}
		else if($rArrayRLRCluster[$i] == $clusterZone2[1]) {
			$clusterZone[$j+3][0] = $j+1;
			$clusterZone[$j+3][1] = 'MODERATELY SAFE';
			$clusterZone[$j+3][2] = 'YELLOW';
		}
		else {
			$clusterZone[$j+3][1] = 'SAFE';
			$clusterZone[$j+3][0] = $j+1;
			$clusterZone[$j+3][2] = 'GREEN';
		}
	}
	
	for($i = $totalNoOfStds, $j = 0; $j < 3; $j++,$i++) {
		if($rArrayVLRCluster[$i] == $clusterZone3[0]) {
			$clusterZone[$j+6][0] = $j+1;
			$clusterZone[$j+6][1] = 'UNSAFE';
			$clusterZone[$j+6][2] = 'RED';
		}
		else if($rArrayVLRCluster[$i] == $clusterZone3[1]) {
			$clusterZone[$j+6][0] = $j+1;
			$clusterZone[$j+6][1] = 'MODERATELY SAFE';
			$clusterZone[$j+6][2] = 'YELLOW';
		}
		else {
			$clusterZone[$j+6][1] = 'SAFE';
			$clusterZone[$j+6][0] = $j+1;
			$clusterZone[$j+6][2] = 'GREEN';
		}
	}
	
	for($i = $totalNoOfStds, $j = 0; $j < 3; $j++,$i++) {
		if($rArrayALLCluster[$i] == $clusterZone4[0]) {
			$clusterZone[$j+9][0] = $j+1;
			$clusterZone[$j+9][1] = 'UNSAFE';
			$clusterZone[$j+9][2] = 'RED';
		}
		else if($rArrayALLCluster[$i] == $clusterZone4[1]) {
			$clusterZone[$j+9][0] = $j+1;
			$clusterZone[$j+9][1] = 'MODERATELY SAFE';
			$clusterZone[$j+9][2] = 'YELLOW';
		}
		else {
			$clusterZone[$j+9][1] = 'SAFE';
			$clusterZone[$j+9][0] = $j+1;
			$clusterZone[$j+9][2] = 'GREEN';
		}
	}
	
	$sugg2 = array();
	$sugg2Counter = 0;
	
	/* ************************************************* Basic Suggestions in DF ************************************************** */
		$var = 'You are in ';
		if($rArrayDFCluster[$loginStdSlNo-1] == 1) {
			for($j = 0; $j < 3; $j++) {
				if($clusterZone[$j][0] == 1) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[0] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[0] = 2;
					else
						$loggedInStdCluster[0] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of DF';
		}
		else if($rArrayDFCluster[$loginStdSlNo-1] == 2) {
			for($j = 0; $j < 3; $j++) {
				if($clusterZone[$j][0] == 2) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[0] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[0] = 2;
					else
						$loggedInStdCluster[0] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of DF';
		}
		else {
			for($j = 0; $j < 3; $j++) {
				if($clusterZone[$j][0] == 3) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[0] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[0] = 2;
					else
						$loggedInStdCluster[0] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of DF';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayDF[$loginStdSlNo-1] / $rArrayDFCluster[$totalNoOfStds + $rArrayDFCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';
		
		$arr[$arrCount++] = $var;
		
		//$loggedInStdCluster[0] = $rArrayDFCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */
	
	/* ************************************************* Basic Suggestions in RLR ************************************************* */
		$var = 'You are in ';
		if($rArrayRLRCluster[$loginStdSlNo-1] == 1) {
			for($j = 3; $j < 6; $j++) {
				if($clusterZone[$j][0] == 1) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[1] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[1] = 2;
					else
						$loggedInStdCluster[1] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of RLR';
		}
		else if($rArrayRLRCluster[$loginStdSlNo-1] == 2) {
			for($j = 3; $j < 6; $j++) {
				if($clusterZone[$j][0] == 2) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[1] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[1] = 2;
					else
						$loggedInStdCluster[1] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of RLR';
		}
		else {
			for($j = 3; $j < 6; $j++) {
				if($clusterZone[$j][0] == 3) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[1] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[1] = 2;
					else
						$loggedInStdCluster[1] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of RLR';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayRLR[$loginStdSlNo-1] / $rArrayRLRCluster[$totalNoOfStds + $rArrayRLRCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';
		
		$arr[$arrCount++] = $var;
		
		//$loggedInStdCluster[1] = $rArrayRLRCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */
	
	/* ************************************************* Basic Suggestions in VLR ************************************************* */
		$var = 'You are in ';
		if($rArrayVLRCluster[$loginStdSlNo-1] == 1) {
			for($j = 6; $j < 9; $j++) {
				if($clusterZone[$j][0] == 1) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[2] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[2] = 2;
					else
						$loggedInStdCluster[2] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of VLR';
		}
		else if($rArrayVLRCluster[$loginStdSlNo-1] == 2) {
			for($j = 6; $j < 9; $j++) {
				if($clusterZone[$j][0] == 2) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[2] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[2] = 2;
					else
						$loggedInStdCluster[2] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of VLR';
		}
		else {
			for($j = 6; $j < 9; $j++) {
				if($clusterZone[$j][0] == 3) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[2] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[2] = 2;
					else
						$loggedInStdCluster[2] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster of VLR';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayRLR[$loginStdSlNo-1] / $rArrayVLRCluster[$totalNoOfStds + $rArrayVLRCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';
		
		$arr[$arrCount++] = $var;
		
		//$loggedInStdCluster[2] = $rArrayVLRCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */
	
	/* ************************************************ Basic Suggestions Overall ************************************************* */
		$var = 'You are in ';
		if($rArrayALLCluster[$loginStdSlNo-1] == 1) {
			for($j = 9; $j < 12; $j++) {
				if($clusterZone[$j][0] == 1) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[3] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[3] = 2;
					else
						$loggedInStdCluster[3] = 1;
	
					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster Overall';
		}
		else if($rArrayALLCluster[$loginStdSlNo-1] == 2) {
			for($j = 9; $j < 12; $j++) {
				if($clusterZone[$j][0] == 2) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[3] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[3] = 2;
					else
						$loggedInStdCluster[3] = 1;
	
					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster Overall';
		}
		else {
			for($j = 9; $j < 12; $j++) {
				if($clusterZone[$j][0] == 3) {
					$var3 = $clusterZone[$j][1];
					$var4 = $clusterZone[$j][2];
					
					if($var4 == 'GREEN')
						$loggedInStdCluster[3] = 3;
					else if($var4 == 'YELLOW')
						$loggedInStdCluster[3] = 2;
					else
						$loggedInStdCluster[3] = 1;

					break;
				}
			}
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Cluster Overall';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayALL[$loginStdSlNo-1] / $rArrayALLCluster[$totalNoOfStds + $rArrayALLCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';

		$_SESSION['overAllPerformance'] = $var;
		
		//$loggedInStdCluster[3] = $rArrayALLCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */

	/* ************************************************ Basic Suggestions on Marks ************************************************ */
		if(!($marksPresence[0])) {
			if($loggedInStdCluster[3] == 3) {
				$sugg2[$sugg2Counter++] = 'You are performing very <font color="green"><strong>good overall</strong></font>. Chances of getting better IA-1 marks are high';
			}
			
			else if ($loggedInStdCluster[3] == 2) {
				$sugg2[$sugg2Counter++] = 'You are performing <font color="yellow"><strong>moderately well overall</strong></font>. Need to spend some time to attain better IA-1 Marks';
			}
			
			else {
				$sugg2[$sugg2Counter++] = 'You are performing <font color="red"><strong>poor overall</strong></font>. You need to significantly improve reading habits';
			}
		}
		
		else {
			if($loggedInStdCluster[3] == 1) {
				//if()
			}
		}
		
		//echo 'Sugg2 : '.$sugg2.'<br />';
	/* **************************************************************************************************************************** */
	
	/* ************************************************ Suggestions based on Topics *********************************************** */
		/*$sql = "SELECT * FROM studenttopicdist WHERE usn = '$loginUsn' ORDER BY courseid";
		$mydata = mysql_query($sql,$con);
		
		$sql = "SELECT * FROM topiccoverage WHERE coverage != 1 ORDER BY courseid";
		$data = mysql_query($sql,$con);
		
		$var1 = array();
		$count1 = 0;
		while($res = mysql_fetch_array($mydata)) {
				$var1[$count1][0] = $res['courseid'];
				$var1[$count1][1] = $res['topic'];
				$var1[$count1][2] = $res['actsdf'];
				$var1[$count1][3] = $res['actsrlr'];
				$var1[$count1][4] = $res['actsvlr'];
				
				$count1++;
		}
		
		$var2 = array();
		$count2 = 0;
		while($res = mysql_fetch_array($data)) {
			$var2[$count2][0] = $res['courseid'];
			$var2[$count2][1] = $res['topic'];
			$var2[$count2][2] = $res['deficulty'];
			
			$count2++;
		}
		
		for($i = 0; $i < $count2; $i++) {
			for($j = 0; $j < $count1; $j++) {		
				if( ($var1[$i][0] == $var2[$j][0]) && ($var1[$i][1] == $var2[$j][1]) ) {
					$var1[$i][5] = $var2[$j][2];
					break;
				}
			}
		}
		
		for($i = 0; $i < $count1; $i++) {
			for($j = 0; $j < 6; $j++)
				echo $var1[$i][$j].'<br />';
			echo '<br />';
		}
		
		$diff1DF = 0;
		$diff1RLR = 0;
		$diff1VLR = 0;
		$diff1All = 0;
		
		$diff2DF = 0;
		$diff2RLR = 0;
		$diff2VLR = 0;
		$diff2All = 0;
		
		$diff3DF = 0;
		$diff3RLR = 0;
		$diff3VLR = 0;
		$diff3All = 0;
		
		for($i = 0; $i < $count2; $i++) {
			if($var1[$i][5] == 1) {
				$diff1DF += $var1[$i][2];
				$diff1RLR += $var1[$i][3];
				$diff1VLR += $var1[$i][4];
				
				$diff1All += $diff1DF + $diff1RLR + $diff1VLR;
			}
			else if($var1[$i][5] == 2) {
				$diff2DF += $var1[$i][2];
				$diff2RLR += $var1[$i][3];
				$diff2VLR += $var1[$i][4];
				
				$diff2All += $diff2DF + $diff2RLR + $diff2VLR;
			}
			else if($var1[$i][5] == 3) {
				$diff3DF += $var1[$i][2];
				$diff3RLR += $var1[$i][3];
				$diff3VLR += $var1[$i][4];
				
				$diff3All += $diff3DF + $diff3RLR + $diff3VLR;
			}
		}
		
		echo '$diff1All : '.$diff1All.'<br />';
		echo '$diff2All : '.$diff2All.'<br />';
		echo '$diff3All : '.$diff3All.'<br />';*/
		
		/* Consider Std's performance in DF, RLR and VLR too... Coding for this part is remaining */
		/* ************************************************************************************** */
			/*if( ($diff1All > $diff2All) || ($diff1All > $diff3All) ) { */
		/* ************************************************************************************** */
			/*$sugg2[$sugg2Counter++] = 'You Are <font color="red"><strong>Very Slow Learner</strong></font>. Please <strong>Improve</strong> Your Grasping Ability';
		}
		
		else if ($diff2All > $diff3All) {
			$sugg2[$sugg2Counter++] = 'You Are Doing Good, But Try To <strong>Improve</strong> Your Learning To Obtain Best Grades';
		}
		
		else {
			$sugg2[$sugg2Counter++] = 'You Are Doing <font color="green"><strong>Great</strong>. You Have <strong>Better Chances</strong> Of Getting Best Grade';
		}*/
	/* **************************************************************************************************************************** */
	
	/* ***************************************** Top Performing Students in all Platforms ***************************************** */
		$dt=array_search(max($rArrayDF), $rArrayDF);
		$dt=$dt+1;
		if(strlen($dt)==1) {
			$var5 = "Top performer in DF :" ."2SD12CS00".$dt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		else if(strlen($dt)==2) {
			$var5 = "Top performer in DF :" ."2SD12CS0".$dt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		else {
			$var5 = "Top performer in DF :" ."2SD12CS".$dt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		
		$rt=array_search(max($rArrayRLR), $rArrayRLR);
		$rt=$rt+1;
		if(strlen($rt)==1) {
			$var5 = "Top performer in RLR :" ."2SD12CS00".$rt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		else if(strlen($rt)==2) {
			$var5 = "Top performer in RLR :" ."2SD12CS0".$rt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		else {
			$var5 = "Top performer in RLR :" ."2SD12CS".$rt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		
		
		$vt=array_search(max($rArrayVLR), $rArrayVLR);
		$vt=$vt+1;
		if(strlen($vt)==1) {
			$var5 = "Top performer in VLR :" ."2SD12CS00".$vt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		else if(strlen($vt)==2) {
			$var5 = "Top performer in VLR :" ."2SD12CS0".$vt;
			$sugg2[$sugg2Counter++] = $var5;
		}
		else {
			$var5 = "Top performer in VLR :" ."2SD12CS".$vt;
			$sugg2[$sugg2Counter++] = $var5;
		}
	/* **************************************************************************************************************************** */
	
	$_SESSION['sugg'] = $arr;
	$_SESSION['suggCount'] = $arrCount;
	$_SESSION['sugg2'] = $sugg2;
	$_SESSION['sugg2Counter'] = $sugg2Counter;
?>