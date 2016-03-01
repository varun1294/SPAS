<?php

	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
	
	//include("init.php");

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
	
	/*$arr[$arrCount++] = 'You are in Cluster '.$rArrayDFCluster[$loginStdSlNo-1].'of DF';
	$arr[$arrCount++] = 'You are in Cluster '.$rArrayRLRCluster[$loginStdSlNo-1].'of RLR';
	$arr[$arrCount++] = 'You are in Cluster '.$rArrayVLRCluster[$loginStdSlNo-1].'of VLR';*/
	
	/* ************************************************* Basic Suggestions in DF ************************************************** */
		$var = 'You are in ';
		if($rArrayDFCluster[$loginStdSlNo-1] == 3)
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
		if($rArrayRLRCluster[$loginStdSlNo-1] == 3)
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
		if($rArrayVLRCluster[$loginStdSlNo-1] == 3)
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
		
		echo 'Var : '.$var.'<br />';
		$loggedInStdCluster[3] = $rArrayALLCluster[$loginStdSlNo-1];
		echo 'loggedInStdCluster[3]'.$loggedInStdCluster[3].'<br />';
	/* **************************************************************************************************************************** */
	
	/* ************************************************ Basic Suggestions on Marks ************************************************ */
		if(!($marksPresence[0])) {
			if($loggedInStdCluster[3] == 3) {
				$sugg2 = 'You are performing very <font color="green"><strong>good overall</strong></font>. Chances of getting better IA-1 marks are high';
			}
			
			else if ($loggedInStdCluster[3] == 2) {
				$sugg2 = 'You are performing <font color="yellow"><strong>moderately well overall</strong></font>. Need to spend some time to attain better IA-1 Marks';
			}
			
			else {
				$sugg2 = 'You are performing <font color="red"><strong>poor overall</strong></font>. You need to significantly improve reading habits';
			}
		}
		
		else {
			if($loggedInStdCluster[3] == 1) {
				//if()
			}
		}
		
		echo 'Sugg2 : '.$sugg2.'<br />';
	/* **************************************************************************************************************************** */
	$_SESSION['sugg'] = $arr;
	$_SESSION['suggCount'] = $arrCount;
	$_SESSION['sugg2'] = $sugg2;
?>