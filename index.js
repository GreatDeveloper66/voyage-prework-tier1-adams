/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/



window.onload = () => {
	const toggleDropDown = () => {
		let collapse = document.querySelector("menu.collapsemenu");
		collapse.classList.toggle("slidedown");
		collapse.classList.toggle("slideup");
	};

	document.getElementById("accordian").addEventListener("click", toggleDropDown);

	Array.from(document.querySelectorAll("menu.collapsemenu a button")).forEach(button => {
		button.addEventListener("click", toggleDropDown);
	});
};
