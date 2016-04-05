<?php

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$sql = "SELECT COUNT(DISTINCT usn) FROM activity";
	
	$mydata = mysql_query($sql,$con);
	$res = mysql_fetch_array($mydata);
	
	$totalNoOfStds = $res['COUNT(DISTINCT usn)'];
	
	require_once 'Classes/PHPExcel.php';
	$objPHPExcel = new PHPExcel(); 

	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);
	
	$sql = $sql = "SELECT * FROM activity ORDER BY usn,day";
	
	$mydata = mysql_query($sql,$con);
	
	$arr = array();
	
	
	for($i = 0; $i < 5; $i++)
		for($j = 0; $j < $totalNoOfStds; $j++)
			$arr[$i][$j] = "";
			
	$arr[0][0] = "usn";
	$arr[0][1] = "Consultation_Frequency";
	$arr[0][2] = "No_Of_Absents";
	$arr[0][3] = "Quiz_Marks";
	$arr[0][4] = "Points";
	$arr[0][5] = "Negative_Points";
	
	for($m = 1; $m < $totalNoOfStds+1; $m++) {
		for($n = 0; $n < 7; $n++)
			$arr[$m][$n] = 0;
	}
	
	$i = 1;
	while($res = mysql_fetch_array($mydata)) {
		$usn = $res['usn'];
		
		$day = $res['day'];
		$act = $res['act'];
		
		$arr[$i][0] = $usn;
		
		$arr[$i][$day+6] = $act;
		
		$sql = "SELECT max(day) FROM activity WHERE usn = '$usn'";
		$data = mysql_query($sql,$con);
		$res = mysql_fetch_array($data);
		$maxDay = $res[0];
		
		for($j = 1; $j < $maxDay; $j++) {
			$res = mysql_fetch_array($mydata);
			
			$act = $res['act'];
			$day = $res['day'];

			$arr[$i][$day+6] = $act;
		}
		
		$i++;
	}
	
	$sql = "SELECT DISTINCT day FROM activity";
	$data = mysql_query($sql,$con);
	$dayString = "day1";
	while($res = mysql_fetch_array($data)) {
		$day = $res['day'];
		$arr[0][$day+6] = $dayString;

		if(!(strcmp($dayString,"day9")))
			$dayString = "day10";
		else if(!(strcmp($dayString,"day99")))
			$dayString = "day100";
		else
			$dayString++;
	}
	
	/*for($i = 0; $i < 10; $i++) {
		print_r($arr);
		echo '<br /><br /><br /><br /><br />';
	}*/
	
	$objPHPExcel->setActiveSheetIndex(0);
	for($i=0, $column='A', $rowCount = 1; $i < $totalNoOfStds+1; $i++, $rowCount++) {
		for($j = 0; $j < 119; $j++,$column++) {
			//if($j == 1)
				//$j = 7;
			$objPHPExcel->getActiveSheet()->setCellValue($column.$rowCount, $arr[$i][$j]);
		}
		$column='A';
	}

	$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5'); 
	$objWriter->save('C:\xampp\htdocs\SPAS\pages\RScripts\Book3.xls');

?> 