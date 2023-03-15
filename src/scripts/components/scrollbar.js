// Scrollbar
import SimpleBar from 'simplebar';

function scrollbar() {
	/*
		SimpleBar
		https://github.com/Grsmto/simplebar
	*/

	const scrollbars = document.querySelectorAll('[data-scrollbar]');

	scrollbars.forEach(item => {
		const simpleBar = new SimpleBar(item, {
			autoHide: false 
		});
		let simpleBarWrapper;
		let simpleBarContent;
		let heightContent;
		let scrollTop;
		
		simpleBar.getScrollElement().addEventListener('scroll', (event) => {
			
			simpleBarWrapper = event.srcElement;
			simpleBarContent = simpleBarWrapper.querySelector('.simplebar-content');
			heightContent = simpleBarContent.offsetHeight;
			scrollTop = simpleBarWrapper.scrollTop;

			console.log(scrollTop);

			if ((simpleBarWrapper.offsetHeight + scrollTop + 15) >= heightContent) {
				item.setAttribute('data-simplebar-scrolled', '');
			} else {
				item.removeAttribute('data-simplebar-scrolled');
			}

			if (scrollTop >= 10) {
				item.setAttribute('data-simplebar-scroll-change', '');
			} else {
				item.removeAttribute('data-simplebar-scroll-change');
			}
		});
	});
}

scrollbar();
