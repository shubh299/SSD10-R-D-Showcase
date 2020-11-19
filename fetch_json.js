window.static_url="https://cdn.glitch.com/c5c31171-7ad3-4759-8f91-959c929d549a%2Fresearch_centers.json?v=1605788873409";//https://vagabond-maple-skink.glitch.me/research_centers.json";
function fetch_json_object(){
    var result = "";
    $.ajax({
        url: static_url,
        type:"get",
        dataType:'json',
        async: false,
        success: function(centers){
          result = centers;
        },
        error:function() {
          console.log("err");
        }
    });
    return result;
}

function fetch_poster_by_room_name(room_name){
    var result = "";
    $.ajax({
        url: static_url,
        type:"get",
        dataType:'json',
        async: false,
        success: function(centers){
          result = centers[room_name];
        },
        error:function() {
          console.log("err");
        }
    });
    return result;
}

function fetch_room_names(){
    var result = "";
    $.ajax({
        url: static_url,
        type:"get",
        dataType:'json',
        async: false,
        success: function(centers){
          result = Object.keys(centers);
        },
        error:function() {
          console.log("err");
        }
    });
    return result;  
}
