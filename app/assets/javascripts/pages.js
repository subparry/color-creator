var red = 255;
var green = 255;
var blue = 255;

function setColor(){
  $('.result-color').css('background-color', `rgb(${red}, ${green}, ${blue})`);
};

function updateValue(){
  $('.colorName').html(`RGB(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)})`);
};

document.addEventListener('turbolinks:load', function(){
  $(".red").knob({
    "min": 0,
    "max": 255,
    "fgColor": 'rgb(' + red +',0,0)',
    'change': function(v){
      red = v;
      $(".red").trigger(
        'configure', {
          "fgColor": 'rgb(' + red +',0,0)'
        }
      );
      setColor();
      updateValue();
    }
  });
  $(".green").knob({
    "min": 0,
    "max": 255,
    "fgColor": 'rgb(0,255,0)',
    'change': function(v){
      green = v;
      $(".green").trigger(
        'configure', {
          "fgColor": 'rgb(0,' + green +',0)'
        }
      );
      setColor();
      updateValue();
    }
  });
  $(".blue").knob({
    "min": 0,
    "max": 255,
    "fgColor": 'rgb(0,0,255)',
    'change': function(v){
      blue = v;
      $(".blue").trigger(
        'configure', {
          "fgColor": 'rgb(0,0,' + blue +')'
        }
      );
      setColor();
      updateValue();
    }
  });
});
