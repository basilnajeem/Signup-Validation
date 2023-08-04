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
                required: true
            }
        },
        messages: {
            phone: {
                message: "please enter minimum 10 digits",
                minlength: 10
            }
        }
    })

    let usersInfo = localStorage.getItem("users")
    usersInfo= JSON.parse(usersInfo)

});