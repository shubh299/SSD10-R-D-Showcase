/*
    This script reads source from image_list and pastes the poster on walls dynamivcally
*/

var image_width=5;
var image_margin=4;
var posterHeight=5;

/*var image_list=["https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg","https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
                    "https://1.bp.blogspot.com/-MdaQwrpT4Gs/Xdt-ff_hxEI/AAAAAAAAQXE/oOgnysGd9LwoFLMHJ0etngKzXxmQkWc5ACLcBGAsYHQ/s400/Beautiful-Backgrounds%2B%2528122%2529.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMVSK002MYAH_e5iPGYSw4ccLFMH7Gl0gaWw&usqp=CAU",
                    "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIFljE39hZfBwAHRvHVJ-5a3_nOMBo_EEZNw&usqp=CAU"];
*/
function rightWall(contentNum,image_list){
    var wallLength=contentNum*image_width+(contentNum+1)*image_margin;
    if(wallLength<10){
        wallLength=10;
    }
    if(contentNum<1){
        return;
    }
    document.querySelector("#right-wall").setAttribute("width",wallLength+0.04);
    var panels=$(".panel");
    var positionStart=0;
    if(contentNum%2==0){
        positionStart=-((image_margin+image_width)/2+(image_margin+image_width)*(contentNum/2-1));
    }
    else{
        positionStart=-((image_margin+image_width)*Math.floor(contentNum/2));
    }
    var posX=image_list.length-2*contentNum;
    posX=(posX*image_width+(posX+1)*image_margin)/2;
    document.querySelector("#front-wall").setAttribute("position",{x:0,y:5,z:-(wallLength/2+0.01)});
    document.querySelector("#back-wall").setAttribute("position",{x:0,y:5,z:(wallLength/2+0.01)});
    document.querySelector('#door1').setAttribute("position",{x:0,y:4,z:(wallLength/2)});
    for(var i=panels.length-contentNum;i<panels.length;i++){
        //console.log(i);
        var posZ=positionStart;
        positionStart+=(image_margin+image_width);
        panels[i].setAttribute('position',{x:posX,y:posterHeight,z:posZ});
        panels[i].setAttribute('rotation',{x:0,y:-90,z:0});
        panels[i].setAttribute('height',image_width);
        panels[i].setAttribute('width',image_width);
        panels[i].setAttribute('color',"#FFFFFF")
        var children=panels[i].getElementsByTagName("a-image");
        var poster=children[0];
        poster.setAttribute('class','poster');
        
        var tempImage=new Image();
        tempImage.src=image_list[i];
        var tempImageHeight=0;
        var tempImageWidth=0;
        tempImage.addEventListener("load",function(){
            //console.log('Hi');
            tempImageHeight=tempImage.naturalHeight;
            tempImageWidth=tempImage.naturalWidth;
            if(tempImageHeight>tempImageWidth){
                tempImageWidth=tempImageWidth/tempImageHeight;
                tempImageHeight=1;
            }
            else{
                tempImageHeight=tempImageHeight/tempImageWidth;
                tempImageWidth=1;
            }
            poster.setAttribute('height',tempImageHeight);
            poster.setAttribute('width',tempImageWidth);
            //console.log(i+" "+tempImageHeight+" "+tempImageWidth);
        });
        var scale=(image_width+image_margin)/2;
        poster.setAttribute('src',image_list[i]);
        poster.setAttribute('position',{x:0,y:0,z:0.01});
        poster.setAttribute('scale',{x:scale,y:scale,z:scale});
        //console.log(panels[i]);
    }
}

function leftWall(contentNum,image_list){
    var wallLength=contentNum*image_width+(contentNum+1)*image_margin;
    if(wallLength<10){
        wallLength=10;
    }
    if(contentNum<1){
        return;
    }
    document.querySelector("#left-wall").setAttribute("width",wallLength+0.04);
    var panels=$(".panel");
    var positionStart=0;
    if(contentNum%2==0){
        positionStart=-((image_margin+image_width)/2+(image_margin+image_width)*(contentNum/2-1));
    }
    else{
        positionStart=-((image_margin+image_width)*Math.floor(contentNum/2));
    }
    var posX=image_list.length-2*contentNum;
    posX=(posX*image_width+(posX+1)*image_margin)/2;
    for(var i=0;i<contentNum;i++){
        //console.log(i);
        var posZ=positionStart;
        positionStart+=(image_margin+image_width);
        panels[i].setAttribute('position',{x:-posX,y:posterHeight,z:posZ});
        panels[i].setAttribute('rotation',{x:0,y:90,z:0});
        panels[i].setAttribute('color',"#FFFFFF")
        panels[i].setAttribute('height',image_width);
        panels[i].setAttribute('width',image_width);
        var children=panels[i].getElementsByTagName("a-image");
        var poster=children[0];
        poster.setAttribute('class','poster');
        
        var tempImage=new Image();
        tempImage.src=image_list[i];
        var tempImageHeight=0;
        var tempImageWidth=0;
        tempImage.addEventListener("load",function(){
            //console.log('Hi');
            tempImageHeight=tempImage.naturalHeight;
            tempImageWidth=tempImage.naturalWidth;
            if(tempImageHeight>tempImageWidth){
                tempImageWidth=tempImageWidth/tempImageHeight;
                tempImageHeight=1;
            }
            else{
                tempImageHeight=tempImageHeight/tempImageWidth;
                tempImageWidth=1;
            }
            poster.setAttribute('height',tempImageHeight);
            poster.setAttribute('width',tempImageWidth);
            //console.log(i+" "+tempImageHeight+" "+tempImageWidth);
        });
        var scale=(image_width+image_margin)/2;
        poster.setAttribute('src',image_list[i]);
        poster.setAttribute('position',{x:0,y:0,z:0.01});
        poster.setAttribute('scale',{x:scale,y:scale,z:scale});
        //console.log(panels[i]);
    }
}

