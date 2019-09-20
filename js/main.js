$(document).ready( function () {
  //start
  $(".shell").slideDown(0);
  $(".collapsedshell").slideUp(0);
  $('.submenu').hide();

  //sidebar interaction
  $(".sidebar").mouseenter(function() {
    $(this).css('width','260px');
    $('.submenu').slideToggle(500);
  }).mouseleave(function() {
    $(this).css('width','46px');
    $('.submenu').slideToggle(100);
  });

  //shell interaction
  $(document).on('click', '.chevron', function(){
    $(".shell").slideToggle('fast');
    $(".collapsedshell").slideToggle('fast');
  });

  $(document).on('click', '.drag', function(){
    $("#resizable").resizable();
  });

});
