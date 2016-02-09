<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1.1", {packages:["bar"]});
      //google.setOnLoadCallback(drawStuff);
	  
	  /*var var1 = localStorage.getItem("work");
	  var var2 = localStorage.getItem("eat");
	  var var3 = localStorage.getItem("commute");
	  var var4 = localStorage.getItem("watchTv");
	  var var5 = localStorage.getItem("sleep");
	  
	  var1 = parseInt(var1);
	  var2 = parseInt(var2);
	  var3 = parseInt(var3);
	  var4 = parseInt(var4);
	  var5 = parseInt(var5);*/
	  
	  function dummy() {
		drawStuff();
	  }
	  
	  
	  var request;
function sendInfo() {
	alert("Inside sendInfo()");
	var v = document.getElementById("opt").value;
	//alert(v);
	
	var url="displayChart1.php?v="+v;
	
	alert(url);

	if(window.XMLHttpRequest) {
		request=new XMLHttpRequest();
	}

	else if(window.ActiveXObject) {
		request=new ActiveXObject("Microsoft.XMLHTTP");
	}

	try {
		request.onreadystatechange=getInfo;
		request.open("GET",url,true);
		request.send();
	} catch(e) {
		alert("Unable to connect to server");
	}
	
	drawStuff();
}

function getInfo() {
	if(request.readyState==4){
		var val=request.responseText;
		document.write(val);
		document.getElementById('underInput').innerHTML=val;
	}
}
    </script>
	
	<style type="text/css">
	.myButton {
	-moz-box-shadow:inset 0px 0px 23px 6px #9fb4f2;
	-webkit-box-shadow:inset 0px 0px 23px 6px #9fb4f2;
	box-shadow:inset 0px 0px 23px 6px #9fb4f2;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #7892c2), color-stop(1, #476e9e));
	background:-moz-linear-gradient(top, #7892c2 5%, #476e9e 100%);
	background:-webkit-linear-gradient(top, #7892c2 5%, #476e9e 100%);
	background:-o-linear-gradient(top, #7892c2 5%, #476e9e 100%);
	background:-ms-linear-gradient(top, #7892c2 5%, #476e9e 100%);
	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#7892c2', endColorstr='#476e9e',GradientType=0);
	background-color:#7892c2;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Georgia;
	font-size:17px;
	font-weight:bold;
	font-style:italic;
	padding:15px 38px;
	text-decoration:none;
	text-shadow:2px 4px 2px #283966;
}
.myButton:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #476e9e), color-stop(1, #7892c2));
	background:-moz-linear-gradient(top, #476e9e 5%, #7892c2 100%);
	background:-webkit-linear-gradient(top, #476e9e 5%, #7892c2 100%);
	background:-o-linear-gradient(top, #476e9e 5%, #7892c2 100%);
	background:-ms-linear-gradient(top, #476e9e 5%, #7892c2 100%);
	background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#476e9e', endColorstr='#7892c2',GradientType=0);
	background-color:#476e9e;
}
.myButton:active {
	position:relative;
	top:1px;
}

	
	
	.demo select {
		border: 0 !important;  /*Removes border*/
		-webkit-appearance: none;  /*Removes default chrome and safari style*/
		-moz-appearance: none; /* Removes Default Firefox style*/
        appearance:none;
		background: #0088cc url(img/select-arrow.png) no-repeat 90% center;
		width: 100px; /*Width of select dropdown to give space for arrow image*/
		text-indent: 0.01px; /* Removes default arrow from firefox*/
		text-overflow: "";  /*Removes default arrow from firefox*/ /*My custom style for fonts*/
		color: #FFF;
		border-radius: 15px;
		padding: 5px;
		box-shadow: inset 0 0 5px rgba(000,000,000, 0.5);
	}
	.demo select.balck {
		background-color: #000;
	}
	.demo select.option3 {
		border-radius: 10px 0;
	}

	
	
	
	

	</style>
  </head>
  <body>
  
		<center>
			<h2>Graphs with single column of Data</h2>
			
			<div class="demo">
			Please Select<br /><br />
			<select class="element select medium" id="opt" name="opt" onchange="sendInfo();">
				<option value="Select" selected="selected"></option>
			
				<option value="ia1">IA 1 Marks</option>
				<option value="ia2">IA 2 Marks</option>
				<option value="ia3">IA 3 Marks</option>
				<option value="ese">ESE Marks</option>
			</select>
			</div>
			
			<div id="underInput" style="width: 900px; height: 500px;"></div>
			
		</center>
  </body>
</html>