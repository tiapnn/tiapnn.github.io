tippy('[data-tippy-content]');

var _ip_server = 'https://mattia-penna-backend-services.000webhostapp.com/services/form.php'; //000webhostapp.com

$('#anteprima').click(() => {
    // if (!$('input:invalid').length && $('textarea').val() != '')
    //     $('#anteprimaModal').modal('show')
    // else {
    //     $('input:invalid').addClass('is-invalid').focus(function() { $(this).removeClass('is-invalid') })
    //     if ($('textarea').val() == '')
    //         $('textarea').addClass('is-invalid').focus(function() { $(this).removeClass('is-invalid') })
    // }
    $('.modal .card-title').html($('#titolo').val())
    $('.modal .card-text').html($('textarea').val())
    $('.modal #prezzo1').html('€' + $('.prezzi input').eq(0).val())
    $('.modal #prezzo2').html('€' + $('.prezzi input').eq(1).val())
        //parseInt per non avere i decimali
    $('.modal #sconto').html('-' + parseInt($('.prezzi input').eq(1).val() * 100 / $('.prezzi input').eq(0).val()) + '%')
    $('.card.orizzontale').click(function() {
        let scheda = $(this)
        let immagini = JSON.parse(scheda.find('div.immagini').html());
        let distanza = scheda.find('div.distanza').html()
        let titolo = scheda.find('h5.card-title').html();
        let servizi = "&nbsp;";
        let coordinate = scheda.find('span.coordinate').html();
        let testo = scheda.find('p.card-text').html();
        apriScheda(scheda, immagini, distanza, titolo, servizi, coordinate, testo, false, true);
        // $(this).click(() => { chiudiSchede() }) //non funge correttamente
    })
    $('#anteprimaModal').modal('show')
})
