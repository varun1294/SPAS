<?php
	
	if(!isset($_SESSION)) { 
		session_start(); 
	}
	
	$loginUsn = $_SESSION['loginUsn'];
	$month = "2016-01";
	$loginName = 	$_SESSION['loginName'];
	
	/* Exam Dates */
	$ia1ExamDate = 28;
	$ia2ExamDate = 56;
	$ia3ExamDate = 84;
	$eseExamDate = 112;
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("SPAS",$con);
	
	$sql = "SELECT COUNT(DISTINCT usn) FROM activity";
	
	$mydata = mysql_query($sql,$con);
	$res = mysql_fetch_array($mydata);
	
	$totalNoOfStds = $res['COUNT(DISTINCT usn)'];
	
	/* Due to some reason below code makes the file to go to infinite loop. Should figure out why */
	/* Fixed this... Should still check for all 16 weeks */
	/* ****************************************************************************************** */
	$sql = "SELECT count(*) FROM activity WHERE act='' and usn='2sd12cs001'";
	$mydata = mysql_query($sql,$con);
	$res = mysql_fetch_array($mydata);
	$totalDaysSinceBenOfSem = $res['count(*)'];
	$totalDaysSinceBenOfSem = 112 - $totalDaysSinceBenOfSem;
	
	echo '$totalDaysSinceBenOfSem : '.$totalDaysSinceBenOfSem.'<br />';
	if($totalDaysSinceBenOfSem >= 1 && $totalDaysSinceBenOfSem <= 7)
		$semCurrentWeek = 1;
	else if($totalDaysSinceBenOfSem >= 8 && $totalDaysSinceBenOfSem <= 14)
		$semCurrentWeek = 2;
	else if($totalDaysSinceBenOfSem >= 15 && $totalDaysSinceBenOfSem <= 21)
		$semCurrentWeek = 3;
	else if($totalDaysSinceBenOfSem >= 22 && $totalDaysSinceBenOfSem <= 28)
		$semCurrentWeek = 4;
	else if($totalDaysSinceBenOfSem >= 29 && $totalDaysSinceBenOfSem <= 35)
		$semCurrentWeek = 5;
	else if($totalDaysSinceBenOfSem >= 36 && $totalDaysSinceBenOfSem <= 42)
		$semCurrentWeek = 6;
	else if($totalDaysSinceBenOfSem >= 43 && $totalDaysSinceBenOfSem <= 49)
		$semCurrentWeek = 7;
	else if($totalDaysSinceBenOfSem >= 50 && $totalDaysSinceBenOfSem <= 56)
		$semCurrentWeek = 8;
	else if($totalDaysSinceBenOfSem >= 57 && $totalDaysSinceBenOfSem <= 63)
		$semCurrentWeek = 9;
	else if($totalDaysSinceBenOfSem >= 64 && $totalDaysSinceBenOfSem <= 70)
		$semCurrentWeek = 10;
	else if($totalDaysSinceBenOfSem >= 71 && $totalDaysSinceBenOfSem <= 77)
		$semCurrentWeek = 11;
	else if($totalDaysSinceBenOfSem >= 78 && $totalDaysSinceBenOfSem <= 84)
		$semCurrentWeek = 12;
	else if($totalDaysSinceBenOfSem >= 85 && $totalDaysSinceBenOfSem <= 91)
		$semCurrentWeek = 13;
	else if($totalDaysSinceBenOfSem >= 92 && $totalDaysSinceBenOfSem <= 98)
		$semCurrentWeek = 14;
	else if($totalDaysSinceBenOfSem >= 99 && $totalDaysSinceBenOfSem <= 105)
		$semCurrentWeek = 15;
	else
		$semCurrentWeek = 16;
		
	echo '$semCurrentWeek : '.$semCurrentWeek.'<br />';
	/* ****************************************************************************************** */
		
	$semCurrentWeek = 1;
	
	$loginStdSlNo = $_SESSION['loginStdSlNo'];
	
	echo 'loginStdSlNo : '.$loginStdSlNo.'<br />';
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());

	mysql_select_db("discussionforum",$con);
	
	/* ******************************************** Read R-Results *********************************************** */
		/* **** Read rAllStdAllActs **** */
			$allStdsTotalAct = 0;
			$rArray = array();
			$file = fopen("RScripts/rAllStdAllActs.txt","r");
			while(! feof($file)) {
				$rArray[$allStdsTotalAct++] = fgets($file);
			}
			fclose($file);
			$allStdsTotalAct--;
		/* **************************** */
		
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
		
		/* **** Read DF-Clusters **** */
			$dfCluster = 0;
			$file = fopen("RScripts/DF_Clusters.txt","r");
			while(! feof($file)) {
				$rArrayDFCluster[$dfCluster++] = fgets($file);
			}
			fclose($file);
			$dfCluster--;
		/* ************************** */
		
		/* **** Read RLR-Clusters **** */
			$rlrCluster = 0;
			$file = fopen("RScripts/RLR_Clusters.txt","r");
			while(! feof($file)) {
				$rArrayRLRCluster[$rlrCluster++] = fgets($file);
			}
			fclose($file);
			$rlrCluster--;
		/* ************************** */
		
		/* **** Read VLR-Clusters **** */
			$vlrCluster = 0;
			$file = fopen("RScripts/VLR_Clusters.txt","r");
			while(! feof($file)) {
				$rArrayVLRCluster[$vlrCluster++] = fgets($file);
			}
			fclose($file);
			$vlrCluster--;
		/* ************************** */
		
		/* **** Read ALL-Clusters **** */
			$allCluster = 0;
			$file = fopen("RScripts/ALL_Clusters.txt","r");
			while(! feof($file)) {
				$rArrayALLCluster[$allCluster++] = fgets($file);
			}
			fclose($file);
			$allCluster--;
		/* ************************** */
		
		/* **** Read rAllActs **** */
			$allAct = 0;
			$file = fopen("RScripts/rAllActs.txt","r");
			while(! feof($file)) {
				$rArrayALL[$allAct++] = fgets($file);
			}
			fclose($file);
			$allAct--;
		/* ***************************** */
		
		/*echo 'DF : <br />';
		print_r($rArrayDFCluster);
		echo '<br /> RLR : <br />';
		print_r($rArrayRLRCluster);
		echo '<br /> VLR : <br />';
		print_r($rArrayVLRCluster);*/
		
	/* ************************************************************************************************************** */
	
	/* Point to logged-in std's activity in R-Results */
	$count = 1;
	$stdPtrInFile = 0;
	while(true) {
		if($count == $loginStdSlNo)
			break;
		else {
			if($rArray[$stdPtrInFile][0] == "Y") {
				$count++;
				$stdPtrInFile++;
			}
			else
				$stdPtrInFile++;
		}
	}
	//$stdPtrInFile++;
	//echo 'stdPtrInFile : '.$stdPtrInFile.'<br />';
	/* ********************************************** */
	
	/* Point to current week in logged-in std's R-Results */
	$count = 1;									/* *********************************************** */
	$stdWeeklyPtrInFile = $stdPtrInFile;		/* Should be tested for more than one week of data */
	while(true) {								/* *********************************************** */
		if($count == $semCurrentWeek)
			break;
		else {
			$count2 = 0;
			while($count2 < 7) {
				if($rArray[$stdWeeklyPtrInFile] == "X") {
					$stdWeeklyPtrInFile++;
					$count2++;
				}
			}
			$count++;
		}
	}
	//$stdWeeklyPtrInFile++;
	//echo 'stdWeeklyPtrInFile : '.$stdWeeklyPtrInFile.'<br />';
	/* ************************************************** */
	
	/* Count total weekly logged-in std's activity in all 3 platforms */
	$totalWeeklyActDF = 0;
	$totalWeeklyActRLR = 0;
	$totalWeeklyActVLR = 0;
	
	for($i = $stdWeeklyPtrInFile, $count=0, $cond = true; $cond; $i++) {
		//echo 'Count : '.$count.'<br />';
		if($i >= $allStdsTotalAct)
			$cond = false;
		if($count == 7)
			$cond = false;
		
		//echo $rArray[$i][0].'<br />';
		if((!strcmp($rArray[$i][0],"X"))) {
			//echo $rArray[$i].'<br />';
			$count++;
		}
		else {
			//print_r($rArray[$i]); echo '<br /><br /><br />';
			$choice = findPlatform($rArray[$i]);
			switch($choice) {
				case "D" :	$len = strlen($rArray[$i])-2;
							for($k = 2; $rArray[$i][$k]!="A"; $k++);
							$k++;
							$j = 1;
							$sum = 0;
							while($k < $len) {
								$sum = $sum + ((intval($rArray[$i][$len-1])) * $j);
								$j = $j * 10;
								$len--;
							}
							$totalWeeklyActDF += $sum;
							break;
							
				case "R" :	$len = strlen($rArray[$i])-2;
							for($k = 2; $rArray[$i][$k]!="A"; $k++);
							$k++;
							$j = 1;
							$sum = 0;
							while($k < $len) {
								$sum = $sum + ((intval($rArray[$i][$len-1])) * $j);
								$j = $j * 10;
								$len--;
							}
							$totalWeeklyActRLR += $sum;
							break;
							
				case "V" :	$len = strlen($rArray[$i])-2;
							for($k = 2; $rArray[$i][$k]!="A"; $k++);
							$k++;
							$j = 1;
							$sum = 0;
							while($k < $len) {
								$sum = $sum + ((intval($rArray[$i][$len-1])) * $j);
								$j = $j * 10;
								$len--;
							}
							$totalWeeklyActVLR += $sum;
							break;
			}
		}
	}
	
	$totalWeeklyAct = $totalWeeklyActDF + $totalWeeklyActRLR + $totalWeeklyActVLR;
	
	/*echo '<br />totalWeeklyActDF : '.$totalWeeklyActDF.'<br />';
	echo '<br />totalWeeklyActRLR : '.$totalWeeklyActRLR.'<br />';
	echo '<br />totalWeeklyActVLR : '.$totalWeeklyActVLR.'<br />';
	echo '<br />totalWeeklyAct : '.$totalWeeklyAct.'<br />';*/
	/* ******************************************************* */
	
	/*echo 'stdPtrInFile : '.$stdPtrInFile.'<br />';
	echo 'count : '.$count.'<br />';*/
	
	//echo $totalDF.'<br />';
	
	/* To calculate logged in student's total assignments and % days remaining*/
	
	/* ************************************************************************************************************************************** */
	/* ************************************************************************************************************************************** */
	
	mysql_select_db("spas",$con);
	
	/*$query = "SELECT count(*) FROM std_course, assignment WHERE '$loginUsn' = std_course.usn and std_course.course_id = assignment.course_id";
	$data = mysql_query($query,$con);
	$res = mysql_fetch_array($data);
	$activeAssigns = $res['count(*)'];
	
	$query = "SELECT lastDate, startDate FROM std_course, assignment WHERE '$loginUsn' = std_course.usn and std_course.course_id = assignment.course_id";
	$data = mysql_query($query,$con);
	$endTimeStamp = array(100);
	$startTimeStamp = array(100);
	
	$i=0;
	while($res = mysql_fetch_array($data)) {
		$startTimeStamp[$i] = strtotime($res['startDate']);
		$endTimeStamp[$i++] = strtotime($res['lastDate']);
	}
	
	$now = new DateTime();
	$todayDate = strtotime($now->format('Y-m-d'));
	
	$activeAssigns = 2;
	
	$dummyVar1 = array($activeAssigns);
	$dummyVar2 = array($activeAssigns);
	$assignDaysRemPer = array($activeAssigns);
	$assignDaysRem = array($activeAssigns);
	$barColor = array($activeAssigns);*/
	
	/*for($i = 0; $i < $activeAssigns; $i++) {
		
		$timeDiff = abs($endTimeStamp[$i] - $todayDate);
		$numberDays = $timeDiff/86400;  // 86400 seconds in one day
		$dummyVar1[$i] = intval($numberDays);
		
		$timeDiff = abs($startTimeStamp[$i] - $endTimeStamp[$i]);
		$numberDays = $timeDiff/86400;  // 86400 seconds in one day
		$dummyVar2[$i] = intval($numberDays);
		
		$assignDaysRemPer[$i] = (100 * $dummyVar1[$i]) / $dummyVar2[$i];
		$assignDaysRemPer[$i] = round($assignDaysRemPer[$i],0);
		
		if($assignDaysRemPer[$i] > 0 && $assignDaysRemPer[$i] <= 30)
			$barColor[$i] = "danger";
		else if($assignDaysRemPer[$i] > 30 && $assignDaysRemPer[$i] <= 60)
			$barColor[$i] = "warning";
		else if($assignDaysRemPer[$i] > 60 && $assignDaysRemPer[$i] <= 90)
			$barColor[$i] = "complete";
		else
			$barColor[$i] = "success";
			
		$assignDaysRem[$i] = $dummyVar1[$i];
	}*/
	//print_r($assignDaysRemPer);
	/* ************************************************************************************************************************************** */
	/* ************************************************************************************************************************************** */
	
	$query = "SELECT * FROM notifications";
	$data = mysql_query($query,$con);
	$i = 0;
	$notification = array(50);
	$notificationCount = 0;
	
	while($res = mysql_fetch_array($data)) {
		$notification[$i++] = $res['notification'];
		$notificationCount++;
	}

	/* *************************** Load the IA and ESE Marks of all students *************************** */
	/* ************************************************************************************************* */
		$query = "SELECT distinct type,marks FROM marks WHERE usn = '$loginUsn'";
		$data = mysql_query($query,$con);
		
		$ia1Marks = array();
		$ia2Marks = array();
		$ia3Marks = array();
		$eseMarks = array();
		
		$marksPresence = array();
		for($s = 0; $s < 4; $s++)
			$marksPresence[$s] = false;
		
		$marksCounter = 0;
		while($res = mysql_fetch_array($data)) {
			if($res['type'] == 'ia1' && $res['marks'] != 0)
				$marksPresence[0] = true;
			else if($res['type'] == 'ia2' && $res['marks'] != 0)
				$marksPresence[1] = true;
			else if($res['type'] == 'ia3' && $res['marks'] != 0)
				$marksPresence[2] = true;
			else if($res['type'] == 'ese' && $res['marks'] != 0)
				$marksPresence[3] = true;
		}
	/* ************************************************************************************************* */
	if(!isset($_SESSION)) 
    { 
        session_start(); 
    }
	
	/*$_SESSION['maxDFTopic'] = $maxDFTopic;
	$_SESSION['maxRLRTopic'] = $maxRLRTopic;
	$_SESSION['maxVLRTopic'] = $maxVLRTopic;
	$_SESSION['maxTopicCount'] = $maxTopicCount;*/
	
	/*$_SESSION['totalDF'] = $totalDF;*/
	$_SESSION['loginUsn'] = $loginUsn;
	$_SESSION['stdPtrInFile'] = $stdPtrInFile;
	$_SESSION['rArray'] = $rArray;
	$_SESSION['rArrayDFCluster'] = $rArrayDFCluster;
	$_SESSION['rArrayVLRCluster'] = $rArrayVLRCluster;
	$_SESSION['rArrayRLRCluster'] = $rArrayRLRCluster;
	$_SESSION['rArrayDF'] = $rArrayDF;
	$_SESSION['rArrayVLR'] = $rArrayVLR;
	$_SESSION['rArrayRLR'] = $rArrayRLR;
	$_SESSION['loginStdSlNo'] = $loginStdSlNo;
	$_SESSION['rArrayALLCluster'] = $rArrayALLCluster;
	$_SESSION['rArrayALL'] = $rArrayALL;
	
	$_SESSION['totalWeeklyAct'] = $totalWeeklyAct;
	$_SESSION['totalWeeklyActDF'] = $totalWeeklyActDF;
	$_SESSION['totalWeeklyActRLR'] = $totalWeeklyActRLR;
	$_SESSION['totalWeeklyActVLR'] = $totalWeeklyActVLR;
	/*$_SESSION['activeAssigns'] = $activeAssigns;
	$_SESSION['assignDaysRemPer'] = $assignDaysRemPer;
	$_SESSION['barColor'] = $barColor;*/
	$_SESSION['loginName']= $loginName;
	$_SESSION['notification'] = $notification;
	$_SESSION['notificationCount'] = $notificationCount;
	$_SESSION['totalNoOfStds'] = $totalNoOfStds;
	
	$_SESSION['ia1Marks'] = $ia1Marks;
	$_SESSION['ia2Marks'] = $ia2Marks;
	$_SESSION['ia3Marks'] = $ia3Marks;
	$_SESSION['eseMarks'] = $eseMarks;
	$_SESSION['marksCounterarks'] = $marksCounter;
	$_SESSION['marksPresence'] = $marksPresence;
	
	$_SESSION['ia1ExamDate'] = $ia1ExamDate;
	$_SESSION['ia2ExamDate'] = $ia2ExamDate;
	$_SESSION['ia3ExamDate'] = $ia3ExamDate;
	$_SESSION['eseExamDate'] = $eseExamDate;
	
	$_SESSION['totalDaysSinceBenOfSem'] = $totalDaysSinceBenOfSem;

	function findPlatform($str) {
		$len = strlen($str) - 2;
		for($i = 2; $i < $len; $i++) {
			if($str[$i] == "V")
				return "V";
			if($str[$i] == "D")
				return "D";
			if($str[$i] == "R")
				return "R";
		}
	}
?>