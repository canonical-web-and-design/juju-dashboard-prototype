$(document).ready( function () {
  //start
  $(".sidebar.collapsed").slideDown(0);
  $(".sidebar.active").slideUp(0);
  $(".shell").slideDown(0);
  $(".collapsedshell").slideUp(0);

  //sidebar interaction
  $(".sidebar").mouseenter(function() {
    $(".sidebar.collapsed").slideUp('fast');
    $(".sidebar.active").slideDown('slow');
  }).mouseleave(function() {
    $(".sidebar.collapsed").slideDown('fast');
    $(".sidebar.active").slideUp(0);
  });

  //shell interaction
  $(document).on('click', '.chevron', function(){
    $(".shell").slideToggle('fast');
    $(".collapsedshell").slideToggle('fast');
  });

});
