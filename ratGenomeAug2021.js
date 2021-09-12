(function () {
'strict'
var markdownContent = ''
+ "# IROC monthly meeting on rat genome \n"
+ "\n"
+ "### Agenda for 2021-08-31\n"
+ "\n"
+ "0. Annoucement [CTC/RG 2021](http://www.complextrait.org/ctc2021/program.html)\n"
+ "\n"
+ "1. Mapping of Alternative Polyadenylation Sites to Rattus norvegicus mRatBN7.2, Zhihua Jiang ([WSU](https://ansci.wsu.edu/people/faculty/zhihua-jiang/)), 25-30 min.\n"
+ "\n"
+ "2. Residual errors in mRatBN7.2, Hao Chen (UTHSC) 5-10 min\n"
+ "\n"
+ "3. Plan for mRatBN7.2 updates, Anne Kwitek (MCW, RGD), open discussion, 20 min. \n"
+ "\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="ratGenomeAug2021.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
