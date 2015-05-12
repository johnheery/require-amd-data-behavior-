//custom jquery function
//On button click of class .showImage the imagePath is appended to .imageHolder.


define(['jquery'], function($) {
    'use strict';

    var behavior = function behavior(context) {

        var revealButton = function() {
            // Yeah!
		var imagePath ='<img src="img/triedandtested_logo.png">';            
			$('.showImage').click(function() {
  				
				$('.imageHolder').append(imagePath);

  				
			});
                 
        };

        

        this.init = function() {
            revealButton();
        };

    };

    return behavior;
});


