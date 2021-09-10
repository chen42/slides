## A Rube Goldbergian Approach to Scheduling Rodent Behavior Experiments and Data Collection

### Hao Chen 

#### Department of Pharmacology, Addiction Science, and Toxicology
#### University of Tennessee Health Science Center


<center>
<a href=https://www.timeforkids.com/g34/rube-goldberg/>
<img src="./images/behavflow/RubeGoldberg.png" width=40%>
<br>
<font size=1>
Source: TIME for kiDS
</font>
</a>
</center>
<p>



---

## Long term behavioral experiments have complicated logistics 

* Many animals, many unique IDs
* Many stages in the behavioral pipeline
	* Each stage has a different set of parameters 
	* Animals may need to start on certain age
* Several groups of animal may have overlapping schedule
* Animals started on the same day may get out of sync in their schedule 
* Data need to be processed uniformly on a timely manner
* Breeding drastically increases the complexity of data logging 
* Many, many places things can go wrong
* Rube Golberg can help

---


## Settingup MedPC

<img src="./images/behavflow/medpc_screenshot.png" width=70%>

---


## MedPC macro files can be generated from spreadsheets

```
LOAD BOX 1 SUBJ DCCD00D4 EXPT oxy_rcc_lmf1f GROUP 0.05mg_mloxy_vis_fr5_4h PROGRAM R_FRx_oxycodone_visual
SET W VALUE 214.000 MAINBOX 1 BOXES 1
SET O VALUE 1 MAINBOX 1 BOXES 1
SET R VALUE 5 MAINBOX 1 BOXES 1
SET T VALUE 240 MAINBOX 1 BOXES 1
```
<img src="./images/behavflow/ns016.png" width=60%>

<br>
<a href="https://github.com/chen42/behavflow/blob/master/linuxServerScripts/medmacro.pl">source code</a>
<br>
<img src="./images/behavflow/macrofiles.png" width=60%">

---

## Add a rocket, a sickle, and a pendulum 
<p class="fragment roll-in"> Dropbox allows Script A and Spreadsheet to be located on a different computer as MedPC </p>
<p class="fragment roll-in"> <a href="https://github.com/chen42/behavflow/blob/master/linuxServerScripts/update_macro_auto.sh">Script B </a> monitors Spreadsheet to automatically run Script A when Spreadsheet is saved </p>
<p class="fragment roll-in"> <a href="https://github.com/chen42/behavflow/blob/master/linuxServerScripts/warn_about_conflicted_versions.sh">Script C</a> monitors the folder where Spreadsheet is to send a message when there is a "conflicted version" of Spreadsheet 
</p>
<p class="fragment roll-in"> 
<img src="./images/behavflow/conflicted_vesions.png" width=60%></p>
</p>
<p class="fragment roll-in"> Setup a server that runs Script B and Script C automatically on startup</p>
<p class="fragment roll-in"> <img src="./images/behavflow/rc.local.png" width=60%> </p>
<p class="fragment roll-in"> Time for a worry-free vacation! </p>

---

## Messaging system: Slack

* user data can be downloaded for archival purposes
* apps are easy to program 
	* incoming webhook	
	```
	POST https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
Content-type: application/json
{
 "text": "Hello, world."
}
```
	* <a href="https://api.slack.com/interactivity/slash-commands">slash commands</a> adds more function 
		* saves data (think lab notebook!)
		* needs a server that can be access by slack.com (i.e. outside campus firewall) 

---

## Realtime checking of operant data 

* Setup MedPC to save data to a folder (rawdata) in Dropbox
* Write a Script that monitors that folder, when new files appear 

<img src="./images/behavflow/session_done.png" width=60%>
<img src="./images/behavflow/session_short.png" width=60%>
<img src="./images/behavflow/zerolick.png" width=60%>

```
2021-09-06	17:36:37	DD1DCD2361	rat 2361 active and inactive spout ok
2021-09-06	17:37:07	DD1DCD2365	rat 2365 inactive fails. Fasten the screw
```


---

## ID validation with /note

<img src="./images/behavflow/note_id_not_found.png" width=60%>
<img src="./images/behavflow/note_muliple_IDmatching.png" width=60%>

---

## Preprocessing of operant data 


<table> <tr height=20%><td>

