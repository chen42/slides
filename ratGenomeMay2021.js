(function () {
'strict'
var markdownContent = ''
+ "# IROC monthly meeting on rat genome \n"
+ "\n"
+ "### Agenda for 2021-05-25\n"
+ "\n"
+ "* Announcements\n"
+ "* Plan for the reference genome comparison and rat resource paper \n"
+ "	*	Hao Chen, 15 minutes\n"
+ "* Comparing proteogenomics data between Rnor6 and mRatBN7.2 \n"
+ "	* 	Tessa Gillett/Victor Guryev, 20 minutes\n"
+ "* Updates on long read genomic and RNA-seq \n"
+ "	* Peter Doris, 20-25 minute\n"
+ "\n"
+ "---\n"
+ "\n"
+ "##  Announcements\n"
+ "\n"
+ "* The genome note for mRatBN7.2 is out\n"
+ "	* https://wellcomeopenresearch.org/articles/6-118\n"
+ "* Meeting on gene annotation difference between Rnor_6 and mRatBN7.2 \n"
+ "	* June 16, at 11AM CDT. \n"
+ "	* Zoom link in email  https://tennesseehipaa.zoom.us/j/99705840389 \n"
+ "\n"
+ "---\n"
+ "\n"
+ "## Publication strategy \n"
+ "\n"
+ "* Target Journal: Cell\n"
+ "* Publication type: [Resource](https://www.cell.com/cell/article-types)\n"
+ "* Example: [Characterizing genetic intra-tumor heterogeneityacross 2,658 human cancer genomes](https://reader.elsevier.com/reader/sd/pii/S0092867421002944?token=41A2D78770ACAB2C3DDD77B6E95386C654739ADF15D8A795C01A548C275BC4259C1ED0A3EA6112412AE581860127472B&originRegion=us-east-1&originCreation=20210427160916) \n"
+ "\n"
+ "* Sections: \n"
+ "	* New reference genome mRatBN7.2\n"
+ "	* Improvements \n"
+ "		* reference genome quality 	\n"
+ "		* gene annotation\n"
+ "		* applications \n"
+ "			* Variant calling \n"
+ "			* RNA-seq\n"
+ "			* Proteomics\n"
+ "	* Rat resources \n"
+ "		* outbred population: Heterogeonous stock rats\n"
+ "		* inbred population: HRDP\n"
+ "	* New insights \n"
+ "		* Overlapping high impact variants with human GWAS\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="ratGenomeMay2021.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
