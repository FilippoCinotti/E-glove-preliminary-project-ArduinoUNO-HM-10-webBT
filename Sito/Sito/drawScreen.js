function drawScreen() {

  textSize(18);
  background(255);
  if (isConnected) {
    //background(0, 255, 0);
    fill(0,255,0);
    text('Connesso :)', 755, 80);
  } else {
    //background(255, 0, 0);
    fill(255,0,0);
    textAlign(LEFT, TOP);
    text('Disconnesso :/', 755, 80);
    forzapol = 0;
    forzaind = 0;
    forzamed = 0;
    forzaarc = 0;
  }
  fill(0);
  splitString = split(receivedValue, ',');
  forzapol = splitString[1]/100;
  forzaind = splitString[0]/100;
  forzamed = splitString[2]/100;
  forzaarc = splitString[3]/100;
  indice=((forzaind/(9.81/1000))+25.161)*0.3418;
  pollice=((forzapol/(9.81/1000))+25.161)*0.3418;
  medio=((forzamed/(9.81/1000))+25.161)*0.3418;
  arco=((forzaarc/(9.81/1000))+25.161)*0.3418;
  indicerim = map(indice, 0, 350, 0, 255,true);
  pollicerim = map(pollice, 0, 350, 0, 255,true);
  mediorim = map(medio, 0, 350, 0, 255,true);
  arcorim = map(arco, 0, 350, 0, 255,true);

if (forzaind<=0)
{
forzaind=0;
}
if (forzapol<=0)
{
forzapol=0;
}
if (forzamed<=0)
{
forzamed=0;
}
if (forzaarc<=0)
{
forzaarc=0;
}
  indicerim = round(indicerim,2);
  pollicerim = round(pollicerim,2);
  mediorim = round(mediorim,2);
  arcorim = round(arcorim,2);
  
 /* text(forzaind, 350, 30);
  text(forzapol, 350, 50);
  text(forzamed, 350, 70);
  text(forzaarc, 350, 90);

  text(round(indice,2), 350, 110);
  text(round(pollice,2), 350, 130);
  text(round(medio,2), 350, 150);
  text(round(arco,2), 350, 170);

  text(indicerim, 350, 190);
  text(pollicerim, 350, 210);
  text(mediorim, 350, 230);
  text(arcorim, 350, 250);*/


  //Sets and updates the text values for the labels and data.
  text("Forza pollice:", 700, 130);
  text( + forzapol + " N", 700, 155);
  
  text("Forza indice", 700, 195);
  text(+ forzaind + " N", 700, 220);
  
  text("Forza medio", 700, 260);
  text(+ forzamed + " N", 700, 285);
  
  text("Forza di contatto", 700, 325);
  text( + forzaarc + " N", 700, 350);
  
  text("Condizioni mano:", 700, 415);  
  if (Movimento==1) {
    text("In Movimento", 700, 440);
  } else {
    text("Stabile", 700, 440);
  }
image(imgNS, 625, 460);
text("Direzione Antero - posteriore:", 700, 480);
  
if(DirezioneNS == 1){
  image(imgN, 625, 460);
  text("Nord", 700, 505);
  }
  else if(DirezioneNS == 2){
    image(imgS, 625, 460);
    text("Sud", 700, 505);
  }
  else{
    image(imgNS, 625, 460);
    text("Ferma", 700, 505);
  }

  image(imgEO, 625, 525);
  text("Direzione Medio - Laterale:", 700, 545);
  if(DirezioneEO == 1){
    image(imgE, 625, 545);
    text("Est", 700, 570);
  }
  else if(DirezioneEO == 2){
    image(imgO, 625, 545);
    text("Ovest", 700, 570);
  }
  else{
    image(imgEO, 625, 525);
    text("Ferma", 700, 570);
  }

     
   image(imgMano, 100, 25);
   image(sfond, 1000, 5);
    
  
}
