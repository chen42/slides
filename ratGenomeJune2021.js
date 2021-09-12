(function () {
'strict'
var markdownContent = ''
+ "# IROC monthly meeting on rat genome \n"
+ "\n"
+ "### Agenda for 2021-06-29\n"
+ "\n"
+ "\n"
+ "1. Comparison of Rnor6 vs mRatBN7.2 using brain proteomics data, Xusheng Wang (UND), 15-20 min\n"
+ "\n"
+ "2. Comparison of Rnor6 vs mRatBN7.2 using 10X Genomics single nuclei sequencing data and capped small RNA-seq, Francesca Telese (UCSD), 20-25 min\n"
+ "\n"
+ "3. Updates from GRC 2021 meeting and potential issues in mRatBN7.2 Anne Kwitek (MCW), Hao Chen (UTHSC), 15-20 min.\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="ratGenomeJune2021.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
