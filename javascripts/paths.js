define(function(require) {
  var $ = require("jquery"),
      _ = require("lodash"),
  		q = require("q");


/* This module should set up the classes and return an accessible function to generate a class based on the user input */

/*
  Base function for a player, or enemy, class (profession)
 */
	var PlayerClass = function() {
	  this.name = "Beggar";
	  this.healthBonus = 0;
	  this.strengthBonus = 0;
	  this.intelligenceBonus = 0;
	  this.magical = false;

	  this.toString = function() {
	    return this.name;
	  }
	};


var Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  	  this.toString = function() {
	    return this.name;
	  }
};
Mage.prototype = new PlayerClass();


var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Shaman.prototype = new Mage();


var Druid = function() {
  this.name = "Druid";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Druid.prototype = new Mage();


var Preist = function() {
  this.name = "Preist";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Preist.prototype = new Mage();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Sorcerer.prototype = new Mage();

/*  This is where we return the constructor function that reads the code above and makes the users class*/

  return {

  	choosePath: function(chosenPath){
  		//example constructor
  		if (chosenPath == 'Sorcerer') {
  			return new Sorcerer();
  		} else if (chosenPath == 'Shaman') {
  			return new Shaman();
  		} else if (chosenPath == 'Preist') {
  			return new Preist();
  		} else if (chosenPath == 'Druid') {
  			return new Druid();
  		}

  	}

	};//end return

}); //end define