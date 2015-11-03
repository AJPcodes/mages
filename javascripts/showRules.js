//create the div to show//
/*
    <div id="rules">
  <h2>The Rules</h2>

  <p>Players take turns rolling dice to cast spells.</p>
  <p>You can roll as many dice as you want up to three times.</p>
  <p>Each die will cast a spell based on the element shown.<p>
  <p>De-select dice you do not want to re-roll</p>

  <h3>The Dice</h3>

  <p>Fire</p><img class="exampleDie" src="./styles/pics/flameIcon.png">
  <p>Water</p><img class="exampleDie" src="./styles/pics/waterIcon.png">
  <p>Wind</p><img class="exampleDie" src="./styles/pics/tornadoIcon.png">
  <p>Earth</p><img class="exampleDie" src="./styles/pics/rockIcon.png">
  <p>Arcana</p><img class="exampleDie" src="./styles/pics/arcanaIcon.png">
  <p>Skull</p><img class="exampleDie" src="./styles/pics/skullIcon.png">

  <h3>BEWARE</h3>

  <p>You <strong>CANNOT</strong> re-roll a skull icon.<p>
  <p>Your enemy pursues an elemental path and will absorb that element to gain more power</p>
  <h3>Hints</h3>
  <p>Pay attention to your opponents weakness to deal maximum damage.</p>
  <p>Bonus damage is awared for 3 or more matching dice (not skulls)</p>
 </div>
 */

$('body').append('<button class="btnStyle" id="toggleRules">The Rules</button>');


$('.exampleDie').css({
  'max-height': '30px',
  'max-width': '30px',
  'display': "inline-block",
  'border': '3px solid white'

});

$('#rules').css({
  "text-align": "center",
  "font-size": "10px",
  "position": "fixed",
  "display": "none",
  "top": '10%',
  "left": "20%",
  "right": "20%",
  "bottom": "10%",
  'z-index': '10',
  'backgroundColor': 'rgba(0,0,0, 0.75)',
  'max-height': '80%',
  'max-width': '80%',
  'overflow': 'scroll',
  'border': '2px solid white'
 });

$('#rules h2').css({
  "font-size": "30px",
  });
$('#rules h3').css({
  "font-size": "25px",
  });

$('#rules p').css({
  "font-size": "20px",
  'display': "inline-block",
  });

$(document).on('click','#toggleRules', function(){
  $('#rules').fadeIn();
});

$(document).on('click','#rules', function(){
  $('#rules').fadeOut();
});