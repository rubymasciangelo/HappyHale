<?php

if($_POST) {
    $visName = "";
    $visEmail = "";
    $visMessage = "";
    $email_body = "<div>"

    if(isset($_POST['visName'])) {
        $visName = filter_var($_POST['visName'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                            <label><b>You recieved this message from</b></label>&nbsp;<span>".$visName."</span>
                        </div>";
    }

    if(isset($_POST['visEmail'])) {
        $visEmail = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visEmail']);
        $visEmail = filter_var($visEmail, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                            <label><b>They provided the email address</b></label>&nbsp;<span>".$visEmail."</span>
                        </div>";
    }

    if(isset($_POST['visMessage'])) {
        $visMessage = htmlspecialchars($_POST['visMessage']);
        $email_body .= "<div>
                            <label><b>Their message:</b></label>
                            <div>".$visMessage."</div>
                        </div>"
    }

    $recipient = "72hermitcrabs@gmail.com";

    $email_body .= "</div>";

    $headers = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visEmail . "\r\n";

    if(mail($recipient, $email_body, $headers)) {
        echo "<p>Thank you for contacting us, $visName!</p>";
    } else {
        echo '<p>Your message can not be sent at this time. Please email us at happyhale808@gmail.com</p>';
    }

} else {
    echo '<p>Oops! Something went wrong...</p>';
}
?>