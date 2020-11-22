# Comparing Rnor6 and mRatBN7.1 
##  Nov 24th 2020 

<hr>

### Tristan de Jong, Hakan Gunturkun, Hao Chen

<img src="images/little_wizard.png" width=40%>

---

## Chr vs Chr dot plots

mRatNor1.1 (May 20 2020)  = mRatBN7.1 (NCBI) 

<iframe src="pdfs/dotplots_mRatNor1_vs_rn6.pdf" width="100%" height=600px>

---

## Data sets

* 10x Chromium Linked reads WGS data from 36 inbred strains
	* most strains have about 60x coverage
	* Four BN samples
	* BN-Lx/Cub and SHR/OlaIpcv
	* 30 HXB and BXH strains 
	* Analyzed using Longranger 2.2.2 against both refs
* Oxford nanopore WGS data for BN-Lx/Cub and SHR/OlaIpcv 
	* about 20x coverage 
	* N50 about 15-20kb
	* Winnowmap for mapping	against both refs
	* Sniffles for SV detection

---

#### Linked-reads data 

## Mapping stats 

<iframe src="pdfs/longranger_mapping_stats_mRatBN7_v_Rnor6.pdf" width="100%" height=600px>


---

#### Linked-reads data 

## Summary of mapping stats

* mRatBN7 decreases 
	* SNPs phases 
		* likely due to reduced number of Hets 
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

#### Nanopore data 
## Coverage per chromosome

---

#### Nanopore data

## Coverage per 10k

<iframe src="pdfs/bnlx_shrola_nanopore_coverage.pdf" width="100%" height=600px>


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


