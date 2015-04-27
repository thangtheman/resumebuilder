/**
 * Created by ThangTheMan on 4/21/15.
 */

$(document).ready(function() {
    //Button to pop-out form and replace variable.
    //$('#edit-1').click(function () {
    //    $('#editing-form').text("test");
    //});
    $(function() {
        $( "#inputBirthday" ).datepicker({
            changeMonth: true,
            changeYear: true

        });
    });
var name, role, aboutMe, email, birthday, address, phone, picture;
    //Click the button:
    $('#form-submit').submit(function(){
            name = $('#inputName').val();
            role = $('#inputRole').val();
            aboutMe = $('#inputAboutme').val();
            email = $('#inputEmail').val();
            birthday = $('#inputBirthday').val();
            address = $('#inputAddress').val();
            phone = $('#inputPhone').val();


    // After click submit the change
    //

        $('.oName').html(name);
        $('.oRole').html(role);
        $('.oAboutMe').html(aboutMe);
        $('.oEmail').html(email);
        $('.oAddress').html(address);
        $('.oPhone').html(phone);
        $( ".src" ).replaceWith(picture);


// After clicking submit

        $('#myModal').modal('hide');


    })




});

