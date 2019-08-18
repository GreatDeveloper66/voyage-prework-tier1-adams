/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/
/*global event*/
/*import scrollIt from "scroll.js";*/

window.onload = () => {
	const toggleDropDown = () => {
		let navmenu = document.querySelector("menu.navmenu");
		navmenu.classList.toggle("slidedown");
		navmenu.classList.toggle("slideup");
	};
	

	document.getElementById("accordian").addEventListener("click", toggleDropDown);

	Array.from(document.querySelectorAll("menu.navmenu a")).forEach(a => {
		a.addEventListener("click", function() {
			toggleDropDown();
		});
	});
	

};
