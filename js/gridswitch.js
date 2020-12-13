$(document).ready(function() {

    var tab = $('.faq-row-handle > div'),
      tabContent = $('.faq-row-content'),
      tabParent = $('.faq-row');
  
    if (tab.length) {
  
      tab.off('click').on('click', function() {
  
        var ele = $(this),
          currContent = $('#' + ele.attr('rel'));
  
        if (!ele.hasClass('open')) {
  
          tabParent.stop(true, true).animate({
            height: '0px'
  
          }, function() {
            tabContent.removeClass('open');
            currContent.addClass('open');
            tab.removeClass('open');
            ele.addClass('open');
  
            tabParent.stop(true, true).animate({
              height: currContent.height() + 'px'
            });
  
          });
  
        }
  
      });
  
      $('.faq-row-handle > a:eq(0)').click();
    }
  
    });