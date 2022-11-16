
# Challenges in knowledge extraction from biomedical literature

## Hao Chen
### Department of Pharmacology, Addiction Science and Toxicology
### University of Tennessee Health Science Center
hchen@uthsc.edu

Note: 

Abstract

Biomedical sciences have made tremendous discoveries in the last centry. Most these knowledge are discibed in peer reviewed journal articles and are indexed in publically accessible databases, such as PubMed. Scientists working in the field to assimilate existing knowleget when designing new experiemtns and interpreting novel findings. This knowledge intergrating is exceedingly challenging with the advancement of technology, where one experimetn can measure the values of thousands to hundreds of thoughands of variables. This seminar will describe several uses cases of information extrtaction in the so called omics era. After a brief description of traditional and deep learning based-approaches to text mining, and a few unique challendgings in minging biomedical literature, a few existing systems for extracting information from PubMed database will be discussed.

Hao Chen, Ph.D. Professor, Univeersity of Tennessee Health Science Center. Dr. Chen recieved his Ph.D. in anatomy from Michigan State Univeristy. His research focuses on the genetics and genomics of addiction related traits modledl in rats. He wrote Chilibot, a text mining tool for gene-gene and gene-disese relationships in the early 2000s. More recently, his team wrote a tool called GeneCup, which is a tool for extracting the relationship of genes with a collection of concepts related to addiction. These tools are all designed to meet the need of his biological research. 

---

## Outline
* Source of text
* Practical needs in the omic era
* Overview of text mining 
* Example text mining systems
	* Chilibot
	* GeneCup
* Unique aspects of biomedical text 


---

## PubMed is the one stop location for most Biomedical literature 
* https://pubmed.ncbi.nlm.nih.gov/about/
	* MEDLINE: https://www.nlm.nih.gov/medline/medline_overview.html
	* PMC: https://www.ncbi.nlm.nih.gov/pmc/about/intro/
	* BookShelf: https://www.ncbi.nlm.nih.gov/books/ 	

---

## What else is provided by NLM? 
https://www.ncbi.nlm.nih.gov/guide/all/
* Genomes
* Genetic variants
* DNA/RNA Sequencing data 

---

## EHR: Electronic health record

https://www.healthit.gov/faq/what-electronic-health-record-ehr

