tippy('[data-tippy-content]');

var serverBEnd = 'https://mattia-penna-backend-services.000webhostapp.com/services/form.php'; //000webhostapp.com

$('#sendForm').click(() => {
    if (!$('input:invalid').length && !$('textarea:invalid').length) {
        //storing input values
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();

        console.group()
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(message);
        console.groupEnd()

        //send animation
        $('#spinner').toggle();
        $('#confmsg').html('');
        $('button').attr("disabled", true);
        $('button').removeClass("grow");


        //sending post to backend service
        $.post(serverBEnd, { "name": name, "email": email, "subject": subject, "message": message })
            .done(function (risposta) {
                console.log(risposta)

                setTimeout(() => {
                    //clearing input after send
                    $('#name').val("");
                    $('#email').val("");
                    $('#subject').val("");
                    $('#message').val("");
        
                    //success message 
                    $('button').attr("disabled", false);
                    $('#spinner').toggle();
                    $('#confmsg').html(risposta);
                    $('#tick').toggle();
                }, 3000);
        
                setTimeout(() => {
                    $('#tick').toggle();
                    $('#confmsg').html("Submit form")
                    $('button').addClass("grow");
        
                }, 5000);

            })
            .fail((xhr, status, error) => {
                console.group()
                console.log(xhr);
                console.log(status);
                console.log(error);
                console.groupEnd()
            })

        









    }

})








