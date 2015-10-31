/* This module should include the code to create players from the various species
	Note: the original code also has a 'monster' constructor. Which is a basic player with a few modifications.
*/

/*
  Define the base object for any player of Gauntlet,
 */
	var Player = function(name) {
	  this.species = null;
	  this.path = null;
	  this.spell = null;
	  this.playerName = name || "unknown adventurer";
	  this.health = Math.floor(Math.random() * 40 + 5000);
	  this.defense = 90;
	  this.attack = 90;
	};

	Player.prototype.setSpell = function(setSpell) {
	  this.spell = setSpell;
	};

	/*
	  Define the base properties for a human in a
	  constructor function.
	 */
	var Human = function() {
	  this.species = "Human";
	  this.attack = this.attack + 15;
	  this.avatar = "../styles/pics/humanAvatar.jpg";
	};
	Human.prototype = new Player();

		/*
	  Define the base properties for a fairy in a
	  constructor function.
	 */
	var Fairy = function() {
	  this.species = "Fairy";
	  this.attack = this.attack + 25;
	  this.avatar = "../styles/pics/fairyAvatar.jpg";
	};
	Fairy.prototype = new Player();

	/*
	  Define the base properties for an elf in a
	  constructor function.
	 */
	var Elf = function() {
	  this.species = "Elf";
	  this.attack = this.attack + 20;
	  this.avatar = "../styles/pics/elfAvatar.jpg";
	};
	Elf.prototype = new Player();

		/*
	  Define the base properties for an orc in a
	  constructor function.
	 */
	var Orc = function() {
	  this.species = "Orc";
	  this.attack = this.attack + 5;
	  this.avatar = "../styles/pics/orcAvatar.jpg";
	};
	Orc.prototype = new Player();

		/*
	  Define the base properties for an troll in a
	  constructor function.
	 */
	var Troll = function() {
	  this.species = "Troll";
	  this.attack = this.attack + 5;
	  this.avatar = "../styles/pics/trollAvatar.jpg";
	};
	Troll.prototype = new Player();


/*return a function that can be accessed from app.js */

var chooseSpecies = function(chosenSpecies) {

  		var possibleSpecies = ['Human', 'Fairy', 'Elf', 'Orc', 'Troll'];

      if (chosenSpecies == 'Surprise Me') {
        chosenSpecies = possibleSpecies[Math.floor(Math.random()*5)];
      }

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