<?php
	
	$loginUsn = "2sd12cs133";
	$month = "2016-01";
	$loginName = "Varun";
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("discussionforum",$con);
	
	$query = "SELECT count(*) FROM question WHERE '$loginUsn' = question.usn and question.date like '%$month%'";
	$data = mysql_query($query,$con);
	$res = mysql_fetch_array($data);
	$totalQuesDF = $res['count(*)'];
	
	$query = "SELECT count(*) FROM reply WHERE '$loginUsn' = reply.usn and reply.date like '%$month%'";
	$data = mysql_query($query,$con);
	$res = mysql_fetch_array($data);
	$totalRepDF = $res['count(*)'];
	
	$query = "SELECT count(*) FROM comment WHERE '$loginUsn' = comment.usn and comment.date like '%$month%'";
	$data = mysql_query($query,$con);
	$res = mysql_fetch_array($data);
	$totalCommDF = $res['count(*)'];
	
	/*echo $totalQuesDF.'<br />';
	echo $totalRepDF.'<br />';
	echo $totalCommDF.'<br />';*/
	
	$totalDF = $totalQuesDF + $totalRepDF + $totalCommDF;
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
	
	$_SESSION['totalDF'] = $totalDF;
	$_SESSION['totalQuesDF'] = $totalQuesDF;
	$_SESSION['totalRepDF'] = $totalRepDF;
	$_SESSION['totalCommDF'] = $totalCommDF;
	$_SESSION['activeAssigns'] = $activeAssigns;
	$_SESSION['assignDaysRemPer'] = $assignDaysRemPer;
	$_SESSION['barColor'] = $barColor;
	$_SESSION['loginName']= $loginName;
	$_SESSION['notification'] = $notification;
	$_SESSION['notificationCount'] = $notificationCount;
	
?>