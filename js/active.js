$(function() {
    $('.button').on('click', function() {
      $('.button').removeClass('active'); // reset *all* buttons to the default state
      $(this).addClass('active'); // mark only the click-target as active
    })
    });