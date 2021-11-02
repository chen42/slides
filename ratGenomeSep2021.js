(function () {
'strict'
var markdownContent = ''
+ "# IROC monthly meeting  \n"
+ "\n"
+ "#### Agenda for 2021-09-28\n"
+ "\n"
+ "### Paleogenomic analysis of the black rat associated with human economic history \n"
+ "\n"
+ "He Yu, Max Planck Institute for the Science of Human History, 30 min\n"
+ "\n"
+ "### Rat omic resources available at genenetwork.org \n"
+ "\n"
+ "Rob Williams, UTHSC, 30 min\n"
+ "\n"
+ "Note:\n"
+ "He is a Postdoctoral researcher in the Department of Archaeo-genetics at the Max Planck Institute for Evolutionary Anthropology in Germany. She recevied her phd from Peking University in China. Her thesis work focused on the genomic ancestry of the mountain cat and domestic cats in China. Her current research focus is on population genomics of ancient human and animals.\n"
;
var script = document.querySelector('script[src="ratGenomeSep2021.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
