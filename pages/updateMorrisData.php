<?php

	if(!isset($_SESSION)) 
    { 
        session_start(); 
    }
	
	

	$loginUsn = "2sd12cs133";
	$currentMonth = 4;
	$currentYear = "2016";
	
	for($i = 0; $i < 16; $i++)
		$totalActivityDF[$i] = 0;
	
	$con = mysql_connect("localhost","Admin","pkvcobas132");
	if(!$con)
		die("Reason : ".mysql_error());
               
	mysql_select_db("discussionforum",$con);
	
	$i = 1;
	
	$date = $currentYear;
	$result = array(16);
	$count = 1;
	$j = -1;
	$l = 0;
	
	while($i <= $currentMonth) {
		$dummyVar1 = $date."-0".$count;
		
		$count++;
		$i++;
		
		$dummyVar2 = 0;
		for($k = 1; $k <= 4; $k++) {
			$j++;
			$query = "SELECT count(*) FROM question WHERE '$loginUsn' = question.usn and question.date like '%$dummyVar1%' and question.week like '%$k%'";
			$data = mysql_query($query,$con);
			$res = mysql_fetch_array($data);
			$dummyVar2 += $res['count(*)'];
		
			$j++;
			$query = "SELECT count(*) FROM reply WHERE '$loginUsn' = reply.usn and reply.date like '%$dummyVar1%' and reply.week like '%$k%'";
			$data = mysql_query($query,$con);
			$res = mysql_fetch_array($data);
			$dummyVar2 += $res['count(*)'];
		
			$j++;
			$query = "SELECT count(*) FROM comment WHERE '$loginUsn' = comment.usn and comment.date like '%$dummyVar1%' and comment.week like '%$k%'";
			$data = mysql_query($query,$con);
			$res = mysql_fetch_array($data);
			$dummyVar2 += $res['count(*)'];
			
			$result[$l++] = $dummyVar2;
		}
	}
	
	$i=0; $j=0;
	/*while($i < $currentMonth) {
		$totalActivityDF[$i] = $result[$j++];
		$totalActivityDF[$i] += $result[$j++];
		$totalActivityDF[$i] += $result[$j++];
		$i++;
	}*/
	
	for($i = 0; $i < 16; $i++)
		$totalActivityDF[$i] = $result[$i];
		
	for($i = 0; $i < 16; $i++) {
		$totalActivityRLR[$i] = rand(2,9);
		$totalActivityVLR[$i] = rand(2,9);
	}
	
	/*for($i = 0; $i < $currentMonth; $i++)
		echo 'totalActivityDF['.$i.'] : '.$totalActivityDF[$i].'<br />';*/
	
	$period = array(16);
	$j = 1; $k = 1;
	for($i = 0; $i < 16; $i++,$k++) {
		$dummyVar1 = $date.$j.$k;
		$period[$i] = $dummyVar1;
		if($i == 3 || $i == 7 || $i == 11) {
			$j++;
			$k = 0;
		}
		//echo '$period['.$i.'] : '.$period[$i].'<br />';
	}
	
	
	for($i = 0; $i < ($currentMonth * 4); $i++) {
		if($i == 0) {
			$dummy = "
				$(function() {

				Morris.Area({
				element: 'morris-area-chart',
				data: [";
				
			$dummy = $dummy."{
				period: '$period[$i]',
				RLR: '$totalActivityRLR[$i]',
				VLR: '$totalActivityVLR[$i]',
				DF: '$totalActivityDF[$i]'
			},";
		}
		
		else if($i == (($currentMonth * 4)-1)) {
			$dummy = $dummy."{
				period: '$period[$i]',
				RLR: '$totalActivityRLR[$i]',
				VLR: '$totalActivityVLR[$i]',
				DF: '$totalActivityDF[$i]'
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
				RLR: '$totalActivityRLR[$i]',
				VLR: '$totalActivityVLR[$i]',
				DF: '$totalActivityDF[$i]'
			},";
		}
		
	}
	
	$dummy = $dummy."Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: \"Download Sales\",
            value: 12
        }, {
            label: \"In-Store Sales\",
            value: 30
        }, {
            label: \"Mail-Order Sales\",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});";

	$fp = fopen('C:\xampp\htdocs\SPAS\js\morris-data.js', 'w');
	fwrite($fp,$dummy);
?>