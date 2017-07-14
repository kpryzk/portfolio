'use strict';

Portfolio.all = [];

function Portfolio(rawDataObj) {
  this.title = rawDataObj.title;
  this.image = rawDataObj.image;
  this.path = rawDataObj.path;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body
}

Portfolio.prototype.toHtml = function() {

  var rawData = {
    title: this.title,
    image: this.image,
    path: this.path,
    publishedOn: this.publishedOn,
    body: this.body
  };

  var template = $('#handlebarTemplate').html();
  var compile = Handlebars.compile(template);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  var newSection = compile(rawData);
  $('#articles').append(newSection);
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

articleView.toggleMaybe = function(){
  $('h3').hide();
  $('#articles').on('click', '.read-on', function() {
    $(this).parent().find('h3').toggle()
  });
}

articleView.handleMainNav();
articleView.toggleMaybe();
