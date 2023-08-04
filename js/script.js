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

    let usersInfo = localStorage.getItem('users');
    usersInfo = JSON.parse(usersInfo);

    let htmlTemplate = '';

    if (usersInfo) {
        $('.signup-section').show();
        usersInfo.forEach((item) => {
            htmlTemplate += `
            <div class="col-6">
                <div class="details-card">
                    <h4>${item.first_name}</h4>
                    <p>${item.email}</p>
                    <p>${item.contact_number}</p>
                </div>
            </div>`
        });
    }

    let card = $('.card-wrapper')
    card.append(htmlTemplate)

    $("#submit-button").on("click", function () {
        const isValid = $("#signup-form").valid();
        
        if (!isValid) {
            return;
        }

        let obj = {
            'first_name': $("#fname").val(),
            'last_name':  $("#lname").val(),
            'email':  $("#email").val(),
            'contact_number': $("#countryCode").val() + '-' + $("#phone").val()
        }

        let userArr = localStorage.getItem('users');

        if (userArr) {
            userArr = JSON.parse(userArr)
            userArr.push(obj);
            localStorage.setItem('users', JSON.stringify(userArr))
            clearForm();
            $('.signup-section').show();

            let template = ''
            userArr.forEach((item) => {
                template += `
                <div class="col-6">
                    <div class="details-card">
                        <h4>${item.first_name}</h4>
                        <p>${item.email}</p>
                        <p>${item.contact_number}</p>
                    </div>
                </div>`
            });
            let card = $('.card-wrapper')
            card.append(template)
        } else {
            let arr = [];
            arr.push(obj);
            localStorage.setItem('users', JSON.stringify(arr))
            console.log(arr, 'user array')
            clearForm();
            $('.signup-section').show();
            let template = ''
            userArr.forEach((item) => {
                template += `
                <div class="col-6">
                    <div class="details-card">
                        <h4>${item.first_name}</h4>
                        <p>${item.email}</p>
                        <p>${item.contact_number}</p>
                    </div>
                </div>`
            });
            let card = $('.card-wrapper')
            card.append(template)
        }
    });

    function clearForm () {
        $("#fname").val('');
        $("#lname").val('');
        $("#email").val('');
        $("#phone").val('');
    }
})

