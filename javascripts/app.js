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

  	/* Variables that will store info about the player and the opponent */
  var player1, opponent;

  player1 = player.chooseSpecies('Human');
  console.log(player1);
  player1.path = paths.choosePath('Sorcerer');

  opponent = player.chooseSpecies('Orc');
  console.log(opponent);
  opponent.path = paths.choosePath('Druid');

  /* load the player creation options from templates */
	$("#playerName").html(templates.playerName);
	$("#species").html(templates.species);
	$("#path").html(templates.path);
	$("#element").html(templates.element);

	/*
	  Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = true;

    // switch (nextCard) {
    //   case "card--class":
    //     moveAlong = ($("#player-name").val() !== "");
    //     break;
    //   case "card--weapon":
    //     moveAlong = ($("#player-name").val() !== "");
    //     break;
    // }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

}); //end require
