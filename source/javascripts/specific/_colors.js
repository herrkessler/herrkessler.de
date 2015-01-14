$(document).ready(function() {
  $('.mountain span').each(function() {
    var value = Math.random() * 0xFF | 0;
    var grayscale = (value << 16) | (value << 8) | value;
    var color = '#' + grayscale.toString(16);
    $(this).css('border-bottom-color', color);
  });
});