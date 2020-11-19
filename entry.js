$('body').append('<div style="z-index: 999;" id="loadingDiv"><img class="displayed" src="https://www.iiit.ac.in/img/iiit-new.png"/><div class="loader"></div></div></center>');
$(window).on('load', function(){
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( "#loadingDiv" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( "#loadingDiv" ).remove(); //makes page more lightweight 
    });  
  }
let requestURL = 'https://cdn.glitch.com/c5c31171-7ad3-4759-8f91-959c929d549a%2Fresearch_centers.json?v=1605788873409';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
    const researchcenterstext = request.response; // get the string from the response
    const researchcenters = JSON.parse(researchcenterstext);
    

   //document.write(researchcenters['SERC']);
    for (var p in researchcenters) {
        if( researchcenters.hasOwnProperty(p) ) {
            $(".container").append(`<div class='box' id='box'><div class='content'><center><h3>${p}</h3></center></div></div>`);
        } 
     }
    }
    $(document).on('click','#box',function()
    {
      var text = $(this).text();
      console.log(text);
      gotoPosterRoom(text);
    });





