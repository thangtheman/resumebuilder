/**
 * Created by ThangTheMan on 4/21/15.
 */


$(document).ready(function() {
    //Button to pop-out form and replace variable.
    //$('#edit-1').click(function () {
    //    $('#editing-form').text("test");
    //});

    $(function() {

        var $newItemButton = $('#edit-1');
        var $newItemForm = $('#newItemForm');
        var $textInput = $('input:text');

        $newItemButton.show();
        $newItemForm.hide();

        $('#edit-1').on('click', function(){
            $newItemButton.hide();
            $newItemForm.show();
        });


        $newItemForm.submit(function(e){
            e.preventDefault();
            var newText = $textInput.val();
            $('li:last').after('<li>' + newText + '</li>');
            $newItemForm.hide();
            $newItemButton.show();
            $textInput.val('');
        });

    });
});