* Contain a patient's medical history, diagnoses, medications, treatment plans, immunization dates, allergies, radiology images, and laboratory and test results
* Review on EHR mining ([Jenen, et al. 2012](https://www.nature.com/articles/nrg3208))
* Often relies on ICD-10/11 code. 
	* https://www.who.int/standards/classifications/classification-of-diseases

---

## <a href="http://www.PubMed.gov" target=_new>PubMed</a> in more detail

* Journal, title, author, abstract, ...
* format
	* MEDLINE (also called PubMed, dated to the 1960s) 
	* XML 
	* csv 
* Interactive web interface 
* Batch Download
* API: EDirect
	* https://dataguide.nlm.nih.gov/edirect/documentation.html
* Obtain the entire database
	* https://dataguide.nlm.nih.gov/edirect/archive.html

---

## Maintain a local copy of MEDLINE using EDirect 

https://dataguide.nlm.nih.gov/edirect/archive.html

* There is a yearly baseline update
* Additional updates are released daily
* Books and PMC are not included
* only includes the MEDLINE data 
* search still needs to be conducted on NCBI server. 

---

## PMC in more detail

* Full text 
* Format is different from the publishers' version
* Mandated by NIH
* https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/
* XML, PDF, or text formats

---

## What can we do with all these texts?

* Genomic, transcriptomic, epigenomic, proteomic
* Protein-protein interaction
* Genotype-phenotype association
* Drug-drug interaction
* Pathway extraction
* Hypothesis generation

---

## Text mining overview

* POS tagging 
	* python NLTK is a general purpose tagger
	* TnT is a general purpose parser that can be trained.
	* Nouns and verbs are most informative in biomedical text 
	* GENIA corpus 
		* https://academic.oup.com/bioinformatics/article/19/suppl_1/i180/227927
	* GENIA tagger
	* new nouns are coined all the time 		
	* new POS tagger based on deep learning
		* https://journalofbigdata.springeropen.com/articles/10.1186/s40537-022-00561-y
* Shallow parsing (chunking)
	* generate noun phrases
	* NLTK 
		* sentence splitting routine 
		* shallow parsing 

---

## Deep neural network



![](http://neuralnetworksanddeeplearning.com/images/tikz40.png)

---

## Convolutional Neural Networks

<a href="http://scs.ryerson.ca/~aharley/vis/conv/">

<img src="https://ujwlkarn.files.wordpress.com/2016/08/conv_all.png"></a>

http://scs.ryerson.ca/~aharley/vis/conv/

---

## Neural network based approaches for language (text) processing

* Word2Vec
	* trained using CBOW and skip-gram tasks 
	* contains the semantic meaning words 
	* BioWordVec: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6510737/

<img src="https://miro.medium.com/max/828/1*cuOmGT7NevP9oJFJfVpRKA.png" width=60%>

https://towardsdatascience.com/nlp-101-word2vec-skip-gram-and-cbow-93512ee24314

---

## Neural network based approaches for language (text) processing

* BERT
	* trained using masked language model and next sentence prediction tasks
	* contains contextual information 
	* BioBERT: https://pubmed.ncbi.nlm.nih.gov/31501885/

<table><tr><td>
		<img src="https://miro.medium.com/max/828/0*ViwaI3Vvbnd-CJSQ.png">
		</td>
		<td><img src="https://miro.medium.com/max/828/0*m_kXt3uqZH9e7H4w.png">
		<p>
https://towardsdatascience.com/bert-explained-state-of-the-art-language-model-for-nlp-f8b21a9b6270
		</td></tr></table>

---


## Applications of text mining

* Named entity recognition	
	* depend on dictionaries 
		* NCBI gene info
			* https://ftp.ncbi.nih.gov/gene/DATA/
	* use algorithms (e.g. based on chuncking)
* relationships extraction
	* rule based system 
		* two noun phrases separated by a verb 
	* dependency parsing

<img src="https://miro.medium.com/max/828/1*JB77KsvZ7SGZZC9peUG_3A.png" width=50%>

---

## Chilibot: general purpose relationship mining 
* user specified terms are used as inputs
* conducts live search of PubMed
* extract relationships between terms 
* assigned relationship types
	* stimulatory/inhibitory/neutral interactive
* constructs relationship maps

http://www.chilibot.net

---

## Generate hypothesis

* if both A and B are connected to a set of Cs
* but A is not directly related to B
* the hypothesis is that A is directly related to B

<img src="http://chilibot.net/chilibot/images/crebhypo1.png">

---

## Efficiency of only searching 30-50 most recent abstracts

<img src="https://media.springernature.com/full/springer-static/image/art%3A10.1186%2F1471-2105-5-147/MediaObjects/12859_2004_Article_263_Fig3_HTML.jpg?as=webp"> 

---

## Small world properties of the networks

<img src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2F1471-2105-5-147/MediaObjects/12859_2004_Article_263_Fig4_HTML.jpg?as=webp" width=50%>

---

## Retroperspective validation of the hypotheses

<img src="./images/chilibot_hypothesis_generation.png" width=70%> 

---

## Chilibot does not	
* search the entire PubMed
* have predefined lists of keywords

---

## GeneCup: special purpose relationship mining

<div id="left">
<p align="center">
	<img src="https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/g3journal/Issue/12/5/1/m_g3_12_5cover.jpeg?Expires=1668439361&Signature=RBY9ARFzBsBlQpIo9R3BC6Gt2CxjoIflV3mlA4AmuDFa~ti44q2p-JeNhe7aLEP-OJohSdDQM6dYKhU7Sz33KvGTCMBBXMWqUAkdtqMMIT39mE9ZZpJYJ1HZQq5G-XSRItE0ixcvaTNzEbscMkgbKzLIfHtpZwI~cR9F-Tv2P8UoQNjqe2CCDhAm0j9I5lzdnbcGAgn~6qbRksTvVbMgqr5KKCK9hDMmOLBRAQ48hiMdpJqoQpXspJyjpjaCOWxur7gJZL4FrCCROaUC5LubmBCaN7yX8CPR-wd~hWRqdYPi7sLgB01eqBxXpuTZ-Zao~Pi-MsSzgCgke4I4TGbhvA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA" width=50%>
	</p>
</div>

<div id="right">

* <a href="https://www.frontiersin.org/articles/10.3389/fpsyt.2022.790566/full"> GWAS</a> identifies genetic loci associated with phenotypes
* have a predefined list of keywords
* includes human GWAS findings
* have a local mirror of PubMed
* uses CNN to differentiate the meaning of STRESS

</div>




---

## GeneCup architecture

<img src="./images/genecup/genecup_fig1.png">

---

## Training a CNN for disambiguating STRESS 

<img src="./images/genecup/genecup_fig2.png">

---

## Obtaining the training corpus

Using two sets of very specific queries

<pre>

(CRF OR AVP OR urocortin OR vasopressin OR CRH OR restraint OR stressor OR tail-shock OR (social AND defeat) OR (foot AND shock) OR immobilization OR
(predator AND odor) OR intruder OR unescapable OR inescapable OR CORT OR corticosterone OR cortisol or ACTH OR prolactin OR PRL OR adrenocorticotropin
OR adrenocorticotrophin) AND stress NOT (ROS OR oxidative OR redox-regulation OR nitrosative OR nitrative OR hyperglycemia OR carbonyl OR lipoxidative OR
Nrf2-driven OR thiol-oxidative)

</pre>

<pre>

(ROS OR oxidative OR redox-regulation OR nitrosative OR nitrative OR hyperglycemia OR carbonyl OR lipoxidative OR Nrf2-driven OR thiol-oxidative)
AND stress
</pre>

* Many of these terms are obtained from Word2Vec model trained on PubMed.

* about 10,000 sentences from each class for training and 5,000 sentences from each class for testing

* how about: generate training data using GPT2? 
	* https://arxiv.org/abs/2004.13845

---

## Workflow during querying

<img src="./images/genecup/genecup_fig3.png">

---

## Performance of CNN on disambiguating STRESS 

<img src="./images/genecup/genecup_fig4.png">

---

## GeneCup does not
* assign relationship categories 
* work with full text articles
* generate hypothesis
* tries resolve synonyms

---

## Recent efforts in using deep learning on biomedical text mining

<img src="./images/genecup/recent_dnn_text_mining.png" width=50%>

https://academic.oup.com/bib/article/22/3/bbaa057/5838460

---

## Challenges in biomedical text mining: Ambiguity


<div id="left">


<p align="center">

<img src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2F1471-2105-5-147/MediaObjects/12859_2004_Article_263_Fig2_HTML.jpg?as=webp" width=80%>

</p>

</div>


<div id="right">

* synonyms (alias)
	* genes can have different names
* acronyms
	* there is no standard acronyms
	* not only genes, but also anatomical terms, etc.
* same name can refer to DNA, RNA, or protein
	* context dependent 
* recent change in gene names	
	* SEPT1 is now SEPTIN1; MARCH1 is now MARCHF1 (reads by Excel)
	* WARS is now WARS1; CARS is now CARS1 (common words)
	</div>

---

# Thanks to 

* Hakan Gunturkun
* Pjotr Prins
* Efraim Flashner 

---

## Questions?


hchen@uthsc.edu





