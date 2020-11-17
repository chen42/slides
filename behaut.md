
#### Anat 841 Behavior Neuroscience

# Automating rodent behavior experiments 
## The DIY way  

<hr>


### Hao Chen, Department of Pharmacology, UTHSC


https://chen42.github.io/slides/behaut.html

<small> Written using [Reveal.js](https://github.com/hakimel/reveal.js) and [markdown](https://help.github.com/categories/writing-on-github/) </small>

---

## Outline

* Analysis of rodent behaviors and approaches for automation
* Know your tools
* Example systems

---

## Typical rodent behavior experiments

* Only visual observation --> camera 
  * Open field, plus maze, object interaction, social interaction
  * Video analysis
* Measure a specific reaction --> sensor
  * Tail immersion
  * Tremor
* Operant conditioning  --> sensor + motor
  * Lever pressing (switch)
  * Nose poking (RFID or IR)
  * Licking or touching (capatitive sensor)
* Rodent identification
  * RFID system
* What kind of behavior are you intersted in studing? 

---

#### Single board computers

## Raspberry Pi Family

<a href="https://maker.pro/raspberry-pi/tutorial/how-to-get-started-with-your-first-raspberry-pi" ><img src="https://raspi.tv/wp-content/uploads/2018/03/Pi-Family-Photo-Master-Mar2018-1500-1-939x1024.jpg" width=50%, style="transform:rotate(270deg);"></a>

---

## Raspberry Pi 3B+

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Raspberry_Pi_3_B%2B_%2839906369025%29.png/1280px-Raspberry_Pi_3_B%2B_%2839906369025%29.png">


---

## GPIO (general purpose input-output)

<img src="https://www.raspberrypi-spy.co.uk/wp-content/uploads/2012/06/Raspberry-Pi-GPIO-Layout-Model-B-Plus-rotated-2700x900.png">

* Ground (grey), 5V (pink), 3V(orange),
* GPIO (either input or output, green)
* Special I/O protocols
  *  I2C (magenta)
  *  serial (purple)
  *  SPI (blue)

---


## Operating system for the RPi

* Raspberry PI OS (previously Rasbian) is the official OS <a href="https://www.youtube.com/watch?v=RDAklos4F8k">YouTube Video</a>
  * graphical user interface (GUI) 
  * command line interface (CLI)
  * derived from Debian Linux
* Why you should learn some Linux/Unix commands 
  * Mac OS (Terminal app)
  * Windows subsystem for Linux (<a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">Installation guide</a>)
  * Servers 
  * Supercomputer 

---

## Breadboard and Jumper Wire


<div id="left50">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pcb33.430-g1.jpg/1920px-Pcb33.430-g1.jpg"  width=80%> 

<a href="https://en.wikipedia.org/wiki/Breadboard" > Wikipedia</a>

</div>

<div id="right50">
<img src="./images/behaut/jumper_wire.png">

</div>

---

## Sensors: Temperature 

<a href="https://pimylifeup.com/raspberry-pi-temperature-sensor/"><img src="https://cdn.pimylifeup.com/wp-content/uploads/2016/03/Raspberry-Pi-Temperature-Sensor-Diagram-v2.png"></a>

---

## Sensors: Temperature

<a href="https://raspberrypi.stackexchange.com/questions/48357/connecting-ds18b20-temperature-sensor-with-rj45-connector">
<img src="https://i.stack.imgur.com/5EKzW.png" width=70%></a>

---

## Sensors: Capacitive touch sensor

<iframe width="780" height="560" src="https://www.youtube.com/embed/Wk76UPRAVxI?start=15" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<a href="https://www.forbes.com/profile/limor-fried/?list=top-tech-women-america#2077af9a4ecc">America's top 50 women in tech, 2018</a>

---

## Sensors: Camera

<img src="https://www.arducam.com/wp-content/uploads/2020/02/raspberry-pi-camera-pinout-camera-2.png" width=60%>


---


## Radio frequency ID

<img src="https://pragra.files.wordpress.com/2008/06/tag-specification.jpg" width=60%>


---

## Sensors: RFID reader (UART) 

<img src="./images/behaut/rfid_antenna.jpg">

---

## Sensors: RFID reader  (USB)


<img src="./images/behaut/usb_rfid_reader.jpg" width=50% >

---


## Sensors: Infrared light 

### "beam break"

<a href="https://tutorials-raspberrypi.com/build-raspberry-pi-infrared-light-barrier-and-measure-speed/">
<img src="https://tutorials-raspberrypi.com/wp-content/uploads/lichtschranke_Steckplatine-1024x789.png" width=60%></a>


---

## Output: LED

<a href="https://thepihut.com/blogs/raspberry-pi-tutorials/27968772-turning-on-an-led-with-your-raspberry-pis-gpio-pins">

<img src="https://cdn.shopify.com/s/files/1/0176/3274/files/LEDs-BB400-1LED_bb_grande.png?6398700510979146820" width=40% style="transform:rotate(270deg);"></a>

---

## Output: Buzzer 

<a href="https://www.sunfounder.com/learn/sensor-kit-v2-0-for-raspberry-pi-b-plus/lesson-10-buzzer-module-sensor-kit-v2-0-for-b-plus.html">
<img src="https://www.sunfounder.com/media/wysiwyg/swatches/sensor_kit_v2_0_for_b_plus/lesson-10-buzzer-module/fdsfdsfd.png" width=50%> </a>
---

## Input/Output: LCD with touch sensors  

<iframe width="780" height="560" src="https://www.youtube.com/embed/Fj3wq98pd20?start=30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Output: e-link display 


<img src="https://m.media-amazon.com/images/I/61XxYE+JHEL._AC_UY327_QL65_.jpg">

---

## Output: Step motor

<a href="https://projects.raspberrypi.org/en/projects/physical-computing/14">
<img src="https://projects-static.raspberrypi.org/projects/physical-computing/0cb2cbd34292a05a668aeea3f291ceb3c7d9cd83/en/images/mcb-wiring.png"></a>

<a href="https://www.youtube.com/watch?v=C-6IK3zF1jg">YouTube Tutorial</a>

---

## Many many more 

<a href="https://tutorials-raspberrypi.com/raspberry-pi-sensors-overview-50-important-components/"><img src=https://tutorials-raspberrypi.com/wp-content/uploads/2016/11/50-Raspberry-Pi-Sensors-and-Components.jpg width=50%> </a>

---

## Microcontrollers

### Arduino

<img src="https://cdn.sparkfun.com/assets/9/1/e/4/8/515b4656ce395f8a38000000.png">

<a href="https://www.arduino.cc/en/Guide/Introduction"> Input-Output Coupling</a>

---

## 3D printing

<iframe width="780" height="560" src="https://www.youtube.com/embed/ZcohRrFfmvc?start=404" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Example 1: RFID reader

<a href="https://github.com/chen42/openbehavior/tree/master/RFID">
<img src="./images/behaut/rpi_rfid_reader.jpg"></a>

---

## Example 2: Improved RFID reader

<a href="https://github.com/chen42/openbehavior/tree/master/RFID">
<img src="./images/behaut/rfid_scanner.jpg"></a>

---

## Example 3: Environment sensor

<a href="https://github.com/chen42/openbehavior/tree/master/envSensors">

<img src="https://raw.githubusercontent.com/chen42/openbehavior/master/envSensors/images/envSensor4.jpg" width=60%>

</a>


---

## Example 4: Operant Licking

<a href="https://github.com/chen42/openbehavior/blob/master/operantLicking/Assembly.md"> 
<img src="https://raw.githubusercontent.com/chen42/openbehavior/master/operantLicking/images/assembled.jpg" width=50%> 
</a>

<a href="https://peerj.com/articles/2981/"> Peer J Article </a>

---


## Example 5. Tremor 

<a href="https://github.com/chen42/openbehavior/tree/master/ratremor">

<img src="https://github.com/chen42/openbehavior/raw/master/ratremor/ratremor_prototype.jpg" width=70%></a>

---

## Example 6. TailTimer (prototype)

<a href="https://github.com/chen42/openbehavior/tree/master/RFID">
<img src="./images/behaut/rpi_tail_immersion.jpg" width=80%>
</a>

---

## Example 7. PeerPub 

<img src="./images/behaut/PeerPub.jpg">

---
## PeerPub Spout Holder

<img src="./images/behaut/rfid_spout_door.jpg">

---

## PeerPub Syringe Pump

<img src="./images/behaut/new_syringe_pump.jpg" width=60%>

---

## Example 8: Video Recorder

<img src="./images/behaut/rpi_camera_tripod.jpg" width=60%>

---

## Example 9. Analyze social behavior

#### Use 3D printed ear tag with different colors to identify individual rats

 <img src="./images/behaut/many_colorful_eartags.jpg" width=60%>

---

## Social interaction between rats 

<iframe width="500" height="500" src="https://www.youtube.com/embed/mJglzLs3RNo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


---

## Three chamber social interaction test

<img src=" https://www.stoeltingco.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/0/60450_catalog_web.jpg">

---

## Object recognition

<img src=" https://www.researchgate.net/profile/Kedar_Potdar/publication/329217107/figure/fig4/AS:697578261852162@1543327026650/Object-detection-in-a-dense-scene.ppm">


---

## Neural Network
### Modeling one neuron 

<img src="https://cdn-images-1.medium.com/max/1600/1*v88ySSMr7JLaIBjwr4chTw.jpeg" width=70%>

---

## Deep Neural Network

### Fully connected

<img src="https://www.oreilly.com/library/view/tensorflow-for-deep/9781491980446/assets/tfdl_0401.png" width=50%>

---

## Deep Neural network

### Training the network

<a href="https://theclevermachine.wordpress.com/tag/backpropagation/">
<img src="./images/deepvar/fprop_bprop5.png" width=70%>

</a>


---
## Live demo of DNN

<a href="https://lecture-demo.ira.uka.de/neural-network-demo/?preset=Three%20classes%20test" target=_new ><img src="./images/deepvar/neuralnet.png"></a>

---


## Convolution

![](https://ujwlkarn.files.wordpress.com/2016/07/screen-shot-2016-07-24-at-11-25-13-pm.png?w=150&h=136)
![](https://ujwlkarn.files.wordpress.com/2016/07/screen-shot-2016-07-24-at-11-25-24-pm.png?w=74&h=64) 
![](https://ujwlkarn.files.wordpress.com/2016/07/convolution_schematic.gif?w=268&h=196&zoom=2)

https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/

---

## Convolution as feature detector

![](https://ujwlkarn.files.wordpress.com/2016/08/screen-shot-2016-08-05-at-11-03-00-pm.png?w=342&h=562)

https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/

---

## Deep Neural network

### ConvNet, CNN

![](https://www.mathworks.com/content/mathworks/www/en/discovery/convolutional-neural-network/jcr:content/mainParsys/image_copy.adapt.full.high.jpg/1523891796216.jpg)

---

## Visual example of a ConvNet

<a href="http://scs.ryerson.ca/~aharley/vis/conv/"><img src="https://ujwlkarn.files.wordpress.com/2016/08/conv_all.png?w=1024"></a>


Author: [Adam Harley](http://www.cs.cmu.edu/~aharley/)

---

## YOLO (2016)

![](https://cdn-images-1.medium.com/max/1040/1*ZbmrsQJW-Lp72C5KoTnzUg.jpeg)

S x S grid, each grid predict a few bounding boxes. Each bounding box has x, y, w, h, confidence, and class probability. 

---

## YOLO v3 (2018)

![](https://cdn-images-1.medium.com/max/1300/1*d4Eg17IVJ0L41e7CTWLLSg.png)

[towarddatascience.com](https://towardsdatascience.com/yolo-v3-object-detection-53fb7d3bfe6b)

---

## YoRodents: Labeling images

<img src="./images/deep_learning/labelRatBodyParts.png" width=60% >

---


## Training a custom YOLO network

<img src="./images/deep_learning/training_progression.png" width=40%>

```
darknet detector train rat12class.data yolo_12_class.cfg darknet19_448.conv.23 
```

---

## Detecting objects using the trained network

<img src="./images/deep_learning/epoc30000_whiteEartags1_0001482.jpg" width=40%>

---

## Prediction probability of 9 classes

<img src="./images/deep_learning/prob_comparison_dualGPU40k.svg" width=60%>

---

## Reconstructing behavior 

* Re-assemble bounding boxes into **individuals** based on ear tag color in python
* Slightly compress time course (30fps -> 10fps) by taking the median 
* Imput missing body parts using Amelie package in R
* Smooth the imputed data using Lowess in R 

---

## From bounding box to behavior 

* Distance and velocity 
	* Calculate distances between different objects (nose-nose, nose-anog, etc)
	* Calculate speed and direction of travel
* Social behavior
	* Nose-nose 
	* Nose-body
	* Nose-anogenital 
	* Follow 
	* Grouping (active join, passive joing, leaving) 
	* Huddle 
 
---

## Putting everything together 

<iframe width=80% height="450" src="https://www.youtube.com/embed/Lwfg2t9nXcI?start=45" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

## Visualization is good for detecting errors

<img src="./images/deep_learning/socialgraph.png" width=80%>

---

## Time course of behaviors 

<img src="./images/deep_learning/circos.png" width=50%>

---

## Mask R-CNN (2017)

![](https://cdn-images-1.medium.com/max/2000/1*6CClgIKH8zhZjmcftfNoEQ.png)

---

## Summary

* Rodent behavior are complicated but can be digitized. 
* Single board computers are useful for automating many rodent behavioral experiments
	* Rodent identification is critical for large scale experiments
		* RFID chips are cheap ($0.55)
	* Many types of sensors can be used. 
	* Motors or lights or tone generators can be used to provide stimulus.
* 3D printers can be used to make various parts 

---

## Hands on 

* Linux command line 
	* <a href="https://chen42.github.io/slides/linux.html"> Hao's tutorial </a> 
* 3D design using openscad
	* <a href="https://www.makeuseof.com/tag/beginners-guide-openscad-programming-3d-printed-models/">Makeuseof.com tutorial</a>
	* <a href="http://edutechwiki.unige.ch/en/OpenScad_beginners_tutorial#Primitive_Solids"> EduTech Wiki</a>
	* <a href="https://www.youtube.com/playlist?list=PLDhWPyde5E_Rz7LghBXmnhhY9F8X7k503">Patrick Conner YouTube series</a>

* 3D design using FreeCAD
	* <a href="https://www.youtube.com/watch?v=sxnij3CkkdU">Youtube: FreeCAD for beginners</a>
	* <a href="https://wiki.freecadweb.org/Tutorials">Official Tutorials</a>

