// quantity exchange btn -->

    $("#myExchange").click(function(){
                document.getElementById("card-counter").style.zIndex = "2";
   });
  
  //increment and decrement

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