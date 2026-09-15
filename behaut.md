#### Anat 841 Behavior Neuroscience

# Automating rodent behavior experiments

## The DIY way

<hr>

### Hao Chen, Department of Pharmacology, UTHSC

https://chen42.github.io/slides/behaut.html

<small> Written using [Reveal.js](https://github.com/hakimel/reveal.js) and [markdown](https://help.github.com/categories/writing-on-github/) </small>

---

## Outline

- Analysis of rodent behaviors and approaches for automation
- Know your tools
- Example systems

---

## Typical rodent behavior experiments

- Only visual observation --> camera
  - Open field, plus maze, object interaction, social interaction
  - Video analysis
- Measure a specific reaction --> sensor
  - Tail immersion
  - Tremor
- Operant conditioning --> sensor + motor
  - Lever pressing (switch)
  - Nose poking (RFID or IR)
  - Licking or touching (capatitive sensor)
- Rodent identification
  - RFID system
- What kind of behavior are you intersted in studing?

---

#### Single board computers

## Raspberry Pi Family

<a href="https://maker.pro/raspberry-pi/tutorial/how-to-get-started-with-your-first-raspberry-pi" ><img src="https://raspi.tv/wp-content/uploads/2018/03/Pi-Family-Photo-Master-Mar2018-1500-1-939x1024.jpg" width=50%, style="transform:rotate(270deg);"></a>

<a href="https://www.raspberrypi.com/products/raspberry-pi-5/">RPI 5</a>

---

## Raspberry Pi 3B+

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Raspberry_Pi_3_B%2B_%2839906369025%29.png/1280px-Raspberry_Pi_3_B%2B_%2839906369025%29.png">

---

## GPIO (general purpose input-output)

<img src="./images/behaut/Raspberry-Pi-GPIO-Header-with-Photo.png" width=60%>

- Ground (grey), 5V (pink), 3V(orange),
- GPIO (either input or output, green)
- Special I/O protocols
  - I2C (magenta)
  - serial (purple)
  - SPI (blue)

---

## Operating system for the RPi

- Raspberry PI OS (previously Rasbian) is the official OS <a href="https://www.youtube.com/watch?v=RDAklos4F8k">YouTube Video</a>
  - derived from Debian Linux
  - command line interface (CLI)
  - graphical user interface (GUI)
- Why you should learn some Linux/Unix commands
  - Mac OS (Terminal app)
  - Windows subsystem for Linux (<a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">Installation guide</a>)
  - Servers
  - Supercomputer

---

## Breadboard and Jumper Wire

<div id="left50">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pcb33.430-g1.jpg/1920px-Pcb33.430-g1.jpg" width=80%>

<a href="https://en.wikipedia.org/wiki/Breadboard" > Wikipedia</a>

</div>

<div id="right50">
<img src="./images/behaut/jumper_wire.png">

</div>

---

## Sensors: Temperature

<a href="https://raspberrypi.stackexchange.com/questions/48357/connecting-ds18b20-temperature-sensor-with-rj45-connector">
<img src="./images/behaut/5EKzW.png" width=70%></a>

---

## Sensors: Capacitive touch sensor

<iframe width="780" height="560" src="https://www.youtube.com/embed/Wk76UPRAVxI?start=15" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<a href="https://www.forbes.com/profile/limor-fried/?list=top-tech-women-america#2077af9a4ecc">America's top 50 women in tech, 2018</a>

<a href="https://www.adafruit.com/product/1982"> MPR121 Touch sensor (Adafruit) </a>

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

## Sensors: RFID reader (USB)

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

<a href="https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/"> Input-Output Coupling</a>

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

## Example 6: Video Recorder

<img src="./images/behaut/rpi_camera_tripod.jpg" width=60%>

---

## Example 7: Zelfish

<a href="https://www.sciencedirect.com/science/article/pii/S016643281730801X?via%3Dihub">Zebrafish opioid self-administration </a>

<table> <tr><td>

<img src="./images/behaut/zelfish.png" width=100%>
</td>

<td>
<img src="https://lh3.googleusercontent.com/pw/AP1GczPCj2R4qOCU2FSbSyJH6ODgdPTLFxHbPOo-HaTxHWjiimE3QhB4ZKVptVUvg1iuMqiEGRPd0vY8WaFjR6IWD0Wei3MWiMBC1ULJzENhrxioXGrzUU-_MrLnZTJRYB3JDd_tBKB84jrkYZlpfqxIb3TjPA=w1409-h1057-s-no-gm" width=100%>
</td></tr></table>

<a href="https://photos.app.goo.gl/nR7o1ozhLZFYLRyWA">zebrafish in test chamber</a>

---

## Example 8: BlueBerry

<a href="https://www.optoblueberry.org/docs/bluehub-documentation">
<img src="https://cdn.prod.website-files.com/6693c2aa75c2628ae83f56c2/67af48690d1c23c8ddcfe14d_BlueHub-Wireless-Optogenetic-Details-02.jpg" width=60%>
</a>

---

## Example 8: BlueBerry

<img src="https://lh3.googleusercontent.com/pw/AP1GczPuNTOJrmhttmXZgXH39f3vFYiPQwCAoanM2v5FMKGK96XfXhdGt7m1YZIwua6GK3vvXi9HPYhaHTeP8Z-LElRN2AmtbxPZnm8R9SsdbX5in3tGah3OWSNkpZfIge0iT2OnK5ZsPG7Eq0NxefKswwxXPA=w1409-h1057-s-no-gm" width=60%>

<a href="https://photos.google.com/photo/AF1QipNElegK0tDER-Wexms8bVeLN1nfKQzXcg8WBEWH">Stimulation of superior colliculus </a>

---

## Example 9. TailTimer

<a href="https://github.com/chen42/openbehavior/tree/master/RFID">
<img src="./images/behaut/rpi_tail_immersion.jpg" width=80%>
</a>

<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0256264"> TailTimer Paper </a>

---

## Example 10. PeerPub

<img src="./images/behaut/PeerPub.jpg">

<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11728851/"> PeerPub Paper</a>

---

## Example 11: HomeBrew

Tracking two rats independently during oral operant self-administration

<a href="https://github.com/miraclezero/HomeBrew">
<img src="./images/behaut/homebrew.png" width=100%>
</a>

---

## Hands on

- Linux command line
  - <a href="https://chen42.github.io/slides/linux.html"> Hao's tutorial </a>
- 3D design using openscad
  - <a href="https://www.makeuseof.com/tag/beginners-guide-openscad-programming-3d-printed-models/">Makeuseof.com tutorial</a>
  - <a href="http://edutechwiki.unige.ch/en/OpenScad_beginners_tutorial#Primitive_Solids"> EduTech Wiki</a>
  - <a href="https://www.youtube.com/playlist?list=PLDhWPyde5E_Rz7LghBXmnhhY9F8X7k503">Patrick Conner YouTube series</a>

- 3D design using FreeCAD
  - <a href="https://www.youtube.com/watch?v=sxnij3CkkdU">Youtube: FreeCAD for beginners</a>
  - <a href="https://wiki.freecadweb.org/Tutorials">Official Tutorials</a>

- Replicable data analysis using AI agents
  - <a href="https://wwww.github.com/chen42/beaver-data">Beaver Data</a>

- Survey of open source behavior devices
- Your ideas
