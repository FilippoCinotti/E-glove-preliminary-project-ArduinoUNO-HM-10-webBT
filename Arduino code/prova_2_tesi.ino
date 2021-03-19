// Code used to program the Arduino prototype

//Variables for Finger Force
int pressa=A1, pressb=A2, pressc=A3, pressd=A4;   // It has been firstly considered the 4 most significative values of force

// Sensor 1
int Indicerimappato; 
float indice, indicetot, forzaindice;

// Sensor 2
int Pollicerimappato; 
float pollice, pollicetot, forzapollice;

// Sensor 3
int Mediorimappato; 
float medio, mediotot, forzamedio;

// Sensor 4
int Arcorimappato; 
float arcotot, arco, forzaarco;

// General

int cont, DirezioneNS=0, DirezioneEO=0, Movimento=0;
float remainingtime, accelx, accely;


void setup() {
  // initialize the serial communication:
  Serial.begin(19200);
  //Setting up the ports for analog signals reading
  pinMode(pressa, INPUT);
  pinMode(pressb, INPUT);
  pinMode(pressc, INPUT);
  pinMode(pressd, INPUT);

  //LED controls
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
    
}

void loop() {

// Finger presssure read --> For sensors position reference see the pic of the glove
indice = analogRead(pressa);
pollice = analogRead(pressb);
medio = analogRead(pressc);
arco = analogRead(pressd);
delay(50);

// Calibration of the sensors for the first two seconds after turning ON (to correct OFFSET)
if (millis() < 2000)
{
    indicetot = indicetot + indice;
    mediotot = medio + mediotot;
    pollicetot = pollice + pollicetot;
    arcotot= arco + arcotot;
    remainingtime= (2000-millis())/1000;
    Serial.print("Calibrating the sensors....");
    Serial.print(" ( ");
    Serial.print(remainingtime);
    Serial.print("s left ) ");
    Serial.println("    ");
    cont++;
}
else {

//Correction of the values
indice = indice - indicetot / cont;
if (indice < 0)
{
  indice = 0;
}
medio = medio - mediotot / cont;
if (medio < 0)
{
  medio = 0;
}
pollice = pollice - pollicetot / cont;
if (pollice < 0)
{
  pollice = 0;
}
arco = arco - arcotot / cont;
if (arco < 0)
{
  arco = 0;
}

// Force value mapping on 255 levels RGB scale to control the lightness of the LEDs
Indicerimappato = map(indice, 0, 350, 0, 255);
Pollicerimappato = map(pollice, 0, 350, 0, 255);
Mediorimappato = map(medio, 0, 350, 0, 255);
Arcorimappato = map(arco, 0, 350, 0, 255);

//Serial.print("INDICE =  ");
//Serial.println(indice);
//Serial.print("POLLICE =  ");
//Serial.println(pollice);
//Serial.print("MEDIO =  ");
//Serial.println(medio);
//Serial.print("ARCO =  ");
//Serial.println(arco);

//Force calculation for the different sensors

forzaindice = ((indice/0.3418)-25.161)*(9.81/1000);
forzapollice = ((pollice/0.3418)-25.161)*(9.81/1000);
forzamedio = ((medio/0.3418)-25.161)*(9.81/1000);
forzaarco = ((arco/0.3418)-25.161)*(9.81/1000);

//LEDs turning ON proportionally to the applied force
analogWrite (6, Indicerimappato);
analogWrite (3, Pollicerimappato);
analogWrite (5, Mediorimappato);
analogWrite (9, Arcorimappato);


}

  Serial.print(forzapollice);
  Serial.write(',');
  Serial.print(forzaindice);
  Serial.write(',');
  Serial.print(forzamedio);
  Serial.write(',');
  Serial.print(forzaarco);
  Serial.write(',');
  Serial.print(Indicerimappato);
  Serial.write(',');
  Serial.print(Pollicerimappato);
  Serial.write(',');
  Serial.print(Mediorimappato);
  Serial.write(',');
  Serial.print(Arcorimappato);
  Serial.write(',');

  // This data will be added if the MPU will be added
  Serial.print(accelx);
  Serial.write(',');
  Serial.print(accely);
  Serial.write(',');
  Serial.print(DirezioneEO);
  Serial.write(',');
  Serial.print(DirezioneNS);
  Serial.write(',');
  Serial.println(Movimento);

 }
