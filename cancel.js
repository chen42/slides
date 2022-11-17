(function () {
'strict'
var markdownContent = ''
+ "### Thanks for logging in but today's IROC is canceled.\n"
+ "#### See you next month.\n"
+ "\n"
+ "\n"
;
var script = document.querySelector('script[src="cancel.js"]');
var section = document.createElement('section');
script.parentNode.appendChild(section);
section.appendChild(document.createTextNode(markdownContent));
[].forEach.call(script.attributes, function (attr) {
    section.setAttribute(attr.name, script.getAttribute(attr.name));
});
section.setAttribute('data-markdown', '');
})();
