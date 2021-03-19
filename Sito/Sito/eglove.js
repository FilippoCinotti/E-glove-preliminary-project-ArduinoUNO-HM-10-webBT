var myvar = null;

var img, imgNS, imgEO;
//PShape cir1, cir2, cir3, cir4;


var Fpollice=0, Findice=0, Fmedio=0, north, south, east, west;
var pr1=25, pr2=25, pr3=25, pr4=25;
var stlValue, stCountValue, DirezioneEO, DirezioneNS, Movimento;
var Contatto;

function setup() {
  //sets Background to RBG White
  background(color(255, 255, 255));
  
  //img = loadImage("normal.jpeg");
  
  //sets createCanvas of window
  var canvas = createCanvas(windowWidth, 500);
  canvas.parent('eglove');
  //cir1 = createShape(ELLIPSE, 50, 250, 50, 50);
  
  //changes color mode to HSB for radial color
  colorMode(HSB, 360, 100, 100);
}
//var infoot, outfoot, moving, north, south, east, west;
//var pr1=250, pr2=100, pr3=999, pr4=500;
//var stlValue, stCountValue, cadValue, velValue, mepValue;

//first 3 are vars, then 1 direction (1-4), next 4 are the pressure values, last 5 are the values required


function draw() {
  background(255);
  textSize(24);
  fill(360, 0, 0);
  //Sets and updates the text values for the labels and data.
  text("Forza pollice:", 650, 150);
  //var stL = Fpollice;
  text( + Fpollice + "N", 700, 200);
  
  text("Forza indice", 650, 250);
  //var stCount = stCountValue;
  text(+ Findice + "N", 700, 300);
  
  text("Forza medio", 650, 350);
  //var cad = cadValue;
  text(+ Fmedio + "N", 700, 400);
  
  text("Forza di contatto", 650, 450);
  //var vel = velValue;
  text( + Contatto + "N", 700, 500);
  
  text("Condizioni mano:", 650, 600);  
  if (Movimento==1) {
    text("In Movimento", 700, 650);
  } else {
    text("Stabile", 700, 650);
  }
  imgNS = loadImage("NS.png");
  image(imgNS, 625, 730);
  text("Direzione Nord - Sud:", 650, 725);
  if(DirezioneNS == 1){
  imgNS = loadImage("N.png");
  image(imgNS, 625, 730);
  text("North", 700, 777);
  }
  else if(DirezioneNS == 2){
    imgNS = loadImage("S.png");
    image(imgNS, 625, 730);
    text("Sud", 700, 777);
  }
  else{
    imgNS = loadImage("NS.png");
    image(imgNS, 625, 730);
    text("Ferma", 700, 777);
  }
  imgEO = loadImage("EO.png");
  image(imgEO, 625, 855);
  text("Direzione Est - Ovest:", 650, 850);
  if(DirezioneEO == 1){
    imgEO = loadImage("E.png");
    image(imgEO, 625, 855);
    text("Est", 700, 902);
  }
  else if(DirezioneEO == 2){
    imgEO = loadImage("O.png");
    image(imgEO, 625, 855);
    text("Ovest", 700, 902);
  }
  else{
    imgEO = loadImage("EO.png");
    image(imgEO, 625, 855);
    text("Ferma", 700, 902);
  }

    
    //shape(cir1);
    img = loadImage("mano1.png");
    image(img, 0, 100);
//  fill(color(random(0, 100), 90, 90));
    noStroke();
    fill(color(100-pr1/3,90,90));
    circle(165, 210, map(pr1,0, 200, 10, 110));
    
    fill(color(100-pr2/3,90,90));
    circle(140, 538, map(pr4,0, 200, 10, 110));
    
    fill(color(100-pr2/3,90,90));
    circle(258, 175, map(pr3,0, 200, 10, 110));
    
    fill(color(100-pr3/3,90,90));
    circle(55, 420, map(pr2,0, 200, 10, 110));
  
  //draws line down foot to show center of foot with medium weight
  //stroke(360, 0, 0);
  //strokeWeight(5);
  //line(190, 80, 190, 830);
  
  //delay for update
}