'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(app);
