<?php

	/* Session Variables */
	$genActStdUsn = "2sd12cs133";
	$totalSessionsStd = 0;
	/* ***************** */
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("spas",$con);
	
	$sql = "SELECT * FROM activity WHERE activity.usn = '$genActStdUsn'";
	
	$mydata = mysql_query($sql,$con);

	while($res = mysql_fetch_array($mydata)) {
		if($res['act'] == NULL) {
			$dummy = genAct($res['seed']);
		}
	}
	
	function genAct($seed) {
		echo 'Seed : '.$seed.'<br />';
		
		/*<S1;D;A;5>,<S1;R;A;2>*/
		$std = "<S";

	}
	
	function genDVR() {
		$arr = array(3);
		$arr[0] = "D";
		$arr[1] = "V";
		$arr[2] = "R";
		
		return ($arr[rand(0,2)]);
	}

?>