<?php
//session_start();
if ( isset($_POST['securityCode']) && $_POST['securityCode'] ){
 $securityControl = true;
 
 if ( $securityControl ){

$quote_cart_quantity=$_POST['quote_cart_quantity'];
$customer_email=$_POST['customer_email'];
$customer_name=$_POST['customer_name'];
$customer_cmpnyname=$_POST['customer_cmpnyname'];
$customer_phno=$_POST['customer_phno'];
$message=$_POST['message'];
$domain=$_SERVER['HTTP_HOST'];
$ipadress=$_SERVER['REMOTE_ADDR'];
$date = date("d.m.Y"); 
$time = date("H:i:s"); 	
require("class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP();

$mail->Host     = "rbx103.truehost.cloud"; // SMTP servers
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "info@zenahrecruitmentltd.co.ke";  // SMTP username
$mail->Password = "simmo@0717010602"; // SMTP password
$mail->From     = "info@zenahrecruitmentltd.co.ke"; // it must be a match with SMTP username
$mail->Fromname = $name; // from name
$mail->AddAddress("info@zenahrecruitmentltd.co.ke","zenahrecruitmentltd@gmail.com"); // SMTP username , Name




$mail->Subject  =  $_POST['subject'];
$content = "<h2>You have a message from $domain</h2>  <p><b>Name:</b>$name</p> <p><b>E-Mail:</b>$email</p> <p><b>Phone:</b>$phone</p> <p><b>Subject:</b>$subject</p> <p><b>Website: $web</b> </p> <p><b>Message:</b>$text</p> <p><h5>Date: $date . $time </h5></p> <p><h5>IP Adress of User: $ipadress</h5> </p>";
$mail->MsgHTML($content);
if(!$mail->Send())
{
   echo "<center>Error! Its wrong!</center>";
   echo "Mailer Error: " . $mail->ErrorInfo;
    echo "<center><p><input type='submit' onclick='gostergizle();' value='Back' /></p></center>";
   exit;
}
echo "<center>Thank you! Your message has reached us! <p><input type='submit' onclick='gostergizle();' value='Back' /></p></center>";
 } else {
 echo "<center>Please check Security Code! <p><input type='submit' onclick='gostergizle();' value='Back' /></p></center>";
 }
}
?>
