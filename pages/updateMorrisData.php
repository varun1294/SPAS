<?php

	if(!isset($_SESSION)) 
    { 
        session_start(); 
    }
	
	$stdPtrInFile = $_SESSION['stdPtrInFile'];
	$rArray = $_SESSION['rArray'];
	$rArrayDF = $_SESSION['rArrayDF'];
	$rArrayVLR = $_SESSION['rArrayVLR'];
	$rArrayRLR = $_SESSION['rArrayRLR'];
	$loginStdSlNo = $_SESSION['loginStdSlNo'];
	$loginUsn = $_SESSION['loginUsn'];
	
	$loginStdSlNo--;
	
	$rArrayDFCluster = $_SESSION['rArrayDFCluster'];
	$rArrayVLRCluster = $_SESSION['rArrayVLRCluster'];
	$rArrayRLRCluster = $_SESSION['rArrayRLRCluster'];
	$rArrayALLCluster = $_SESSION['rArrayALLCluster'];
	
	$currentMonth = 1;
	$currentYear = "2016";
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("SPAS",$con);
	
	$sql = "SELECT COUNT(DISTINCT usn) FROM activity";
	
	$mydata = mysql_query($sql,$con);
	$res = mysql_fetch_array($mydata);
	
	$totalNoOfStds = $res['COUNT(DISTINCT usn)'];
	
	$actDF = array();
	$actRLR = array();
	$actVLR = array();
	
	for($i = 0; $i < 16; $i++) {
		$actDF[$i] = 0;
		$actRLR[$i] = 0;
		$actVLR[$i] = 0;
	}

	$weekCount = 0;
	$counter = 0;
	
	//echo 'stdPtrInFile : '.$stdPtrInFile.'<br />';
	for($i = $stdPtrInFile+1; $rArray[$i] != null ; $i++) {
		if($rArray[$i][0] == "Y")
			break;
		else if($rArray[$i][0] == "X") {
			$weekCount++;
			if($weekCount == 7) {
				$weekCount = 0;
				$counter++;
			}
		}
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
							$actDF[$counter] += $sum;
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
							$actRLR[$counter] += $sum;
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
							$actVLR[$counter] += $sum;
							break;
			}
		}
	}
	
	if($counter == 15) {
		$counter++;
		while($rArray[$i][0] != "Y") {
			if($rArray[$i][0] != "X") {
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
							$actDF[$counter] += $sum;
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
							$actRLR[$counter] += $sum;
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
							$actVLR[$counter] += $sum;
							break;
			}
			}
		}
	}
	
	$period = array();
	
	/* This needs to be programmed */
	/* *************************** */
	$period[0] = $currentYear.'11';
	$period[1] = $currentYear.'12';
	$period[2] = $currentYear.'13';
	$period[3] = $currentYear.'14';
	
	$period[4] = $currentYear.'21';
	$period[5] = $currentYear.'22';
	$period[6] = $currentYear.'23';
	$period[7] = $currentYear.'24';
	
	$period[8] = $currentYear.'31';
	$period[9] = $currentYear.'32';
	$period[10] = $currentYear.'33';
	$period[11] = $currentYear.'34';
	
	$period[12] = $currentYear.'41';
	$period[13] = $currentYear.'42';
	$period[14] = $currentYear.'43';
	$period[15] = $currentYear.'44';
	/* *************************** */
	
	for($i = 0; $i < ($currentMonth * 4); $i++) {
		/*echo 'actDF[i] : '.$actDF[$i].'<br />';
		echo 'actRLR[i] : '.$actRLR[$i].'<br />';
		echo 'actVLR[i] : '.$actVLR[$i].'<br />';*/
		
		if($i == 0) {
			$dummy = "
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [";
				
			$dummy = $dummy."{
				period: '$period[$i]',
				RLR: '$actRLR[$i]',
				VLR: '$actVLR[$i]',
				DF: '$actDF[$i]'
			},";
		}
		
		else if($i == (($currentMonth * 4)-1)) {
			$dummy = $dummy."{
				period: '$period[$i]',
				RLR: '$actRLR[$i]',
				VLR: '$actVLR[$i]',
				DF: '$actDF[$i]'
				}],
				xkey: 'period',
				ykeys: ['RLR', 'VLR', 'DF'],
				labels: ['RLR', 'VLR', 'DF'],
				pointSize: 2,
				hideHover: 'auto',
				resize: true
			});";
		}
		
		else {
			$dummy = $dummy."{
				period: '$period[$i]',
				RLR: '$actRLR[$i]',
				VLR: '$actVLR[$i]',
				DF: '$actDF[$i]'
			},";
		}
		
	}
	
	$dummy = $dummy."Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: \"Discussion Forum\",
            value: ".$rArrayDF[$loginStdSlNo]."
        }, {
            label: \"RLR\",
            value: ".$rArrayRLR[$loginStdSlNo]."
        }, {
            label: \"VLR\",
            value: ".$rArrayVLR[$loginStdSlNo]."
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'DF',
            a: ".$rArrayDF[$loginStdSlNo].",
            b: ";
			
			if($rArrayDFCluster[$loginStdSlNo] == 1) {
				$ss = round($rArrayDFCluster[$totalNoOfStds]);
				$dummy = $dummy.$ss;
			}
			else if($rArrayDFCluster[$loginStdSlNo] == 2) {
				$ss = round($rArrayDFCluster[$totalNoOfStds + 1]);
				$dummy = $dummy.$ss;
			}
			else {
				$ss = round($rArrayDFCluster[$totalNoOfStds + 2]);
				$dummy = $dummy.$ss;
			}			
	$dummy = $dummy."
        }, {
            y: 'RLR',
            a: ".$rArrayRLR[$loginStdSlNo].",
            b: ";
			
			if($rArrayRLRCluster[$loginStdSlNo] == 1) {
				$ss = round($rArrayRLRCluster[$totalNoOfStds]);
				$dummy = $dummy.$ss;
			}
			else if($rArrayRLRCluster[$loginStdSlNo] == 2) {
				$ss = round($rArrayRLRCluster[$totalNoOfStds + 1]);
				$dummy = $dummy.$ss;
			}
			else {
				$ss = round($rArrayRLRCluster[$totalNoOfStds + 2]);
				$dummy = $dummy.$ss;
			}
			
	$dummy = $dummy."
        }, {
            y: 'VLR',
            a: ".$rArrayVLR[$loginStdSlNo].",
            b: ";
			
			if($rArrayVLRCluster[$loginStdSlNo] == 1) {
				$ss = round($rArrayVLRCluster[$totalNoOfStds]);
				$dummy = $dummy.$ss;
			}
			else if($rArrayVLRCluster[$loginStdSlNo] == 2) {
				$ss = round($rArrayVLRCluster[$totalNoOfStds + 1]);
				$dummy = $dummy.$ss;
			}
			else {
				$ss = round($rArrayVLRCluster[$totalNoOfStds + 2]);
				$dummy = $dummy.$ss;
			}
	/*$dummy = $dummy."		
        }, {
            y: 'ALL',
            a: ".$rArrayALLCluster[$loginStdSlNo].",
            b: ";
			
			if($rArrayALLCluster[$loginStdSlNo] == 1) {
				$ss = round($rArrayALLCluster[$totalNoOfStds]);
				$dummy = $dummy.$ss;
			}
			else if($rArrayALLCluster[$loginStdSlNo] == 2) {
				$ss = round($rArrayALLCluster[$totalNoOfStds + 1]);
				$dummy = $dummy.$ss;
			}
			else {
				$ss = round($rArrayALLCluster[$totalNoOfStds + 2]);
				$dummy = $dummy.$ss;
			}*/
			
	$dummy = $dummy."
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Your Activity', 'Cluster Activity'],
        hideHover: 'auto',
        resize: true
    });

});";

	$fp = fopen('C:\xampp\htdocs\SPAS\js\morris-data.js', 'w');
	fwrite($fp,$dummy);
?>