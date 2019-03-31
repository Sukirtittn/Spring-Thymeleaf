$(function () {
    $.ajax(
         {

            url: '/current-time',
            method: 'get',
            success: function (response) {
                stopLoader();
                console.log(response);
                if (response.status === true) {
                    $('#currentTime').text(JSON.stringify(response.data));
                } else {
                    alert("Error")
                }

            }
        })

    $('.loading').hide();

    $('body').on('click', '#alertBtn', function () {
        alert("Hello");
        console.log("alert");
    });

    function startLoader() {
        $('.loading').show();
    }

    function stopLoader() {
        $('.loading').hide();
    }

    $('body').on('click', '.start', function () {


        startLoader();
        setTimeout(stopLoader,1000);
        //$('.loading').show();

    });

    $('body').on('click', '.stop', function () {
        $('.loading').stop();

    });

    $("#dropdown").change( function () {
        var var1=document.getElementById("dropdown").value;
        alert(var1);
        console.log("alert");
    });

});