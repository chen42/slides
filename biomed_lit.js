(function () {
'strict'
var markdownContent = ''
+ "\n"
+ "# Challenges in knowledge extraction from biomedical literature\n"
+ "\n"
+ "## Hao Chen\n"
+ "### Department of Pharmacology, Addiction Science and Toxicology\n"
+ "### University of Tennessee Health Science Center\n"
+ "hchen@uthsc.edu\n"
+ "\n"
+ "Note: \n"
+ "\n"
+ "Abstract\n"
+ "\n"
+ "Biomedical sciences have made tremendous discoveries in the last centry. Most these knowledge are discibed in peer reviewed journal articles and are indexed in publically accessible databases, such as PubMed. Scientists working in the field to assimilate existing knowleget when designing new experiemtns and interpreting novel findings. This knowledge intergrating is exceedingly challenging with the advancement of technology, where one experimetn can measure the values of thousands to hundreds of thoughands of variables. This seminar will describe several uses cases of information extrtaction in the so called omics era. After a brief description of traditional and deep learning based-approaches to text mining, and a few unique challendgings in minging biomedical literature, a few existing systems for extracting information from PubMed database will be discussed.\n"
+ "\n"
+ "Hao Chen, Ph.D. Professor, Univeersity of Tennessee Health Science Center. Dr. Chen recieved his Ph.D. in anatomy from Michigan State Univeristy. His research focuses on the genetics and genomics of addiction related traits modledl in rats. He wrote Chilibot, a text mining tool for gene-gene and gene-disese relationships in the early 2000s. More recently, his team wrote a tool called GeneCup, which is a tool for extracting the relationship of genes with a collection of concepts related to addiction. These tools are all designed to meet the need of his biological research. \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Outline\n"
+ "* Source of text\n"
+ "* Practical needs in the omic era\n"
+ "* Overview of text mining \n"
+ "* Example text mining systems\n"
+ "	* Chilibot\n"
+ "	* GeneCup\n"
+ "* Unique aspects of biomedical text \n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## PubMed is the one stop location for most Biomedical literature \n"
+ "* https://pubmed.ncbi.nlm.nih.gov/about/\n"
+ "	* MEDLINE: https://www.nlm.nih.gov/medline/medline_overview.html\n"
+ "	* PMC: https://www.ncbi.nlm.nih.gov/pmc/about/intro/\n"
+ "	* BookShelf: https://www.ncbi.nlm.nih.gov/books/ 	\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## What else is provided by NLM? \n"
+ "https://www.ncbi.nlm.nih.gov/guide/all/\n"
+ "* Genomes\n"
+ "* Genetic variants\n"
+ "* DNA/RNA Sequencing data \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## EHR: Electronic health record\n"
+ "\n"
+ "https://www.healthit.gov/faq/what-electronic-health-record-ehr\n"
+ "\n"
+ "* Contain a patient's medical history, diagnoses, medications, treatment plans, immunization dates, allergies, radiology images, and laboratory and test results\n"
+ "* Review on EHR mining ([Jenen, et al. 2012](https://www.nature.com/articles/nrg3208))\n"
+ "* Often relies on ICD-10/11 code. \n"
+ "	* https://www.who.int/standards/classifications/classification-of-diseases\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## <a href=\"http://www.PubMed.gov\" target=_new>PubMed</a> in more detail\n"
+ "\n"
+ "* Journal, title, author, abstract, ...\n"
+ "* format\n"
+ "	* MEDLINE (also called PubMed, dated to the 1960s) \n"
+ "	* XML \n"
+ "	* csv \n"
+ "* Interactive web interface \n"
+ "* Batch Download\n"
+ "* API: EDirect\n"
+ "	* https://dataguide.nlm.nih.gov/edirect/documentation.html\n"
+ "* Obtain the entire database\n"
+ "	* https://dataguide.nlm.nih.gov/edirect/archive.html\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Maintain a local copy of MEDLINE using EDirect \n"
+ "\n"
+ "https://dataguide.nlm.nih.gov/edirect/archive.html\n"
+ "\n"
+ "* There is a yearly baseline update\n"
+ "* Additional updates are released daily\n"
+ "* Books and PMC are not included\n"
+ "* only includes the MEDLINE data \n"
+ "* search still needs to be conducted on NCBI server. \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## PMC in more detail\n"
+ "\n"
+ "* Full text \n"
+ "* Format is different from the publishers' version\n"
+ "* Mandated by NIH\n"
+ "* https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/\n"
+ "* XML, PDF, or text formats\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## What can we do with all these texts?\n"
+ "\n"
+ "* Genomic, transcriptomic, epigenomic, proteomic\n"
+ "* Protein-protein interaction\n"
+ "* Genotype-phenotype association\n"
+ "* Drug-drug interaction\n"
+ "* Pathway extraction\n"
+ "* Hypothesis generation\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Text mining overview\n"
+ "\n"
+ "* POS tagging \n"
+ "	* python NLTK is a general purpose tagger\n"
+ "	* TnT is a general purpose parser that can be trained.\n"
+ "	* Nouns and verbs are most informative in biomedical text \n"
+ "	* GENIA corpus \n"
+ "		* https://academic.oup.com/bioinformatics/article/19/suppl_1/i180/227927\n"
+ "	* GENIA tagger\n"
+ "	* new nouns are coined all the time 		\n"
+ "	* new POS tagger based on deep learning\n"
+ "		* https://journalofbigdata.springeropen.com/articles/10.1186/s40537-022-00561-y\n"
+ "* Shallow parsing (chunking)\n"
+ "	* generate noun phrases\n"
+ "	* NLTK \n"
+ "		* sentence splitting routine \n"
+ "		* shallow parsing \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deep neural network\n"
+ "\n"
+ "\n"
+ "\n"
+ "![](http://neuralnetworksanddeeplearning.com/images/tikz40.png)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Convolutional Neural Networks\n"
+ "\n"
+ "<a href=\"http://scs.ryerson.ca/~aharley/vis/conv/\">\n"
+ "\n"
+ "<img src=\"https://ujwlkarn.files.wordpress.com/2016/08/conv_all.png\"></a>\n"
+ "\n"
+ "http://scs.ryerson.ca/~aharley/vis/conv/\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Neural network based approaches for language (text) processing\n"
+ "\n"
+ "* Word2Vec\n"
+ "	* trained using CBOW and skip-gram tasks \n"
+ "	* contains the semantic meaning words \n"
+ "	* BioWordVec: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6510737/\n"
+ "\n"
+ "<img src=\"https://miro.medium.com/max/828/1*cuOmGT7NevP9oJFJfVpRKA.png\" width=60%>\n"
+ "\n"
+ "https://towardsdatascience.com/nlp-101-word2vec-skip-gram-and-cbow-93512ee24314\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Neural network based approaches for language (text) processing\n"
+ "\n"
+ "* BERT\n"
+ "	* trained using masked language model and next sentence prediction tasks\n"
+ "	* contains contextual information \n"
+ "	* BioBERT: https://pubmed.ncbi.nlm.nih.gov/31501885/\n"
+ "\n"
+ "<table><tr><td>\n"
+ "		<img src=\"https://miro.medium.com/max/828/0*ViwaI3Vvbnd-CJSQ.png\">\n"
+ "		</td>\n"
+ "		<td><img src=\"https://miro.medium.com/max/828/0*m_kXt3uqZH9e7H4w.png\">\n"
+ "		<p>\n"
+ "https://towardsdatascience.com/bert-explained-state-of-the-art-language-model-for-nlp-f8b21a9b6270\n"
+ "		</td></tr></table>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "## Applications of text mining\n"
+ "\n"
+ "* Named entity recognition	\n"
+ "	* depend on dictionaries \n"
+ "		* NCBI gene info\n"
+ "			* https://ftp.ncbi.nih.gov/gene/DATA/\n"
+ "	* use algorithms (e.g. based on chuncking)\n"
+ "* relationships extraction\n"
+ "	* rule based system \n"
+ "		* two noun phrases separated by a verb \n"
+ "	* dependency parsing\n"
+ "\n"
+ "<img src=\"https://miro.medium.com/max/828/1*JB77KsvZ7SGZZC9peUG_3A.png\" width=50%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Chilibot: general purpose relationship mining \n"
+ "* user specified terms are used as inputs\n"
+ "* conducts live search of PubMed\n"
+ "* extract relationships between terms \n"
+ "* assigned relationship types\n"
+ "	* stimulatory/inhibitory/neutral interactive\n"
+ "* constructs relationship maps\n"
+ "\n"
+ "http://www.chilibot.net\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Generate hypothesis\n"
+ "\n"
+ "* if both A and B are connected to a set of Cs\n"
+ "* but A is not directly related to B\n"
+ "* the hypothesis is that A is directly related to B\n"
+ "\n"
+ "<img src=\"http://chilibot.net/chilibot/images/crebhypo1.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Efficiency of only searching 30-50 most recent abstracts\n"
+ "\n"
+ "<img src=\"https://media.springernature.com/full/springer-static/image/art%3A10.1186%2F1471-2105-5-147/MediaObjects/12859_2004_Article_263_Fig3_HTML.jpg?as=webp\"> \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Small world properties of the networks\n"
+ "\n"
+ "<img src=\"https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2F1471-2105-5-147/MediaObjects/12859_2004_Article_263_Fig4_HTML.jpg?as=webp\" width=50%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Retroperspective validation of the hypotheses\n"
+ "\n"
+ "<img src=\"./images/chilibot_hypothesis_generation.png\" width=70%> \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Chilibot does not	\n"
+ "* search the entire PubMed\n"
+ "* have predefined lists of keywords\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## GeneCup: special purpose relationship mining\n"
+ "\n"
+ "<div id=\"left\">\n"
+ "<p align=\"center\">\n"
+ "	<img src=\"https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/g3journal/Issue/12/5/1/m_g3_12_5cover.jpeg?Expires=1668439361&Signature=RBY9ARFzBsBlQpIo9R3BC6Gt2CxjoIflV3mlA4AmuDFa~ti44q2p-JeNhe7aLEP-OJohSdDQM6dYKhU7Sz33KvGTCMBBXMWqUAkdtqMMIT39mE9ZZpJYJ1HZQq5G-XSRItE0ixcvaTNzEbscMkgbKzLIfHtpZwI~cR9F-Tv2P8UoQNjqe2CCDhAm0j9I5lzdnbcGAgn~6qbRksTvVbMgqr5KKCK9hDMmOLBRAQ48hiMdpJqoQpXspJyjpjaCOWxur7gJZL4FrCCROaUC5LubmBCaN7yX8CPR-wd~hWRqdYPi7sLgB01eqBxXpuTZ-Zao~Pi-MsSzgCgke4I4TGbhvA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA\" width=50%>\n"
+ "	</p>\n"
+ "</div>\n"
+ "\n"
+ "<div id=\"right\">\n"
+ "\n"
+ "* <a href=\"https://www.frontiersin.org/articles/10.3389/fpsyt.2022.790566/full\"> GWAS</a> identifies genetic loci associated with phenotypes\n"
+ "* have a predefined list of keywords\n"
+ "* includes human GWAS findings\n"
+ "* have a local mirror of PubMed\n"
+ "* uses CNN to differentiate the meaning of STRESS\n"
+ "\n"
+ "</div>\n"
+ "\n"
+ "\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## GeneCup architecture\n"
+ "\n"
+ "<img src=\"./images/genecup/genecup_fig1.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Training a CNN for disambiguating STRESS \n"
+ "\n"
+ "<img src=\"./images/genecup/genecup_fig2.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Obtaining the training corpus\n"
+ "\n"
+ "Using two sets of very specific queries\n"
+ "\n"
+ "<pre>\n"
+ "\n"
+ "(CRF OR AVP OR urocortin OR vasopressin OR CRH OR restraint OR stressor OR tail-shock OR (social AND defeat) OR (foot AND shock) OR immobilization OR\n"
+ "(predator AND odor) OR intruder OR unescapable OR inescapable OR CORT OR corticosterone OR cortisol or ACTH OR prolactin OR PRL OR adrenocorticotropin\n"
+ "OR adrenocorticotrophin) AND stress NOT (ROS OR oxidative OR redox-regulation OR nitrosative OR nitrative OR hyperglycemia OR carbonyl OR lipoxidative OR\n"
+ "Nrf2-driven OR thiol-oxidative)\n"
+ "\n"
+ "</pre>\n"
+ "\n"
+ "<pre>\n"
+ "\n"
+ "(ROS OR oxidative OR redox-regulation OR nitrosative OR nitrative OR hyperglycemia OR carbonyl OR lipoxidative OR Nrf2-driven OR thiol-oxidative)\n"
+ "AND stress\n"
+ "</pre>\n"
+ "\n"
+ "* Many of these terms are obtained from Word2Vec model trained on PubMed.\n"
+ "\n"
+ "* about 10,000 sentences from each class for training and 5,000 sentences from each class for testing\n"
+ "\n"
+ "* how about: generate training data using GPT2? \n"
+ "	* https://arxiv.org/abs/2004.13845\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Workflow during querying\n"
+ "\n"
+ "<img src=\"./images/genecup/genecup_fig3.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Performance of CNN on disambiguating STRESS \n"
+ "\n"
+ "<img src=\"./images/genecup/genecup_fig4.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## GeneCup does not\n"
+ "* assign relationship categories \n"
+ "* work with full text articles\n"
+ "* generate hypothesis\n"
+ "* tries resolve synonyms\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Recent efforts in using deep learning on biomedical text mining\n"
+ "\n"
+ "<img src=\"./images/genecup/recent_dnn_text_mining.png\" width=50%>\n"
+ "\n"
+ "https://academic.oup.com/bib/article/22/3/bbaa057/5838460\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Challenges in biomedical text mining: Ambiguity\n"
+ "\n"
+ "\n"
+ "<div id=\"left\">\n"
+ "\n"
+ "\n"
+ "<p align=\"center\">\n"
+ "\n"
+ "<img src=\"https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2F1471-2105-5-147/MediaObjects/12859_2004_Article_263_Fig2_HTML.jpg?as=webp\" width=80%>\n"
+ "\n"
+ "</p>\n"
+ "\n"
+ "</div>\n"
+ "\n"
+ "\n"
+ "<div id=\"right\">\n"
+ "\n"
+ "* synonyms (alias)\n"
+ "	* genes can have different names\n"
+ "* acronyms\n"
+ "	* there is no standard acronyms\n"
+ "	* not only genes, but also anatomical terms, etc.\n"
+ "* same name can refer to DNA, RNA, or protein\n"
+ "	* context dependent \n"
+ "* recent change in gene names	\n"
+ "	* SEPT1 is now SEPTIN1; MARCH1 is now MARCHF1 (reads by Excel)\n"
+ "	* WARS is now WARS1; CARS is now CARS1 (common words)\n"
+ "\n"
+ "	</div>\n"
+ "\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "# Thanks to \n"
+ "\n"
+ "* Hakan Gunturkun\n"
+ "* Pjotr Prins\n"
+ "* Efraim Flashner \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Questions?\n"
+ "\n"
+ "\n"
+ "hchen@uthsc.edu\n"
+ "\n"
+ "\n"
+ "\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="biomed_lit.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
