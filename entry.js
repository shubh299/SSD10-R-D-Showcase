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
let requestURL = 'https://raw.githubusercontent.com/saivishwakgangam/SSD-LAB-ACTIVITY-2/master/research_centers%20.json';
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
            $(".container").append(`<div class='box'><div class='content'><center><h3>${p}</h3></center></div></div>`);
        } 
     }
    }
    var x = document.getElementById("").textContent; 
