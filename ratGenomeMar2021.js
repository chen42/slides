(function () {
'strict'
var markdownContent = ''
+ "# IROC monthly meeting on rat genome  \n"
+ "\n"
+ "### Agenda for 2021-03-30\n"
+ "\n"
+ "* Major vs minor releases (Kerstin Howe 10 min)\n"
+ "* Plan for mRatBN7 and general discussion (Anne Kwitek 10 - 15 min)\n"
+ "* Ensembl annotation update  (Fergal Martin, 15 min)\n"
+ "* Publication strategy discussion (10 min)\n"
+ "\n"
+ "---\n"
+ "\n"
;
var script = document.querySelector('script[src="ratGenomeMar2021.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
