$( "#userFormCreate" ).submit(function( event ) {
    event.preventDefault();
    $('#message').hide(); //hide any error messages from previous attempts
    $.ajax({
            method: "GET",
            url: "/saveUserAjax",
            data: $(this).serialize()
        })
        .fail(function () {
            // failure() is only triggered if there was an error submitting data to the web server;
            // i.e. the server is offline or the URL we are trying to send data to doesn't exist (404)
            $('#message').addClass("alert alert-danger");
            $('#message').html('there was a failure.');
            $('#message').show();
        })
        .success(function (response) {
            // if the web server successfully send backs a message the success() function is run.
            if(response.success) {
                window.location.replace("/authenticate?email="+$("#email").val()+"&password="+$("#password").val());
            }
            else {
                $('#message').addClass("alert alert-warning");
                $('#message').html('/saveUserAjax returned that an error occurred.<br />' + response.error);
                $('#message').show();
                console.log('/saveUserAjax returned that an error occurred.');
            }
        })
        .done(function (response) {
            console.log(response);
        });
});