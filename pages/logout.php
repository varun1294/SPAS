<?php
	session_start();
	
	$login = false;
	$_SESSION['login'] = $login;
				
	session_destroy();
	
	header('Location: login.html');

?>