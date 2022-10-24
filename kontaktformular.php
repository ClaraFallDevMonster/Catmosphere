<?php
if (isset($_POST['send'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $reciever = "clarah93@aol.de";

  $finalmessage = "$name, $email $subject $message";

  mail("$reciever", "$finalmessage", "from: user");
}
?>
