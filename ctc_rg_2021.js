(function () {
'strict'
var markdownContent = ''
+ "# mRatBN7 ushers in a new era of rat genomics and genetics research\n"
+ "## International rat omics consortium (IROC)\n"
+ "<center>\n"
+ "\n"
+ "<b>de Jong T, Pan Y, Murphy T, Martin F, Akil H, Benner C, Chitre A, Colonna E, Dalgard C, Doris PA, Dwinell M, Garrison E, Geurts A, Gillette T, Gunturkun MH, Guryev V, Haggerty L, Hourlier T, Howe K, Howe K, Jun H, Kalbfleisch T, Mohammadi P, Mortazavi M, Munro D, Ozel AB, Polesskaya O, Pravenec M, Prins P, Rastas PMA, Saba L, Sharp B, Tabakoff B, Telese F, Tutaj M, Villani F, Wang X, <br>Palmer AA, Williams RW, Kwitek AE, Li J, Chen H\n"
+ "</b>\n"
+ "</center>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## mRatBN7 fixes many large structural issues in the reference\n"
+ "\n"
+ "<div id=\"left\">\n"
+ "\n"
+ "Linkage map from 1893 rats HS rats (from 378 families)\n"
+ "<img src=./images/ratGenome/dotplot_chr6_pasi.png>\n"
+ "</div>\n"
+ "\n"
+ "<div id=\"right\">\n"
+ "\n"
+ "Dot plot \n"
+ "<img src=./images/ratGenome/dotplot_mratbn72_vs_rnor6_chr6.png>\n"
+ "</div>\n"
+ "\n"
+ "<div id=\"cite\">\n"
+ "Pasi Rastas, University of Helsinki</div>\n"
+ "\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Deletion calls from linked read data\n"
+ "\n"
+ "<img src=\"./images/ratGenome/dels_linked_reads_rn6_v_bn7.png\">\n"
+ "\n"
+ "<div id=\"cite\">Tristan de Jong, Hao Chen, et al., UTHSC</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Mapping stats from linked read data\n"
+ "\n"
+ "<img src=\"./images/ratGenome/10x_chromium_mapping_stats_rn6_vs_bn7.png\">\n"
+ "\n"
+ "<div id=\"cite\">Tristan de Jong, Hakan Gunturkun, Hao Chen, et al., UTHSC</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "## Mapping stats from PacBio CLR (SHR)\n"
+ "\n"
+ "|	|Rnor6.0| mRatBN7.2|\n"
+ "|:---|---:|---:|\n"
+ "|Forward |2106576| 2127468|\n"
+ "|Reverse |2103210| 2119793|\n"
+ "|Unmapped| 298422| 260947|\n"
+ "|Total read count| 4508208| 4508208|\n"
+ "|Fraction mapped |0.934| 0.942|\n"
+ "\n"
+ "\n"
+ "<div id=\"cite\"> Ted Kalbfleisch, Peter Doris, Univ Texas Health Science Center</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Mapping stats and SV calls from nanopore data\n"
+ " one HS rat with 55X coverage \n"
+ "\n"
+ "<div id=\"right\"><img src=\"./images/ratGenome/nanopore_hs_milad_mapping_stats.png\"></div>\n"
+ "<div id=\"left\"><img src=\"./images/ratGenome/nanopore_hs_milad_sv_calls.png\"></div>\n"
+ "<div id=\"cite\"> Milad Mortazavi, Abraham Palmer, et al UCSD</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<span id=\"sharedrn6\">\n"
+ "\n"
+ "## mRatBN7.2 improves base level accuracy \n"
+ "\n"
+ "### SNPs and Indels shared by 32 HXB/BXH strains and 4 BN/NHsdMcwi samples\n"
+ "\n"
+ "<img src=\"./images/ratGenome/10xchromium_gvcf_rn6_v_mRatBN7_deepvariant_36_strains_common_indels_wide.png\">\n"
+ "\n"
+ "<div id=\"cite\">Tristan de Jong, Hao Chen, et al., UTHSC</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<span id=\"refseq\">\n"
+ "\n"
+ "## Gene annotations on mRatBN7.2 at RefSEQ\n"
+ "\n"
+ "<div id=\"left\">\n"
+ "\n"
+ "||Rnor6.0|mRatBN7.2| Mouse GRCm39|\n"
+ "|---|---|---|---|\n"
+ "|protein coding | 23,514| 22,228|22,173|\n"
+ "|coding with major errors| 1,831 (7.8%)|519 (2.3%)|\n"
+ "|&nbsp;&nbsp;&nbsp;&nbsp;with frame shifts|1,476|458|\n"
+ "|1:1 human ortholog|16,068|16,315|16316|\n"
+ "\n"
+ "</div>\n"
+ "\n"
+ "<div id=\"right\">\n"
+ "\n"
+ "<img src=\"./images/ratGenome/busco_bn7_vs_rn6.png\">\n"
+ "</div>\n"
+ "\n"
+ "<p>\n"
+ "<div id=\"cite\"> Terrence Murphy, et al., NCBI</div>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Gene annotations on mRatBN7.2 by Ensembl \n"
+ "\n"
+ "<img src=./images/ratGenome/ensembl_rn6_vs_bn7.png>\n"
+ "\n"
+ "<div id=\"cite\">Fergal Martin, et al., Ensembl</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "##  RNAseq analysis\n"
+ "\n"
+ "352 samples from 88 HS rats\n"
+ "\n"
+ "||Rnor6|mRatBN7.2|\n"
+ "|---|---|---|\n"
+ "|Average percent of reads aligned to the reference |97.4|98.3|\n"
+ "|Average percent of reads aligned concordantly once to the reference|89.3|94.6 |\n"
+ "|Average percent of reads aligned to Ensembl transcriptome|67.6 |74.8 |\n"
+ "\n"
+ "<hr color=\"blue\">\n"
+ "\n"
+ "738 genes changed **biotype** in Ensembl from Rnor6 to mRatBN7.2  \n"
+ "\n"
+ "|Rnor6 to mRatBN7.2 | number |\n"
+ "|:---|---:|\n"
+ "|processed pseudogene to protein coding  |224|\n"
+ "|pseudogene to protein coding | 136|\n"
+ "|pseudogenes to protein coding |89|\n"
+ "|lncRNA to protein coding |65|\n"
+ "\n"
+ "<div id=\"cite\">Laura Saba, et al., University of Colorado</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "##  scRNAseq analysis \n"
+ "\n"
+ "<img src=\"./images/ratGenome/telese_scrna-seq.png\">\n"
+ "\n"
+ "<div id=\"cite\">Francesca Telese, et al., UCSD</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## proteome analysis \n"
+ "\n"
+ "\n"
+ "<img src=./images/ratGenome/tessa_protein_id_rn6_v_bn7.png>\n"
+ "\n"
+ "<div id=\"cite\"> Tessa Gillette, Victor Guryev, UMGC, Netherland</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "##  the identification of transcription start sites\n"
+ "\n"
+ "### capped short RNA-seq\n"
+ "\n"
+ "||Number of Transcript start site|\n"
+ "|---|---|\n"
+ "|Rnor6|42,420|\n"
+ "|mRatBN7.2|44,985|\n"
+ "\n"
+ "<div id=\"cite\">Chris Benner, Francesa Telese, UCSD</div>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## the identification of polyadenylation sites \n"
+ "\n"
+ "### Whole Transcriptome Termini Site Sequencing\n"
+ "\n"
+ "<img src=\"./images/ratGenome/zhihua_apa.png\">\n"
+ "\n"
+ "<div id=\"cite\">Zhuhua Jian, et al., WSU</div>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
+ "##  eQTL mapping \n"
+ "\n"
+ "\n"
+ "<img src=\"./images/ratGenome/trans_cis_eqtl_rn6_bn7_dan.png\" width=70%>\n"
+ "\n"
+ "<div id=\"cite\">Dan Munro, Pejman Mohammadi, Abraham Palmer, et al., UCSD</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "##  pQTL mapping\n"
+ "\n"
+ "21 HXB/BXH strains,  brain proteome\n"
+ "\n"
+ "<img src=./images/ratGenome/xushengwang_pQTL.png>\n"
+ "\n"
+ "<div id=\"cite\"> XuSheng Wang, Univ North Dakota</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## liftover from Rnor6.0 to mRatBN7.2?? \n"
+ "\n"
+ "<img src=\"./images/ratGenome/liftover_from_bn6_rn7_han.png\" width=70%>\n"
+ "\n"
+ "<div id=\"cite\"> Yanchao Pan (Han), Jun Li, et al., Univ Michigan</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## potential remaining errors in mRatBN7.2 \n"
+ "\n"
+ "\n"
+ "* 134,781 variants (SNPs and indels) shared by more than 92 of 94 WGS samples (including 6 BN/NHsdMcwi samples) (10X reduction compared to <a href=\"#/sharedrn6\">Rnor6</a>)\n"
+ "\n"
+ "||Hom| Het|\n"
+ "|---|---|---:|\n"
+ "|Indel| 95,131| 998 |\n"
+ "|SNP| 24,292 |13,360|\n"
+ "\n"
+ "<div id=\"cite\"> Monika Tutaj,  Mindy Dwinell et al., MCW for sharing data</div> \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Potential remaining errors in mRatBN7.2 \n"
+ "\n"
+ "<div id=\"left\">\n"
+ "\n"
+ "|Impact|Annotation|Count|\n"
+ "|:---|:---|---:|\n"
+ "|HIGH|frameshift_variant| <a href=\"#/refseq\">550<a> |\n"
+ "|HIGH|splice_acceptor_variant|615|\n"
+ "|HIGH|splice_donor_variant|25|\n"
+ "|MODERATE|missense_variant|291|\n"
+ "|MODIFIER|3_prime_UTR_variant|884|\n"
+ "|MODIFIER|5_prime_UTR_variant|418|\n"
+ "|MODIFIER|downstream_gene_variant|6381|\n"
+ "|MODIFIER|intergenic_region|68990|\n"
+ "|MODIFIER|intron_variant|45338|\n"
+ "\n"
+ "\n"
+ "Examples of genes with high impact variants:  <b>Akap10, Cacna1c, Crhr1, Chat, Egfr, Gabrg2, Grin2a, Oprm1, etc.</b>\n"
+ "\n"
+ "</div>\n"
+ "\n"
+ "<div id=\"right\">\n"
+ "\n"
+ "<img src=./images/ratGenome/shared_variants_on_mratbn72.png>\n"
+ "<center>\n"
+ "aaaTaaaAAAgAAA \n"
+ "\n"
+ "aaaTaaa\n"
+ "<center>\n"
+ "\n"
+ "</div>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Rat as a model system\n"
+ "\n"
+ "After filtering potential remaining errors in mRatBN7.2, in the 118 WGS samples, we found \n"
+ "\n"
+ "|number of genes | variant type|\n"
+ "|---:|---|\n"
+ "|102 | start_lost|\n"
+ "|105 | stop_lost|\n"
+ "|106 | frameshift_variant & splice_region_variant|\n"
+ "|166 | splice_acceptor_variant & splice_donor_variant & intron_variant|\n"
+ "|340 | splice_acceptor_variant & intron_variant|\n"
+ "|406 | stop_gained|\n"
+ "|474 | splice_donor_variant & intron_variant|\n"
+ "|1188 | frameshift_variant|\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "# Acknowledgements\n"
+ "\n"
+ "## IROC members\n"
+ "\n"
+ "<b>de Jong T, Pan Y, Murphy T, Martin F, Akil H, Benner C, Chitre A, Colonna E, Dalgard C, Doris PA, Dwinell M, Garrison E, Geurts A, Gillette T, Gunturkun MH, Guryev V, Haggerty L, Hourlier T, Howe K, Howe K, Jun H, Kalbfleisch T, Mohammadi P, Mortazavi M, Munro D, Ozel AB, Polesskaya O, Pravenec M, Prins P, Rastas PMA, Saba L, Sharp B, Tabakoff B, Telese F, Tutaj M, Villani F, Wang X, <br>Palmer AA, Williams RW, Kwitek AE, Li J</b>\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="ctc_rg_2021.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
