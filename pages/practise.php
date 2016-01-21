<?php
	$handle = fopen("C:/xampp/htdocs/SPAS/pages/RScripts/R_Result.txt", "r");
	
	$rValues = array(10);
	$stdClusters = array(100);
	$i = 0;
	if ($handle) {
		while (($line = fgets($handle)) !== false) {
			if($i == 4)
				$stdClusters = $line;
			$rValues[$i] = floatval($line);
			$rValues[$i] = round($rValues[$i],2);
			echo $rValues[$i++].'<br />';
		}

		fclose($handle);
	} else {
    // error opening the file.
	}

	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
?> 