<?php

	$loginUsn = "2sd12cs133";
	$currentMonth = 4;
	$currentYear = "2016";
	
	$date = $currentYear;
	$result = array(16);
	$count = 1;
	$j = -1;
	$l = 0;
	$semCurrentWeek = 1;
	


$w=0; //week
$wd=0; //week day
$nd=0; //counter for DF activity
$nr=0; //counter for RLR activity
$nv=0; //counter for VLR activity
$sc=0; //No.of students
$d=0;  //total activity in DF
$r=0;  //total activity in RLR
$v=0;  //total activity in VLR


$loginStdSlNo=5;

/* Point to logged-in std's activity in R-Results */
	$count = 1;
	$stdPtrInFile = 0;
	
	
	$handle = fopen("RScripts/rAllStdAllActs.txt","r");
    if($handle){
    while (($line = fgets($handle)) !== false){
		if($count == $loginStdSlNo){
			break;
		}	
		else if(substr($line, 0, 1) === 'Y'){
				$count++;
				$stdPtrInFile++;
			}
			else{
				$stdPtrInFile++;
		}
		}
		
	echo 'stdPtrInFile : '.$stdPtrInFile.'<br />';
	
	
	/* Point to current week in logged-in std's R-Results */
	
	$count = 1;									/* *********************************************** */
	$stdWeeklyPtrInFile = $stdPtrInFile;		/* Should be tested for more than one week of data */
	while(true) {								/* *********************************************** */
		if($count == $semCurrentWeek)
			break;
		else {
			$count2 = 0;
			while($count2 < 7) {
				if(substr($line, 0, 1) === 'X'){
					$stdWeeklyPtrInFile++;
					$count2++;
				}
				else if(substr($line, 2, 1) === 'D'){
					$nd=substr($line, 4, 1);
					$d+=$nd;
				}
				else if(substr($line, 2, 1) === 'R') {
					$nr=substr($line, 4, 1);
					$r+=$nr;
				}
				else if(substr($line, 2, 1) === 'V') {
					$nv=substr($line, 4, 1);
					$v+=$nv;
				}
				}
			}
			$count++;
		}
	}
	
	//echo 'stdWeeklyPtrInFile : '.$stdWeeklyPtrInFile.'<br />';
		
		
	else{
	
	echo '<br>';
	
	
	fclose($handle);
	}
	
?>
