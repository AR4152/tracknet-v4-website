window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();


	
})

// Section displayer

// Make the popup draggable
// const popup = document.getElementById('section-popup');
// const popup = document.querySelector('#section-popup');
// console.log(popup)
// const header = document.getElementById('popup-header');
// console.log(header)
// let offsetX, offsetY;

// popup.addEventListener('mousedown', function (e) {
//   // Disable text selection to avoid issues while dragging
//   document.body.style.userSelect = 'none';

//   offsetX = e.clientX - popup.getBoundingClientRect().left;
//   offsetY = e.clientY - popup.getBoundingClientRect().top;

//   function onMouseMove(e) {
// 	popup.style.left = (e.clientX - offsetX) + 'px';
// 	popup.style.top = (e.clientY - offsetY) + 'px';
//   }

//   function onMouseUp() {
// 	window.removeEventListener('mousemove', onMouseMove);
// 	window.removeEventListener('mouseup', onMouseUp);
// 	// Re-enable text selection
// 	document.body.style.userSelect = '';
//   }

//   window.addEventListener('mousemove', onMouseMove);
//   window.addEventListener('mouseup', onMouseUp);
// });

// // Minimize/restore functionality
// const minimizeButton = document.getElementById('minimize-btn');
// minimizeButton.addEventListener('click', function () {
//   popup.classList.toggle('minimized');
// });