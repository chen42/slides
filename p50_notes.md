i
## Specific Aims 

* Project 2 has three aims. Aim 1 is to generate adolescent rats and phenotype them on four behavioral tests that measure social and anxiety-like traits. Rats are then surgically implanted with a jugular catheter and tested using the socially acquired nicotine IVSA protocol. Rats are then euthanized, and the spleens are sent to Abe's lab for genotyping. Behavioral data are also sent to Abe's lab for GWAS. 

* Aim 2 is to analyze the relationships between different behavioral phenotypes. 

* Aim 3 is to microdissect brain regions for eQTL analysis. We targeted IL, PL, OF, NAcc, LHb previously. We will now collect samples from pVTA, mHb, vHIP, insular cortex, and lateral hypothalamus.

---

## Social learning enables nicotine self-administration

* The nicotine self-administration model we use puts two rats in the operant chambers. They are separated by a divider but can engage in orofacial interactions through a series of holes in the divider. The nicotine self-administration rat has a jugular catheter that delivers i.v. Nicotine. This rat also has access to two licking spouts. Licking on the active spout delivers a drop of flavor cue and i.v. nicotine under the control of a fixed ratio 10 schedule. Licking on the inactive spout does not have any programmed consequences. On the other side of the divider, the demonstrator rat has free access to the same flavor cue that the nicotine rats is receiving. The demonstrator rat does not receive nicotine. 

* The flavor cue we used contains saccharin and grape odor. We found that self-administering i.v. nicotine with contingent delivery of oral flavor cue induces conditioned flavor aversion, which prevents further nicotine and cue intake. However, interacting with the demonstrator rat that consumes the same flavor cue facilitates the extinction of this conditioned aversion and promotes nicotine intake. This is similar to what's been reported among teenagers. Most of them say their initial smoking experience is aversive, and the reason they smoke is that their friends are smoking.

* These data were obtained from Sprague Dawley rats. In panel A, the red circles are number of licks on the active spout, the grey circles are number of licks on the inactive spout, and the black squares the number of i.v. infusions. Panel A shows that the cue we use is appetitive. Rats have a strong preference to active spout. Panel B shows with a low dose notine, rats still maintain a preference to the active spout with the presence of a deomnstartor that consumes the same flaovr cue. When nicotine dose is increased to 30 microgram per kilogramm per inejction, it took Sprage dawley rats about six sessions under the social learning environment to extinguish conditioned flavor aversion and show preference to the active spout.

* Rats are not water or food-deprived, nor do that receive prior operant training. So this model can be used to study genetic factors influences smoking initiation. 


* Rats tested using this model obtain nicotine with an apeptivie cue and in a social environment. So it is important to show what is actually driving nicotine intake.  

---

## Flavor cues do <a href="#/stfp">not</a> support nicotine self-administration

* in fact, we initially tested the effect of appetitive flavor cues for nicotine self-administration, and we found rats develop a conditioned aversion. Panel A shows rats receiving the flvoaro cue is highly appetitive, but in panels b and c, it is clear that appetitive flavor cues do not support nicotine selfa administratin. Therefore, teh presence of demonstratro rats consuming the same flvor cue is critical for nicotine intake in this model


---

## Nicotine intake with appetitive vs aversive cues


To further demonstrate the effect of social learning, we trained rats to self-administer nicotine using an aversive flaovr cue that contains a low concentration of quine. Rats trained alone avoided this cue when they recieved i.v. saline. rats traine alone also devoped strong conditioned flavor aversion when they recieved i.v. nictoine with this aversive cue. but they acquried nicotine self-administration in the presence of a demonstrator rat that consumed a flavore cue contained the same odor. In fact, the amount of nicotine they obtained  is almost identical to those rats receided an appetitive flavor cue. The difference in the number of licks on the active spout is due to the differences in licking during the timeout period.   

---


## Socially acquired nicotine self-administration HS rats

We then tested this procedure in 100 HS rats. We found a strong sex difference in nicotine intake. Females obtain a greater amount of nicotine than males. There are also large phenotypic variations with the popoulation, which is expected for the HS rats and makes them great for genetic mapping.

However, we also found that demonstrator rats we used also have a strong sex difference; while females consume more cue, males poke their noses more into the divider and presumably engage in greater amounts of social interaction. 

Because we are studying a social behehavior, the outcome is influenced by both rats. This presents a challenge of genetic mapping because we don't want to genotype the demonstrator rats, further, the behaivoral differences among demonstrator rats will introduce noise in our data. 

---

## Modeling social learning in rats

socially acured nictine ivsa is modeld from a well established social learning procedure, social transmission of food prefrence. This was established by Galef and colleagues back in the late 70s and early 80s. They showed that rats are neophobic and avoid unfamiliar foods. However, if they are exposed to a rat that just consumed novel food A for about 10 minutes, they will prefer food A when presented with a choice of A and B. 

---



## What is the social signal?

In these experiments, they also found that social learning is mediated by a carbon disulfite, which is present in the breath of rats. The interpretation is that sensing a particuar odor in the breath of another rat delivers a signal that the food containing this oder is safe to consume because the other rats are still alive.

