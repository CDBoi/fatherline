function squareImages() {
	var image = $('#articles.section .item .image');
	image.height(image.width());
}

$(document).ready(function(){

	squareImages();

	var $overlay = $('#overlay');
	var $body = $('body');
	var $anchor = $('a');
	var $close = $('.close');
	var $container = $('.container');


	$anchor.click(function(){
		$overlay.toggleClass('active');
		$body.toggleClass('active');
		$container.hide();
	});

	$close.click(function(){
		$overlay.toggleClass('active');
		$body.toggleClass('active');
		$container.show();
	});
	
});

$(window).resize(function(){
	squareImages();
});