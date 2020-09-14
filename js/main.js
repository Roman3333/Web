$(function(){

	$('.slider__items').slick({
		dots: true,prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/arrov-left.svg" alt=""></button>',nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/arrov-right.svg" alt=""></button>'
	})



	$('.tab').on('click', function(e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');

		$('.product__content-slider').slick('setPosition');
	})

	$('.product__content-favorite').on('click', function() {
		$(this).toggleClass('product__content-favorite--active')
	})



	$('.product__content-slider').slick({
		prevArrow: '<button type="button" class="product-slick-btn product-slick-prev"><img src="../img/product-arrov-right.svg" alt=""></button>',
		nextArrow: '<button type="button" class="product-slick-btn product-slick-next"><img src="../img/product-arrov-left.svg" alt=""></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
	})

	$('.filter-styler').styler();

	$('.catalog__inner-title').on('click', function() {
		$(this).toggleClass('catalog__inner-title--active')
	})


	$('.catalog__inner-item-parametres-text').on('click', function() {
		$(this).toggleClass('parametres--active')
	})


	$('.catalog__filter-btngrid').on('click', function() {
		$(this).toggleClass('catalog__filter-btn--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-btn--active');
		$('.product__content-wrapper').removeClass('product__content-wrapper--line');
	})

	$('.catalog__filter-btnline').on('click', function() {
		$(this).toggleClass('catalog__filter-btn--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-btn--active');
		$('.product__content-wrapper').toggleClass('product__content-wrapper--line')
	})


	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 100000,
		max: 500000,
		from: 150000,
		to: 250000,
		grid: true
	});


	$("#rateYo").rateYo({
		ratedFill: "#1C62CD",
		spacing: "7px",
		normalFill: "c4c4c4",
		starWidth: "23px"
	});

});

