/*  
 * Bluetooth Test - Processing Side (In Chrome)
 * Arduino to HM10 module to Google Chrome
 * https://www.amazon.com/gp/product/B06WGZB2N4/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1
 * 
 * p5.ble.js
 https://yining1023.github.io/p5ble-website/
 
 * kevin darrah
 * 
 * Twitter: https://twitter.com/KDcircuits
 * For inquiries or design services:
 * https://www.kdcircuits.com
 * 
 * License?  Do whatever you want with this code - it's just a sample
 */
 
 //globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";
let splitString;

let blueTooth;
let isConnected = false;


var millisecondTimerStart;
var oldColorPickerValue;

var indice;
var pollice;
var medio;
var arco;
var indicerim = 25;
var pollicerim = 75;
var mediorim = 50;
var arcorim = 100;
var forzapol = 0;
var forzaind = 0;
var forzamed = 0;
var forzaarc = 0;

var imgMano;
var imgNS;
var imgEO;
var imgN;
var imgS; 
var imgE; 
var imgO;
var sfond;

var DirezioneEO = 0;
var DirezioneNS = 0;
var Movimento = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);
  
  
  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();

  const connectButton = createButton('Connect');
  connectButton.mousePressed(connectToBle);
  connectButton.position(675, 75);

  const LEDonButton = createButton('LED ON');
  LEDonButton.mousePressed(LEDon);
  LEDonButton.position(240, 560);

  const LEDoffButton = createButton('LED OFF');
  LEDoffButton.mousePressed(LEDoff);
  LEDoffButton.position(LEDonButton.x+LEDonButton.width+10, 560);

  /*ledColorPicker = createColorPicker('#ff0000');
  ledColorPicker.position(LEDoffButton.x+LEDoffButton.width+10, 95);
  millisecondTimerStart = millis();*/

  imgNS = loadImage("NS.png");
  imgN = loadImage("N.png");
  imgS = loadImage("S.png");
  imgEO = loadImage("EO.png");
  imgE = loadImage("E.png");
  imgO = loadImage("O.png");
  imgMano = loadImage("mano.jpg");
  sfond=loadImage("Imm.png");
  
  
}


function draw() {
fill (0);  
drawScreen();
  //fill(color(random(0, 100), 90, 90));
    
var c1 = map (indicerim,0,200,10,110,true);
    noStroke();
    fill(color(150,220-indicerim/1.5, 0));
    ellipse(232, 112, c1, c1);
    
var c2 = map (arcorim,0,200,10,110,true);
 noStroke();
    fill(color(150,220-arcorim/1.5,10));
    ellipse(210, 380, c2,c2);

var c3 = map (mediorim,0,200,10,110,true);
 noStroke();    
    fill(color(150, 220-mediorim/1.5,10));
    ellipse(307, 85, c3, c3);

var c4 = map (pollicerim,0,200,10,110,true); 
 noStroke();    
    fill(color(150, 220-pollicerim/1.5,10));
    ellipse(141, 284, c4, c4);

/*if(oldColorPickerValue != ledColorPicker.value() && millis()-millisecondTimerStart>50 && isConnected){
    oldColorPickerValue = ledColorPicker.value();
    sendData("LED Color" + ledColorPicker.value()+ "\n");
    millisecondTimerStart = millis();
  }*/

}
