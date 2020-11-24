# Theme: Rnor6 v mRatBN7.1 

#### Nov 24th 2020 

* Chen Lab (UTHSC) (30 min)
* Li Lab  (UMich) (10 min)
* Palmer Lab (UCSD) (10 min)
* General discussion (10 min)

---

## Analysing WGS data using Rnor6 vs mRatBN7.1

<img src="images/little_wizard.png" width=30%>

<hr>

#### Tristan de Jong, Hakan Gunturkun, Hao Chen

---


## mRatBN7.1 

||Rnor6 | mRatBN7.1| 
|---|---|---|
|NCBI accession| [GCA_000001895.4](https://www.ncbi.nlm.nih.gov/assembly/GCF_000001895.5)| [GCA_015227675.1](https://www.ncbi.nlm.nih.gov/assembly/GCA_015227675.1)| |Ungapped Length| 2,729,969,191|2,626,564,459| 
|Available Date| 2014/07/01|2020/11/04|
|||[Dropbox](https://www.dropbox.com/s/88b4evmutjtrz9h/mRatBN7.1_primary_assembly.tgz?dl=0), [GoogleDrive](https://drive.google.com/file/d/1-Wt1dXO_Vh80BnxWmJHqDDzNlH3DUMZt/view?usp=sharing)|
|||




---

## mRatNor1.1 (May 20 2020) == mRatBN7.1 (NCBI) 

```
|chr  |mRatNor1.1| mRatBN7.1|   
-----------------------------
|chr1 | 260522016| 260522016|   
|chr2 | 249053267| 249053267|   
|chr3 | 169034231| 169034231|   
|chr4 | 182687754| 182687754|   
|chr5 | 166875058| 166875058|   
|chr6 | 140994061| 140994061|   
|chr7 | 135012528| 135012528|   
|chr8 | 123900184| 123900184|   
|chr9 | 114175309| 114175309|   
|chr10| 107211142| 107211142|   
|chr11|  86241447|  86241447|   
|chr12|  46669029|  46669029|
|chr13| 106807694| 106807694|
|chr14| 104886043| 104886043|
|chr15| 101769107| 101769107|
|chr16|  84729064|  84729064|
|chr17|  86533673|  86533673|
|chr18|  83828827|  83828827|
|chr19|  57337602|  57337602|
|chr20|  54435887|  54435887|
|chrX | 152453651| 152453651|
|chrY |  18315841|  18315841|
|chrMT|     16313|     16313| 

```
---

## Chr vs Chr dot plots

<iframe src="pdfs/dotplots_mRatNor1_vs_rn6.pdf" width="100%" height=600px>

---

##  10x Chromium Linked reads WGS data 

* 36 inbred strains
	* Four BN samples
	* BN-Lx/Cub and SHR/OlaIpcv
	* 30 HXB and BXH strains 
* most strains have about 60x coverage
* Longranger 2.2.2 against both refs for mapping and SV
* Deepvariant/GLnexus for joint SNP and Indel analysis 

---

#### Linked-reads data 

## Mapping stats 

<iframe src="pdfs/longranger_mapping_stats_mRatBN7_v_Rnor6.pdf" width="100%" height=600px>

---

#### Linked-reads data 

## Summary of mapping stats

* mRatBN7 decreases 
	* SNPs phased 
		* might be due to reduced number of Hets 
	* estimates of the mean and stddev of input molecular length 
		* likely due to removing extra sequences that does not belong 
	* areas with zero coverage and short deletion calls
		* likely due to removing extra sequences that does not belong 
	* the number of large SV calls 
		* likely due to reduced assembly errors
* mRatBN7 increases
	* N50 of linked reads
		* likely due to increased N50 of the reference
	* mean depth of coverage and mapped reads
		* likely due to improved accuracy of the reference 

---

#### Linked-reads data 
## Type of SV and their locations  

<iframe src="pdfs/hxb_location_of_sv_rn6_v_bn7.pdf" width="100%" height=600px>

---

<section id="table">

#### Linked-reads data 

## Shared SV on mRatBN7.1

|Chr|Begin|End|SV Type|Length|Strains|
|---|---|---|---|---|---|
|chr1|54119451|54946980|Translocation|827529|32|
|chr1|138882092|138934698|<a href="#/chr1_138">Deletion</a>|52606|36|
|chr2|148864168|148911755|<a href="#/chr2_148">Duplication</a>|47587|36| 
|chr4|100799349|100865002|Deletion|65653|31|
|chr9|113817704|114048709|Duplication|231005|34|
|chr17|37794956|37852590|<a href="#/chr17_37">Duplication</a>|57634|32|
|chr19|22724887|22881779|Deletion|156892|33|


#### Same criteria found 177 DEL, 59 DUP, 47 INV and 1 TRANS on Rnor6


---

#### Linked-reads data 
## Type of SNPs and indels  

 Joint calling by Deepvariant/GLNexus 


<iframe src="pdfs/deepvariant_36_samples_rn6_v_bn7.pdf" width="100%" height=600px>


---

#### Linked-reads data 
## Summary of SV, SNP, small indel

* mRatBN7 increases the accuracy of variant detection by 
	* improving assembly accurcy 
		* there are likely errors at the assembly level
	* improving accuracy at nucleotide level
		* there are likely errorrs at the nucleotide level 

---

## Oxford nanopore WGS data for BN-Lx/Cub and SHR/OlaIpcv 

* about 20x coverage 
* N50 of the reads is 15-20kb
* Winnowmap for mapping	against both refs
* Sniffles for SV detection

---

#### Nanopore data 
## Read depth per chromosome

mRatBN7.1 increase read depth by 7-8% compare to Rnor6

<iframe src="pdfs/nanopore_per_chr_coverage_bnlx_shrola_rn6_v_mRatBN7.pdf" width="100%" height=600px>

---

#### Nanopore data

## Read depth per 10k

<iframe src="pdfs/bnlx_shrola_nanopore_coverage.pdf" width="100%" height=600px>


---

#### Nanopore data

## Areas with low and high read depth 

<iframe src="pdfs/bnlx_shr_nanopore_high_low_coverge_length_by_chr.pdf" width=100% height=600px>

---

#### Nanopore data

## SV calls by Sniffles

<iframe src="pdfs/bnlx-shrolaipcv_nanopore_sniffle_size.pdf" width="100%" height=600px>

---

#### Nanopore data

## Summary

* mRatBN7 reduces regions with low read depth from nanopore data
* mRatBN7 reduces regions with very high read depth from nanopore data
* mRatBN7 reduces false SV detections from nanopore data 

---

---

<section id="chr1_138">

## chr1 138 Mb Duplication

<a href="#/table"> <img src="./images/ratGenome/chr1_138mb_del_40_samples.png"> </a>

---

<section id="chr2_148">

## chr2 148 Mb Duplication

<a href="#/table"> <img src="./images/ratGenome/chr2_148mb_dup_mRatBN7_small.png"> </a>

---

<section id="chr17_37">

## chr17 37 Mb Duplication

<a href="#/table"> <img src="./images/ratGenome/chr17_37mb_dup.png"> </a>


