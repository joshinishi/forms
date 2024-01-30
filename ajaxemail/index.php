<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Email PHP Test</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <h1 class="title">Form with AJAX Validation using PHPMailer Library</h1>
    <form action="mail.php" class="email-form" autocomplete="off">
        <label for="to">To:</label>
        <input type="text" name="to" class="email-form__text">
        <label for="subject">Subject:</label>
        <input type="text" name="subject" class="email-form__text">
        <label for="message">Message:</label>
        <textarea name="message" class="email-form__textarea"></textarea>
        <button type="submit" class="email-form__submit">Send</button>
    </form>

    <!-- JS Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="js/scripts.js"></script>

</body>

</html>