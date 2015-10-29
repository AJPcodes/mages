define(["hbs",
        "hbs!../templates/playerName",
        "hbs!../templates/species",
        "hbs!../templates/path",
        "hbs!../templates/element",
        ],

function(handlebars, playerName, species, path, element) {

  var templates = {};
  templates.playerName = playerName;
  templates.species = species;
  templates.path = path;
  templates.element = element;

  return templates;

});