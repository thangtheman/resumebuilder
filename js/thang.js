/**
 * Created by ThangTheMan on 4/21/15.
 */

$(document).ready(function() {
    //Button to pop-out form and replace variable.
    //$('#edit-1').click(function () {
    //    $('#editing-form').text("test");
    //});

var name;
    //Click the button:
    $('#formSubmit').submit(function(){
            name = $('#inputName').text();

        }


    )
console.log(name+"   test");



});

