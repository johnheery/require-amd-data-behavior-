define(['jquery'], function($) {
    'use strict';

    function loadBehaviors(context) {
        if (context === undefined) {
            context = window.document;
        }

        $(context).find('[data-behavior]').each(function() {
            var _this = this;
            var behaviors = _this.getAttribute('data-behavior');

            $.each(behaviors.split(' '), function(index, behaviorName) {
                try {
                    require([behaviorName], function(BehaviorName) {
                        var behaviorInstance = new BehaviorName(_this);
                        behaviorInstance.init();
                    });
                } catch(e) {
                    // No Operation
                }
            });
        });
    }

    var app = {
        init: function initBehaviors(context) {
            loadBehaviors(context);
        }
    };

    return app;
});