//Change elements using DOM
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";
//Add elements using DOM
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride";
sect.appendChild(para);
//Add text to an element using DOM
const text = document.createTextNode(
    " - the premier source for web development knowledge"
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
//Move or remove nodes using DOM.
sect.appendChild(linkPara);//It moves the referenced copy to the bottom of the page. 
//const copyNode = sect.cloneNode(linkPara);//It makes a copy of the element and appends it to the end of the element. sect.appendChild(copyNode);

sect.removeChild(linkPara);

