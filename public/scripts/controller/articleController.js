'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  articleController.index = () => {
    $('#about').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(app);
