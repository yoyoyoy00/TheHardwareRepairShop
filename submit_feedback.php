<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedbackType = $_POST['feedback-type'];
    $feedback = $_POST['feedback'];

    // Set up the recipient email address
    $to = "your@email.com"; // Change this to your email address

    // Set up the email subject
    $subject = "New Feedback Submission";

    // Compose the email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Feedback Type: $feedbackType\n";
    $message .= "Feedback:\n$feedback";

    // Set up the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your feedback! We have received your submission.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Handle if someone tries to access this page directly without submitting the form.
    echo "Oops! It seems you accessed this page directly.";
}
?>
