<?php

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
	
	$arr = array();
	$arr1 = array();
	
	$arr[0][0] = "dfacts";
	$arr[0][1] = "rlracts";
	$arr[0][2] = "vlracts";
	$arr[0][3] = "cgpa";
	
	for($i = 1; $i <= 50; $i++) {
		$arr[$i][0] = ($rArrayDF[$i - 1] * 100) / 25;
		$arr[$i][0] = round($arr[$i][0],0);
		
		$arr[$i][1] = ($rArrayRLR[$i - 1] * 100) / 25;
		$arr[$i][1] = round($arr[$i][1],0);
		
		$arr[$i][2] = ($rArrayVLR[$i - 1] * 100) / 25;
		$arr[$i][2] = round($arr[$i][2],0);
		
		$arr1[$i - 1] = $arr[$i][0] + $arr[$i][1] + $arr[$i][2];
	}
	
	for($i = 1; $i < 50+1; $i++) {
		if($arr1[$i-1] >= 18000 && $arr1[$i-1] <= 21999)
			$arr[$i][3] = 6;
		else if($arr1[$i-1] >= 22000 && $arr1[$i-1] <= 25999)
			$arr[$i][3] = 7;
		else if($arr1[$i-1] >= 26000 && $arr1[$i-1] <= 28999)
			$arr[$i][3] = 8;
		else if($arr1[$i-1] >= 29000 && $arr1[$i-1] <= 29999)
			$arr[$i][3] = 9;
		else
			$arr[$i][3] = 10;
	}
	
	$file = fopen("seniorsData.txt","w");
	for($i = 1; $i < 50; $i++) {
		fwrite($file,$arr[$i][3].PHP_EOL);
	}
	fwrite($file,$arr[$i][3]);
	fclose($file);
?>