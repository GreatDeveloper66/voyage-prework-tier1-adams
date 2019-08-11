/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/

window.onload = () => {
	document.getElementById("accordian").addEventListener("click", function () {
		let collapse = document.querySelector("menu.collapsemenu");
		const mode = collapse.style.display;
		if (mode === "none") {
			collapse.style.display = "flex";
		} else {
			collapse.style.display = "none";
		}

	});
};
