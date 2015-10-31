    /* Variables that will store info about the player and the opponent */
  var player1, opponent, playerName, chosenSpecies, chosenPath, chosenElement, attackCounter=0;

    var castSpell = function(spellName) {

      $('body').append('<div id="effectOverlay"><img id="effectImg"></div>');
      /* change Image in effect overlay overlay div*/
      $('#effectOverlay').css({
        "position": "fixed",
        "display": "none",
        "top": '20%',
        "left": "20%",
        'z-index': '10',
        'backgroundColor': 'rbba(0,0,0,0)',
        'max-height': '60%',
        'max-width': '60%'
       });

      $('#effectImg').css({
        'max-height': '400px',
        'max-width': '400px'
       });

      switch(spellName) {
            case "Fire":
                $('#effectImg').attr('src', '../styles/pics/flame.png');
                break;
            case "Earth":
                $('#effectImg').attr('src', '../styles/pics/rock.png');
                break;
            case "Wind":
                 $('#effectImg').attr('src', '../styles/pics/lightning.png');
                break;
            case "Arcana":
                 $('#effectImg').attr('src', '../styles/pics/arcana.png');
                break;
            case "Water":
                 $('#effectImg').attr('src', '../styles/pics/water.png');
                break;
            default:
      }


      $("#effectOverlay").fadeIn("easeInBounce");
      $("#effectOverlay").fadeOut();
  };


  function playerAttack () {
    var playerAttackDamage = player1.spell.damage + (player1.attack + player1.path.attackBonus) - (opponent.defense + opponent.path.defenseBonus);
    castSpell(player1.spell.name);
    opponent.health -= playerAttackDamage;
    console.log("opponent.health", opponent.health);
    $('#opponentHealth').text("Health: " + opponent.health);
    if (opponent.health <= 0) {
      alert(player1.playerName + " Wins!");
      $('#attackButton').hide();
    }
  }

  function opponentAttack () {
  var opponentAttackDamage = opponent.spell.damage + (opponent.attack + opponent.path.attackBonus) - (player1.defense + player1.path.defenseBonus);
    castSpell(opponent.spell.name);
    player1.health -= opponentAttackDamage;
    console.log("player1.health", player1.health);
    $('#playerHealth').text("Health: " + player1.health);
    if (player1.health <= 0) {
      alert(player1.playerName + " died of broken axel!");
      $('#attackButton').hide();
    }
  }

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
  player1.spell = chooseSpell(chosenElement);
  console.log(player1.path, chosenPath);
  console.log(player1);

  //opponent is a completed opponent object
  opponent = chooseSpecies('Surprise Me');
  opponent.path = choosePath('Surprise Me');
  opponent.spell = chooseSpell('Surprise Me');
  console.log(opponent);

  var combinedPlayers = [player1, opponent];

  //function to load gameboard
  var source = $('#gameBoardTemplate').html();
  var gameBoard = Handlebars.compile(source);
  $("#gameboard").html(gameBoard({players: combinedPlayers})).show();

  });

  $(document).on('click', '#attackButton', function() {
    if(attackCounter % 2 === 0) {
      playerAttack();
    } else {
      opponentAttack();
    }
      attackCounter += 1;
  });