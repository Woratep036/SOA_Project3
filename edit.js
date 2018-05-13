var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function () {

    $('#alert').hide();

    var productid = getUrlParameter('id');

    $.ajax({

      
        url: 'https://soaproductapi.herokuapp.com/products/'+ productid,
        type: 'GET'


    }).then(function (data) {

        $('#name').val(data.name);
        $('#desc').val(data.description);
        $('#photo').val(data.photo);
        $('#price').val(data.price);
        $('#weight').val(data.weight);

    });

    $('#save').click(function () {

        var formdata = {
            name: $('#name').val(),
            description: $('#desc').val(),
            photo: $('#photo').val(),
            price: $('#price').val(),
            weight: $('#weight').val()
        }

        console.log(formdata);

        $.ajax({

      
            url: 'https://soaproductapi.herokuapp.com/products/'+ productid,
            type: 'PUT',
            data:formdata


        }).then(function (data) {

            $('#alert').show();
            console.log('Edited');

        });
    });

    $('#delete').click(function () {

        $.ajax({
 
            url: 'https://soaproductapi.herokuapp.com/products/'+ productid,
            type: 'DELETE'

        }).then(function (data) {

            window.location.href = 'index.html';

        });
    });
});