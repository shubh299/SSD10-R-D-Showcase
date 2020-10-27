/*
    This script reads source from image_list and pastes the poster on walls dynamivcally
*/

var image_list=["https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg","https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
                        "https://1.bp.blogspot.com/-MdaQwrpT4Gs/Xdt-ff_hxEI/AAAAAAAAQXE/oOgnysGd9LwoFLMHJ0etngKzXxmQkWc5ACLcBGAsYHQ/s400/Beautiful-Backgrounds%2B%2528122%2529.jpg",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMVSK002MYAH_e5iPGYSw4ccLFMH7Gl0gaWw&usqp=CAU"];

function rightWall(contentNum){
    var wallLength=contentNum*2+(contentNum+1)*1;
    if(contentNum<1){
        return;
    }
    var panels=$(".panel");
    var positionStart=0;
    if(contentNum%2==0){
        positionStart=-(1.5+3*(contentNum/2-1));
    }
    else{
        positionStart=-(3*Math.floor(contentNum/2));
    }
    var posX=image_list.length-2*contentNum;
    posX=(posX*2+(posX+1))/2;
    for(var i=panels.length-contentNum;i<panels.length;i++){
        //console.log(i);
        var posZ=positionStart;
        positionStart+=3;
        panels[i].setAttribute('position',{x:posX,y:2,z:posZ});
        panels[i].setAttribute('rotation',{x:0,y:-90,z:0});
        panels[i].setAttribute('height',2);
        panels[i].setAttribute('width',2);
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
        poster.setAttribute('src',image_list[i]);
        poster.setAttribute('position',{x:0,y:0,z:0.01});
        poster.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
        //console.log(panels[i]);
    }
}

function leftWall(contentNum){
    var wallLength=contentNum*2+(contentNum+1)*1;
    if(contentNum<1){
        return;
    }
    var panels=$(".panel");
    var positionStart=0;
    if(contentNum%2==0){
        positionStart=-(1.5+3*(contentNum/2-1));
    }
    else{
        positionStart=-(3*Math.floor(contentNum/2));
    }
    var posX=image_list.length-2*contentNum;
    posX=(posX*2+(posX+1))/2;
    for(var i=0;i<contentNum;i++){
        //console.log(i);
        var posZ=positionStart;
        positionStart+=3;
        panels[i].setAttribute('position',{x:-posX,y:2,z:posZ});
        panels[i].setAttribute('rotation',{x:0,y:90,z:0});
        panels[i].setAttribute('color',"#FFFFFF")
        panels[i].setAttribute('height',2);
        panels[i].setAttribute('width',2);
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
        poster.setAttribute('src',image_list[i]);
        poster.setAttribute('position',{x:0,y:0,z:0.01});
        poster.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
        //console.log(panels[i]);
    }
}

function frontWall(contentNum){
    var wallLength=contentNum*2+(contentNum+1)*1;
    if(contentNum<1){
        return;
    }
    var panels=$(".panel");
    var positionStart=0;
    if(contentNum%2==0){
        positionStart=-(1.5+3*(contentNum/2-1));
    }
    else{
        positionStart=-(3*Math.floor(contentNum/2));
    }
    var posZ=(image_list.length-contentNum)/2;
    posZ=(posZ*2+(posZ+1))/2;
    for(var i=contentNum-1;i<=panels.length-contentNum;i++){
        console.log(i);
        var posX=positionStart;
        positionStart+=3;
        panels[i].setAttribute('position',{x:posX,y:2,z:-posZ});
        panels[i].setAttribute('rotation',{x:0,y:0,z:0});
        panels[i].setAttribute('height',2);
        panels[i].setAttribute('width',2);
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
        poster.setAttribute('src',image_list[i]);
        poster.setAttribute('position',{x:0,y:0,z:0.01});
        poster.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
        //console.log(panels[i]);
    }
}

$(document).ready(function(){
    var zoom_out_btn_src="https://cdn.iconscout.com/icon/free/png-256/zoom-out-1478325-1251179.png";
    var zoom_in_btn_src="https://cdn1.iconfinder.com/data/icons/photography-86/66/photographycamcamera-45-512.png";
    var panel_html_structure="<a-plane class=\"panel\"><a-image></a-image><a-image></a-image><a-image></a-image></a-plane>";

    for(var i=0;i<image_list.length;i++){
        $("a-scene").append(panel_html_structure);
    }

    var sideWallContent=Math.floor(image_list.length/3);
    var frontWallContent=image_list.length-2*sideWallContent;
    
    rightWall(sideWallContent);
    leftWall(sideWallContent);
    frontWall(frontWallContent);

    /*var positionStart=-2.2*Math.floor(i/2);

    var panels=$(".panel");
    for(var i=0;i<panels.length;i++){
        var posX=positionStart;
        positionStart+=2.2;
        /*panels[i].setAttribute('position',{x:posX,y:2,z:-3});
        panels[i].setAttribute('height',2.5);
        panels[i].setAttribute('width',1.8);
        
        //console.log(panels[i].getAttribute('position'));
        var children=panels[i].getElementsByTagName("a-image");
        var poster=children[0];
        var zoom_in=children[1];
        var zoom_out=children[2];
        poster.setAttribute('class','poster');
        zoom_in.setAttribute('class','zoom_in_btn');
        zoom_out.setAttribute('class','zoom_out_btn');
        poster.setAttribute('id','poster'+i);
        zoom_in.setAttribute('id','zoom_in_btn'+i);
        zoom_out.setAttribute('id','zoom_out_btn'+i);*/
        
        /*var tempImage=new Image();
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
        poster.setAttribute('src',image_list[i]);
        poster.setAttribute('position',{x:0,y:0.5,z:0.01});
        poster.setAttribute('scale',{x:1,y:1,z:1});

        zoom_in.setAttribute('src',zoom_in_btn_src);
        zoom_in.setAttribute('position',{x:-0.2,y:-1,z:0.01});
        zoom_in.setAttribute('height',0.2);
        zoom_in.setAttribute('width',0.2);

        zoom_out.setAttribute('src',zoom_out_btn_src);
        zoom_out.setAttribute('position',{x:0.2,y:-1,z:0.01});
        zoom_out.setAttribute('height',0.2);
        zoom_out.setAttribute('width',0.2);*/

        /*zoom_in.addEventListener('click',function(){
            poster.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
            console.log("ZOOM IN");
        });
        zoom_out.addEventListener('click',function(){
            poster.setAttribute('scale',{x:1,y:1,z:1});
            console.log("ZOOM OUT");
        });
    }*/
    /*
    for(var i=0;i<panels.length;i++){
        //console.log("2nd for");
        var poster=$("#poster"+i)[0];
        //console.log(poster);
        var zoom_in=$("#zoom_in_btn"+i)[0];
        //console.log(zoom_in);
        var zoom_out=$("#zoom_out_btn"+i)[0];
        console.log(zoom_out);
        zoom_in.addEventListener('click',function(evt){
            //console.log(poster);
            poster.setAttribute('scale',{x:1.5,y:1.5,z:1.5});
        });
        zoom_out.addEventListener('click',function(evt){
            //console.log(poster);
            poster.setAttribute('scale',{x:1,y:1,z:1});
            //console.log("ZOOM OUT");
        });
    }*/
    
});