```
Start Date: 08/16/21
End Date: 08/16/21
Subject: DD1DCD22C3
Experiment: p50B21_F
Group: SacGrapeCS2nic15noavfr10_2.5h
Box: 2
Start Time: 10:48:58
End Time: 13:21:51
MSN: R_FRx_IR_noAV_041416
A:       0.000
B:      27.000
C:       0.000
D:       2.000
I:      15.900
J:       0.000
K:       0.000
L:      10.000
M:      51.000
N:      51.000
O:       0.500
P:       0.000
Q:       0.000
R:      10.000
S:    9000.000
T:     150.000
W:     159.000

```

</td>
</tr>
<tr><td>


<img src="./images/behavflow/oxy_self-admin_data.png">

</td></tr></table>

---

## Nightly data processing, error checking, scheduling

* check each animal's data and generate notifications  
	<img src="./images/behavflow/schedule_change.png" width=60%>

* automatically run at 3AM everyday (via crontab on Linux)

```
0 3 * * * bash runNightlyAnalyst.sh
```
---

## Labnotes to database entries

<img src="./images/behavflow/brevital_slacknote.png" width=70%>

```
Angel	2021-07-31	16:47:32	3B9AD442	HXB10XWMI_F received baytril today
Angel	2021-08-02	16:43:03	3B9AD442	HXB10XWMI_F received baytril today
Angel	2021-08-24	16:10:54	3B9AD442	passed brevital test
Angel	2021-08-27	13:39:29	3B9AD442	rat D442 died. For the past couple of days it showed weakness, rough fur, and inactiveness
```

<img src="./images/behavflow/brevital_in_database.png" width=70%>

---

## Labnotes to schedule changes

<img src="./images/behavflow/reinstatement_message.png" width=70%>
<img src="./images/behavflow/reinstatement_schedule.png" width=70%>

---

## Using relational database for breeding and other data  

### Foreign key 

<img src="./images/behavflow/foreign_key.png" width=50%>

<a href="https://sqlitestudio.pl/">SQLiteStudio</a>


---

## Using relational database for breeding and other data  

### Table setup 

<img src="./images/behavflow/database_setup.png" width=70%>



---

## Using relational database for breeding and other data  

### Data Table 

<img src="./images/behavflow/breeding_table_data.png" width=70%>



---

## Notifications based on breeding database 

<img src="./images/behavflow/breeding_notification.png" width=50%>


---
## Overview of Services



* Convert Spreadsheet to MedPC macros for each session and all individual rats. A pdf file is also generated for record keeping
* Generate notifications when each operant run is finished
* Extract MedPC data into Spreadsheet, add session number
* Generate notifications when change in operant schedules are needed (e.g. dose, extinction, reinstatement)
* Generate warnings on exceptions (e.g body weight loss, unrealistic body weights, multiple animals have exactly same body weights).
* Generate daily schedule changes in the format that can be pasted into the Spreadsheet.
* Generate “notes” that can be pasted into slack once some procedures are done (e.g. Baytril).
* Generate reminders for starting experiments (until the experiment is started, i.e, data files exist)
* Generate reminders for missing data in database (e.g. DOW, assignment of experiment treatment)
* Update database when certain procedures are done (e.g. Brevital test)
* Maintain a log of periodic tasks (prepare drugs, cleaning chambers, etc.)
* We still have one manually maintained Spreadsheet for experiment planning.

---

## Advantages

* Reducing experimental error 
* Convert user friendly format (Spreadsheet) to machine loadable exp file in MedPC.
* “Macros” and pdf files are archived automatically.
* Use foreign key in database
* Check against existing animal ID in the /note app
* Automatic reminder of schedule change
* Automatic check against common errors
* Automatic check for missing information
* Automatic database entry from notes entered in browser
* Standardized experimental record for miscellaneous notes for each animal
* Entered on a computer or smartphone
* Animal ID verified. 
* Name of technician and dates are automatically recorded

---

## Disadvantages

* Somewhat fragile (many components)
* Need backup plan when system is down
* Need programming skills 
* Still several manual processes (e.g. schedule change still needs to be copy-pasted).

---

## BehavFlow: many attempts to simply the life of technicians 

https://github.com/chen42/behavflow

<img src="./images/behavflow/automateBehaviorWorkflow.svg" width=70%>

---

