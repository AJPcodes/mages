
/*Takes a die and returns a random die based on the possible rolls*/
  var roll = function(die){

    var possibleRolls = ["Water", "Wind", "Fire", "Earth", "Arcana", "Skull"];
    thisRoll = possibleRolls[Math.floor(Math.random()*6)];

    if (thisRoll == 'Water') {
      $(die).attr('src', './styles/pics/waterIcon.png');
      $(die).attr('value', "Water");
      $(die).addClass('selected');

    } else if (thisRoll == 'Wind') {
      $(die).attr('src', './styles/pics/tornadoIcon.png');
      $(die).attr('value', "Wind");
      $(die).addClass('selected');

    } else if (thisRoll == 'Fire') {
      $(die).attr('src', './styles/pics/flameIcon.png');
      $(die).attr('value', "Fire");
      $(die).addClass('selected');
    } else if (thisRoll == 'Earth') {
      $(die).attr('src', './styles/pics/rockIcon.png');
      $(die).attr('value', "Earth");
      $(die).addClass('selected');
    } else if (thisRoll == 'Arcana') {
      $(die).attr('src', './styles/pics/arcanaIcon.png');
      $(die).attr('value', "Arcana");
      $(die).addClass('selected');
    } else if (thisRoll == 'Skull') {
      $(die).attr('src', './styles/pics/skullIcon.png');
      $(die).attr('value', "Skull");
      $(die).removeClass('selected');

    }

  };

/*When a player clicks the roll button roll all die that are selected*/
  $(document).on('click', '#playerRoll', function(){

    var die1 = $("#playerDie1");
    var die2 = $("#playerDie2");
    var die3 = $("#playerDie3");
    var die4 = $("#playerDie4");
    var die5 = $("#playerDie5");

    var dice = [die1, die2, die3, die4, die5];

    /* First roll is always all 5 dice */
    if (playerRollCounter === 0){
      dice.forEach(function(die){
        roll(die);
      });
    } else {
      dice.forEach(function(die){
        //all other rolls roll "selected dice"
        if (die.hasClass('selected')) {
        roll(die);
        }
      });
    }

    //keeps track of how many rolls a player has taken
    playerRollCounter += 1;

    if (playerRollCounter == 3) {
      $('#playerRoll').attr('disabled', true);
    }

    //enable attack button after first rool
    $('#playerAttackButton').attr('disabled', false);
    //display remaining rolls
    $('#playerRoll').text(3 - playerRollCounter + " Rolls Left");

  });

  $(document).on('click', '#compRoll', function(){

    var die1 = $("#compDie1");
    var die2 = $("#compDie2");
    var die3 = $("#compDie3");
    var die4 = $("#compDie4");
    var die5 = $("#compDie5");

    var dice = [die1, die2, die3, die4, die5];

    if (compRollCounter === 0){
      dice.forEach(function(die){
        roll(die);
      });
    } else {
      dice.forEach(function(die){
        if (die.hasClass('selected')) {
        roll(die);
        }
      });
    }

    compRollCounter += 1;

    if (compRollCounter == 3) {
      $('#compRoll').attr('disabled', true);
    }

    $('#compAttackButton').attr('disabled', false);

    $('#compRoll').text(3 - compRollCounter + " Rolls Left");

  });


  $(document).on('click', '.die', function(){
    if ($(this).attr('value') == 'Skull') {
    $(this).removeClass('selected');
    } else {
    $(this).toggleClass('selected');
    }
  });


/* Battle logic after rolls*/


//special effect function. Breifly displays an element in the foreground.
    var castSpell = function(spellName) {

      //create the div to show//
      $('body').append('<div id="effectOverlay"><img id="effectImg"></div>');
      /* change Image in effect overlay overlay div*/
      $('#effectOverlay').css({
        "position": "fixed",
        "display": "none",
        "top": '20%',
        "left": "20%",
        'z-index': '10',
        'backgroundColor': 'rbba(0,0,0,0.5)',
        'max-height': '60%',
        'max-width': '60%'
       });

      $('#effectImg').css({
        'max-height': '400px',
        'max-width': '400px'
       });
      //choose the correct image based on the function parameter
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

      //display and hide the effect
      $("#effectOverlay").fadeIn("easeInBounce");
      $("#effectOverlay").fadeOut(2000);
  };

