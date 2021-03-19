var s = function( p ) {

// The serviceUuid must match the serviceUuid of the device you would like to connect
const serviceUuid = "19b10010-e8f2-537e-4f6c-d104768a1214";
const serviceUuidMC = "19b10011-e8f2-537e-4f6c-d104768a1214";
let myBLE;
let isConnected = false;
let myBLEMC;
let isConnectedMC = false;
let imgEglove_On;
let imgMC_On; 
let imgEglove_Off;
let imgMC_Off;
var cnv; 



p.setup = function() {
  imgEglove_On = loadImage('Glove_On.png'); // Load the image
  imgEglove_Off = loadImage('Glove_Off.png'); // Load the image
  imgMC_On = loadImage('MeCFES_On.png'); // Load the image
  imgMC_Off = loadImage('MeCFES_Off.png'); // Load the image
  // Create a p5ble class
  myBLE = new p5ble();
  // Create a p5ble class
  myBLEMC = new p5ble();

  cnv = p.createCanvas(windowWidth, 350);
  p.background(255);
  p.textSize(20);
  p.textAlign(CENTER, CENTER);

  // Create a 'Connect' button
  const connectButton = p.createButton('Connetti')
  connectButton.position(200,1040);
  connectButton.mousePressed(connectToBle);
  
   // Create a 'Disconnect' button
  const disconnectButton = p.createButton('Disconnetti')
  disconnectButton.position(280,1040);
  disconnectButton.mousePressed(disconnectToBle);
  
  
  // Create a 'Connect' button
  const connectButtonMC = p.createButton('Connetti')
  connectButtonMC.position(880,1040);
  connectButton.mousePressed(connectToBleMeCFES);
  
  // Create a 'Disconnect' button
  const disconnectButtonMC = p.createButton('Disconnetti')
  disconnectButtonMC.position(960,1040);
  disconnectButton.mousePressed(disconnectToBleMeCFES);
}


function connectToBle() {
  // Connect to a device by passing the service UUID
  myBLE.connect(serviceUuid, gotCharacteristics);
}

function connectToBleMeCFES() {
  // Connect to MeCFES by passing the service UUID
  myBLEMC.connect(serviceUuidMC, gotCharacteristicsMC);
}

function disconnectToBle() {
  // Disonnect to the device
  myBLE.disconnect();
  // Check if myBLE is connected
  isConnected = myBLE.isConnected();
}

function disconnectToBleMeCFES() {
  // Disonnect to the device
  myBLEMC.disconnect();
  // Check if myBLE is connected
  isConnectedMC = myBLEMC.isConnected();
}


function onDisconnected() {
  console.log('Device got disconnected.');
  isConnected = false;
}
function onDisconnectedMC() {
  console.log('Device got disconnected.');
  isConnectedMC = false;
}

// A function that will be called once got characteristics
function gotCharacteristics(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);

  // Check if myBLE is connected
  isConnected = myBLE.isConnected();

  // Add a event handler when the device is disconnected
  myBLE.onDisconnected(onDisconnected)
}

// A function that will be called once got characteristics
function gotCharacteristicsMC(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);

  // Check if myBLE is connected
  isConnectedMC = myBLEMC.isConnected();

  // Add a event handler when the device is disconnected
  myBLEMC.onDisconnected(onDisconnectedMC)
}

p.draw = function() {
  p.fill(115);
  p.text('E-glove', 280, 10);
  p.text('MeCFES', 960, 10);
  if (isConnected) {
    p.image(imgEglove_On, 200, 70);
    p.text('Connesso!', 280, 160);
  } else {
    p.image(imgEglove_Off, 200, 70);
    p.text('Disconnesso :/', 280, 160);
  }
  
  if (isConnectedMC) {
    p.image(imgMC_On, 860, 70);
    p.text('Connesso!', 960, 160);
  } else {
    p.image(imgMC_Off, 860, 70);
    p.text('Disconnesso :/', 960, 160);
  }
}
};
var myp5 = new p5(s, 'sketchBT');