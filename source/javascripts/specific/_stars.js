$(document).ready(function(){
  $('.star').each(function(){
    var X = 1 + Math.floor(Math.random() * 100);
    var Y = 1 + Math.floor(Math.random() * 100);
    var starSize = 1 + Math.floor(Math.random() * 50);
    $(this).css({'left' : (X + '%'), 'top' : (Y + '%'), 'width' : (starSize + 'px'), 'height' : (starSize + 'px')});
  });
});