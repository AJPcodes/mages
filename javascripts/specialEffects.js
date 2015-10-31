define(["jquery"], function($) {
  return {
    ///this is for testing
  var castSpell = function(spellName) {

      $('body').append('<div id="effectOverlay"><img id="effectImg"></div>');
      /* change Image in effect overlay overlay div*/
      $('#effectOverlay').css({
        "position": "fixed",
        "display": "none",
        "top": '20%',
        "left": "20%",
        'z-index': '10',
        'backgroundColor': 'rbba(0,0,0,0)',
        'max-height': '60%',
        'max-width': '60%'
       });

      $('#effectImg').css({
        'max-height': '400px',
        'max-width': '400px'
       });

      switch(spellName) {
            case "flame":
                $('#effectImg').attr('src', '../styles/pics/flame.png');
                break;
            case "rock":
                $('#effectImg').attr('src', '../styles/pics/rock.png');
                break;
            case "lightning":
                 $('#effectImg').attr('src', '../styles/pics/lightning.png');
                break;
            case "arcana":
                 $('#effectImg').attr('src', '../styles/pics/arcana.png');
                break;
            case "water":
                 $('#effectImg').attr('src', '../styles/pics/water.png');
                break;
            default:
      }


      $("#effectOverlay").fadeIn("easeInBounce");
      $("#effectOverlay").fadeOut(4000);
  };


  }
});