$(function () {
    
        $('#alert').hide();
    
        $('#add').click(function () {
    
            var formdata = {
                Name: $('#name').val(),
                description: $('#desc').val(),
                photo: $('#photo').val(),
                price: $('#price').val(),
                weight: $('#weight').val()
          
            }
    
            console.log(formdata);
    
    
            $(function () {
    
                $.ajax({
    
                    //CP2. Complete Ajax Code to INSERT new pin data 
                    url: 'https://soaproductapi.herokuapp.com/products',
                    type: 'POST',
                    data: formdata
                }).then(function (data) {
    
                    $('#alert').show();
                    $('#name').val('');
                    $('#desc').val('');
                    $('#photo').val('');
                    $('#price').val('');
                    $('#weight').val('');
                    console.log('Added');
    
                });
            });
        });
    });