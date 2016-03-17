<?php

	if(!isset($_SESSION)) 
	{ 
		session_start(); 
	}
	
	/* **** Read ALL-Clusters **** */
		$allCluster = 0;
		$file = fopen("RScripts/ALL_Clusters.txt","r");
		while(! feof($file)) {
			$rArrayALLCluster[$allCluster++] = fgets($file);
		}
		fclose($file);
		$allCluster--;
	/* ************************** */
	
	/* **** Read rAllActs **** */
		$allAct = 0;
		$file = fopen("RScripts/rAllActs.txt","r");
		while(! feof($file)) {
			$rArrayALL[$allAct++] = fgets($file);
		}
		fclose($file);
		$allAct--;
	/* ***************************** */
	
	$totalNoOfStds = 10;
	
	$min = $rArrayALL[0]; $max = $rArrayALL[0];
	for($i = 1; $i < $totalNoOfStds; $i++) {
		if($rArrayALL[$i] < $min)
			$min = $rArrayALL[$i];
		if($rArrayALL[$i] > $max)
			$max = $rArrayALL[$i];
	}
	
	/*print_r($rArrayALLCluster);
	echo'<br /><br />';
	print_r($rArrayALL);*/
	
	$dummy = "$(document).ready(function() {
    console.log(\"document ready\");
    var offset = 0;
    plot();

    function plot() {
        var sin = [],
            cos = [],
			tan = [];";
		
		for($i = 0; $i < $totalNoOfStds; $i++) {
			if($rArrayALLCluster[$i] == 1)
				$dummy = $dummy."sin.push([".($i+1).",".$rArrayALL[$i]."]);";
			else if($rArrayALLCluster[$i] == 2)
				$dummy = $dummy."cos.push([".($i+1).",".$rArrayALL[$i]."]);";
			else
				$dummy = $dummy."tan.push([".($i+1).",".$rArrayALL[$i]."]);";
		}

        $dummy = $dummy."var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            yaxis: {
                min: ".$min.",
                max: ".$max."
            },
            tooltip: true,
            tooltipOpts: {
                content: \"'%s' : Student : %x : Activity : %y\",
                shifts: {
                    x: -60, //x: -60,
                    y: 25 //y: 25
                }
            }
        };

        var plotObj = $.plot($(\"#flot-line-chart\"), [{
                data: sin,
                label: \"Cluster 1\"
            }, {
                data: cos,
                label: \"Cluster 2\"
            }, {
				data:tan,
				label: \"Cluster 3\"
			}],
            options);
    }
});";

	//echo $dummy;
	$fp = fopen('C:\xampp\htdocs\SPAS\js\flot-data.js', 'w');
	fwrite($fp,$dummy);
?>