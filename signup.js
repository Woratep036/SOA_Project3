$(function () {
    
        $('#alert').hide();
    
        $('#signup').click(function () {
    
            var formdata = {
                name: $('#name').val(),
                lastname: $('# lastname').val(),
                address: $('#address').val(),
                email: $('#email').val(),
                password: $('#password').val(),
                telno: $('#telno').val(),
    
            }
    
            console.log(formdata);
    
    
            $(function () {
    
                $.ajax({
    
                    //CP2. Complete Ajax Code to INSERT new pin data 
                    url: 'https://customer-api-shopping.herokuapp.com/api/customers',
                    type: 'POST',
                    data: formdata
                }).then(function (data) {
    
                    $('#name').val();
                    $('#lastname').val();
                    $('#address').val();
                    $('#email').val();
                    $('#password').val();
                    $('#telno').val();
                    console.log('Added');
    
                });
            });
        });
    });