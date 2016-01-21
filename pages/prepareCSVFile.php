<?php

	$loginUsn = "2sd12cs133";
	
	require_once 'Classes/PHPExcel.php';
	$objPHPExcel = new PHPExcel(); 

	$objPHPExcel->setActiveSheetIndex(0);

	$totalRegisteredStudents = 25;
	$totalVariables = 22;
	
	$dummy = array();
	
	/* 2D array to generate CSV File */
	$arr = array($dummy,$dummy,$dummy,$dummy,$dummy,
				 $dummy,$dummy,$dummy,$dummy,$dummy,
				 $dummy,$dummy,$dummy,$dummy,$dummy,
				 $dummy,$dummy,$dummy,$dummy,$dummy,
				 $dummy);
				 
	for($i = 0; $i < $totalRegisteredStudents; $i++)
		for($j = 0; $j < $totalVariables; $j++)
			$arr[$i][$j] = "";
	$usn = "2sd12cs130";
	$num = 1;
	
	$arr[0][0] = "Consultation_Frequency";
	$arr[0][1] = "Regularity_Of_Absence";
	$arr[0][2] = "No_Of_Absents";
	$arr[0][3] = "Quiz_Marks";
	$arr[0][4] = "Negative_Points";
	$arr[0][5] = "Points";
	$arr[0][6] = "Sessions";
	$arr[0][7] = "Session_Hours";
	$arr[0][8] = "Total_Time_Invested_VLR";
	$arr[0][9] = "Total_No_Of_Videos_Watched";
	$arr[0][10] = "Total_No_Of_EBooks_Refered";
	$arr[0][11] = "Total_Annotations_Done";
	$arr[0][12] = "Total_Time_Invested_RLR";
	$arr[0][13] = "Total_No_Of_Questions_Raised";
	$arr[0][14] = "Total_No_Of_Replies";
	$arr[0][15] = "Total_No_Of_Comments";
	$arr[0][16] = "Total_Time_Invested_DF";
	$arr[0][17] = "IA_1_Marks";
	$arr[0][18] = "IA_2_Marks";
	$arr[0][19] = "IA_3_Marks";
	$arr[0][20] = "ESE_Marks";
	$arr[0][21] = "USN";
	
	for($i = 1; $i <= 5; $i++) {
		for($j = 0; $j < $totalVariables; $j++) {
			switch($j) {
				case 0 : $arr[$i][$j]=rand(9,10); break;
				case 1 : $arr[$i][$j]=rand(15,20); break;
				case 2 : $arr[$i][$j]=rand(0,2); break;
				case 3 : $arr[$i][$j]=rand(8,9); break;
				case 4 : $arr[$i][$j]=rand(0,1); break;
				case 5 : $arr[$i][$j]=rand(29,32); break;
				case 6 : $arr[$i][$j]=rand(22,24); break;
				case 7 : $arr[$i][$j]=rand(1,2); break;
				case 8 : $arr[$i][$j]=rand(3,4); break;
				case 9 : $arr[$i][$j]=rand(9,10); break;
				case 10 : $arr[$i][$j]=rand(13,15); break;
				case 11 : $arr[$i][$j]=rand(83,100); break;
				case 12 : $arr[$i][$j]=rand(3,4); break;
				case 13 : $arr[$i][$j]=rand(8,10); break;
				case 14 : $arr[$i][$j]=rand(5,6); break;
				case 15 : $arr[$i][$j]=rand(0,3); break;
				case 16 : $arr[$i][$j]=rand(3,4); break;
				case 17 : $arr[$i][$j]=rand(17,18); break;
				case 18 : $arr[$i][$j]=rand(18,20); break;
				case 19 : $arr[$i][$j]=rand(17,20); break;
				case 20 : $arr[$i][$j]=rand(80,95); break;
				case 21 : $arr[$i][$j]=$usn;$usn++;break;
			}
		}
	}
	
	for($i = 6; $i <= 10; $i++) {
		for($j = 0; $j < $totalVariables; $j++) {
			switch($j) {
				case 0 : $arr[$i][$j]=rand(7,8); break;
				case 1 : $arr[$i][$j]=rand(11,12); break;
				case 2 : $arr[$i][$j]=rand(3,4); break;
				case 3 : $arr[$i][$j]=rand(6,7); break;
				case 4 : $arr[$i][$j]=rand(0,1); break;
				case 5 : $arr[$i][$j]=rand(22,24); break;
				case 6 : $arr[$i][$j]=rand(18,19); break;
				case 7 : $arr[$i][$j]=rand(1,2); break;
				case 8 : $arr[$i][$j]=rand(2,3); break;
				case 9 : $arr[$i][$j]=rand(8,7); break;
				case 10 : $arr[$i][$j]=rand(10,11); break;
				case 11 : $arr[$i][$j]=rand(63,77); break;
				case 12 : $arr[$i][$j]=rand(1,3); break;
				case 13 : $arr[$i][$j]=rand(7,9); break;
				case 14 : $arr[$i][$j]=rand(3,4); break;
				case 15 : $arr[$i][$j]=rand(0,2); break;
				case 16 : $arr[$i][$j]=rand(1,3); break;
				case 17 : $arr[$i][$j]=rand(13,14); break;
				case 18 : $arr[$i][$j]=rand(14,15); break;
				case 19 : $arr[$i][$j]=rand(13,15); break;
				case 20 : $arr[$i][$j]=rand(60,79); break;
				case 21 : $arr[$i][$j]=$usn;$usn++;break;
			}
		}
	}
	
	for($i = 11; $i <= 15; $i++) {
		for($j = 0; $j < $totalVariables; $j++) {
			switch($j) {
				case 0 : $arr[$i][$j]=rand(4,6); break;
				case 1 : $arr[$i][$j]=rand(8,9); break;
				case 2 : $arr[$i][$j]=rand(6,7); break;
				case 3 : $arr[$i][$j]=rand(5,6); break;
				case 4 : $arr[$i][$j]=rand(0,2); break;
				case 5 : $arr[$i][$j]=rand(18,20); break;
				case 6 : $arr[$i][$j]=rand(15,16); break;
				case 7 : $arr[$i][$j]=rand(1,2); break;
				case 8 : $arr[$i][$j]=rand(1,3); break;
				case 9 : $arr[$i][$j]=rand(4,5); break;
				case 10 : $arr[$i][$j]=rand(7,9); break;
				case 11 : $arr[$i][$j]=rand(39,50); break;
				case 12 : $arr[$i][$j]=rand(1,3); break;
				case 13 : $arr[$i][$j]=rand(4,6); break;
				case 14 : $arr[$i][$j]=rand(1,2); break;
				case 15 : $arr[$i][$j]=rand(0,3); break;
				case 16 : $arr[$i][$j]=rand(1,3); break;
				case 17 : $arr[$i][$j]=rand(8,10); break;
				case 18 : $arr[$i][$j]=rand(9,11); break;
				case 19 : $arr[$i][$j]=rand(8,11); break;
				case 20 : $arr[$i][$j]=rand(45,69); break;
				case 21 : $arr[$i][$j]=$usn;$usn++;break;
			}
		}
	}
	
	for($i = 16; $i <= 20; $i++) {
		for($j = 0; $j < $totalVariables; $j++) {
			switch($j) {
				case 0 : $arr[$i][$j]=rand(1,3); break;
				case 1 : $arr[$i][$j]=rand(4,5); break;
				case 2 : $arr[$i][$j]=rand(8,9); break;
				case 3 : $arr[$i][$j]=rand(2,4); break;
				case 4 : $arr[$i][$j]=rand(0,2); break;
				case 5 : $arr[$i][$j]=rand(11,13); break;
				case 6 : $arr[$i][$j]=rand(11,13); break;
				case 7 : $arr[$i][$j]=rand(1,2); break;
				case 8 : $arr[$i][$j]=rand(1,4); break;
				case 9 : $arr[$i][$j]=rand(2,3); break;
				case 10 : $arr[$i][$j]=rand(1,4); break;
				case 11 : $arr[$i][$j]=rand(18,20); break;
				case 12 : $arr[$i][$j]=rand(1,4); break;
				case 13 : $arr[$i][$j]=rand(0,2); break;
				case 14 : $arr[$i][$j]=rand(0,1); break;
				case 15 : $arr[$i][$j]=rand(0,2); break;
				case 16 : $arr[$i][$j]=rand(1,4); break;
				case 17 : $arr[$i][$j]=rand(4,6); break;
				case 18 : $arr[$i][$j]=rand(5,8); break;
				case 19 : $arr[$i][$j]=rand(4,8); break;
				case 20 : $arr[$i][$j]=rand(35,42); break;
				case 21 : $arr[$i][$j]=$usn;$usn++;break;
			}
		}
	}
	
	for($i=0, $column='A', $rowCount = 1; $i < $totalRegisteredStudents; $i++, $rowCount++) {
		for($j = 0; $j < $totalVariables; $j++,$column++) {
			$objPHPExcel->getActiveSheet()->setCellValue($column.$rowCount, $arr[$i][$j]);
		}
		$column='A';
	}	 

	$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5'); 
	$objWriter->save('C:\xampp\htdocs\SPAS\pages\RScripts\data.xls');
	
	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
	
	for($i = 0; $i < $totalRegisteredStudents; $i++) {
		if($arr[$i][21] == $loginUsn) {
			$_SESSION['loginStdCSVData'] = $arr[$i];
			break;
		}
	}
?> 