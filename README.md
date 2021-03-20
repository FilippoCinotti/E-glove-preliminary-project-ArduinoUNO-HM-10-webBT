# E-glove: preliminary project with ArduinoUNO, HM-10 BT module and WebBT application



# Project aim
Create a force sensitive E-glove to monitor the fingers' exerted force during hand grasping/gripping. The project aimed to be applied in the rehabilitation of post-stroke patients suffering from neurologic hand impairment.

# Materials
To realize the hardware of the prototypal version of the e-glove, the following materials have been used:
- ELEGOO R3 Board ATmega328P ATMEGA16U2 microcontroller; 
- 8 x 100Ω resistors;
- Wires;
- 4 x LEDs (Green, Yellow, Blue and Red);
- HM-10 Bluetooth module (BLE 4.1);
- Glove with 4 x Textile handcrafted force sensors;
- Elegoo Double Sided PCB Board Prototype kit;
- Soldering kit with soldering iron;
- Multimeter;
- 9V battery with an ELEGOO board connector.



# HM-10 Bluetooth module (BLE 4.1)
The HM-10 is a readily available, less than 10€ expensive, high-performance BT 4.0 module commonly used to establish robust communication between devices (98). The module is designed using the CC2540 Bluetooth low energy (BLE) system on a chip by Texas Instruments and might work both as a master or slave in direct communication between different electronics boards. It is programmable and all its features such as working mode, name and transmission speed might be straightforward tuned via AT commands or using the official software.


# Final results
The electrical components have been assembled following the schematic shown in Figure 1 and realized with Autodesk EAGLE(™) software.

![Schematico](https://user-images.githubusercontent.com/63125253/111863587-cf216180-895c-11eb-911e-cb5fafc0b5b8.png)
Figure 1: Circuit schematic realized with EAGLE(™) software


Figure 1 shows the result of the hardware production procedure, the first realized e-glove prototype.


![prototipo](https://user-images.githubusercontent.com/63125253/111863633-06900e00-895d-11eb-8d4b-499c15448271.png)
Figure 2: Assembled prototype

This prototypal version was equipped with an HM-10 Bluetooth Low Energy (BLE), allowing data collected from the E-glove to be wirelessly shared with the therapists and the patients, leaving more freedom of movement to the patient and reducing the impact on his/her actions. Moreover, it could be proactively used to optimize the stimulation parameters at the MeCFES device, creating a bidirectional communication with the FES device. MecFES sends information about the EMG activity receiving back manually adapted stimulation parameters defined by the doctor. E-Glove contributes by sending information about the exerted force (and movement in the 2.0 version), which could be used to automatically adapt the stimulation parameters, as shown in the image below (Figure 4). 


![Architettura sistema](https://user-images.githubusercontent.com/63125253/111864033-f9741e80-895e-11eb-9fad-053ab40a20f6.jpg)
Figure 3: System communication architecture.
 
As UX guidelines suggest, the user interface has been taken as simple as possible but useful in showing the primary information of interest to the user is provided. On the center-left of the screen, it has been decided to show the glove with a visual representation of the sensor collocation. In particular, it has been selected to insert some signal-responsive icons that can tune their color and dimension depending on the value of the force recorded by the corresponding sensor on the hand, thus making a stronger impression on the clinician than a simple number that indicates the applied force. 
On the right-hand side, the more technical data have been reported and the interface reveals the values that have been collected for the applied force. In particular, all these force values are expressed in Newton
 

![GUI interface](https://user-images.githubusercontent.com/63125253/111863651-1ad40b00-895d-11eb-8b5f-063f96d6486f.JPG)
Figure 4: Processing desktop GUI.

The E-glove webBT app has been implemented following the same model of the desktop GUI. The force exerted by the fingers is shown both in numbers and in their graphical representation. Moreover, to prepare the device for its 2.0 version, the IMU information is ready to be shown, describing hand stability during the task and quantifying the mediolateral (ML) and anteroposterior (AP) acceleration during the grasping activity.
The connection button has been added to the page in order to guarantee the possibility to connect the E-glove to the personal device the clinician is using. As observable, the device is recognizable from the given name “E-glove” during pairing.

![gui1](https://user-images.githubusercontent.com/63125253/111863755-b2d1f480-895d-11eb-8742-6d1666300b71.png)
Figure 5: E-glove control section website


![gui2](https://user-images.githubusercontent.com/63125253/111863759-b6657b80-895d-11eb-862d-1f53ca87df1a.png)
Figure 6: E-glove control section during use

As highlighted in the image above, when active, the E-glove can show all the patient’s performance features, used for rehabilitation purposes. 
In particular, this tool might be employed to highlight the force of contact and the stability of the contact, but also the presence of the contact itself, replicating what it has just been done with other cable-needing gloves used for functional evaluation and rehabilitation purposes. 

# Video results
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/63125253/111863913-8074c700-895e-11eb-829b-16d1f9ed255b.gif)


![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/63125253/111863915-823e8a80-895e-11eb-83b8-8e5f6a06f19e.gif)

# Find more
Find more here https://drive.google.com/file/d/1uoepBs-jbf4QEqmrZMT6lbq3g0s4qHzk/view?usp=sharing


 
