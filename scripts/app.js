//based on : https://gist.github.com/samloomes/7881703


require.config({
    paths: {
        // Libraries
        'jquery': 'libraries/jquery',
        

        // Plugins
        

        // App
        'behaviors': 'app/behaviors',

        // Behaviors
        //add in the various modules here
        'showIntialContent': 'app/behaviors/showIntialContent',
        'revealButton': 'app/behaviors/revealButton',
        
    },
});

require(['behaviors'], function(behaviors) {
    'use strict';

    // App
    behaviors.init();
});