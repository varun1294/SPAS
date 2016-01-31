<?php
	
	$loginUsn = "2sd12cs133";
	$month = "2016-01";
	$loginName = "Varun";
	$loginStdSlNo = 4;
	$semCurrentWeek = 1;
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("discussionforum",$con);
	
	/* Read R-Results */
	$allStdsTotalAct = 0;
	$rArray = array();
	$file = fopen("RScripts/rAllStdAllActs.txt","r");
	$i = 0;
	while(! feof($file)) {
		$rArray[$i++] = fgets($file);
		$allStdsTotalAct++;
	}
	fclose($file);
	$allStdsTotalAct--;
	/* ************** */
	
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
	echo 'stdPtrInFile : '.$stdPtrInFile.'<br />';
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
	echo 'stdWeeklyPtrInFile : '.$stdWeeklyPtrInFile.'<br />';
	/* ************************************************** */
	
	/* Count total logged-in std's activity in all 3 platforms */
	$totalWeeklyActDF = 0;
	$totalWeeklyActRLR = 0;
	$totalWeeklyActVLR = 0;
	
	for($i = $stdWeeklyPtrInFile, $count=0, $cond = true; $cond; $i++) {
		if($i >= $allStdsTotalAct)
			$cond = false;
		if($count == 7)
			$cond = false;
		
		if($rArray[$i] == "X")
			$count++;
		else {
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
	
	echo '<br />totalWeeklyActDF : '.$totalWeeklyActDF.'<br />';
	echo '<br />totalWeeklyActRLR : '.$totalWeeklyActRLR.'<br />';
	echo '<br />totalWeeklyActVLR : '.$totalWeeklyActVLR.'<br />';
	echo '<br />totalWeeklyAct : '.$totalWeeklyAct.'<br />';
	/* ******************************************************* */
	
	/*echo 'stdPtrInFile : '.$stdPtrInFile.'<br />';
	echo 'count : '.$count.'<br />';*/
	
	//echo $totalDF.'<br />';
	
	/* To calculate logged in student's total assignments and % days remaining*/
	
	/* ************************************************************************************************************************************** */
	/* ************************************************************************************************************************************** */
	
	mysql_select_db("spas",$con);
	
	$query = "SELECT count(*) FROM std_course, assignment WHERE '$loginUsn' = std_course.usn and std_course.course_id = assignment.course_id";
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
	$barColor = array($activeAssigns);
	
	for($i = 0; $i < $activeAssigns; $i++) {
		
		$timeDiff = abs($endTimeStamp[$i] - $todayDate);
		$numberDays = $timeDiff/86400;  // 86400 seconds in one day
		$dummyVar1[$i] = intval($numberDays);
		
		$timeDiff = abs($startTimeStamp[$i] - $endTimeStamp[$i]);
		$numberDays = $timeDiff/86400;  // 86400 seconds in one day
		$dummyVar2[$i] = intval($numberDays);
		
		/*echo '$dummyVar1[$i]/$dummyVar2[$i] : '.($dummyVar1[$i]/$dummyVar2[$i]).'<br />';
		echo '$dummyVar1[$i] : '.$dummyVar1[$i].'<br />';
		echo '$dummyVar2[$i] : '.$dummyVar2[$i].'<br />';*/
		
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
	}
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
	
	if(!isset($_SESSION)) 
    { 
        session_start(); 
    }
	
	/*$_SESSION['totalDF'] = $totalDF;
	$_SESSION['totalQuesDF'] = $totalQuesDF;
	$_SESSION['totalRepDF'] = $totalRepDF;
	$_SESSION['totalCommDF'] = $totalCommDF;*/
	$_SESSION['totalWeeklyAct'] = $totalWeeklyAct;
	$_SESSION['totalWeeklyActDF'] = $totalWeeklyActDF;
	$_SESSION['totalWeeklyActRLR'] = $totalWeeklyActRLR;
	$_SESSION['totalWeeklyActVLR'] = $totalWeeklyActVLR;
	$_SESSION['activeAssigns'] = $activeAssigns;
	$_SESSION['assignDaysRemPer'] = $assignDaysRemPer;
	$_SESSION['barColor'] = $barColor;
	$_SESSION['loginName']= $loginName;
	$_SESSION['notification'] = $notification;
	$_SESSION['notificationCount'] = $notificationCount;
	
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