function frontWall(contentNum,image_list){
    var wallLength=contentNum*image_width+(contentNum+1)*image_margin;
    if(wallLength<10){
        wallLength=10;
    }
    if(contentNum<1){
        return;
    }
    document.querySelector("#right-wall").setAttribute("position",{x:-(wallLength/2+0.01),y:5,z:0});
    document.querySelector("#left-wall").setAttribute("position",{x:(wallLength/2+0.01),y:5,z:0});
    document.querySelector("#front-wall").setAttribute("width",wallLength);
    document.querySelector("#back-wall").setAttribute("width",wallLength);
    var panels=$(".panel");
    var positionStart=0;
    if(contentNum%2==0){
        positionStart=-((image_margin+image_width)/2+(image_margin+image_width)*(contentNum/2-1));
    }
    else{
        positionStart=-((image_margin+image_width)*Math.floor(contentNum/2));
    }
    var posZ=(image_list.length-contentNum)/2;
    posZ=document.querySelector("#left-wall").getAttribute("width")/2-0.02;
    var end=(image_list.length-contentNum)/2;
    for(var i=end;i<panels.length-end;i++){
        //console.log(i);
        var posX=positionStart;
        positionStart+=(image_margin+image_width);
        panels[i].setAttribute('position',{x:posX,y:posterHeight,z:-posZ});
        panels[i].setAttribute('rotation',{x:0,y:0,z:0});
        panels[i].setAttribute('height',image_width);
        panels[i].setAttribute('width',image_width);
        var children=panels[i].getElementsByTagName("a-image");
        var poster=children[0];
        poster.setAttribute('class','poster');
        
        var tempImage=new Image();
        tempImage.src=image_list[i];
        var tempImageHeight=0;
        var tempImageWidth=0;
        tempImage.addEventListener("load",function(){
            //console.log('Hi');
            tempImageHeight=tempImage.naturalHeight;
            tempImageWidth=tempImage.naturalWidth;
            if(tempImageHeight>tempImageWidth){
                tempImageWidth=tempImageWidth/tempImageHeight;
                tempImageHeight=1;
            }
            else{
                tempImageHeight=tempImageHeight/tempImageWidth;
                tempImageWidth=1;
            }
            poster.setAttribute('height',tempImageHeight);
            poster.setAttribute('width',tempImageWidth);
        });
        var scale=(image_width+image_margin)/2;
        poster.setAttribute('src',image_list[i]);
        poster.setAttribute('position',{x:0,y:0,z:0.01});
        poster.setAttribute('scale',{x:scale,y:scale,z:scale});
        //console.log(panels[i]);
    }
}

function addPosters(image_list){
    var panel_html_structure="<a-plane class=\"panel\"><a-image></a-image><a-image></a-image><a-image></a-image></a-plane>";

    for(var i=0;i<image_list.length;i++){
        $("#posters").append(panel_html_structure);
    }

    var sideWallContent=Math.floor(image_list.length/3);
    var frontWallContent=image_list.length-2*sideWallContent;
    
    rightWall(sideWallContent,image_list);
    leftWall(sideWallContent,image_list);
    frontWall(frontWallContent,image_list);

    var frontWallLength=document.querySelector("#front-wall").getAttribute("width");
    var sideWallLength=document.querySelector("#left-wall").getAttribute("width");
    document.querySelector("#floor").setAttribute("height",sideWallLength);
    document.querySelector("#ceiling_view").setAttribute("height",frontWallLength);
    document.querySelector("#floor").setAttribute("width",frontWallLength);
    document.querySelector("#ceiling_view").setAttribute("width",sideWallLength);
}

function removePosters(){
    $("#posters").empty();
}

function gotoPosterRoom(roomName){
    document.querySelector('#camera').setAttribute('position',{x:0,y:4,z:0});
    //document.querySelector('#camera').setAttribute('rotation',{x:0,y:0,z:0});
    document.querySelector('#entryScene').setAttribute('visible','false');
    document.querySelector('#roomScene').setAttribute('visible','true');
    $('.research').css('visibility','hidden');
    var image_list=fetch_poster_by_room_name(roomName);
    addPosters(image_list);
}

/*function gotoEntryRoom(){
    document.querySelector('#camera').setAttribute('position',{x:0,y:4,z:0});
    document.querySelector('#roomScene').setAttribute('visible','false');
    document.querySelector('#entryScene').setAttribute('visible','true');
    $('.research').css('visibility','visible');
    removePosters();
}*/

$('#door1').click(function (e) { 
    //gotoEntryRoom();
    location.reload();
    console.log('back');
});
