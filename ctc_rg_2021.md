# mRatBN7 ushers in a new era of rat genomics and genetics research
## International rat omics consortium (IROC)
<center>

<b>de Jong T, Pan Y, Murphy T, Martin F, Akil H, Benner C, Chitre A, Colonna E, Dalgard C, Doris PA, Dwinell M, Garrison E, Geurts A, Gillette T, Gunturkun MH, Guryev V, Haggerty L, Hourlier T, Howe K, Howe K, Jun H, Kalbfleisch T, Mohammadi P, Mortazavi M, Munro D, Ozel AB, Polesskaya O, Pravenec M, Prins P, Rastas PMA, Saba L, Sharp B, Tabakoff B, Telese F, Tutaj M, Villani F, Wang X, <br>Palmer AA, Williams RW, Kwitek AE, Li J, Chen H
</b>
</center>


---

## mRatBN7 fixes many large structural issues in the reference

<div id="left">

Linkage map from 1893 rats HS rats (from 378 families)
<img src=./images/ratGenome/dotplot_chr6_pasi.png>
</div>

<div id="right">

Dot plot 
<img src=./images/ratGenome/dotplot_mratbn72_vs_rnor6_chr6.png>
</div>

<div id="cite">
Pasi Rastas, University of Helsinki</div>



---

## Deletion calls from linked read data

<img src="./images/ratGenome/dels_linked_reads_rn6_v_bn7.png">

<div id="cite">Tristan de Jong, Hao Chen, et al., UTHSC</div>

---

## Mapping stats from linked read data

<img src="./images/ratGenome/10x_chromium_mapping_stats_rn6_vs_bn7.png">

<div id="cite">Tristan de Jong, Hakan Gunturkun, Hao Chen, et al., UTHSC</div>

---


## Mapping stats from PacBio CLR (SHR)

|	|Rnor6.0| mRatBN7.2|
|:---|---:|---:|
|Forward |2106576| 2127468|
|Reverse |2103210| 2119793|
|Unmapped| 298422| 260947|
|Total read count| 4508208| 4508208|
|Fraction mapped |0.934| 0.942|


<div id="cite"> Ted Kalbfleisch, Peter Doris, Univ Texas Health Science Center</div>

---

## Mapping stats and SV calls from nanopore data
 one HS rat with 55X coverage 

<div id="right"><img src="./images/ratGenome/nanopore_hs_milad_mapping_stats.png"></div>
<div id="left"><img src="./images/ratGenome/nanopore_hs_milad_sv_calls.png"></div>
<div id="cite"> Milad Mortazavi, Abraham Palmer, et al UCSD</div>

---

<span id="sharedrn6">

## mRatBN7.2 improves base level accuracy 

### SNPs and Indels shared by 32 HXB/BXH strains and 4 BN/NHsdMcwi samples

<img src="./images/ratGenome/10xchromium_gvcf_rn6_v_mRatBN7_deepvariant_36_strains_common_indels_wide.png">

<div id="cite">Tristan de Jong, Hao Chen, et al., UTHSC</div>

---

<span id="refseq">

## Gene annotations on mRatBN7.2 at RefSEQ

<div id="left">

||Rnor6.0|mRatBN7.2| Mouse GRCm39|
|---|---|---|---|
|protein coding | 23,514| 22,228|22,173|
|coding with major errors| 1,831 (7.8%)|519 (2.3%)|
|&nbsp;&nbsp;&nbsp;&nbsp;with frame shifts|1,476|458|
|1:1 human ortholog|16,068|16,315|16316|

</div>

<div id="right">

<img src="./images/ratGenome/busco_bn7_vs_rn6.png">
</div>

<p>
<div id="cite"> Terrence Murphy, et al., NCBI</div>


---

## Gene annotations on mRatBN7.2 by Ensembl 

<img src=./images/ratGenome/ensembl_rn6_vs_bn7.png>

<div id="cite">Fergal Martin, et al., Ensembl</div>

---

##  RNAseq analysis

352 samples from 88 HS rats

||Rnor6|mRatBN7.2|
|---|---|---|
|Average percent of reads aligned to the reference |97.4|98.3|
|Average percent of reads aligned concordantly once to the reference|89.3|94.6 |
|Average percent of reads aligned to Ensembl transcriptome|67.6 |74.8 |

<hr color="blue">

738 genes changed **biotype** in Ensembl from Rnor6 to mRatBN7.2  

