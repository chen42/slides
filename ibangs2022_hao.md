# Genome-Wide Association Study on Three Behaviors Tested in an Open Field in Heterogeneous Stock Rats 

<hr color=#cb4b16>

###	Hao Chen

### University of Tennessee Health Science center

---

## Project 2 of the P50: Socially acquired nicotine self-administration in adolescent HS rats

* Main phenotypes of interest
	* intravenous nicotine self-administration (active operant response, nicotine intake, reinstatement of drug seeking) 
* Additional phenotypes 
	* open field test (OFT), novel object interaction (NOIT), social interaction (SIT), elevated plus maze (EPM)
	* conducted before nicotine IVSA

---

## Personality traits are predictors of vulnerability to addiction

* Individuals with symptoms of anxiety are more likely to be smokers
* Novelty seeking is positively correlated with smoking onset
* Social environment plays a critical role in the development and treatment of addiction

---

## Behavioral tests 

* Breeding HS rats 
* PND 21: wean
<p>
<img src="./images/p50/openfields.svg">
<p>
* PND 35: elevated plus maze (EPM)
* PND 38: jugular surgery for nicotine IVSA
* Sample size: 626 males and 630 females

<hr width=30% align="left"> <p align="left"> 
<cite> Gunturkun, et al., Front Psychiatry. 2022 
</cite>
</p>


---

## Phenotype correlations

<img src="./images/p50/phenotype_correlation_heatmap.png" width=60%>


---

## Selected correlations

<img src="./images/p50/correlation_dotplots.png">


---

## Association between behavioral phenotype and nicotine intake


<div id="left">



<center>

#### Loading of PCA

<img src="images/p50/retreat2018/pca_loading.png" width=70%> 
</center>

<hr width=30% align="left"> <p align="left"> 
<cite>
Wang et al., GBB 2014, Sci Report 2018
</cite>
</p>

</div>

<div id="right">

<center>

#### PCA regression summary 

<font size=4>

|Phenotype | Sex| Variance Explained| 
|---|---|---|
|Infusion, first 3 d| F| 0.18| 
|Infusion, first 3 d| M| 0.17| 
|Infusion, last 3 d | F | 0.12| 
|Infusion, last 3 d | M | 0.20| 
|Infusion, progressive ratio | F | 0.14| 
|Infusion, progressive ratio | M | 0.18| 
|Active spout lick, reinstatement | F | 0.08| 
|Active spout lick, reinstatement | M | 0.19| 
</font>
</center>

</div>

---

## Genotyping and SNP heritability 

<img src="./images/p50/heritability_oft_noit_sit.png">

---

## GWAS: porcupine plot


<a href="https://palmerlab.s3.sdsc.edu/p50_reports/open_field.html" target=_new>
<img src="./images/p50/porcupine_plot_v3.png">
</a>

* 30 significant loci: OFT=9; NOIT=7; SIT=14 
* pleiotrophic within traits but not between traits
* many traits have multiple loci
* min. SNP h<sup>2</sup> for significant loci was 0.14, mean was 0.226


---

## Example QTL for OFT 

### Frequency of entering the center zone, Chr4:11801306
<img src="./images/p50/OFT_cntrfreq_chr4_118013062.png" width=60%>


---

## Example QTL for NOIT 

### Duration in center zone, Distance to center zone, Chr4:112234344

<img src="./images/p50/NOIT_dist2ctrmean_chr4_112234344.png" width=60%>


---

## Example QTL for SIT 

### Latency of entering the social zone, Chr17:58611795

<img src="./images/p50/SIT_insoczonelate_chr17_58611795.png" width=60%>

---

## Candidate gene selection

* Fine mapping (CS, Susie)
* High impact variants
* cis-eQTL 
* Expressed in the brain
* Human GWAS on psychiatric traits 
* Functional relevance from the literature 

---

## Candidate genes: Cyp26b1

### Open field: frequency of entering center zone, total distance to center zone

<center>
<table> <tr><td width=50%>
<img src="./images/p50/cyp26b1_locuszoom.png" width=90%>
</td>
<td>
<img src="./images/p50/cyp26b1_effectplot.png" width=60%>
</td></tr><tr><td colspan="2">
<img src="./images/p50/cyp26b1_minor_allele.png" width=90%>
</td>
</tr></table>
</center>

---

## Candidate genes: Cyp26b1

### coding variant and cis-eQTL

<a href="https://alphafold.ebi.ac.uk/entry/G3V7X8" target=_new>
<img src="./images/p50/cyp26b1_missense.png" width=70%>
</a>

