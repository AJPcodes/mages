requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'q': '../lib/bower_components/q/q'
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "q", "classes", "enemies","player","spells"],
  function($, Handlebars, bootstrap, q, classes, enemies, player, spells) {




}); //end require
