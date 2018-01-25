setTimeout(function() {
	walk(document.body);
}, 1000);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	/*
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}
	*/

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bbitcoin\b/g, "garlicoin");
    v = v.replace(/\bBitcoin\b/g, "Garlicoin");
    v = v.replace(/\bbitcoins\b/g, "garlicoins");
    v = v.replace(/\bBitcoins\b/g, "Garlicoins");
	
	textNode.nodeValue = v;
}


