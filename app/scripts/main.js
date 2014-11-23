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


$( "#submit" ).click(function()  {
	if ( $( "input:first" ).val() === "correct" ) {
	$('#logos').css('display','none');
	$('#isotope').css('display','block');
	$('#pass').fadeOut('slow');
	//$('.item').css('height' ,'498px;')


var $container = $('#container');
// init
$container.css('top', '100px');
$container.isotope({
  // options
  itemSelector: '.item',
    masonry: {
    columnWidth: 5
  }

});

   $container.on('click', '.item', function(){
        var thisEle = $(this);
          $('.item').not(this).find('.more-detail').css('display', 'none');
          $(this).addClass('large');
       	  //$(this).css('width', '600px')
       	  $('.item').not(this).removeClass('large');
       	  $container.isotope('layout');

       	  if ( $(this).hasClass('large')) {
       	  	$(this).find('.more-detail').show();
       	  	$container.isotope('layout');
       	  } else {
       	  	$(this).find('.more-detail').css('display', 'none');
       	  }
       	 $container.isotope('layout');
       	});


   
}
else{
	alert("password not valid")
}
});

 $('#close').click(function()  {
 		console.log('close')
       $('.item').removeClass('large');
       $('.item').find('.more-detail').hide();
       $container.isotope('layout');
       $('.item').addClass('item');
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

