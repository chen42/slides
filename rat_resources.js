(function () {
'strict'
var markdownContent = ''
+ "## Rat genetic and genomic resources\n"
+ "\n"
+ "\n"
+ "* [New rat reference genome mRatBN7](#/bn7)\n"
+ "* [Outbred study population and data](#/hs)\n"
+ "* [Inbred study population and data](#/hrdp)\n"
+ "\n"
+ "Compiled by Hao Chen,  University of Tennessee Health Science Center\n"
+ "\n"
+ "hchen@uthsc.edu\n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<div id=\"bn7\">\n"
+ "\n"
+ "## mRatBN7.2\n"
+ "\n"
+ "### the  new rat reference genome \n"
+ "\n"
+ "a collboration between Darwin Tree of Life Project, Wellcome Sanger Institute, the Rat Genome Database, and others\n"
+ "\n"
+ "* [reference geneme sequence data from NCBI](https://www.ncbi.nlm.nih.gov/assembly/GCF_015227675.2/)\n"
+ "* [gene annotation from NCBI (AR108)](https://www.ncbi.nlm.nih.gov/genome/annotation_euk/Rattus_norvegicus/108/)\n"
+ "	* [announcement](https://ncbiinsights.ncbi.nlm.nih.gov/2021/02/12/rat-mratbn7-2-annotation/)\n"
+ "	* [ncbi data directory](https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/015/227/675/GCF_015227675.2_mRatBN7.2/)\n"
+ "	* [gtf file]( https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/015/227/675/GCF_015227675.2_mRatBN7.2/GCF_015227675.2_mRatBN7.2_genomic.gtf.gz)\n"
+ "	* gene annotation from Ensembl (pending)\n"
+ "* genome browser	\n"
+ "	* [NCBI browser](https://www.ncbi.nlm.nih.gov/genome/gdv/browser/genome/?id=GCF_015227675.2)\n"
+ "	* UCSD (pending)\n"
+ "	* Ensembl (pending)\n"
+ "* [raw genome sequencing data](https://vgp.github.io/genomeark/Rattus_norvegicus/)\n"
+ "* [rat genome joins the reference genome consortium](http://genomeref.blogspot.com/2020/11/a-new-rat-genome-assembly-sparks.html)  \n"
+ "\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<div id=\"hs\">\n"
+ "\n"
+ "##  Heterogeneous stock rats \n"
+ "\n"
+ "outbred population \n"
+ "\n"
+ "* [overall info](https://ratgenes.org)\n"
+ "* [source of rats](https://ratgenes.org/cores/core-b/)\n"
+ "* [brain transcriptome](https://ratgenes.org/research-projects/eqtl/)\n"
+ "\n"
+ "---\n"
+ "\n"
+ "<div id=\"hrdp\">\n"
+ "\n"
+ "## Hybrid rat diversity panel\n"
+ "\n"
+ "inbred population \n"
+ "\n"
+ "* [overall info and source of rats](https://rgd.mcw.edu/wg/hrdp_panel/) \n"
+ "* [genome sequencing data](http://hrdp.opar.io/)\n"
+ "* [brain transcriptome from Phenogen](https://phenogen.org/gene.jsp)\n"
+ "* [brain transcriptome and eQTL from GeneNetwork.org](http://genenetwork.org) \n"
+ "	* Species: rat | Group: HRDP | type: brain mRNA) \n"
+ "* [brain proteome and pQTL from GeneNetwork.org](http://genenetwork.org) \n"
+ "	* Species: rat | Group: HRDP-HXB/BXH brain proteome\n"
+ "\n"
;
var script = document.querySelector('script[src="rat_resources.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
