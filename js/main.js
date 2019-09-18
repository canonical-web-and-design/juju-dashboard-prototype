$(document).ready( function () {
  $(".sidebar.collapsed").slideDown(0);
  $(".sidebar.active").slideUp(0);

  $(".sidebar").mouseenter(function() {
    $(".sidebar.collapsed").slideUp('fast');
    $(".sidebar.active").slideDown('slow');
  }).mouseleave(function() {
    $(".sidebar.collapsed").slideDown('fast');
    $(".sidebar.active").slideUp(0);
  });

});
