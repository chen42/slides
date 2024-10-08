(function () {
'strict'
var markdownContent = ''
+ "# Genome-Wide Association Study on Three Behaviors Tested in an Open Field in Heterogeneous Stock Rats \n"
+ "\n"
+ "<hr color=#cb4b16>\n"
+ "\n"
+ "###	Hao Chen\n"
+ "\n"
+ "### University of Tennessee Health Science center\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Project 2 of the P50: Socially acquired nicotine self-administration in adolescent HS rats\n"
+ "\n"
+ "* Main phenotypes of interest\n"
+ "	* intravenous nicotine self-administration (active operant response, nicotine intake, reinstatement of drug seeking) \n"
+ "* Additional phenotypes \n"
+ "	* open field test (OFT), novel object interaction (NOIT), social interaction (SIT), elevated plus maze (EPM)\n"
+ "	* conducted before nicotine IVSA\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Personality traits are predictors of vulnerability to addiction\n"
+ "\n"
+ "* Individuals with symptoms of anxiety are more likely to be smokers\n"
+ "* Novelty seeking is positively correlated with smoking onset\n"
+ "* Social environment plays a critical role in the development and treatment of addiction\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Behavioral tests \n"
+ "\n"
+ "* Breeding HS rats \n"
+ "* PND 21: wean\n"
+ "<p>\n"
+ "<img src=\"./images/p50/openfields.svg\">\n"
+ "<p>\n"
+ "* PND 35: elevated plus maze (EPM)\n"
+ "* PND 38: jugular surgery for nicotine IVSA\n"
+ "* Sample size: 626 males and 630 females\n"
+ "\n"
+ "<hr width=30% align=\"left\"> <p align=\"left\"> \n"
+ "<cite> Gunturkun, et al., Front Psychiatry. 2022 \n"
+ "</cite>\n"
+ "</p>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Phenotype correlations\n"
+ "\n"
+ "<img src=\"./images/p50/phenotype_correlation_heatmap.png\" width=60%>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Selected correlations\n"
+ "\n"
+ "<img src=\"./images/p50/correlation_dotplots.png\">\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Association between behavioral phenotype and nicotine intake\n"
+ "\n"
+ "\n"
+ "<div id=\"left\">\n"
+ "\n"
+ "\n"
+ "\n"
+ "<center>\n"
+ "\n"
+ "#### Loading of PCA\n"
+ "\n"
+ "<img src=\"images/p50/retreat2018/pca_loading.png\" width=70%> \n"
+ "</center>\n"
+ "\n"
+ "<hr width=30% align=\"left\"> <p align=\"left\"> \n"
+ "<cite>\n"
+ "Wang et al., GBB 2014, Sci Report 2018\n"
+ "</cite>\n"
+ "</p>\n"
+ "\n"
+ "</div>\n"
+ "\n"
+ "<div id=\"right\">\n"
+ "\n"
+ "<center>\n"
+ "\n"
+ "#### PCA regression summary \n"
+ "\n"
+ "<font size=4>\n"
+ "\n"
+ "|Phenotype | Sex| Variance Explained| \n"
+ "|---|---|---|\n"
+ "|Infusion, first 3 d| F| 0.18| \n"
+ "|Infusion, first 3 d| M| 0.17| \n"
+ "|Infusion, last 3 d | F | 0.12| \n"
+ "|Infusion, last 3 d | M | 0.20| \n"
+ "|Infusion, progressive ratio | F | 0.14| \n"
+ "|Infusion, progressive ratio | M | 0.18| \n"
+ "|Active spout lick, reinstatement | F | 0.08| \n"
+ "|Active spout lick, reinstatement | M | 0.19| \n"
+ "</font>\n"
+ "</center>\n"
+ "\n"
+ "</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Genotyping and SNP heritability \n"
+ "\n"
+ "<img src=\"./images/p50/heritability_oft_noit_sit.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## GWAS: porcupine plot\n"
+ "\n"
+ "\n"
+ "<a href=\"https://palmerlab.s3.sdsc.edu/p50_reports/open_field.html\" target=_new>\n"
+ "<img src=\"./images/p50/porcupine_plot_v3.png\">\n"
+ "</a>\n"
+ "\n"
+ "* 30 significant loci: OFT=9; NOIT=7; SIT=14 \n"
+ "* pleiotrophic within traits but not between traits\n"
+ "* many traits have multiple loci\n"
+ "* min. SNP h<sup>2</sup> for significant loci was 0.14, mean was 0.226\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Example QTL for OFT \n"
+ "\n"
+ "### Frequency of entering the center zone, Chr4:11801306\n"
+ "<img src=\"./images/p50/OFT_cntrfreq_chr4_118013062.png\" width=60%>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Example QTL for NOIT \n"
+ "\n"
+ "### Duration in center zone, Distance to center zone, Chr4:112234344\n"
+ "\n"
+ "<img src=\"./images/p50/NOIT_dist2ctrmean_chr4_112234344.png\" width=60%>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Example QTL for SIT \n"
+ "\n"
+ "### Latency of entering the social zone, Chr17:58611795\n"
+ "\n"
+ "<img src=\"./images/p50/SIT_insoczonelate_chr17_58611795.png\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate gene selection\n"
+ "\n"
+ "* Fine mapping (CS, Susie)\n"
+ "* High impact variants\n"
+ "* cis-eQTL \n"
+ "* Expressed in the brain\n"
+ "* Human GWAS on psychiatric traits \n"
+ "* Functional relevance from the literature \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cyp26b1\n"
+ "\n"
+ "### Open field: frequency of entering center zone, total distance to center zone\n"
+ "\n"
+ "<center>\n"
+ "<table> <tr><td width=50%>\n"
+ "<img src=\"./images/p50/cyp26b1_locuszoom.png\" width=90%>\n"
+ "</td>\n"
+ "<td>\n"
+ "<img src=\"./images/p50/cyp26b1_effectplot.png\" width=60%>\n"
+ "</td></tr><tr><td colspan=\"2\">\n"
+ "<img src=\"./images/p50/cyp26b1_minor_allele.png\" width=90%>\n"
+ "</td>\n"
+ "</tr></table>\n"
+ "</center>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cyp26b1\n"
+ "\n"
+ "### coding variant and cis-eQTL\n"
+ "\n"
+ "<a href=\"https://alphafold.ebi.ac.uk/entry/G3V7X8\" target=_new>\n"
+ "<img src=\"./images/p50/cyp26b1_missense.png\" width=70%>\n"
+ "</a>\n"
+ "\n"
+ "<br>\n"
+ "<img src=\"./images/p50/cyp26b1_cis-eQTL.png\" width=70%>\n"
+ "\n"
+ "---\n"
+ "## Candidate genes: Cyp26b1\n"
+ "\n"
+ "### cis-eQTL in RatGTEx\n"
+ "\n"
+ "<img src=\"./images/p50/violinplot0-cyp26b1.svg\">\n"
+ "\n"
+ "<hr width=30% align=\"left\"> <p align=\"left\"> \n"
+ "<cite> Munro, et al., BioRxiv. 2022 \n"
+ "</cite>\n"
+ "</p>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## RatGTEx: expression levels of candidate genes \n"
+ "<img src=\"./images/p50/ratgetex_heapmap_cyp26b1.svg\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cyp26b1\n"
+ "\n"
+ "### Literature mining: Cyp26b1 \n"
+ "http://genecup.org\n"
+ "\n"
+ "<a href=\"https://genecup.org/cytoscape/?rnd=tmpklRCuX&genequery=Cyp26b1\" target=_new>\n"
+ "<img src=\"./images/p50/genecup_enter_cyp26b1.png\">\n"
+ "</a>\n"
+ "\n"
+ "<hr width=30% align=\"left\"> <p align=\"left\"> \n"
+ "<cite> Gunturkun, et al., G3. 2022 \n"
+ "</cite>\n"
+ "</p>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cyp26b1\n"
+ "\n"
+ "### Open field: frequency of entering center zone, total distance to center zone\n"
+ "\n"
+ "<center>\n"
+ "<table> <tr><td width=33%>\n"
+ "<img src=\"./images/p50/cyp26b1_effectplot.png\" width=70%>\n"
+ "</td>\n"
+ "<td width=33%>\n"
+ "<img src=\"./images/p50/cyp26b1_violin.svg\", width=90%>\n"
+ "</td>\n"
+ "<td width=33%>\n"
+ "<img src=\"./images/p50/cyp26b1_shrna.png\" width=100%>\n"
+ "PMID: 31449909\n"
+ "</td>\n"
+ "\n"
+ "\n"
+ "</tr>\n"
+ "\n"
+ "</table>\n"
+ "</center>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cacna1c\n"
+ "\n"
+ "### Social interaction: distance to social zone; in social zone duration\n"
+ "\n"
+ "<center>\n"
+ "<table> <tr><td width=50%>\n"
+ "<img src=\"./images/p50/Cacna1c_locuszoom.png\" width=90%>\n"
+ "</td>\n"
+ "<td>\n"
+ "<img src=\"./images/p50/Cacna1c_effect_plot.png\" width=60%>\n"
+ "</td></tr><tr><td colspan=\"2\">\n"
+ "<img src=\"./images/p50/Cacna1c_minor_allele.png\" width=90%>\n"
+ "</td>\n"
+ "</tr></table>\n"
+ "</center>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## RatGTEx: expression levels of candidate genes \n"
+ "<img src=\"./images/p50/ratgetex_heapmap_cacna1c.svg\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cacna1c\n"
+ "http://genecup.org\n"
+ "\n"
+ "<a href=\"https://genecup.org/cytoscape/?rnd=tmprvLuam&genequery=Cacna1c\" target=_new>\n"
+ "<img src=\"./images/p50/Cacna1c_genecup.svg\" width=60%>\n"
+ "</a>\n"
+ "\n"
+ "<hr width=30% align=\"left\"> <p align=\"left\"> \n"
+ "<cite> Gunturkun, et al., G3. 2022 \n"
+ "</cite>\n"
+ "</p>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cacna1c\n"
+ "\n"
+ "<div id=\"left\">\n"
+ "<img src=\"./images/p50/cacna1c_title.png\"> \n"
+ "</div>\n"
+ "<div id=\"right\">\n"
+ "<img src=\"./images/p50/cacna1c_fbko.png\">\n"
+ "</div>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Other candidate genes\n"
+ "\n"
+ "<img src=\"./images/p50/candidate_genes_oft_noit_sit.png\" width=80%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "## Acknowledgements\n"
+ "\n"
+ "<table><tr >\n"
+ "<td width=20% >\n"
+ "<img src=\"images/photos/tengfei.jpg\">\n"
+ "<center>\n"
+ "Tengfei Wang\n"
+ "</center>\n"
+ "\n"
+ "</td>\n"
+ "<td width=20%>\n"
+ "<img src=\"images/photos/angel.jpg\">\n"
+ "<center>\n"
+ "Angel Garcia Martinez\n"
+ "</center>\n"
+ "\n"
+ "</td>\n"
+ "<td width=20%>\n"
+ "<img src=\"images/photos/shuangying.jpg\">\n"
+ "<center>\n"
+ "Shuangying Leng\n"
+ "</center>\n"
+ "\n"
+ "</td>\n"
+ "<td width=20%>\n"
+ "<img src=\"images/photos/Caroline.png\">\n"
+ "<center>\n"
+ "Caroline Jones\n"
+ "</center>\n"
+ "\n"
+ "</td>\n"
+ "<td width=20%>\n"
+ "<img src=\"images/photos/gwen.png\">\n"
+ "<center>\n"
+ "Gwen Johnson\n"
+ "</center>\n"
+ "</td>\n"
+ "\n"
+ "</tr>\n"
+ "</table>\n"
+ "<p>\n"
+ "\n"
+ "* Past lab members and summer students \n"
+ "	 * Xia Hong | Jie Shen | Wenyan Han | Pawandeep Kaur | Yanyan Lin | Xinyu Fan | Mallory Udell | Sarah Cartwright | Hakan Gunturkun | Abigale Salinero | Cindy Tay | Raven Davis | Christian Hurt \n"
+ "\n"
+ "* P50 collaborators \n"
+ "	* Abraham Palmer | Oksana Polaskaya | Apurva Chitre | Daniel Munro | Leah Solberg Woods | others \n"
+ "\n"
+ "\n"
+ "### We have a postdoc position available!\n"
+ "hchen@uthsc.edu\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Heritability vs QTL\n"
+ "\n"
+ "<img src=\"./images/p50/heritability_vs_qtl.png\" width=50%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Candidate genes: Cyp26b1\n"
+ "\n"
+ "### cis-eQTL in RatGTEx\n"
+ "\n"
+ "\n"
+ "<img src=\"./images/p50/cyp26b1_ratgtex.png\">\n"
+ "\n"
+ "\n"
+ "<hr width=30% align=\"left\"> <p align=\"left\"> \n"
+ "<cite> Munro, et al., BioRxiv. 2022 \n"
+ "</cite>\n"
+ "</p>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="ibangs2022_hao.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
