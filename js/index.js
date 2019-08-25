/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/
/*global event*/
/*global requestAnimationFrame*/
import smoothScroll from '/js/scroll.js';

window.onload = () => {
	function setTranslate(xPos, yPos, el) {
		el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
	}

	function scrollLoop() {
		setTranslate(0, window.scrollY * -0.15, document.querySelector(".headerbackground"));
		setTranslate(0, window.scrollY * -0.1, document.querySelector(".contactbackground"));
		setTranslate(0, window.scrollY * -0.1, document.querySelector(".servicesbackground"));

		requestAnimationFrame(scrollLoop);
	}
	const toggleDropDown = () => {
		let navmenu = document.querySelector("menu.navmenu");
		navmenu.classList.toggle("slidedown");
		navmenu.classList.toggle("slideup");
	};

	document.getElementById("accordian").addEventListener("click", toggleDropDown);

	Array.from(document.querySelectorAll("menu.navmenu a")).filter(clickbutton => clickbutton.getAttribute("href") !== "#").forEach(a => {
		a.addEventListener("click", function () {
			toggleDropDown();
			smoothScroll(this.getAttribute("href"));
		});
	});


	document.querySelector("button#slider").addEventListener("click", () => {
		smoothScroll();
	});

	window.addEventListener('scroll', function (e) {
		const upArrow = document.querySelector("button#slider");
		upArrow.style.display = window.scrollY < 450 ? "none" : "block";
		upArrow.style.bottom = window.scrollY > 3700 ? "80px" : "30px";
		scrollLoop();
	});
};
