(function () {
'strict'
var markdownContent = ''
+ "# IROC monthly meeting on rat genome \n"
+ "\n"
+ "### Agenda for 2021-04-27\n"
+ "\n"
+ "* HRDP strain update (Mindy Dwinell, MCW, 10 min)\n"
+ "* Joint SNP/Indel analysis of 94 inbred samples (Tristan de Jong, UTHSC, 15 min)\n"
+ "* Comparing Rnor_6 vs mRatBN7.2 on RNA-seq analysis (Laura Saba, U Colorado | Dan Munro, UCSD, 20 min)\n"
+ "* Publication strategy (General discussion)\n"
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
+ "\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="ratGenomeApr2021.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
