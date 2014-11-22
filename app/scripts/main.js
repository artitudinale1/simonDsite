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
	$('.item').css('height' ,'498px;')
}
else{
	alert("password not valid")
}
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

