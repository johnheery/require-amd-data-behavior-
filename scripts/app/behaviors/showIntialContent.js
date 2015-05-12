//custom jquery function
//This loads the initial content of the page and populates the #page-content div.


define(['jquery'], function($) {
    'use strict';

    var behavior = function behavior(context) {

        var showIntialContent = function() {
            // Yeah!
            var initialElement = '<p>This is the intial element called from behavior <em>showIntialContent</em></p>';
            var buttonElement ='<button class="showImage">Click to reveal</button>'
            
            $('#page-content').css('display','none');
            $('#page-content').append(initialElement);
            $('#page-content').fadeIn(1000); 

            $('.button-container').html(buttonElement);

                 
        };

        

        this.init = function() {
            showIntialContent();
        };

    };

    return behavior;
});