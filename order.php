<?php

$cus_name = $_POST["name"];
$cus_phone = $_POST["phone"];
$cart_table = $_POST["cart_table"];

//echo $cus_name;
//echo "<br>";
//echo $cus_phone;
//echo "<br>";

$email = "";
$name = "Test";
$email_from = "order@pyrotechtraders.rf.gd";
$name_from = "PyroTech Traders";
$email_password = "";

if ($email) {

  require("./libs/PHPMailer/src/Exception.php");
  require("./libs/PHPMailer/src/PHPMailer.php");
  require("./libs/PHPMailer/src/SMTP.php");

  $mail = new PHPMailer\PHPMailer\PHPMailer(true);

  $send_using_gmail = 0;

  //Send mail using gmail
  if($send_using_gmail){
      $mail->IsSMTP(); // telling the class to use SMTP
      $mail->SMTPDebug = 0;
      $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
      $mail->SMTPAuth = true; // enable SMTP authentication
      $mail->SMTPSecure = "tls"; // sets the prefix to the servier
      $mail->CharSet = "UTF-8";
      $mail->Port = 587; // set the SMTP port for the GMAIL server

      $mail->Username = $email_from; // GMAIL username
      $mail->Password = $email_password; // GMAIL password
  }

  //Typical mail data
  $mail->addAddress($email, $name);
  $mail->SetFrom($email_from, $name_from);
  $mail->Subject = "Order";
  $message = "<h3>" . $cus_name . "</h3>";
  $message = $message . "<h3>" . $cus_phone . "</h3>";
  $message = $message . $cart_table;
  $mail->Body = $message;
  $mail->IsHTML(true);

  try{
      $mail->Send();
      echo "Success!";
  } catch(Exception $e){
      //Something went bad
      echo "Fail - " . $mail->ErrorInfo;
  }
} else {
  echo "Mail details unavailable!";
}

?>