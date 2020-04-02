<?php
$name = $_POST['first'];
$visitor_email = $_POST ['email'];

$name = $_POST['last'];
$name = $_POST ['phone'];

$email_from = 'depalmajared91@gmail.com';
$email_subject = "New Form Submission";
$email_body = "User Name: $name.\n". 
"User Email: $visitor_email.\n".  
"User First: $first.\n". 
"User Last: $last.\n". 
"User Phone: $phone.\n". ;

$to = "depalmajared91@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitors_email \r\n";
mail($to, $email_subject,$email_body,$headers);
header("Location: index.html");



// $name = $_POST ['email']; // might need this code later..testing for now

?>