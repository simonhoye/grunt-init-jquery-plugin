/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

! function($, window, document, navigator, undefined) {

    "use strict"; // jshint ;_;

    /* CLASS DEFINITION
     * =============================== */

    var {%= name %} = function(element, options) {
      this.$element = $(element);
      this.options = options;

    };

    {%= name %}.prototype = {

        init: function() {
          var that = this;
          
        }
          
    };


    /* PLUGIN DEFINITION
     * ======================= */

    var old = $.fn.{%= lowercasename %};

    $.fn.{%= lowercasename %} = function(option, args) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('{%= lowercasename %}'),
                options = $.extend({}, $.fn.{%= lowercasename %}.defaults, $this.data(), typeof option === 'object' && option);
                if (!data) {
                    data = new {%= name %}(this, options);
                    $this.data('{%= lowercasename %}', data);
                    data.init();
                }
                if (typeof option === 'string') {
                    data[option].apply(data, args);

                } 
        });
    };

    $.fn.{%= lowercasename %}.defaults = {
      // Set default options here
    };

    $.fn.{%= lowercasename %}.Constructor = Snapshot;


    /* NO CONFLICT
     * ================= */

    $.fn.{%= lowercasename %}.noConflict = function() {
        $.fn.{%= lowercasename %} = old;
        return this;
    };


}(window.jQuery, window, window.document, window.navigator);

