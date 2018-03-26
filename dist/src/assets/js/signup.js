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
                console.log(msg);
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

    $(".margin").click(function () {
        $(this).children(".a").toggle()
    });
    $("#view_product").on("click", ".payment-item-title a", function () {
        $(this).addClass('testiramo');
        $(this).children('.more_info').addClass('expanded_info');
    });
    $("#view_product").on("click", ".testiramo", function () {
        $(this).removeClass('testiramo');
        $(this).children('.expanded_info').removeClass('expanded_info');
    });


});
