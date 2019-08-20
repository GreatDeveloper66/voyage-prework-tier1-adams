/*global window*/
/*global document*/
/*global performance*/
/*global requestAnimationFrame*/
/*global Modernizr*/
/*global SmoothScroll*/
/*global console*/
/*global $*/
/*jshint esversion:6*/

	export default function smoothScroll(target = "#homepage", duration = 1000) {
		target = document.querySelector(target);
		let targetPosition = target.getBoundingClientRect().top - 75;
		let startPosition = window.pageYOffset;
		let distance = targetPosition - startPosition;
		let startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			let timeElapsed = currentTime - startTime;
			let run = ease(timeElapsed, startPosition, targetPosition, duration);
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