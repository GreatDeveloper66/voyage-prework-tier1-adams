/*global window*/
/*global document*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/
/*global event*/
/*global requestAnimationFrame*/
/*import scrollIt from "scroll.js";*/

window.onload = () => {
	const toggleDropDown = () => {
		let navmenu = document.querySelector("menu.navmenu");
		navmenu.classList.toggle("slidedown");
		navmenu.classList.toggle("slideup");
	};
	
	function smoothScroll(target = "#homepage", duration = 1000) {
		target = document.querySelector(target);
		var targetPosition = target.getBoundingClientRect().top - 75;
		var startPosition = window.pageYOffset;
		var distance = targetPosition - startPosition;
		var startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			var timeElapsed = currentTime - startTime;
			var run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		}

		function ease(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		}
		requestAnimationFrame(animation);
	}

	

	document.getElementById("accordian").addEventListener("click", toggleDropDown);

	Array.from(document.querySelectorAll("menu.navmenu a")).forEach(a => {
		a.addEventListener("click", function () {
			toggleDropDown();
			smoothScroll(this.getAttribute("href"));
		});
	});
	
	document.querySelector("button#slider").addEventListener("click", () => {smoothScroll();});

	




};