So we tested using cs2 as part of the flavor cue. neither falvor cue (labled as OG here) and cs5 supported nicotine selfadmin alone. But the combination of them increased nicotine intake in a dose-dependant manner.  

To this gives us the final model that we used for phenotyping, which is to replace the demonstrator rat with the chemical that mediates social learning. This procedure removed the potential noise of using a live demonstrator rat, reduced the cost of phonotyping and mostly likely increased  data quality.


---

## Timetable for behavioral tests

This is the behavior testing procedure we are using.   

---

## Correlations among open field, novel object, social interaction, and elevated plus maze

We conduct  four behavior tests before nicotine self admin. These tests measures different aspects of  social interaction and anxiety like behavior. We choose this behavior because social interaction and anxiety have been reported to contribute to smoking. So we hope to see if we can use these measures to explain variations in nicotine intake in our model by using linear regression methods.

We first looked at the correlations between these measures. each row is one variable, the green blue gradient shows the correlation coefficient. The red yellow gradient shows the -logp values of the correlation. It is apparent there are numberous correlations among these measures.


---

## Can behavioral traits predict nicotine SA? 

Because multicolinearity is a known problem for multiple linear regression, we first used principal component analysis to derive synthetic variables that are orthogal to each other in high dimensional space. we then used the PCs in regression. We found about 15-20 percent of the variance in nicotine intake can be explained by traits measuring social behavior and anxiety.



---


## Nicotine self-administration


Here is the nicotine self-administration data from the first 5 years of the P50. We have data from fourteen hundred adolescent hs rats . We did a median split on total nicotine infusion. Rats above the median showed behavior pattern similar to what we saw in sprage dawley rats trained with either live demonstrators or using CS2. The number of licks on the acive spout goes up gradully and licks on the inactive spout goes down.  On average, rats lick about 300-500 times on the active spout.  females lick more on than males.

In contrast, rats below the median showed decreasing licks on the active spout. Interestingly, these rats showed greater number of licks on the inactive spout than on the active spout. again, females lick more than males.

It is obvious that this pattern is almost determined in day 1. rats in the high intake group have similar number of licks on both spouts, while rats in the low intake group showed much lower licks on the active spout  and much greater number of licks on the inactive spout than on the active spout. 


I realized after seeing the gwas data that this suggests that day 1 data could be used as a model for smoking initiation.

---

## GWAS summary, version 3

Here is the summary of the GWAS. for most behavioral tests, almost every variable has a significant genome wide hit. Many of them even have two loci.

only about a third of nicotine self-administration variables have significant qtl so far. A few of them also have mutliple hits. I think this lower hit rate is likely because nicotine self-administration needs surgery, which introduces a lot of environmental noise. Regardless, having found 30 genome wide significant QLT is great.


---

## Overlapping QLT between social interaction & socially acquired nicotine IVSA  


this is the only qtl from the first four behavioral tests that I have time to show you. We used a standard social interaction test. where a resident rat is placed in the center of a square arena. This rat is restricted by a small wired cage. The move ment of the hs rats is recorded using a video camera under infrared light. the frequency of the hs rat entering into the center zone is associated with a loci on chr1. this loci is about 266kb and only has one known gene. On the right side, the number of licks on the inactive lick is also mapped to the same loci, although the top SNP is different. This overlap is reported in the Phewas section in Apurva's report.  This could be genetic evidence supports the role social behavior plays in nicotine self-administration.

The genes Abhd17b is located on the postsynaptic membrane and regulates dendritic spine maintenance. However, this gene has no hits in human GWAS. 

---

## Number of licks on the active spout in first session: chr1:278524299


Many other QLT cover a wider genomic region. For example, this region for active licks on day 1 is 6.9 Mbp and has 39 known genes and 60 unannotated genes.  Apura's report contains sections on missense variants and eQTL, which can help in narrowing down potential candidate gene. 

Knowing the biology and human GWAS hits for these genes will also help in finding the likely candidate. This can be done by searching these genes in PubMed or the human GWAS catalog. However, doing these searches manualy take a lot of time and will almost inevitably not complete. Working with Hakan Gunturkun and a few others, we have been building a tool, which we call relationship to addiction throgh searchs of PubMed, or ratspub for short. This web site take a gene symbol and searches this symbol with over 300 predefined keywords relevant to addiction in PubMed. It also searches the human gwas catalog for addiction and psychiatric disease related traits. The results are presented as an interacting graph. Clicking on the lines shows sentences containing the gene and the keyword.

If a way, apurva' report helps write the results section of the paper, and we hope ratspub can help write the discussion section because it pulls all the relvant literature together.

show Tcf7l2 and nicotine
show shtn1 and nicoptine GWAS


---

#### Summary of nicotine GWAS, part 1/4

## Number of licks on the active spout

