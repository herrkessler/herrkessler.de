$(document).ready(function() {
  if (cssua.userAgent.ie) {
    var contentHeight = $(document).height();
    $('body').css('height', contentHeight);
  }
  var styleSheet = $('link[href="stylesheets/all.css"]');
  if (cssua.userAgent.ie == 8) {
    styleSheet.attr('href','stylesheets/ie8-all.css');
  }
  if (cssua.userAgent.ie == 9) {
    styleSheet.attr('href','stylesheets/ie9-all.css');
  }
  if (cssua.userAgent.ie > 9) {
    styleSheet.attr('href','stylesheets/ie11-all.css');
  }
  if (cssua.userAgent.firefox) {
    styleSheet.attr('href','stylesheets/firefox-all.css');
  }
});