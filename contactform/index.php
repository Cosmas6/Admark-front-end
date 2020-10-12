<?php
session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Contact Form</title>
		<meta name="viewport" content="width=device-width; initial-scale=1.0">
		<link href='http://fonts.googleapis.com/css?family=Raleway:500' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/style.css" />
        	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<script type="text/javascript" src="js/jquery-1.3.1.min.js"></script>
			<script type="text/javascript"> 
			function gostergizle()
			{
			$("div#container").show(100); 
			}
			function sendmessage(){ 
			var veriler = $('#contact_form').serialize(); 
			$.ajax({ 
			type: "POST", 
			url: "inc/send.php", 
			data: veriler, 
			success:function(cevap){ 
			$("#send").html(""+cevap); 
			$("div#container").hide(100); 
			} 
			})}; 
			function formReset(id) {
			$('#'+id).each(function(){
			this.reset();
			});
			}
			function controller(){
        	var name=$('#name').val();
			name=jQuery.trim(name);
		var email=$('#email').val();
			email=jQuery.trim(email);
		var mess=$('#text').val();
			mess=jQuery.trim(mess);
		var tel=$('#phone').val();
			tel=jQuery.trim(tel);
        	var securityCode=$('#securityCode').val();
			securityCode=jQuery.trim(securityCode);        
        
			if(name==''){
			alert("Please check your name");
			} 	
			else if(email==''){
				alert("Please check your E-Mail");
				}
            else if (tel==''){
				alert("Please check your Phone");
				}
            else if (securityCode==''){
				alert("Security code is empty!");
				}
            else if(mess==''){
				alert("Please check your Message");
				}

			else { sendmessage() } 
				}
</script>
</head>

<body>

		<!-- Form -->
		
		<div id="container">
			<h2>Contact Form</h2>
	<form class="form" id="contact_form" name="contact_form" method="post" action="javascript:void(0);">
		<p class="name">
			<input type="text" name="name" id="name" placeholder="Your Name*"  required/>
			<label for="name">Full Name<font color="red">*</font></label>
		</p>
		<p class="email">
			<input type="text" name="email" id="email" placeholder="mail@example.com*" required />
			<label for="email">Email<font color="red">*</font></label>
		</p>
		<p class="phone">
			<input type="text" name="phone" id="phone" placeholder="+254...*"  required/>
			<label for="phone">Phone<font color="red">*</font></label>
		</p>
		<p class="web">
			<input type="text" name="web" id="web" placeholder="www.example.com" />
			<label for="web">Website</label>
		</p>
		<p class="sec">
		<p class="name">
			<input type="text" name="subject" id="subject" placeholder="Contact reason*"  required/>
			<label for="subject">Subject<font color="red">*</font></label>
		</p>
		</p>  	
    <input type="text" name="securityCode" id="securityCode" required />
    <label for="securityCode"></label>
 <img src="inc/captcha.php" />
		<p class="text">
			<textarea id="text" name="text" id="text"placeholder="Your Message*"  required/></textarea>
		</p>
	
		<p class="submit">
			<input type="submit" onclick="controller()" value="Send" />
			<input type="reset" value="Reset" />
		</p>
	</form>
	
	</div>
		
	<div style="margin-top: 80px" id="send"></div>
	
	
	
	<!-- Form -->

	</body>
</html>
