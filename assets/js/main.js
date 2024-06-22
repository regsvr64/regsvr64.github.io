function get_theme() {
	var sel = document.getElementById("theme");
	var text= sel.options[sel.selectedIndex].text;

	switch (text) {
	case "IBM PC":
		document.body.className = "ibm-pc";
		break;
	case "BBC Micro Teletext Mode":
		document.body.className = "bbc-micro";
		break;
	case "Commodore 64":
		document.body.className = "c64";
		break;
	case "Commodore 128":
		document.body.className = "c128";
		break;
	}
}
