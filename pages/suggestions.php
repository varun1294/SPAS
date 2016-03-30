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
	
	/*$arr[$arrCount++] = 'You are in Cluster '.$rArrayDFCluster[$loginStdSlNo-1].'of DF';
	$arr[$arrCount++] = 'You are in Cluster '.$rArrayRLRCluster[$loginStdSlNo-1].'of RLR';
	$arr[$arrCount++] = 'You are in Cluster '.$rArrayVLRCluster[$loginStdSlNo-1].'of VLR';*/
	
	/* ************************************************* Basic Suggestions in DF ************************************************** */
		$var = 'You are in ';
		if($rArrayDFCluster[$loginStdSlNo-1] == 1)
			$var = $var.'<font color="red"><strong>UNSAFE</strong></font> Cluster of DF';
		else if($rArrayDFCluster[$loginStdSlNo-1] == 2)
			$var = $var.'<font color="yellow"><strong>MODERATELY SAFE</strong></font> Cluster of DF';
		else
			$var = $var.'<font color="green"><strong>SAFE</strong></font> Cluster of DF';
		$var = $var.' Performing ';
		
		$dummy = $rArrayDF[$loginStdSlNo-1] / $rArrayDFCluster[$totalNoOfStds + $rArrayDFCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';
		
		$arr[$arrCount++] = $var;
		
		$loggedInStdCluster[0] = $rArrayDFCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */
	
	/* ************************************************* Basic Suggestions in RLR ************************************************* */
		$var = 'You are in ';
		if($rArrayRLRCluster[$loginStdSlNo-1] == 1)
			$var = $var.'<font color="red"><strong>UNSAFE</strong></font> Cluster of RLR';
		else if($rArrayRLRCluster[$loginStdSlNo-1] == 2)
			$var = $var.'<font color="yellow"><strong>MODERATELY SAFE</strong></font> Cluster of RLR';
		else
			$var = $var.'<font color="green"><strong>SAFE</strong></font> Cluster of RLR';
		$var = $var.' Performing ';
		
		$dummy = $rArrayRLR[$loginStdSlNo-1] / $rArrayRLRCluster[$totalNoOfStds + $rArrayRLRCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';
		
		$arr[$arrCount++] = $var;
		
		$loggedInStdCluster[1] = $rArrayRLRCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */
	
	/* ************************************************* Basic Suggestions in RLR ************************************************* */
		$var = 'You are in ';
		if($rArrayVLRCluster[$loginStdSlNo-1] == 1)
			$var = $var.'<font color="red"><strong>UNSAFE</strong></font> Cluster of VLR';
		else if($rArrayVLRCluster[$loginStdSlNo-1] == 2)
			$var = $var.'<font color="yellow"><strong>MODERATELY SAFE</strong></font> Cluster of VLR';
		else
			$var = $var.'<font color="green"><strong>SAFE</strong></font> Cluster of VLR';
		$var = $var.' Performing ';
		
		$dummy = $rArrayRLR[$loginStdSlNo-1] / $rArrayVLRCluster[$totalNoOfStds + $rArrayVLRCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';
		
		$arr[$arrCount++] = $var;
		
		$loggedInStdCluster[2] = $rArrayVLRCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */
	
	/* ************************************************ Basic Suggestions Overall ************************************************* */
		$var = 'You are in ';
		if($rArrayALLCluster[$loginStdSlNo-1] == 1)
			$var = $var.'<font color="red"><strong>UNSAFE</strong></font> Cluster';
		else if($rArrayALLCluster[$loginStdSlNo-1] == 2)
			$var = $var.'<font color="yellow"><strong>MODERATELY SAFE</strong></font> Cluster';
		else
			$var = $var.'<font color="green"><strong>SAFE</strong></font> Cluster';
		$var = $var.' Performing ';
		
		$dummy = $rArrayALL[$loginStdSlNo-1] / $rArrayALLCluster[$totalNoOfStds + $rArrayALLCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.$dummy.'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.$dummy.'</strong> times POOR than your cluster buddies';

		$_SESSION['overAllPerformance'] = $var;
		
		//echo 'Var : '.$var.'<br />';
		$loggedInStdCluster[3] = $rArrayALLCluster[$loginStdSlNo-1];
		//echo 'loggedInStdCluster[3]'.$loggedInStdCluster[3].'<br />';
	/* **************************************************************************************************************************** */
	
	$sugg2 = array();
	$sugg2Counter = 0;
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
		$sql = "SELECT * FROM studenttopicdist WHERE usn = '$loginUsn' ORDER BY courseid";
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
				
				/*echo $var1[$count1][0].'<br />';
				echo $var1[$count1][1].'<br />';
				echo $var1[$count1][2].'<br />';
				echo $var1[$count1][3].'<br />';
				echo $var1[$count1][4].'<br /><br />';*/
				
				$count1++;
		}
		
		$var2 = array();
		$count2 = 0;
		while($res = mysql_fetch_array($data)) {
			$var2[$count2][0] = $res['courseid'];
			$var2[$count2][1] = $res['topic'];
			$var2[$count2][2] = $res['deficulty'];
			
			/*echo $var2[$count2][0].'<br />';
			echo $var2[$count2][1].'<br />';
			echo $var2[$count2][2].'<br /><br />';*/
			
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
		
		/*for($i = 0; $i < $count1; $i++) {
			for($j = 0; $j < 6; $j++)
				echo $var1[$i][$j].'<br />';
			echo '<br />';
		}*/
		
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
		
		/* Consider Std's performance in DF, RLR and VLR too... Coding for this part is remaining */
		/* ************************************************************************************** */
		if( ($diff1All > $diff2All) || ($diff1All > $diff3All) ) {
		/* ************************************************************************************** */
			$sugg2[$sugg2Counter++] = 'You Are <font color="red"><strong>Very Slow Learner</strong></font>. Please <strong>Improve</strong> Your Grasping Ability';
		}
		
		else if ($diff2All > $diff3All) {
			$sugg2[$sugg2Counter++] = 'You Are Doing Good, But Try To <strong>Improve</strong> Your Learning To Obtain Best Grades';
		}
		
		else {
			$sugg2[$sugg2Counter++] = 'You Are Doing <font color="green"><strong>Great</strong>. You Have <strong>Better Chances</strong> Of Getting Best Grade';
		}
	/* **************************************************************************************************************************** */
	
	$_SESSION['sugg'] = $arr;
	$_SESSION['suggCount'] = $arrCount;
	$_SESSION['sugg2'] = $sugg2;
	$_SESSION['sugg2Counter'] = $sugg2Counter;
?>