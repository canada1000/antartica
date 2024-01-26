// Copyright © Antartica Org. All rights reserved. - United States
// SCRIPT STARTS
// LANGUAGE (en-US)

function homepageurlcommandscriptFunction() {
var url_string = location.href; 
var url = new URL(url_string);
var c = url.searchParams.get("c");
if (c == "detailedinformationpanel") {
alert("Antartica.Org\nDetailed Information Panel\n\nApp Info\nApp Name: Home Page\nApp Version: 1.00.000\n\nFeature Name: Detailed Information Panel\nFeature Version: 1.00.000\n\nCopyright © Antartica Org. All rights reserved. - United States");
window.location.replace("?c=home");
}
else if (c == "about") {
showmodal3();
}
else if (c == "translate") {
showmodal8();
}
else if (c == "change-language") {
showmodal8();
}
else if (c == "menu") {
sidebarFunction();
}

else if (c == "search") {
sidebarFunction();
}

else if (c == "share") {
showmodal9();
}
else if (c == "settings") {
window.location.replace("settings.html");
}
else if (c == "cookies") {
showmodal2();
}
else if (c == "cookie-policy") {
showmodal2();
}
else if (c == "terms") {
showmodal6();
}
else if (c == "privacy") {
showmodal7();
}
else if (c == "disclaimer") {
showmodal5();
}
else if (c == "error404") {
showmodal1();
}
else {
}

}
// SCRIPT ENDS
// Copyright © Antartica Org. All rights reserved. - United States
