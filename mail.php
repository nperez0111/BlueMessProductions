<?php
	header("Location: ".@$_SERVER['HTTP_REFERER']);
	//****************************************
	//edit here
	$to = 'bluemessproductions@yahoo.com';
	$from = 'From: '.$email."\n";
	//****************************************
	
		$msg_subject = 'Bluemess Contact Form Submission';
		$name = $_POST['name'];
		$mail = $_POST['mail'];
		$services = $_POST['services'];
		// send mail
		mail($to, $msg_subject, "\n".
			'Name: '.$name."\n".
			'Email Address: '.$mail."\n".
			'Services: '.$services."\n"
		);
	
	
		
	
	
?>