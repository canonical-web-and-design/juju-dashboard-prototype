$(document).ready( function () {
  //start
  $(".shell").slideDown(0);
  $(".collapsedshell").slideUp(0);
  $('.submenu').hide();
  $('.thirdlevel').hide();

  //sidebar interaction
  $(".sidebar").mouseenter(function() {
    $(this).css('width','260px');
    $('.submenu').slideToggle();
    $('.thirdlevel').slideToggle();
  }).mouseleave(function() {
    $(this).css('width','46px');
    $('.submenu').slideToggle();
    $('.thirdlevel').slideToggle();
  });

  //shell interaction
  $(document).on('click', '.chevron', function(){
    $(".shell").slideToggle('fast');
    $(".collapsedshell").slideToggle('fast');
  });

});
