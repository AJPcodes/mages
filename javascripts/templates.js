define(["hbs",
        "hbs!../templates/playerName",
        "hbs!../templates/species",
        "hbs!../templates/path",
        "hbs!../templates/element",
        "hbs!../templates/gameBoard",
        ],

function(handlebars, playerName, species, path, element, gameBoard) {

  var templates = {};
  templates.playerName = playerName;
  templates.species = species;
  templates.path = path;
  templates.element = element;
  templates.gameBoard = gameBoard;

  return templates;

});