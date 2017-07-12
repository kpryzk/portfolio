'use strict';

Portfolio.all = [];

function Portfolio(rawDataObj) {
  this.title = rawDataObj.title;
  this.image = rawDataObj.image;
  this.path = rawDataObj.path;
  // this.publishedOn = rawDataObj.publishedOn;
}

Portfolio.prototype.toHtml = function() {
  var $newPortfolio = $('article.template').clone();

  $newPortfolio.removeClass('template')

  $newPortfolio.find('h6').html(this.title);
  $newPortfolio.find('a').attr('href', this.path);
  $newPortfolio.find('img').attr('src', this.image);

  return $newPortfolio;
};

rawData.forEach(function(articleObject) {
  Portfolio.all.push(new Portfolio(articleObject));
});

Portfolio.all.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
