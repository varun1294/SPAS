<?php

	//if(exec("Rscript C:/xampp/htdocs/SPAS/pages/RScripts/dummy.r"))
	if(exec('"C:\Program Files\R\R-3.2.2\bin\Rscript.exe" "C:\xampp\htdocs\SPAS\pages\RScripts\dummy.r" 2>&1',$output))
		echo 'Success';
	else
		echo 'Fail';
	
?>