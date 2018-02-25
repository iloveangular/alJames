$(document).ready(function () {
    var submit = $(".submit-button");
    var captcha = document.getElementById("captcha").value;
    $('.captcha').keyup(function () {
        if ($(this).val() == 'fr579j') {
            $(".submit-button").prop("disabled", false);
        } else {
            $(".submit-button").prop("disabled", true);
        }
    });

    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    $("#uuid").val(generateUUID());

    $(".submit-button").click(function () {
        $.ajax({
            type: "GET",
            url: 'https://milosrest.herokuapp.com/api/subscribe',
            data: {
                "email": $("#subscribeEmail").val(),
                "activationCode": $("#uuid").val(),
                "activated": $("#activated").val()
            },
            success: function (msg) {
                if (msg == 'error') {
                    $(".red-error").text("");
                    $(".red-error").text('This user is already subscribed.');
                } else {
                    if (msg == 'success') {
                        $('#exampleModal').modal('hide');
                        $('#exampleModal2').modal('show');
                    }
                }
            },
            error: function (msg) {
                console.log('greska' + msg);
            }
        });
    });
    $(".submit-form").click(function () {
        $.ajax({
            type: "GET",
            url: 'https://milosrest.herokuapp.com/api/contact',
            data: {
                "title": $("#title").val(),
                "name": $("#name").val(),
                "email": $("#email").val(),
                "phone": $("#phone").val(),
                "country": $("#country").val(),
                "subject": $("#subject").val(),
                "message": $("#message").val()
            },
            success: function (data) {
                if (data == 'error') {
                    $(".contact-form-error").text("");
                    $(".contact-form-error").text('Error, please try again.');
                } else {
                    if (data == 'success') {
                        $('.contact-form').hide();
                        $('.success-message').text('');
                        $('.success-message').text('Your enquiry has been sent. Thank you.');
                    }
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    });
    $(".submit-affiliate").click(function () {
        $.ajax({
            type: "GET",
            url: 'https://milosrest.herokuapp.com/api/affiliates',
            data: {
                "name": $("#name").val(),
                "email": $("#email").val(),
                "phone": $("#phone").val(),
                "linkedInUrl": $("#linkedInUrl").val(),
                "twitterUrl": $("#twitterUrl").val(),
                "facebookUrl": $("#facebookUrl").val(),
                "companyWebsite": $("#companyWebsite").val(),
                "services": $("#services").val(),
                "packages": $("#packages").val(),
                "documents": $("#documents").val(),
                "speciality": $("#speciality").val()
            },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        })
    });

    $(".margin").click(function () {
        $(this).children(".a").toggle()
    })
});