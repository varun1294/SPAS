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
	$$totalNoOfStds = $_SESSION['totalNoOfStds'];
	
	echo 'DF : '.$rArrayDFCluster[$loginStdSlNo-1]; echo ' Std Act : '.$rArrayDF[$loginStdSlNo-1].'<br />';
	echo 'VLR : '.$rArrayVLRCluster[$loginStdSlNo-1]; echo ' Std Act : '.$rArrayVLR[$loginStdSlNo-1].'<br />';
	echo 'RLR : '.$rArrayRLRCluster[$loginStdSlNo-1]; echo ' Std Act : '.$rArrayRLR[$loginStdSlNo-1].'<br />';
	
	$arr = array();
	
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
	/* **************************************************************************************************************************** */
	
	$_SESSION['sugg'] = $arr;
	$_SESSION['suggCount'] = $arrCount;
?>