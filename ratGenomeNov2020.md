# Comparing Rnor6 and mRatBN7.1 

<hr>

### Tristan de Jong, Hakan Gunturkun, Hao Chen

<img src="images/little_wizard.png" width=30%>

#### Nov 24th 2020 

---

## Chr vs Chr dot plots

mRatNor1.1 (May 20 2020)  = mRatBN7.1 (NCBI) 

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

#### Linked-reads data 

## Shared SV against mRatBN7.1

|Chr|Begin|End|SV Type|Length|Strains|
|---|---|---|---|---|---|
|chr1|54119451|54946980|Translocation|827529|32|
|chr1|138882092|138934698|Deletion|52606|36|
|chr2|148864168|148911755|Duplication|47587|36|
|chr4|100799349|100865002|Deletion|65653|31|
|chr9|113817704|114048709|Duplication|231005|34|
|chr17|37794956|37852590|Duplication|57634|32|
|chr19|22724887|22881779|Deletion|156892|33|


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
## Coverage per chromosome

mRatBN7.1 increase coverage by 7-8% compare to Rnor6

<iframe src="pdfs/nanopore_per_chr_coverage_bnlx_shrola_rn6_v_mRatBN7.pdf" width="100%" height=600px>

---

#### Nanopore data

## Coverage per 10k

<iframe src="pdfs/bnlx_shrola_nanopore_coverage.pdf" width="100%" height=600px>


---

#### Nanopore data

## Low and high coverage areas

<iframe src="pdfs/bnlx_shr_nanopore_high_low_coverge_length_by_chr.pdf" width=100% height=600px>

---

#### Nanopore data

## SV calls by Sniffles

<iframe src="pdfs/bnlx-shrolaipcv_nanopore_sniffle_size.pdf" width="100%" height=600px>

---

#### Nanopore data

## Summary

* mRatBN7 reduces regions with low coverage from nanopore data
* mRatBN7 reduces regions with very high coverage from nanopore data
* mRatBN7 reduces false SV detections from nanopore data 