<br>
<img src="./images/p50/cyp26b1_cis-eQTL.png" width=70%>

---
## Candidate genes: Cyp26b1

### cis-eQTL in RatGTEx

<img src="./images/p50/violinplot0-cyp26b1.svg">

<hr width=30% align="left"> <p align="left"> 
<cite> Munro, et al., BioRxiv. 2022 
</cite>
</p>


---

## RatGTEx: expression levels of candidate genes 
<img src="./images/p50/ratgetex_heapmap_cyp26b1.svg" width=60%>

---

## Candidate genes: Cyp26b1

### Literature mining: Cyp26b1 
http://genecup.org

<a href="https://genecup.org/cytoscape/?rnd=tmpklRCuX&genequery=Cyp26b1" target=_new>
<img src="./images/p50/genecup_enter_cyp26b1.png">
</a>

<hr width=30% align="left"> <p align="left"> 
<cite> Gunturkun, et al., G3. 2022 
</cite>
</p>

---

## Candidate genes: Cyp26b1

### Open field: frequency of entering center zone, total distance to center zone

<center>
<table> <tr><td width=33%>
<img src="./images/p50/cyp26b1_effectplot.png" width=70%>
</td>
<td width=33%>
<img src="./images/p50/cyp26b1_violin.svg", width=90%>
</td>
<td width=33%>
<img src="./images/p50/cyp26b1_shrna.png" width=100%>
PMID: 31449909
</td>


</tr>

</table>
</center>

---

## Candidate genes: Cacna1c

### Social interaction: distance to social zone; in social zone duration

<center>
<table> <tr><td width=50%>
<img src="./images/p50/Cacna1c_locuszoom.png" width=90%>
</td>
<td>
<img src="./images/p50/Cacna1c_effect_plot.png" width=60%>
</td></tr><tr><td colspan="2">
<img src="./images/p50/Cacna1c_minor_allele.png" width=90%>
</td>
</tr></table>
</center>


---

## RatGTEx: expression levels of candidate genes 
<img src="./images/p50/ratgetex_heapmap_cacna1c.svg" width=60%>

---

## Candidate genes: Cacna1c
http://genecup.org

<a href="https://genecup.org/cytoscape/?rnd=tmprvLuam&genequery=Cacna1c" target=_new>
<img src="./images/p50/Cacna1c_genecup.svg" width=60%>
</a>

<hr width=30% align="left"> <p align="left"> 
<cite> Gunturkun, et al., G3. 2022 
</cite>
</p>

---

## Candidate genes: Cacna1c

<div id="left">
<img src="./images/p50/cacna1c_title.png"> 
</div>
<div id="right">
<img src="./images/p50/cacna1c_fbko.png">
</div>


---

## Other candidate genes

<img src="./images/p50/candidate_genes_oft_noit_sit.png" width=80%>

---


## Acknowledgements

<table><tr >
<td width=20% >
<img src="images/photos/tengfei.jpg">
<center>
Tengfei Wang
</center>

</td>
<td width=20%>
<img src="images/photos/angel.jpg">
<center>
Angel Garcia Martinez
</center>

</td>
<td width=20%>
<img src="images/photos/shuangying.jpg">
<center>
Shuangying Leng
</center>

</td>
<td width=20%>
<img src="images/photos/Caroline.png">
<center>
Caroline Jones
</center>

</td>
<td width=20%>
<img src="images/photos/gwen.png">
<center>
Gwen Johnson
</center>
</td>

</tr>
</table>
<p>

* Past lab members and summer students 
	 * Xia Hong | Jie Shen | Wenyan Han | Pawandeep Kaur | Yanyan Lin | Xinyu Fan | Mallory Udell | Sarah Cartwright | Hakan Gunturkun | Abigale Salinero | Cindy Tay | Raven Davis | Christian Hurt 

* P50 collaborators 
	* Abraham Palmer | Oksana Polaskaya | Apurva Chitre | Daniel Munro | Leah Solberg Woods | others 


### We have a postdoc position available!
hchen@uthsc.edu

---

## Heritability vs QTL

<img src="./images/p50/heritability_vs_qtl.png" width=50%>

---

## Candidate genes: Cyp26b1

### cis-eQTL in RatGTEx


<img src="./images/p50/cyp26b1_ratgtex.png">


<hr width=30% align="left"> <p align="left"> 
<cite> Munro, et al., BioRxiv. 2022 
</cite>
</p>

---