//establish all potential spells as variables.
var water = new Water();
var wind = new Wind();
var fire = new Fire();
var earth = new Earth();
var arcana = new Arcana();

  function playerAttack () {

      var waterCount = 0,
          windCount = 0,
          fireCount = 0,
          earthCount = 0,
          arcanaCount = 0;
        //establish base damage
     var playerAttackDamage = (player1.attack + player1.path.attackBonus) - (opponent.defense + opponent.path.defenseBonus);

     //augment damage based on dice rolled. See spells for each spell's logic
    $('div#playerDice').children().each(function(index, die){
      console.log($(die).attr('value'));
      var dieValue = $(die).attr('value');

      if (dieValue === 'Water'){
        playerAttackDamage = playerAttackDamage + water.cast(opponent.element);
        waterCount += 1;
      } else if (dieValue === 'Wind'){
        playerAttackDamage = playerAttackDamage + wind.cast(opponent.element);
        windCount += 1;
      } else if (dieValue === 'Fire'){
        playerAttackDamage = playerAttackDamage + fire.cast(opponent.element);
        fireCount += 1;
      } else if (dieValue === 'Earth'){
        playerAttackDamage = playerAttackDamage + earth.cast(opponent.element);
        earthCount += 1;
      } else if (dieValue === 'Arcana'){
        playerAttackDamage = playerAttackDamage + arcana.cast(opponent.element);
        arcanaCount += 1;
      }

    });
    //show special effect for multiple dice of the same type
      if (waterCount > 2) {
        castSpell('Water');
        playerAttackDamage = playerAttackDamage * 1.5;

      }
      if (windCount > 2) {
        castSpell('Wind');
        playerAttackDamage = playerAttackDamage * 1.5;

      }
      if (fireCount > 2) {
        castSpell('Fire');
        playerAttackDamage = playerAttackDamage * 1.5;

      }
      if (earthCount > 2) {
        castSpell('Earth');
        playerAttackDamage = playerAttackDamage * 1.5;

      }
      if (arcanaCount > 2) {
        castSpell('Arcana');
        playerAttackDamage = playerAttackDamage * 1.5;

      }

      //subtract damage from the opponent
    opponent.health -= playerAttackDamage;
    $('#opponentHealth').text("Health: " + opponent.health);
    //display the most recent attack
    $('#playerOutput').html(player1.playerName + " attacked with for " + playerAttackDamage);
    if (opponent.health <= 0) {
      alert(player1.playerName + " Wins!");
      $('#playerAttackButton').hide();
      $('#compAttackButton').hide();
    }
    //reset the board for the next player
    $('#compAttackButton').attr('disabled', false);
    $('#playerAttackButton').attr('disabled', true);
    compRollCounter = 0;
    $('#compRoll').attr('disabled', false);
    $('#playerRoll').attr('disabled', true);
    $('#compRoll').text('Roll');



  }

  function compAttack () {

  var opponentAttackDamage = (opponent.attack + opponent.path.attackBonus) - (player1.defense + player1.path.defenseBonus);

      var waterCount = 0,
          windCount = 0,
          fireCount = 0,
          earthCount = 0,
          arcanaCount = 0;

    $('div#compDice').children().each(function(index, die){
      console.log($(die).attr('value'));
      var dieValue = $(die).attr('value');

      if (dieValue === 'Water'){
        opponentAttackDamage = opponentAttackDamage + water.cast(player1.element);
        waterCount += 1;
      } else if (dieValue === 'Wind'){
        opponentAttackDamage = opponentAttackDamage + wind.cast(player1.element);
        windCount += 1;
      } else if (dieValue === 'Fire'){
        opponentAttackDamage = opponentAttackDamage + fire.cast(player1.element);
        fireCount += 1;
      } else if (dieValue === 'Earth'){
        opponentAttackDamage = opponentAttackDamage + earth.cast(player1.element);
        earthCount += 1;
      } else if (dieValue === 'Arcana'){
        opponentAttackDamage = opponentAttackDamage + arcana.cast(player1.element);
        arcanaCount += 1;
      }

    });

      if (waterCount > 2) {
        castSpell('Water');
        opponentAttackDamage = opponentAttackDamage * 1.5;

      }
      if (windCount > 2) {
        castSpell('Wind');
        opponentAttackDamage = opponentAttackDamage * 1.5;
      }
      if (fireCount > 2) {
        castSpell('Fire');
        opponentAttackDamage = opponentAttackDamage * 1.5;
      }
      if (earthCount > 2) {
        castSpell('Earth');
        opponentAttackDamage = opponentAttackDamage * 1.5;

      }
      if (arcanaCount > 2) {
        castSpell('Arcana');
        opponentAttackDamage = opponentAttackDamage * 1.5;

      }




    player1.health -= opponentAttackDamage;
    $('#playerHealth').text("Health: " + player1.health);
    $('#compOutput').html(opponent.playerName + " attacked for " + opponentAttackDamage);
    if (player1.health <= 0) {
      alert(player1.playerName + " died of broken axel!");
      $('#playerAttackButton').hide();
      $('#compAttackButton').hide();
    }

    $('#playerAttackButton').attr('disabled', false);
    $('#compAttackButton').attr('disabled', true);
    playerRollCounter = 0;
    $('#playerRoll').attr('disabled', false);
    $('#compRoll').attr('disabled', true);
    $('#playerRoll').text('Roll');

  }

  $(document).on('click', '#playerAttackButton', function(){

    playerAttack();

  });

  $(document).on('click', '#compAttackButton', function(){

    compAttack();

  });
