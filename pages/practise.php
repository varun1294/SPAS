<?php

	if(exec("Rscript C:\xampp\htdocs\SPAS\pages\RScripts\dummy.r"))
		echo 'Success';
	else
		echo 'Fail';
	
?>