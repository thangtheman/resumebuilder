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
var name, role, aboutMe, email, birthday, address, phone, web, file;
    //Click the button:
    $('#form-submit').submit(function(){
            name = $('#inputName').text();
            role = $('#inputRole').text();
            aboutMe = $('#inputAboutme').text();
            email = $('#inputEmail').text();
            birthday = $('#inputBirthday').val();
            address = $('#inputAddress').text();
            phone = $('#inputPhone').text();
            web = $('#inputWeb').url();
        console.log(name)
    // After click submit the change
    //
            $('#logo').replace("ANDERSON SMITH", name);
            alert(name);
        })




});

