$(document).ready( function() {
  // REFERENZE
  var dropdown = $('.navigazione .destra .with-dropdown > a');
  var menu = $('.navigazione .destra .dropdown-menu');
  // EVENTO
  dropdown.click( function() {
    var actualMenu = $(this).next();
    menu.not(actualMenu).hide();
    $(this).next().toggle();
  });


}); //<-----Fine Ready
