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
		const targetPosition = target.getBoundingClientRect().top - 75;
		const startPosition = window.pageYOffset;
		let startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			let timeElapsed = currentTime - startTime;
			window.scrollTo(0, ease(timeElapsed, startPosition, targetPosition, duration));
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