|Rnor6 to mRatBN7.2 | number |
|:---|---:|
|processed pseudogene to protein coding  |224|
|pseudogene to protein coding | 136|
|pseudogenes to protein coding |89|
|lncRNA to protein coding |65|

<div id="cite">Laura Saba, et al., University of Colorado</div>

---

##  scRNAseq analysis 

<img src="./images/ratGenome/telese_scrna-seq.png">

<div id="cite">Francesca Telese, et al., UCSD</div>

---

## proteome analysis 


<img src=./images/ratGenome/tessa_protein_id_rn6_v_bn7.png>

<div id="cite"> Tessa Gillette, Victor Guryev, UMGC, Netherland</div>

---

##  the identification of transcription start sites

### capped short RNA-seq

||Number of Transcript start site|
|---|---|
|Rnor6|42,420|
|mRatBN7.2|44,985|

<div id="cite">Chris Benner, Francesa Telese, UCSD</div>


---

## the identification of polyadenylation sites 

### Whole Transcriptome Termini Site Sequencing

<img src="./images/ratGenome/zhihua_apa.png">

<div id="cite">Zhuhua Jian, et al., WSU</div>


---


##  eQTL mapping 


<img src="./images/ratGenome/trans_cis_eqtl_rn6_bn7_dan.png" width=70%>

<div id="cite">Dan Munro, Pejman Mohammadi, Abraham Palmer, et al., UCSD</div>

---

##  pQTL mapping

21 HXB/BXH strains,  brain proteome

<img src=./images/ratGenome/xushengwang_pQTL.png>

<div id="cite"> XuSheng Wang, Univ North Dakota</div>

---

## liftover from Rnor6.0 to mRatBN7.2?? 

<img src="./images/ratGenome/liftover_from_bn6_rn7_han.png" width=70%>

<div id="cite"> Yanchao Pan (Han), Jun Li, et al., Univ Michigan</div>

---

## potential remaining errors in mRatBN7.2 


* 134,781 variants (SNPs and indels) shared by more than 92 of 94 WGS samples (including 6 BN/NHsdMcwi samples) (10X reduction compared to <a href="#/sharedrn6">Rnor6</a>)

||Hom| Het|
|---|---|---:|
|Indel| 95,131| 998 |
|SNP| 24,292 |13,360|

<div id="cite"> Monika Tutaj,  Mindy Dwinell et al., MCW for sharing data</div> 

---

## Potential remaining errors in mRatBN7.2 

<div id="left">

|Impact|Annotation|Count|
|:---|:---|---:|
|HIGH|frameshift_variant| <a href="#/refseq">550<a> |
|HIGH|splice_acceptor_variant|615|
|HIGH|splice_donor_variant|25|
|MODERATE|missense_variant|291|
|MODIFIER|3_prime_UTR_variant|884|
|MODIFIER|5_prime_UTR_variant|418|
|MODIFIER|downstream_gene_variant|6381|
|MODIFIER|intergenic_region|68990|
|MODIFIER|intron_variant|45338|


Examples of genes with high impact variants:  <b>Akap10, Cacna1c, Crhr1, Chat, Egfr, Gabrg2, Grin2a, Oprm1, etc.</b>

</div>

<div id="right">

<img src=./images/ratGenome/shared_variants_on_mratbn72.png>
<center>
aaaTaaaAAAgAAA 

aaaTaaa
<center>

</div>

---

## Rat as a model system

After filtering potential remaining errors in mRatBN7.2, in the 118 WGS samples, we found 

|number of genes | variant type|
|---:|---|
|102 | start_lost|
|105 | stop_lost|
|106 | frameshift_variant & splice_region_variant|
|166 | splice_acceptor_variant & splice_donor_variant & intron_variant|
|340 | splice_acceptor_variant & intron_variant|
|406 | stop_gained|
|474 | splice_donor_variant & intron_variant|
|1188 | frameshift_variant|


---

# Acknowledgements

## IROC members

<b>de Jong T, Pan Y, Murphy T, Martin F, Akil H, Benner C, Chitre A, Colonna E, Dalgard C, Doris PA, Dwinell M, Garrison E, Geurts A, Gillette T, Gunturkun MH, Guryev V, Haggerty L, Hourlier T, Howe K, Howe K, Jun H, Kalbfleisch T, Mohammadi P, Mortazavi M, Munro D, Ozel AB, Polesskaya O, Pravenec M, Prins P, Rastas PMA, Saba L, Sharp B, Tabakoff B, Telese F, Tutaj M, Villani F, Wang X, <br>Palmer AA, Williams RW, Kwitek AE, Li J</b>


---


