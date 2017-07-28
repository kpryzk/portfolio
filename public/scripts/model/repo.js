'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      }
    })
    .then(
      data => {
        return repos.all = data;
      },
      err => {
        console.error(err)
      }
    )
    .then(callback)
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
