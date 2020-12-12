
//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.vodiapicker option').each(function(){
var img = $(this).attr("data-thumbnail");
var text = this.innerText;
var value = $(this).val();
/*var item = '<span><div><img src="'+img+'" alt="" value="'+value+'"/></div><span>'+text+'</span></span>';*/
var item = '<li><img src="'+ img +'" alt="" value="'+value+'" /><span>'+ text +'</span></li>';
langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('onclick', 'en');

//change button stuff on click
$('#a li').click(function(){
var img = $(this).find('img').attr("src");
var value = $(this).find('img').attr('value');
var text = this.innerText;
var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
$('.btn-select').html(item);
$('.btn-select').attr('onclick', value);
$(".b").toggle();
//console.log(value);
});

$(".btn-select").click(function(){
    $(".b").toggle();
    location.href=$(".btn-select").attr("onclick");
});



//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
//find an item with value of sessionLang
var langIndex = langArray.indexOf(sessionLang);
$('.btn-select').html(langArray[langIndex]);
$('.btn-select').attr('value', sessionLang);
} else {
var langIndex = langArray.indexOf('ch');
console.log(langIndex);
$('.btn-select').html(langArray[langIndex]);
//$('.btn-select').attr('value', 'en');
}


///////////////////////////
    //product show
///////////////////////////

/////////one

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

  //one end

  ///second

      /*switch category*/
     $(function() {
      $('.button').on('click', function() {
        $('.button').removeClass('active'); // reset *all* buttons to the default state
        $(this).addClass('active'); // mark only the click-target as active
      })
      });

       /*Carousel*/
        $('.carousel').carousel({
        interval: 2000
      })

        /*quantity exchange btn*/
      /*function myExchange() {
        document.getElementById("card-counter").style.zIndex = "2";
      }*/

  //second end

  //third
   // quantity exchange btn 

      $("#myExchange").click(function(){
                  document.getElementById("card-counter").style.zIndex = "2";
     });
     
  //third end

    //fourth
    // increment and decrement              
  
   var x =1;
    
      /*  var span = document.querySelector('span'); */
    var span = document.getElementById('demoInput'); // find the <span> element in the DOM
    var increment = document.getElementById('increment'); // find the element with the ID 'increment'
    var decrement = document.getElementById('decrement'); // find the element with the ID 'decrement'

    increment.addEventListener('click', function () {
      // this function is executed whenever the user clicks the increment button
      span.textContent = x++;
    });

    decrement.addEventListener('click', function () {
      // this function is executed whenever the user clicks the decrement button
      span.textContent = x--;
      if(x ==-1){
      document.getElementById("card-counter").style.zIndex = "-2";
    }
    });
  
    ////fourth end