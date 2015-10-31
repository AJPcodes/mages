define(function(require) {
  var $ = require("jquery"),
      _ = require("lodash"),
  		q = require("q");

	/*
	  Base spell function that defines name, damage, damage type
	 */
	var Spell = function() {
	  this.name = "";
	  this.damage = 0;
	};

	/*
	  An elemental sphere that can be cast by a magical class
	 */
	var Water = function() {
	  this.name = "Water";
	  this.damage = Math.floor(Math.random() * 10 + 10);
	};
	Water.prototype = new Spell();

	var Wind = function() {
	  this.name = "Wind";
	  this.damage = Math.floor(Math.random() * 10 + 10);
	};
	Wind.prototype = new Spell();

	var Fire = function() {
	  this.name = "Fire";
	  this.damage = Math.floor(Math.random() * 10 + 10);
	};
	Fire.prototype = new Spell();

	var Earth = function() {
	  this.name = "Earth";
	  this.damage = Math.floor(Math.random() * 10 + 10);
	};
	Earth.prototype = new Spell();

	var Arcana = function() {
	  this.name = "Arcana";
	  this.damage = Math.floor(Math.random() * 10 + 10);
	};
	Arcana.prototype = new Spell();

  return {

    chooseSpell: function(chosenSpell){
      var possibleSpells = ["Water", "Wind", "Fire", "Earth", "Arcana"];

      if (chosenSpell == 'Surprise Me'){
        chosenSpell = possibleSpells[Math.floor(Math.random()*5)];
      }
  		if (chosenSpell == 'Water') {
  			return new Water();
  		} else if (chosenSpell == 'Wind') {
  			return new Wind();
  		} else if (chosenSpell == 'Fire') {
  			return new Fire();
  		} else if (chosenSpell == 'Earth') {
  			return new Earth();
  		} else if (chosenSpell == 'Arcana') {
  			return new Arcana();
  		}

  	}

	};//end return

}); //end define