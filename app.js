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

  $newPortfolio.find('h6').html(this.title);
  $newPortfolio.find('a').attr('href', this.path);
  $newPortfolio.find('img').attr('src', this.image);
  $newPortfolio.find('time').attr('datetime', this.publishedOn);

  return $newPortfolio;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  Portfolio.all.push(new Portfolio(articleObject));
});

Portfolio.all.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
