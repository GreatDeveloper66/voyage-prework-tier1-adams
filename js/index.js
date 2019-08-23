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
	
	var xScrollPosition;
	var yScrollPosition;

	function scrollLoop() {
		xScrollPosition = window.scrollX;
		yScrollPosition = window.scrollY;
		setTranslate(0, yScrollPosition * -0.1, document.querySelector(".headerbackground"));
		setTranslate(0, yScrollPosition * -0.1, document.querySelector(".contactbackground"));
		setTranslate(0, yScrollPosition * -0.1, document.querySelector(".servicesbackground"));
		/*
		setTranslate(0, yScrollPosition * -1.5, blueSquare);
		setTranslate(0, yScrollPosition * .5, greenPentagon);
		*/

		requestAnimationFrame(scrollLoop);
	}
	const toggleDropDown = () => {
		let navmenu = document.querySelector("menu.navmenu");
		navmenu.classList.toggle("slidedown");
		navmenu.classList.toggle("slideup");
	};

	document.getElementById("accordian").addEventListener("click", toggleDropDown);

	Array.from(document.querySelectorAll("menu.navmenu a")).forEach(a => {
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
