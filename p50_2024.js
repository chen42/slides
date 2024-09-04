(function () {
'strict'
var markdownContent = ''
+ "# 3D Genomic Interactions Identify Candidate Genes from HS GWAS\n"
+ "\n"
+ "<hr>\n"
+ "\n"
+ "## Hao Chen\n"
+ "\n"
+ "### University of Tennessee Health Science Center\n"
+ "\n"
+ "#### P50 retreat, 2024\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## GWAS on nicotine IVSA in adolescent HS rats\n"
+ "\n"
+ "<img src=\"./images/Fig1.social.rats.withdemo.svg\" width=50%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Many GWAS hits on nicotine intake\n"
+ "\n"
+ "<img src=\"./images/p50/hs_gwas_nicsa_porcupine.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## QTL overlap with different number of genes\n"
+ "\n"
+ "<table><tr>\n"
+ "<td width=33%> <img src=\"./images/hic/no_gene.png\"></td>\n"
+ "<td width=33%> <img src=\"./images/hic/a_few_genes.png\"></td>\n"
+ "<td width=33%> <img src=\"./images/hic/many_genes.png\"></td>\n"
+ "</tr></table>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Methods in finding candidate causal genes\n"
+ "\n"
+ "- eQTL (<a href=\"https://ratgtex.org\" target=_new>RatGTEx.org </a>)\n"
+ "- coding variants (GWAS report)\n"
+ "- literature (<a href=\"https://genecup.org\" target=_new>GeneCup.org</a>)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## 3D chromatin interaction helps find causal genes\n"
+ "\n"
+ "<img src=\"./images/hic/h-magma_protocol_paper.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## The genome is 3D\n"
+ "\n"
+ "<a href=\"https://www.nature.com/articles/s41580-021-00362-w/figures/1\" >\n"
+ "<img src=\"./images/hic/3D_genome_structure.png\" width=40%> </a>\n"
+ "\n"
+ "Source: Nature Reviews Molecular Cell Biology v22, p511–528 (2021)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Hi-C experimental procedures\n"
+ "\n"
+ "<img src=\"./images/hic/12859_2015_683_Fig1_HTML.webp\" width=70%>\n"
+ "\n"
+ "Source: Aaron T.L. Lun & Gordon K. Smyth BMC Bioinformatics 2015\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Hi-C is a method to find 3D interactions\n"
+ "\n"
+ "<img src=\"./images/hic/hi-c_heatmap.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Loops and promoter-enhancer interactions\n"
+ "\n"
+ "<a href=\"https://www.sciencedirect.com/science/article/pii/S0171933521000212?via%3Dihub\" target=_new>\n"
+ "<img src=\"./images/hic/1-s2.0-S0171933521000212-gr1_lrg.jpg\" width=62%>\n"
+ "</a>\n"
+ "\n"
+ "Source: Eur J Cell Biol. v100, p151170. 2021\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Loops from PFC of 10 inbred rats\n"
+ "\n"
+ "<img src=\"./images/hic/hao_loop_size_after_remove_duplicate_loops.png\">\n"
+ "\n"
+ "5K: 6680 / 10K: 12,162 / 25K: 12,931\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Overlap between loop & CTCF\n"
+ "\n"
+ "<img src=\"./images/hic/hao_ctcf.hist.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Overlap between loop & TSS\n"
+ "\n"
+ "<img src=\"./images/hic/hao_absolute_position_of_tss_to_loop.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Overlap between loop & Promoter\n"
+ "\n"
+ "<img src=\"./images/hic/hao_position_of_promoter_to_loop.png\">\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Loops supported by CTCF and has TSS or Promoter\n"
+ "\n"
+ "<img src=\"./images/hic/hao_loops_common_venn_diagram.png\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Location of these loops\n"
+ "\n"
+ "<img src=\"./images/hic/loops_circos.png\" width=60%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Loops may not always be helpful\n"
+ "\n"
+ "<img src=\"./images/hic/cacna1c_chr4_ctcf.png\" width=60% >\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Loops help identify candidate genes\n"
+ "\n"
+ "<img src=\"./images/hic/ist1_with_loop.png\" width=70%>\n"
+ "\n"
+ "Both Ist1 and Dhodh has cis-eQTL. Ist1 is a human smoking initiation gene. Ist1 is involved in endosomal sorting.\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Loops help identify candidate genes\n"
+ "\n"
+ "<img src=\"./images/hic/epb41.png\" width=70%>\n"
+ "\n"
+ "Epb41l4b is a human smoking initiation gene. Many genes in this region has coding variants, including Epb41l4b\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Social environment determines the hedonice value of nicotine via molecular and cellular networks in the amygdala\n"
+ "\n"
+ "##### R01 submitted\n"
+ "\n"
+ "- Aim 1: To test the hypothesis that Cacna1c is required for SANSA (Chen).\n"
+ "\n"
+ "- Aim 2: To test the hypothesis that oxytocin signaling is required for SANSA (Tunstall).\n"
+ "\n"
+ "- Aim 3: To establish the role of cellular and molecular interaction between hypothalamic oxytocin neurons and CeA GABAergic neurons in facilitating SANSA (Kirson).\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Generating gene knockout zebrafish using base editor\n"
+ "\n"
+ "<img src=\"./images/zebrafish_cbe_tyr_15dpf.png\" width=50%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Zebrafish Nicotine Conditioned Place Aversion/Preference Test\n"
+ "\n"
+ "<table><tr><td width=50%>\n"
+ "\n"
+ "<img src=\"./images/zebrafish_chamber.png\">\n"
+ "\n"
+ "</td><td>\n"
+ "\n"
+ "<img src=\"./images/zebrafish_nicotine_cpp_30um_3day.png\">\n"
+ "\n"
+ "</td></table>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## saCas9 AAV for in vivo genome editing in HS rats\n"
+ "\n"
+ "<img src=\"./images/hic/all-in-one-sacas9-grna-map.png\" width=50%>\n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Acknowledgements\n"
+ "\n"
+ "<table width=80% ><tr align=center>\n"
+ "<td width=25%>\n"
+ "<img src=\"./images/lab/shuangying.jpg\">\n"
+ "<p align=\"center\"> Shuangying Leng</p>\n"
+ "</td>\n"
+ "<td width=25%>\n"
+ "<img src=\"./images/lab/caroline.png\">\n"
+ "\n"
+ "<p align=\"center\"> Caroline Jones</a>\n"
+ "\n"
+ "</td>\n"
+ "<td width=1>\n"
+ "\n"
+ "<td width=25%>\n"
+ "<img src=\"./images/lab/rachel.jpg\">\n"
+ "\n"
+ "<p align=\"center\"> Rachel Ward</a>\n"
+ "\n"
+ "</td>\n"
+ "\n"
+ "<td width=25%>\n"
+ "<img src=\"./images/lab/jun.jpg\">\n"
+ "\n"
+ "<p align=\"center\"> Jun Huang </a>\n"
+ "\n"
+ "</td>\n"
+ "\n"
+ "</tr>\n"
+ "</table>\n"
+ "\n"
+ "  <!--- REHU students Abigale Salinero (2015) | Cindy Tay (2016) | Raven David (2017) | Christian Hurt (2018) | Gwen Johnson (2021) | Olivia Harrison (2022, 2023) | Ryan Luib (2023)\n"
+ "    --->\n"
+ "\n"
+ "- P50 collaborators\n"
+ "  - Abraham Palmer | Oksana Polesskaya | Thiago Sanches | Apurva Chitre | Leah Solberg-Woods\n"
+ "- PhD students\n"
+ "  - Panjun Kim | Mallory Udell | Paige Lemen\n"
+ "- UTHSC collaborators\n"
+ "  - Changhoon Jee | Burt Sharp | Thirumalini Vaithianathan | Rob Williams | Brendan Tunstall | Dean Kirson\n"
+ "- Past technicians and analysts\n"
+ "  - _Xia Hong_ | _Jie Shen_ | _Wenyan Han_ | _Pawandeep Kaur_ | _Yanyan Lin_ | _Xinyu Fan_ | _Mallory Udell_ | _Gwen Johnson_ | _Hakan Gunturkun_ | _Tengfei Wang_ | _Angel Garcia Martinez_ |\n"
+ "\n"
+ "Funding: NIH/NIDA P50DA037844 U01DA053672\n"
;
var script = document.querySelector('script[src="p50_2024.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
