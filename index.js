$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        url: 'https://soaproductapi.herokuapp.com/products',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data)
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><a href="edit.html?id='+ data[i].id+'">'+data[i].id+'</td><td>' + data[i].name + '</a></td><td>' + data[i].description + '</td><td>' + '<img src="'+data[i].photo+'" style="width:100px;height:120px;">' + '</td><td>' + data[i].price +'</td><td>' + data[i].weight + '</a></td></tr>';
            $('#productlist').append(row);
        }

    }

});