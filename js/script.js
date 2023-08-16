$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            fname: {
                required: true
            },
            lname: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            phone: {
                minlength: "Please enter at least 10 digits",
            }
        }
    })
})

