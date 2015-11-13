


      $(document).ready(function() {
            var pathArray = window.location.pathname.split( '/' );
        var slug = pathArray[pathArray.length-1];
   
        if (slug.match(/^\/?southcentre-holiday-gift-guide/)){

                   
            var visited = $.cookie("visited");
            var winwidth = $(window).width();
            if(visited == null){ visited = 1; $.cookie('visited', visited, { expires: 1 }); }
            $( "#submit" ).mouseup(function() {
                visited = 100; 
                $.cookie('visited', visited, { expires: 1 });
            });
            
            $( "#submit-mobile").bind('touchstart mousedown', function(event){
                  visited = 100; 
                $.cookie('visited', visited, { expires: 1 });
            
            });
     
            if (visited <= 1) {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || winwidth <= 600) {
                    //$(".hidden-popup-bg").show();
                }else{
                     $(".hidden-popup-bg").show();
                }
                visited++;
                $.cookie('visited', visited, { expires: 1 });
            } else {
                visited++;
                $.cookie('visited', visited, { expires: 1 });
                return false;
            } 
            
        
            
        $(".hidden-popup-bg").click(function(event){
            
            if( !$( event.target).is('.hidden-popup-form') ) {
            close_popup();
        } else {
            event.stopPropagation();
        }
        });
        $(".hidden-popup-bg .hidden-popup-form").click(function(event){
            event.stopPropagation();
        });     
        }
      });
      function validateNewsletterPopup(){

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var name = firstName + " " + lastName;
        $('#fieldName').val(name);
        return true;
    
        }

function getCookie(name) {
     var value = "; " + document.cookie;
     var parts = value.split("; " + name + "=");
     if (parts.length == 2) return parts.pop().split(";").shift();
   }
function close_popup(){
        $(".hidden-popup-bg").fadeOut();
    } 

function switchTap(divContent){
    var classDiv = "." + divContent;
    var idDiv = "#"+divContent;
    removeCurrent();
    $(classDiv).addClass('current_item');
    removeContent();
    $(idDiv).show();
}
function removeCurrent(){
    $('.him').removeClass('current_item');
    $('.her').removeClass('current_item');
    $('.kids').removeClass('current_item');
}
function removeContent(){
    $('#him').hide();
    $('#her').hide();
    $('#kids').hide();
}

