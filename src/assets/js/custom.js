/* Set navigation */

function openNav() {
    $("#mySidenav").addClass("width80");
    $("#nav-res").addClass("opacityon");
    $(".cd-shadow-layer").addClass("displayblock");
    $(".wrapper").addClass("position-fixed");
  }
  
  function closeNav() {
    $("#mySidenav").removeClass("width80");
    $("#nav-res").removeClass("opacityon");
    $(".cd-shadow-layer").removeClass("displayblock");
    $(".wrapper").removeClass("position-fixed");
  } 
  

$(document).ready(function(){ 

    $(".cd-shadow-layer").click(function(){  closeNav();  });
  
    /* occupation section */

    $(".occupation-card-box").addClass("disabled");
    var id = '';
    $(".occupation-card-box .form-radio-occupation").click(function() {
        id = $(this).attr('id');
        $(this).parent().addClass('active').removeClass('disabled');
        $( ".occupation-card-box .form-radio-occupation" ).each(function( index ) {
       
            if ($(this).attr('id') != id) {
                $(this).parent().addClass('disabled').removeClass('active');
            }
        });
       
    });

    /* End of occupation section */

    /* age group section */

    $(".age-group-card-box").addClass("disabled01");
    var id01 = '';
    $(".age-group-card-box .form-radio-age-group").click(function() {
        id01 = $(this).attr('id');
        $(this).parent().addClass('active').removeClass('disabled01');
        $( ".age-group-card-box .form-radio-age-group" ).each(function( index ) {
       
            if ($(this).attr('id') != id01) {
                $(this).parent().addClass('disabled01').removeClass('active');
            }
        });
       
    });


    $(".age-group-card-box").addClass("disabled01");
    var id01 = '';
    $(".age-group-card-box .weekly").click(function() {
        id01 = $(this).attr('id');
        $(this).parent().addClass('active').removeClass('disabled01');
        $( ".age-group-card-box .weekly" ).each(function( index ) {
       
            if ($(this).attr('id') != id01) {
                // $(this).parent().addClass('disabled01').removeClass('active');
            }
        });
       
    });

    $(".age-group-card-box").addClass("disabled01");
    var id01 = '';
    $(".age-group-card-box .monthly").click(function() {
        id01 = $(this).attr('id');
        $(this).parent().addClass('active').removeClass('disabled01');
        $( ".age-group-card-box .monthly" ).each(function( index ) {
       
            if ($(this).attr('id') != id01) {
                // $(this).parent().addClass('disabled01').removeClass('active');
            }
        });
       
    });

    /* End of age group section */

    /* Areas section */
   
    $('.form-checkbox-areas').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass('selected');
        } else {
            $(this).parent().removeClass('selected');
        }
    });

    /* End of areas section */

    /* user section */
   
    $('.form-checkbox-follow').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass('selected');
        } else {
            $(this).parent().removeClass('selected');
        }
    });

    /* End of user section */

     /* Areas section */
   
     $('.form-checkbox-groups').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass('selected');
        } else {
            $(this).parent().removeClass('selected');
        }
    });

    /* End of areas section */

    $('#show_password').on('click', function(){  
        var passwordField = $('#password');  
        var passwordFieldType = passwordField.attr('type');
        
        if(passwordField.val() != '')
        {
            if(passwordFieldType == 'password')  
            {  
                passwordField.attr('type', 'html');  
                $(this).html('<i class="material-icons password-hide">remove_red_eye</i>');  
            }  
            else  
            {  
                passwordField.attr('type', 'password');  
                $(this).html('<i class="material-icons password-view">remove_red_eye</i>');     
            }
        }

    }); 

    $('#show_password2').on('click', function(){  
        var passwordField = $('#confirm-password');  
        var passwordFieldType = passwordField.attr('type');
        
        if(passwordField.val() != '')
        {
            if(passwordFieldType == 'password')  
            {  
                passwordField.attr('type', 'html');  
                $(this).html('<i class="material-icons password-hide">remove_red_eye</i>');  
            }  
            else  
            {  
                passwordField.attr('type', 'password');  
                $(this).html('<i class="material-icons password-view">remove_red_eye</i>');     
            }
        }

    });  

    /* occupation section */

    $(".what-to-do-card-box").addClass("disabled");
    var id = '';
    $(".what-to-do-card-box .form-radio-what-to-do").click(function() {
        id = $(this).attr('id');
        $(this).parent().addClass('active').removeClass('disabled');
        $( ".what-to-do-card-box .form-radio-what-to-do" ).each(function( index ) {
       
            if ($(this).attr('id') != id) {
                $(this).parent().addClass('disabled').removeClass('active');
            }
        });
       
    });

    /* End of what-to-do section */

    /* Loader */

    /* End of loader */
    


});


/* end of navigation */