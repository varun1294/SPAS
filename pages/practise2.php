<?php

	$file = fopen("RScripts/rAllStdAllActs.txt","r");

	while(! feof($file)) {
		$str = fgets($file);
		$j = strlen($str);
		
		for($i=0;$i<$j;$i++)
			echo $str[$i];
		echo '<br />';
	}

	fclose($file);

?>