'use strict';

Portfolio.all = [];

function Portfolio(rawDataObj) {
  this.title = rawDataObj.title;
  this.image = rawDataObj.image;
  this.path = rawDataObj.path;
  this.publishedOn = rawDataObj.publishedOn;
}

Portfolio.prototype.toHtml = function() {
  var $newPortfolio = $('article.template').clone();

  $newPortfolio.removeClass('template')

  $newPortfolio.find('h2').html(this.title);
  $newPortfolio.find('a').attr('href', this.path);
  $newPortfolio.find('img').attr('src', this.image);
  $newPortfolio.find('time').attr('datetime', this.publishedOn);

  return $newPortfolio;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  Portfolio.all.push(new Portfolio(articleObject));
});

Portfolio.all.forEach(function(article) {
  $('#articles').append(article.toHtml());
});

var articleView ={};

articleView.handleMainNav = function() {
  $('.tab').on('click', function(){
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });
  $('.main-nav .tab:first').click();
};

// articleView.setTeasers = function() {
//   $('h3').hide(); // Hide elements beyond the first 2 in any article body.
//   $('#articles').on('click', '.read-on', function(){
//     event.preventDefault();
//     $(this).parent().find('*').fadeIn();
//   });
// };

articleView.toggleMaybe = function(){
  $('h3').hide();
  $('#articles').on('click', '.read-on', function() {
    $(this).parent().find('h3').toggle()
  });
}

articleView.handleMainNav();
// articleView.setTeasers();
articleView.toggleMaybe();
