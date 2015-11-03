    /* Variables that will store info about the player and the opponent */
  var player1, opponent, playerName, chosenSpecies, chosenPath, chosenElement, playerRoll, compRoll, attackCounter=0, playerRollCounter = 0, compRollCounter = 0;



  /* load the player creation options from templates */

/*
  var templates = {};
  templates.playerName = Handlebars.compile("../templates/playerName.hbs");
  templates.species = Handlebars.compile("../templates/species.hbs");
  templates.path = Handlebars.compile("../templates/path.hbs");
  templates.element = Handlebars.compile("../templates/element.hbs");
  templates.gameBoard = Handlebars.compile("../templates/gameBoard.hbs");
*/

  // $("#playerName").html(templates.playerName);
  // $("#species").html(templates.species);
  // $("#path").html(templates.path);
  // $("#element").html(templates.element);

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
  player1 = chooseSpecies(chosenSpecies);
  player1.path = choosePath(chosenPath);
  player1.playerName = $('#player-name').val();
  player1.element = chooseElement(chosenElement);

  //opponent is a completed opponent object
  opponent = chooseSpecies('Surprise Me');
  opponent.playerName = 'Opponent';
  opponent.path = choosePath('Surprise Me');
  opponent.element = chooseElement('Surprise Me');

  var combinedPlayers = [player1, opponent];

  //function to load gameboard
  var source = $('#gameBoardTemplate').html();
  var gameBoard = Handlebars.compile(source);
  $("#gameboard").html(gameBoard({players: combinedPlayers})).show();

  });

  // $(document).on('click', '#attackButton', function() {
  //   if(attackCounter % 2 === 0) {
  //     playerAttack();
  //   } else {
  //     opponentAttack();
  //   }
  //     attackCounter += 1;
  // });





  /*FOR DEVELOPMENT - go straight to game board*/

  // $("#player-setup").hide();

  //   //player 1 is a completed player object

  // player1 = chooseSpecies('Surprise Me');
  // player1.path = choosePath('Surprise Me');
  // player1.playerName = 'Player1';
  // player1.element = chooseElement('Surprise Me');
  // // player1.spell = chooseSpell('Surprise Me');

  // //opponent is a completed opponent object
  // opponent = chooseSpecies('Surprise Me');
  // opponent.playerName = 'Opponent';
  // opponent.path = choosePath('Surprise Me');
  // opponent.element = chooseElement('Surprise Me');
  // // opponent.spell = chooseSpell('Surprise Me');

  // var combinedPlayers = [player1, opponent];

  // //function to load gameboard
  // var source = $('#gameBoardTemplate').html();
  // var gameBoard = Handlebars.compile(source);
  // $("#gameboard").html(gameBoard({players: combinedPlayers})).show();


  /*End development log in*/
