tippy('[data-tippy-content]');

var _ip_server = 'https://mattia-penna-backend-services.000webhostapp.com/services/form.php'; //000webhostapp.com

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

        //sending post to backend service
        $.post(_ip_server, { "name": name, "email": email, "subject": subject, "message": message })
            .done(function (risposta) {
                console.log(risposta)
            })
            .fail((xhr, status, error) => {
                console.group()
                console.log(xhr);
                console.log(status);
                console.log(error);
                console.groupEnd()
            })

        //clearing input after send
        setTimeout(() => {
            $('#name').val("");
            $('#email').val("");
            $('#subject').val("");
            $('#message').val("");
        }, 500);



    }

})








