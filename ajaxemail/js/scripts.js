$(document).ready(function() {
    $(".email-form").submit(function(e) {
        e.preventDefault();

        // Clear previous error messages
        $(".error-message").remove();

        // Validate email address
        var to = $("input[name='to']").val();
        if (!isValidEmail(to)) {
            $("<p class='error-message'>Please enter a valid email address.</p>").insertAfter($("input[name='to']"));
            return;
        }

        // Validate subject
        var subject = $("input[name='subject']").val();
        if (!subject) {
            $("<p class='error-message'>Please enter a subject.</p>").insertAfter($("input[name='subject']"));
            return;
        }

        // Validate message
        var message = $("textarea[name='message']").val();
        if (!message) {
            $("<p class='error-message'>Please enter a message.</p>").insertAfter($("textarea[name='message']"));
            return;
        }

        // If all validation passes, submit the form using Ajax
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(".email-form").serialize(),
            success: function(response) {
                console.log(response);
                // Handle success, e.g., show a success message
                alert("Message has been sent");
            },
            error: function(error) {
                console.error(error);
                // Handle error, e.g., show an error message
                alert("Error sending the message. Please try again later.");
            }
        });
    });

    // Function to validate email address
    function isValidEmail(email) {
        var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegEx.test(email);
    }
});
