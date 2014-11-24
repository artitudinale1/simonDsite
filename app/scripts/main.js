 $( document ).ready(function() {












$( "#guidelines" ).click(function()  {
	
 	$("*").toggleClass( "outline" );
  
});



 	 var width = $(window).width();
 	 console.log(width)
 	 	if (width< 767){
	    console.log('gg')
	    $( "#nav" ).hide();
	    	$('#mobile_menu').click(function() {
	    		$( "#nav" ).slideToggle( "slow" );

	    		console.log('gvvg')
	    	
	    	});
	    }else{
	    	 $( "#nav" ).show();
	    }

var $container = $('#container');



$( "#submit" ).click(function()  {
	if ( $( "input:first" ).val() === "correct" ) {
		//console.log('dui')
	$('#logos').css('display','none');
	$('#isotope').css('display','block');
	$('#pass').fadeOut('slow');
	//$('.item').css('height' ,'498px;')



// init
$container.css('top', '100px');
$container.isotope({
  // options
  itemSelector: '.item',
    masonry: {
    columnWidth: 5
  }

});



 $('.item').on('click', '.close', function() {
    //  alert('dui')
       $('.item').removeClass('large');
 $('.my-slidershow').css('display', 'none');
 $('.item').find('.more-detail').css('display', 'none');
            $('.item').find('.thumbs').css('display', 'block');
          $container.isotope('layout');
          return false
       //  $('.item').addClass('item');
            });




   $container.on('click', '.item', function(){






        var thisEle = $(this);
          $('.item').not(this).find('.more-detail').css('display', 'none');
          $('.item').removeClass('large');
            $('.item').removeClass('large');
 $('.my-slidershow').css('display', 'none');
 $('.item').find('.more-detail').css('display', 'none');
            $('.item').find('.thumbs').css('display', 'block');
          $container.isotope('layout');
         
          $('.item').not(this).find('.thumbs').css('display', 'block');
       	  //$(this).css('width', '600px')
       	//   $('.item').not(this).find('.my-slidershow').css('display', 'none');
       	  $('.item').not(this).removeClass('large');
          console.log('reset')
           $(this).addClass('large');
       	  $container.isotope('layout');

       	  if ( $(this).hasClass('large')) {

         


$(this).find('.more-detail').css('display', 'block');

       	  	$(this).find('.more-detail').show();
       	  	 $(this).find('.thumbs').css('display', 'none');
       	  	  $(this).find('.my-slidershow').css('visibility', 'visible');
               $(this).find('.my-slidershow').css('display', 'block');
       	  	$container.isotope('layout');
             console.log('open')
       	  } else {
       	  	$(this).find('.more-detail').css('display', 'none');
       	  	$(this).find('.thumbs').css('display', 'block');
             console.log('all close')
       	  }
       	 $container.isotope('layout');
       	});


  
   
}
else{
	alert("password not valid")
}
});


   $('.item').find('.my-slidershow').each(function (i) {
    $(this).bjqs({
       
        'width' : 600,
         'height' : 600,
        'responsive' : true,
        'usecaptions' : true, // show captions for images using the image title tag
        'nexttext' : '<img class="gallery-controller" src="../images/next.png"/>', // Text for 'next' button (can use HTML)
        'prevtext' : '<img class="gallery-controller" src="../images/prev.png"/>', // Text for 'previous' button (can use HTML)
        'automatic' : true, // automatic
        'animspeed' : 2000,
    });
   });

   

	    });


	    $( window ).resize(function() {
	    		 var width = $(window).width();
 				 console.log(width)
 	 			if (width< 767){
	   				 console.log('gg')
	   			 $( "#nav" ).hide();
	    			$('#mobile_menu').unbind('click').click(function(){
	    				$( "#nav" ).slideToggle( "slow" );
	    				console.log('gg')
	    	
	    			})
	    		}else{
	    	 $( "#nav" ).show();
	    }


	    });

