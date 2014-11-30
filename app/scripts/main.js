 $( document ).ready(function() {

//GUIDELINE TOOGLE
      $( "#guidelines" ).click(function() {
           $("*").toggleClass( "outline" );
      });

//CALCULATE WITH TO DISPLAY MOBILE NAV INSTEAD OD DT ONE
  var width = $(window).width();
  console.log(width) //NOT TOO SURE JQUERY GOT THIS RIGHT!!!!!!!
  if (width< 758){
      $( "#nav" ).hide();
      $('#mobile_menu').click(function() {
          $( "#nav" ).slideToggle( "slow" );  
        });
      }else{
         $( "#nav" ).show();
      }


//JS FOR WORK PAGE: ISOTOPE + PASSWORD VERIFICATION
var $container = $('#container');
$( "#submit" ).click(function()  {
      if ( $( "input:first" ).val() === "correct" ) {
                $('.fourth').css('display','none');
                $('.item').css('display','inline-block');
                $('#pass').fadeOut('slow');
                // init
                $container.css('top', '100px');
                $container.isotope({
                    // options
                    itemSelector: '.item',
                 

                });

                $('.item').on('click', '.close', function() {
                    $('.item').removeClass('large');
                    $('.my-slidershow').css('display', 'none');
                    $('.item').find('.more-detail').css('display', 'none');
                    $('.item').find('.thumbs').css('display', 'block');
                    $('.item').find('.close').css('display', 'none');
                    $container.isotope('layout');
                    return false
                });

                $container.on('click', '.item', function(){
                  var thisEle = $(this);
                  $('.item').not(this).find('.more-detail').css('display', 'none');
                  $('.item').removeClass('large');
                  $('.item').find('.close').css('display', 'none');
                  $('.my-slidershow').css('display', 'none');
                  $('.item').find('.more-detail').css('display', 'none');
                  $('.item').find('.thumbs').css('display', 'block');
                  $container.isotope('layout');
                  $('.item').not(this).find('.thumbs').css('display', 'block');
                  $('.item').not(this).removeClass('large');
                  $(this).addClass('large');
                  $container.isotope('layout');

                  if ( $(this).hasClass('large')) {
                        $(this).find('.more-detail').css('display', 'block');
                        $(this).find('.more-detail').show();
                        $(this).find('.thumbs').css('display', 'none');
                        $(this).find('.close').css('display', 'block');
                        $(this).find('.my-slidershow').css('visibility', 'visible');
                        $(this).find('.my-slidershow').css('display', 'block');
                        $container.isotope('layout');
                  } else {
                        $(this).find('.more-detail').css('display', 'none');
                        $(this).find('.thumbs').css('display', 'block');
                      }
                  $container.isotope('layout');
                });
            }else{
            alert("password not valid")
            }
      });//END SUBMIT FUNCTION

       //GALLERIES ON EACH ISOTOPE ELEMENTS
      $('.item').find('.my-slidershow').each(function (i) {
          $(this).bjqs({       
              'width' : '100%',
//              'height' : 381,
             //'responsive' : true,
              'usecaptions' : true, // show captions for images using the image title tag
              'nexttext' : '<img class="gallery-controller" src="/static/images/next.png"  />', // Text for 'next' button (can use HTML)
              'prevtext' : '<img class="gallery-controller" src="/static/images/prev.png"  />', // Text for 'previous' button (can use HTML)
              'automatic' : true, // automatic
              'animspeed' : 2000,
            });
         });
}); // END DOC READY FUNCTION

//WATCH RESIZE WINDOW FUNCTION
$( window ).resize(function() {
   var width = $(window).width();
   console.log(width)
   if (width< 758){
        $( "#nav" ).hide();
        $('#mobile_menu').unbind('click').click(function(){
             $( "#nav" ).slideToggle( "slow" );
          })
   }else{
         $( "#nav" ).show();
      }
});
