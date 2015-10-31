/* This module should set up the classes and return an accessible function to generate a class based on the user input */

/*
  Base function for a player, or enemy, class (profession)
 */
	var PlayerClass = function() {
	  this.name = "Beggar";
	  this.healthBonus = 0;
	  this.defenseBonus = 0;
	  this.attackBonus = 0;
	  this.magical = false;
	};

var Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.defenseBonus = this.defenseBonus - 20;
  this.attackBonus = this.attackBonus + 20;
};
Mage.prototype = new PlayerClass();

var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.defenseBonus = this.defenseBonus - 10;
  this.attackBonus = this.attackBonus + 20;
};
Shaman.prototype = new Mage();

var Druid = function() {
  this.name = "Druid";
  this.healthBonus = this.healthBonus - 15;
  this.defenseBonus = this.defenseBonus - 25;
  this.attackBonus = this.attackBonus + 40;
};
Druid.prototype = new Mage();


var Priest = function() {
  this.name = "Priest";
  this.defenseBonus = this.defenseBonus - 10;
  this.attackBonus = this.attackBonus + 10;
  console.log("priest");
};
Priest.prototype = new Mage();

var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.defenseBonus = this.defenseBonus - 20;
  this.attackBonus = this.attackBonus + 30;
};
Sorcerer.prototype = new Mage();

/*  This is where we return the constructor function that reads the code above and makes the users class*/

var choosePath = function(chosenPath){
      //example constructor
      console.log(chosenPath);
      var possiblePaths = ['Sorcerer', 'Shaman', 'Priest', 'Druid'];

      if (chosenPath == 'Surprise Me'){
        chosenPath = possiblePaths[Math.floor(Math.random()*4)];
      }
  		if (chosenPath == 'Sorcerer') {
  			return new Sorcerer();
  		} else if (chosenPath == 'Shaman') {
  			return new Shaman();
  		} else if (chosenPath == 'Priest') {
  			return new Priest();
  		} else if (chosenPath == 'Druid') {
  			return new Druid();
  		}

  	}