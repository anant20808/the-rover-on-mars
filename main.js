canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

roverwidth=100;
roverheight=90;

roverx=10;
rovery=10;

rover_image="rover.png";
canvasbg="mars.jpg";

function add(){

background_image=new Image();
background_image.onload=uploadbackground;
background_image.src= canvasbg;

roverimagetag=new Image();
roverimagetag.onload=uploadrover;
roverimagetag.src= rover_image;


}

function uploadbackground(){
    ctx.drawImage(background_image,00,00,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

   keypres=e.keyCode;
   console.log(keypres);
   

    if (keypres == '38') {

        up();
        console.log("up")
    }

    if (keypres == '40') {

        down();
        console.log("down");
    }

    if (keypres == '39') {

        right();
        console.log("right");
    }

    if (keypres == '37') {
        
        left();
        console.log("left");
    }
}

function up(){

if(rovery >= 0){

 rovery -= 10;
 uploadbackground();
 uploadrover();

}


}
function down(){

    if(rovery <= 500){
    
     rovery += 10;
     uploadbackground();
     uploadrover();
    
    }
}

function right(){

    if(roverx <= 700){
    
     roverx += 10;
     uploadbackground();
     uploadrover();
    
    }
}

function left(){

    if(roverx >= 0){
    
     roverx -= 10;
     uploadbackground();
     uploadrover();
    
    }
}
