<?php

	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
	
	$con = $_SESSION['con'];
	
	//include("init.php");
	
	/* Marks Threshold */
	/* ********************************* */
	$minMarksToPass = 8;
	$midRangeMarks = array();
	
	$midRangeMarks[0] = 9;
	$midRangeMarks[1] = 15;
	
	$significantMarksImproveOffset = 3;
	/* ********************************* */
	
	/* Exam Dates */
	/* ****************************************** */
		$_SESSION['ia1ExamDate'] = $ia1ExamDate;
		$_SESSION['ia2ExamDate'] = $ia2ExamDate;
		$_SESSION['ia3ExamDate'] = $ia3ExamDate;
		$_SESSION['eseExamDate'] = $eseExamDate;
	/* ****************************************** */
	
	$totalDaysSinceBenOfSem = $_SESSION['totalDaysSinceBenOfSem'];
	//$totalDaysSinceBenOfSem = 40;
	
	$loginUsn = $_SESSION['loginUsn'];
	$rArrayDFCluster = $_SESSION['rArrayDFCluster'];
	$rArrayVLRCluster = $_SESSION['rArrayVLRCluster'];
	$rArrayRLRCluster = $_SESSION['rArrayRLRCluster'];
	$rArrayDF = $_SESSION['rArrayDF'];
	$rArrayVLR = $_SESSION['rArrayVLR'];
	$rArrayRLR = $_SESSION['rArrayRLR'];
	$loginStdSlNo = $_SESSION['loginStdSlNo'];
	$totalNoOfStds = $_SESSION['totalNoOfStds'];
	
	/*$ia1Marks = $_SESSION['ia1Marks'];
	$ia2Marks = $_SESSION['ia2Marks'];
	$ia3Marks = $_SESSION['ia3Marks'];
	$eseMarks = $_SESSION['eseMarks'];*/
	$marksCounterarks = $_SESSION['marksCounterarks'];
	$rArrayALLCluster = $_SESSION['rArrayALLCluster'];
	$rArrayALL = $_SESSION['rArrayALL'];
	$marksPresence = $_SESSION['marksPresence'];
	
	$arr = array();
	
	$loggedInStdCluster = array();
	
	$arrCount = 0;
	
	/*$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("spas",$con);*/
	
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of DF';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of DF';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of DF';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayDF[$loginStdSlNo-1] / $rArrayDFCluster[$totalNoOfStds + $rArrayDFCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.(1-$dummy).'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.(1-$dummy).'</strong> times POOR than your cluster buddies';
		
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of RLR';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of RLR';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of RLR';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayRLR[$loginStdSlNo-1] / $rArrayRLRCluster[$totalNoOfStds + $rArrayRLRCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.(1-$dummy).'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.(1-$dummy).'</strong> times POOR than your cluster buddies';
		
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of VLR';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of VLR';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Zone of VLR';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayRLR[$loginStdSlNo-1] / $rArrayVLRCluster[$totalNoOfStds + $rArrayVLRCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.(1-$dummy).'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.(1-$dummy).'</strong> times POOR than your cluster buddies';
		
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Overall Zone';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Overall Zone';
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
			$var = $var.'<font color="'.$var4.'"><strong>'.$var3.'</strong></font> Overall Zone';
		}
		$var = $var.' Performing ';
		
		$dummy = $rArrayALL[$loginStdSlNo-1] / $rArrayALLCluster[$totalNoOfStds + $rArrayALLCluster[$loginStdSlNo-1]-1];
		$dummy = round($dummy,4);
		
		if($dummy > 1)
			$var = $var.'<strong>'.(1-$dummy).'</strong> times BETTER than your cluster buddies';
		else
			$var = $var.'<strong>'.(1-$dummy).'</strong> times POOR than your cluster buddies';

		$arr[$arrCount++] = $var;
		//$loggedInStdCluster[3] = $rArrayALLCluster[$loginStdSlNo-1];
	/* **************************************************************************************************************************** */

	/* ************************************************ Basic Suggestions on Marks ************************************************ */
		$i = $loggedInStdCluster[0] + $loggedInStdCluster[1] + $loggedInStdCluster[2] + $loggedInStdCluster[3];
		
		if($i >= 10 && $i <=12)
			$currMarksCluster = 1;
		else if ($i >= 7 && $i <=9)
			$currMarksCluster = 2;
		else
			$currMarksCluster = 3;
		
		if(!($marksPresence[0])) {
			/* IA Marks not yet updated */
			//echo '$clusterSum : '.$i.'<br />';
			if($currMarksCluster == 1) {
				$sugg2[$sugg2Counter++] = 'You are performing very <font color="green"><strong>good overall</strong></font>. Chances of getting better IA-1 marks are high';
			}
			
			else if ($currMarksCluster = 2) {
				$sugg2[$sugg2Counter++] = 'You are performing <font color="yellow"><strong>moderately well overall</strong></font>. Need to spend some time to attain better IA-1 Marks';
			}
			
			else {
				$sugg2[$sugg2Counter++] = 'You are performing <font color="red"><strong>poor overall</strong></font>. You need to significantly improve reading habits';
			}
		}
		
		else {
			/* Only IA 1 marks are available */
			/* Display IA Marks only for 7 days from end of IA-1 */
			/*if($totalDaysSinceBenOfSem > $ia1ExamDate && $totalDaysSinceBenOfSem <= $ia1ExamDate+7)*/
			if($totalDaysSinceBenOfSem <= $ia1ExamDate+7)
				$displayIA1BasedSuggs = true;
			else
				$displayIA1BasedSuggs = false;
			
			$ia1Marks = array();
			for($i = 0, $courseid = 'CS1'; $i < 6; $i++,$courseid++) {
				$query = "SELECT marks FROM marks WHERE usn = '$loginUsn' and courseid = '$courseid' and type='ia1'";
				$mydata = mysql_query($query,$con);
					
				$res = mysql_fetch_array($mydata);
				$ia1Marks[$i] = $res['marks'];
			}
					
			$fail = 0;
			$failSubs = array();
					
			$midRangeSubs = array();
			$midRange = 0;
					
			$highRange = 0;
			for($i = 0; $i < 6; $i++) {
				if($ia1Marks[$i] < $minMarksToPass) {
					$failSubs[$fail++] = 'CS'.($i+1);
				}
				else if($ia1Marks[$i] >= $midRangeMarks[0] && $ia1Marks[$i] <= $midRangeMarks[1]) {
					$midRangeSubs[$midRange++] = 'CS'.($i+1);
				}
				else
					$highRange++;
			}
			
			if($displayIA1BasedSuggs) {
				if( ($marksPresence[0] == true) && ($marksPresence[1] == false) ) {
					/* Get IA Marks of logged in student of all subjects */
					
					/* Below suggestions are for students who are in good clusters */
					if($currMarksCluster == 1) {
						if($fail > 0) {
							$var = 'You are putting good efforts and yet failing in exam. <strong>Reconsider your study approach</strong> Concentrate on <strong>';
							for($i = 0; $i < $fail; $i++) {
								$var = $var.$failSubs[$i].' ';
							}
							$var = $var.'</strong>';
							$sugg2[$sugg2Counter++] = $var;
						}
						
						if($midRange > 0) {
							$var = 'You are putting good efforts, but your <strong>IA 1 Marks doesnt reflect your hard work</strong>. Try to Concentrate on <strong>';
							for($i = 0; $i < $midRange; $i++) {
								$var = $var.$midRangeSubs[$i].' ';
							}
							$var = $var.'</strong>';
							$sugg2[$sugg2Counter++] = $var;
						}
						
						if($fail == 0 && $midRange == 0) {
							$var = 'You are putting good efforts and getting good marks. Maintain the same progess to get best grades';
							$sugg2[$sugg2Counter++] = $var;
						}
					}
					
					/* Below suggestions are for students who are in avg clusters */
					if($currMarksCluster == 2) {
						if($fail > 0) {
							$var = 'You are putting half hearted efforts and failing in exam. <strong>Study more and </strong> Consult your faculty of <strong>';
							for($i = 0; $i < $fail; $i++) {
								$var = $var.$failSubs[$i].' ';
							}
							$var = $var.'</strong> and put in efforts to achieve better marks';
							$sugg2[$sugg2Counter++] = $var;
						}
						
						if($midRange > 0) {
							$var = 'Your marks are reflecting in your IA 1 Results. Half hearted efforts and average marks. Try to Concentrate on <strong>';
							for($i = 0; $i < $midRange; $i++) {
								$var = $var.$midRangeSubs[$i].' ';
							}
							$var = $var.'</strong> and spend some time in reading';
							$sugg2[$sugg2Counter++] = $var;
						}
						
						if($fail == 0 && $midRange == 0) {
							$var = 'You are putting average efforts and getting good marks!! <strong>Impressive</strong>';
							$sugg2[$sugg2Counter++] = $var;
						}
					}
					
					/* Below suggestions are for students who are in worse clusters */
					if($currMarksCluster == 3) {
						if($fail > 0) {
							$var = 'Your IA 1 Marks reflect your efforts. No efforts and no good marks. Consult your faculty on following subjects <strong>';
							for($i = 0; $i < $fail; $i++) {
								$var = $var.$failSubs[$i].' ';
							}
							$var = $var.'</strong> and study hard.';
							$sugg2[$sugg2Counter++] = $var;
						}
						
						if($midRange > 0) {
							$var = 'Your marks in IA 1 contradict with your results in following subjects ';
							for($i = 0; $i < $midRange; $i++) {
								$var = $var.$midRangeSubs[$i].' ';
							}
							$var = $var.'</strong> Great!';
							$sugg2[$sugg2Counter++] = $var;
						}
						
						if($fail == 0 && $midRange == 0) {
							$var = 'Looks like you are doing great with little amount of efforts!! <strong>Impressive</strong>';
							$sugg2[$sugg2Counter++] = $var;
						}
					}
				}
			}
			/* End of suggestions based on IA 1 */
			
			/* Its been more than 7 days since IA-1 got over. Stop commenting on IA-1 Marks */
			/* Start suggesting how to perform well in IA-2 */
			else {
				if($fail > 0) {
					$var = 'Remember you failed in some subject(s), Don\'t let that happen next time';
					$sugg2[$sugg2Counter++] = $var;
				}
				
				if($currMarksCluster == 1) {
					$var = 'You are currently performing good. ';
					if($fail > 0)
						$var = $var.'There is a chance that you perform better than last IA.';
					else if($midRange > 0)
						$var = $var.'There are chance of you getting scoring more in mid range subjects of last IA';
					else
						$var = $var.'Your IA-1 Performance will most likely repeat this time too!';
						
					$sugg2[$sugg2Counter++] = $var;
				}
				
				else if($currMarksCluster == 2) {
					$var = 'You are currently performing average. ';
					if($fail > 0)
						$var = $var.'There are chances that you will once again fail in one or more subjects. Improve your academics';
					else if($midRange > 0) {
						$var = $var.'You will most likely end up at the same marks as of IA-1';
					}
					else
						$var = $var.'Your awesome IA-1 performance will most likely to repeat if you put a bit more effort';
						
					$sugg2[$sugg2Counter++] = $var;
				}
				
				else {
					$var = 'You are currently performing poor. ';
					if($fail > 0)
						$var = $var.'You need to significantly improve your academic performance to have any hope of getting good grades';
					else if($midRange > 0)
						$var = $var.'You performed good in last IA but putting less effort. Dont be that confident this time';
					else
						$var = $var.'You did really great in last IA even though you put half hearted effort, Dont be that confident this time';
						
					$sugg2[$sugg2Counter++] = $var;
				}
			}
			
			/* IA-1 and IA-2 marks are available */
			if( ($marksPresence[0] == true) && ($marksPresence[1] == true) && ($marksPresence[2] == false) ) {
				if($totalDaysSinceBenOfSem <= $ia2ExamDate+7)
					$displayIA2BasedSuggs = true;
				else
					$displayIA2BasedSuggs = false;
				
				/* Get IA Marks of logged in student of all subjects */
				$ia1Marks = array();
				for($i = 0, $courseid = 'CS1'; $i < 6; $i++,$courseid++) {
					$query = "SELECT marks FROM marks WHERE usn = '$loginUsn' and courseid = '$courseid' and type='ia1'";
					$mydata = mysql_query($query,$con);
					
					$res = mysql_fetch_array($mydata);
					$ia1Marks[$i] = $res['marks'];
				}
				
				$ia2Marks = array();
				for($i = 0, $courseid = 'CS1'; $i < 6; $i++,$courseid++) {
					$query = "SELECT marks FROM marks WHERE usn = '$loginUsn' and courseid = '$courseid' and type='ia2'";
					$mydata = mysql_query($query,$con);
					
					$res = mysql_fetch_array($mydata);
					$ia2Marks[$i] = $res['marks'];
				}
				
				/* Get Fail, MidRange and HighRange Subjects of logged In student in IA 1 */
				$fail1 = 0;
				$failSubs1 = array();
				
				$midRangeSubs1 = array();
				$midRange1 = 0;
				
				$highRange1 = 0;
				for($i = 0; $i < 6; $i++) {
					if($ia1Marks[$i] < $minMarksToPass) {
						$failSubs1[$fail1++] = 'CS'.($i+1);
					}
					else if($ia1Marks[$i] >= $midRangeMarks[0] && $ia1Marks[$i] <= $midRangeMarks[1]) {
						$midRangeSubs1[$midRange1++] = 'CS'.($i+1);
					}
					else
						$highRange1++;
				}
				
				/* Get Fail, MidRange and HighRange Subjects of logged In student in IA 2 */
				$fail2 = 0;
				$failSubs2 = array();
				
				$midRangeSubs2 = array();
				$midRange2 = 0;
				
				$highRange2 = 0;
				for($i = 0; $i < 6; $i++) {
					if($ia2Marks[$i] < $minMarksToPass) {
						$failSubs2[$fail2++] = 'CS'.($i+1);
					}
					else if($ia2Marks[$i] >= $midRangeMarks[0] && $ia2Marks[$i] <= $midRangeMarks[1]) {
						$midRangeSubs2[$midRange2++] = 'CS'.($i+1);
					}
					else
						$highRange2++;
				}
				
				if($displayIA2BasedSuggs) {
					if($currMarksCluster == 1) {
						if($fail2 > 0) {
							$var = 'This is not acceptable, you are putting good efforts and still failing in some subjects.';
							$sugg2[$sugg2Counter++] = $var;
						}
					}
					
					/* Check Whether logged in student has failed a subject both in IA-1 & IA-2 */
					$failSubCounter = 0;
					$repeatedFailSub = array();
					/*print_r($failSubs1);
					echo '<br />';
					
					print_r($failSubs2);
					echo '<br />';*/
					for($i = 0; $i < $fail1; $i++) {
						for($j = 0; $j < $fail2; $j++) {
							if($failSubs1[$i] == $failSubs2[$j]) {
								$repeatedFailSub[$failSubCounter++] = $failSubs2[$i];
							}
						}
					}
					
					//echo 'failSubCounter : '.$failSubCounter.'<br />';
					if($failSubCounter > 0) {
						$var = 'You have failed twice in follwing subjects <strong>';
						for($i = 0; $i < $failSubCounter; $i++)
							$var = $var.$repeatedFailSub[$i].' ';
						$var = $var.'</strong>. You need to put some serious hard work in order to get through in these course(s)';
						$sugg2[$sugg2Counter++] = $var;
					}
					
					/* Check whether student has improved significant marks in any of the subjects */
					$improvedSubjects = array();
					$improvedSubjectsCounter = 0;
					for($i = 0; $i < 6; $i++) {
						if($ia2Marks[$i] >= ($ia1Marks[$i] + $significantMarksImproveOffset)) {
							$improvedSubjects[$improvedSubjectsCounter++] = 'CS'.($i+1);
						}
					}
					
					if($improvedSubjectsCounter > 0) {
						$var = 'You have improved your marks in following subjects <strong>';
						for($i = 0; $i < $improvedSubjectsCounter; $i++) {
							$var = $var.$improvedSubjects[$i].' ';
						}
						$var = $var.'</strong>. Good going!!';
						$sugg2[$sugg2Counter++] = $var;
					}
					
					/* Check whether the logged in student has more high range subjects in IA-2 than IA-1 */
					if($highRange1 < $highRange2) {
						$var = 'You have more high scoring subjects in IA-2 than IA-1';
						$sugg2[$sugg2Counter++] = $var;
					}
					
					/* Check whether the logged in student has scored less in IA-2 than IA-1 */
					$lessMarksSubs = array();
					$lessMarksCounter = 0;
					for($i = 0; $i < 6; $i++) {
						if($ia1Marks[$i] >= $ia2Marks[$i] + 2) {
							$lessMarksSubs[$lessMarksCounter++] = 'CS'.($i + 1);
						}
					}
					
					if($lessMarksCounter > 0) {
						$var = 'Looks like you got less marks in this IA than the last IA, in <strong>';
						for($i = 0; $i < $lessMarksCounter; $i++)
							$var = $var.$lessMarksSubs[$i].' ';
						$var = $var.'</strong>. Study these subject often.';
						$sugg2[$sugg2Counter++] = $var;
					}
				}
				
				/* Stop comments based on IA Marks */
				/* Now give suggestions on how to improve in IA-3 */
				else {
					
				}
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
	
	/* ********************************** Highest Concentrated Topic In Each Course ********************************** */
	/* *************************************************************************************************************** */
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
		
			
		/* To Select Topic Which Has MAXIMUM DF Activity On It */
					
		$sql = "SELECT courseid, topic 
				FROM studenttopicdist 
				WHERE actsdf =(
					SELECT max(actsdf) FROM studenttopicdist WHERE usn = '$loginUsn'
				)";
		
		$mydata = mysql_query($sql,$con);
		$res = mysql_fetch_array($mydata);
			
		$maxDFTopic[0] = $res['courseid'];
		$maxDFTopic[1] = $res['topic'];
			
		/* To Select Topic Which Has MAXIMUM RLR Activity On It */
		$sql = "SELECT courseid, topic 
				FROM studenttopicdist 
				WHERE actsrlr =(
					SELECT max(actsrlr) FROM studenttopicdist WHERE usn = '$loginUsn'
				)";

		$mydata = mysql_query($sql,$con);
		$res = mysql_fetch_array($mydata);
		
			$maxRLRTopic[0] = $res['courseid'];
			$maxRLRTopic[1] = $res['topic'];
			
		/* To Select Topic Which Has MAXIMUM VLR Activity On It */
		$sql = "SELECT courseid, topic 
				FROM studenttopicdist 
				WHERE actsvlr =(
					SELECT max(actsvlr) FROM studenttopicdist WHERE usn = '$loginUsn'
				)";

		$mydata = mysql_query($sql,$con);
		$res = mysql_fetch_array($mydata);
		
		$maxVLRTopic[0] = $res['courseid'];
		$maxVLRTopic[1] = $res['topic'];
		
		$maxTopicCount = $j;
		
		$sugg2[$sugg2Counter++] = 'Highly concentrated topic in DF : <font color="#74743A"><strong>'.$maxDFTopic[1].'</font></strong> of Chapter : <font color="#74743A"><strong>'.$maxDFTopic[0].'</strong></font>';					
		$sugg2[$sugg2Counter++] = 'Highly concentrated topic in RLR : <font color="#74743A"><strong>'.$maxRLRTopic[1].'</strong></font> of Chapter : <font color="#74743A"><strong>'.$maxRLRTopic[0].'</strong></font>';
		$sugg2[$sugg2Counter++] = 'Highly concentrated topic in VLR : <font color="#74743A"><strong>'.$maxVLRTopic[1].'</strong></font> of Chapter : <font color="#74743A"><strong>'.$maxVLRTopic[0].'</strong></font>';
		
		
		
	/* *************************************************************************************************************** */
	
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