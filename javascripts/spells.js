/*
	  Base spell function that defines name, damage, damage type
	 */
	var Spell = function() {
	  this.name = "";
	  this.damage = 10;
	  this.cast = function (opponentElement) {
	  	// console.log(this.name);
	  	// console.log(opponentElement);
	  	// console.log('strength:', this.strength);
	  	// console.log('weakness:', this.weakness);

	  	opponentElement = opponentElement.name;

	  	var output = Math.floor(Math.random() * 20 + this.damage);
	  	if (opponentElement === this.strength) {
	  		console.log('power up');
	  		output = output * 1.20;
	  	} else if (opponentElement === this.weakness) {
	  		console.log('power down');
	  		output = output * 0.80;
	  	} else if (opponentElement === this.name) {
	  		console.log('absorbed');
	  		output = output * -1;
	  	}
	  	output = parseInt(output);
	  	console.log(output);
	  	return output;
	  };
	};

	/*
	  An elemental sphere that can be cast by a magical class
	 */
	var Water = function() {
	  this.name = "Water";
	  this.damage = 10;
	  this.strength = 'Fire';
	  this.weakness = 'Earth';
	};
	Water.prototype = new Spell();

	var Wind = function() {
	  this.name = "Wind";
	  this.damage = 10;
	  this.strength = 'Earth';
	  this.weakness = 'Fire';

	};
	Wind.prototype = new Spell();

	var Fire = function() {
	  this.name = "Fire";
	  this.damage = 10;
	  this.strength = 'Wind';
	  this.weakness = 'Water';

	};
	Fire.prototype = new Spell();

	var Earth = function() {
	  this.name = "Earth";
	  this.damage = 10;
	  this.strength = 'Water';
	  this.weakness = 'Wind';

	};
	Earth.prototype = new Spell();

	var Arcana = function() {
	  this.name = "Arcana";
	  this.damage = 10;
	};
	Arcana.prototype = new Spell();

var chooseSpell = function(chosenSpell){
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

  	};

var chooseElement = function(chosenElement){
      var possibleElements = ["Water", "Wind", "Fire", "Earth", "Arcana"];

      if (chosenElement == 'Surprise Me'){
        chosenElement = possibleElements[Math.floor(Math.random()*5)];
      }

       if (chosenElement == 'Water') {
  			chosenElement = {"name": "Water", "strength": "Fire", "weakness": "Earth"};
  		} else if (chosenElement == 'Wind') {
  			chosenElement = {"name": "Wind", "strength": "Earth", "weakness": "Fire"};
  		} else if (chosenElement == 'Fire') {
  			chosenElement = {"name": "Fire", "strength": "Wind", "weakness": "Water"};
  		} else if (chosenElement == 'Earth') {
  			chosenElement = {"name": "Earth", "strength": "Water", "weakness": "Wind"};
  		} else if (chosenElement == 'Arcana') {
  			chosenElement = {"name": "Arcana", "strength": "None", "weakness": "None"};
  		}


      return chosenElement;
  	};