The 30 nicotine QTLs can be grouped based on the behaioral measures. The first group is licks on the active spout during different testing stage. Most days have a QLT.  Using ratspub, we found 10 gene in this region have been associated with smoking related traints in human GWAS. A few of them also have been reported for alcohol drinking. Most interestingly, four of the genes, here marked by a club, were associated with smoking initiation. because the rat trait is number of licks on the first session, finding overlapping genes with smoking initiation in very exciting, and  make these four gene the top candidate under this QTL. 

Other human gwas genes in this region are associated with smoking status measurements

carm1 and emc3 are associated with smoking behavior, Tex 29 is associated with lifetime exposure to cigaretts.

the hit on reinstatement contains five human smoking genes.  Usp35 nars2 copd  gab2  and tenm4 is asoociated with lung cancer.  alg8 is assocated with  smoking behavior in a study of COPD. These are all long term consequences of smoking, which again, makes sense when they overlap with reinstatment.  

overall, this matching in phenotype with humang smoking is striking, with day 1 mathching smoking initiation, intermediate session matching smoking status and later sessions, such as reinstatement session match humane gwas hits on the sevier consequence of smoking is almost too good to belive. 


---

## Vti1a, Shtn1 and Nrap for smoking initiation 

So we digged into the original literature for some of these findings. Three of the three smoking initiation genes were reported by mengzhen liu et al in nature genetics. here is the supplementary toable showing all these genes.   

indeed, all three genes reached genome wide significance. 

In a way, this overlap confirmed the value of our animal model to study smoking initiation.

---
## next slide 

The second group of QTLs are related to the number of infusions. there is no qtls from earlier sessions. But the same loci for active lick on day 5 and day 7 showed up again. Interesting, this this loci is also associated with total infusion . We also designed a sythentic variable, with the slope of the regression line between infusion across days. This is a measure of the trend of the nicotine intake scross sessions.   Gria4, a glutamate receptor subunit,  is found under this peak. Gria4 is associated with nicotine depencce csystem count in human GWAS. 

Because tex29 has been showing up many times now, we also checked out the original publication.

---

## Tex29

This again is a recent publication from Scott Vrieze's group. 
Tex29 is testis expressed gene 29, it also has high expression in cortex, especialy in prefrontal cortex. 
C13orf16 is a synonym of tex29. 

The trait associate with tex29 is pack years. and here is the description of pack years in the paper:  

So they basically takes the cigareet per day measure, and combined that with the number of years smoking, and calcuate total overall exposure to tobacco. 

This is almost a literal translation to total nicotine infusion in our model. 


---

The third and fourth groups of phenotypes are related to the number of licks on the inactive spout, there are also many interesting findings but I am afriad I am running out of time. So I am going to skip these.


---

## Current Progress 

This is the current status. We received our first shipment of HS rats on sep for batch 19, we are suing offspring from batch 18 because leah's groups was having trouble producing enough rats due to covid.  

---

## Pharmacological validation of GWAS target

With this many great targets, we are working on validating some of them. One simpler way of validation is to use pharmacological tools. Gria4 is a great target. It is assocated with nicotine dependnece coutns in human and  the progression of nicotine intake in our model. Topiramate is an ampa antagoisit that has been tested clically for smoking cessaion, the results were mixed but the sample sizes were all small. There were one paper reported that topiramate showed a trend in reducing nicotine induced  locomotor sensitization in rats but there has been no other reports. We are in the middle of a study that tests the effect of topiramate on socially acquired nicotine self-administration.  

---

## Using CRISPR/Cas9 knockin rat for validation

but pharmacological validation has a lot of limitations, for one thing topiramate also is an agonist on GABA recepotrs. So much better approaches are needed. Brandon Harvey's group recently repoted a cas9 knock in rats that contains a LSL loci upper stream to cas9 in the rosa26 loci. So cas 9 is not expression under normal conditions. But it can be acitavated by an aav virusl that expresses cre. 

We obtained this rat via a p50 pilot grant. We designed a vector that expresses cre under the control of human synapsin promotor to tearget neurons. the same vector also expresses gRNA specific for target gene under the control of a U6 promoter. 

With the help from Burt Sharp's lab, we've obtained stable expression of this vecotr in cre knock in rats in both accubmenbs and pfc. 


---

## Validation of in vivo genome editing 

we also validated the in vivo genome editing using a targeted sequing method 


Here are pile ups of reads in a genome browser for two adjacent targets on the same exon. the gRNA on the left is showing higher efficiency than the one on the right one. We are making some further adjustments to the AAV but the system is almost ready to test new targets.


---

## Potential targets for in vivo genome editing


So here are the few targets I have in mind: 

* Shtn1 (active lick on day 1)
* Gria4 (progression of intake)
* Tex29 (total intake)
* Alg8 (reinstatement) 

---

## Acknowledgements

This work is not possible withouth my team of decidated staff, who works day in and day out on the same set of tasks. Many of them left after a couple of years but Tengfei stayed on. He is now running most of these experients with minimal input from me. 
 
Needless to say, a lot of credit goes to Abe's group. Apurva geneated all the GWAS results and has been extremly helpful in answering my questions regarding the report.

--
