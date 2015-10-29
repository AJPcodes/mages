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
  ["jquery", "hbs", "q", "templates", "paths", "enemies","player", "spells"],
  function($, Handlebars, q, templates, paths, enemies, player, spells) {

	console.log('wired up');

	$("#playerName").html(templates.playerName);
	$("#species").html(templates.species);
	$("#path").html(templates.path);
	$("#element").html(templates.element);

}); //end require
