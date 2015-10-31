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
  var player1, opponent, playerName, chosenSpecies, chosenPath, chosenElement;


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


  /*Event handlers that will assign the selected variables to the player*/

  $(document).on('click', '.card__button', function(e){
    e.preventDefault();
    var clickedDiv = $(this);
    var clickedDivType = clickedDiv.attr('cardType');
    var clickedDivText = clickedDiv.children('.btn').children().text().replace(">", "");
    // console.log('clicked Div', clickedDiv);
    // console.log('button type', clickedDivType);
    // console.log('button text', clickedDivText);

    if (clickedDivType !== undefined) {

      //unselect other like divs
      clickedDiv.siblings().each(function(index, sibling){

        if ($(sibling).attr('cardType') == clickedDivType) {
          $(sibling).removeClass('selected');
        }
      });

      //add 'selected' class to the clicked div
      clickedDiv.addClass('selected');

      //record the selection
      if (clickedDivType === 'species') {
        chosenSpecies = clickedDivText;
      } else if (clickedDivType === 'path') {
        chosenPath = clickedDivText;
      } else if (clickedDivType === 'element') {
        chosenElement = clickedDivText;
      }
    }
  });//end button handlers


  $(document).on('click', '#startGame', function(e){
    e.preventDefault();

  //player 1 is a completed player object
  player1 = player.chooseSpecies(chosenSpecies);
  console.log(player1);
  player1.path = paths.choosePath(chosenPath);
  player1.name = $('#player-name').text();

  //opponent is a completed opponent object
  opponent = player.chooseSpecies('Surprise Me');
  console.log(opponent);
  opponent.path = paths.choosePath('Surprise Me');

  var combinedPlayers = [player1, opponent];
  console.log(combinedPlayers);

  //function to load gameboard
  $("#gameboard").html(templates.gameBoard({players: combinedPlayers})).show();

  });

}); //end require
