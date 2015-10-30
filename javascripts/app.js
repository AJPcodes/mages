$(document).ready(function() {

  /*
    // Test code to generate a human player and an orc player
  var warrior = new Human();
  warrior.setWeapon(new WarAxe());
  warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());
  console.log("warrior", warrior);

  var orc = new Orc();
  orc.generateClass();
  orc.setWeapon(new BroadSword());
  console.log(orc.toString());
  console.log("orc", orc);

    // Test code to generate a spell
  var spell = new Sphere();
  console.log("spell: ", spell.toString());
  console.log("spell", spell);

    END OF TEST CODE
  */

  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  var userPlayer;
  var userPlayerName;
  var userPlayerClass;

  $('.class__link').click(function(e) {
    userPlayerClass = $(this).children('.btn__text').text();
    if (userPlayerClass === "surprise me") {
      userPlayerClass = userPlayer.generateClass();
      console.log("userPlayerClass", userPlayerClass);
    } else {
      console.log("userPlayerClass", userPlayerClass);
    }

    //this line should udpate the inherited class property from null to the user's selected class, but instead it just adds a duplicate class property to the Human prototype.
    userPlayer.class = userPlayerClass;
    console.log("userPlayer.class", userPlayer.class);
    console.log("userPlayer", userPlayer);
  });

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        userPlayerName = $("#player-name").val();
        console.log("userPlayerName", userPlayerName);
        userPlayer = new Human();

        //this line should udpate the inherited playerName property to the user's provided name, but instead it just adds a duplicate playerName property to the Human prototype.
        userPlayer.setName(userPlayerName);
        console.log("userPlayer", userPlayer);
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

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

});