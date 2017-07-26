'use strict';

var app = app || {};

(function (module) {

  function Portfolio(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key])
  }

  Portfolio.prototype.toHtml = function() {

    var template = $('#handlebarTemplate').html();
    var compile = Handlebars.compile(template);

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

    return compile(this);
  };

  rawData.map(ele => new Portfolio(ele)).map(function(thing){
    $('#articles').append(thing.toHtml());
  })

  var articleView ={};

  articleView.handleMainNav = function() {
    $('.tab').on('click', function(){
      $('.tab-content').hide();
      $('#' + $(this).attr('data-content')).show();
    });
    $('.main-nav .tab:first').click();
  };

  articleView.toggleMaybe = function(){
    $('h3').hide();
    $('#articles').on('click', '.read-on', function() {
      $(this).parent().find('h3').toggle()
    });
  }

  articleView.handleMainNav();
  articleView.toggleMaybe();

  module.Portfolio = Portfolio;

})(app);
