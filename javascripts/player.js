define(function(require) {
  var $ = require("jquery"),
      _ = require("lodash"),
  		q = require("q");

/* This module should include the code to create players from the various species
	Note: the original code also has a 'monster' constructor. Which is a basic player with a few modifications.
*/

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
	var Player = function(name) {
	  this.species = null;
	  this.path = null;
	  this.weapon = null;

	  this.playerName = name || "unknown adventurer";
	  this.health = Math.floor(Math.random() * 40 + 50);
	  this.limbs = ["head", "neck", "arm", "leg", "torso"];
	  this.skinColor = "gray";
	  this.skinColors = [this.skinColor];
	  this.strength = 90;
	  this.intelligence = 90;

	  this.toString = function() {
	    var output = [this.playerName,
	      ": a ",
	      this.skinColor,
	      " skinned ",
	      this.species,
	      " ",
	      this.path,
	      " with ",
	      this.health,
	      " health. ",
	      (this.path.magical) ? "Able to cast " : " Wielding a ",
	      this.weapon.toString(),
	      "!"
	    ].join("");
	    return output;
	  };
	};

	Player.prototype.setWeapon = function(newWeapon) {
	  this.weapon = newWeapon;
	};

	Player.prototype.generateClass = function() {
	  // Get a random index from the allowed classes array
	  var random = Math.round(Math.random() * (this.allowedPaths.length - 1));

	  // Get the string at the index
	  var randomClass = this.allowedPaths[random];

	  // Composes the corresponding player path into the player object
	  this.path = new window[randomClass]();

	  // Add the health bonus
	  this.health += this.path.healthBonus;
	  return this.path;
	};

	/*
	  Define the base properties for a human in a
	  constructor function.
	 */
	var Human = function() {
	  var randomSkin;

	  this.species = "Human";
	  this.intelligence = this.intelligence + 20;

	  this.skinColors.push("brown", "red", "white", "disease");
	  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
	  this.skinColor = this.skinColors[randomSkin];

	  this.allowedPaths = ["Warrior", "Berserker", "Valkyrie", "Monk"];
	};
	Human.prototype = new Player();

		/*
	  Define the base properties for a fairy in a
	  constructor function.
	 */
	var Fairy = function() {
	  var randomSkin;

	  this.species = "Fairy";
	  this.intelligence = this.intelligence + 20;

	  this.skinColors.push("brown", "red", "white", "disease");
	  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
	  this.skinColor = this.skinColors[randomSkin];

	  this.allowedPaths = ["Warrior", "Berserker", "Valkyrie", "Monk"];
	};
	Fairy.prototype = new Player();

	/*
	  Define the base properties for an elf in a
	  constructor function.
	 */
	var Elf = function() {
	  var randomSkin;

	  this.species = "Elf";
	  this.intelligence = this.intelligence + 20;

	  this.skinColors.push("brown", "red", "white", "disease");
	  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
	  this.skinColor = this.skinColors[randomSkin];

	  this.allowedPaths = ["Warrior", "Berserker", "Valkyrie", "Monk"];
	};
	Elf.prototype = new Player();

		/*
	  Define the base properties for an orc in a
	  constructor function.
	 */
	var Orc = function() {
	  var randomSkin;

	  this.species = "Orc";
	  this.intelligence = this.intelligence + 20;

	  this.skinColors.push("brown", "red", "white", "disease");
	  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
	  this.skinColor = this.skinColors[randomSkin];

	  this.allowedPaths = ["Warrior", "Berserker", "Valkyrie", "Monk"];
	};
	Orc.prototype = new Player();

		/*
	  Define the base properties for an troll in a
	  constructor function.
	 */
	var Troll = function() {
	  var randomSkin;

	  this.species = "Troll";
	  this.intelligence = this.intelligence + 20;

	  this.skinColors.push("brown", "red", "white", "disease");
	  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
	  this.skinColor = this.skinColors[randomSkin];

	  this.allowedPaths = ["Warrior", "Berserker", "Valkyrie", "Monk"];
	};
	Troll.prototype = new Player();


	/*
	  Define the base properties for a monster in a
	  constructor function.
	 */
	var Monster = function() {
	  this.health = this.health - 30;
	  this.intelligence = this.intelligence -20;
	  this.strength = this.strength + 30;
	};

	Monster.prototype = new Player();

/*return a function that can be accessed from app.js */

  return {

  	chooseSpecies: function(chosenSpecies) {

  		if (chosenSpecies == 'Human') {
  			return new Human();
  		} else if (chosenSpecies == 'Fairy') {
  			return new Fairy();
  		} else if (chosenSpecies == 'Elf') {
  			return new Elf();
  		} else if (chosenSpecies == 'Orc') {
  			return new Orc();
  		} else if (chosenSpecies == 'Troll') {
  			return new Troll();
  		}
  	}
	};//end return

}); //end define