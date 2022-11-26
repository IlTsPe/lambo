//!--Swiper--

const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	simulateTouch: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 933) {
		$('.pageup').fadeIn(300);
	} else {
		$('.pageup').fadeOut(300);
	}
});

$("a[href^='#']").click(function () {
	const _href = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
	return false;
});




const dots = document.querySelectorAll('.points'),
	readMore = document.querySelectorAll('.blog__read'),
	innerCard = document.querySelectorAll('.blog__card--descr');

function open() {
	readMore.forEach((item, i) => {
		item.addEventListener('click', function () {
			showText(i);
			innerTextBtn(i);
		})
	})
}


function showText(i = 0) { //чтобы не передавать 0 при вызове функции ↓↓↓
	dots[i].classList.toggle('points');
}

function innerTextBtn() { //чтобы не передавать 0 при вызове функции ↓↓↓
	innerCard.forEach((item, i) => {
		if (item.classList.contains('points')) {
			readMore[i].innerHTML = 'читать подробнее...';
			readMore[i].style.background = 'none';
			readMore[i].style.padding = '0';
			readMore[i].style.width = 'auto';
		} else {
			readMore[i].innerHTML = 'скрыть';
			readMore[i].style.background = 'var(--more-bg-color)';
			readMore[i].style.padding = '5px';
			readMore[i].style.borderRadius = '20px';
			readMore[i].style.width = '100%';
		}
	})
}

open();