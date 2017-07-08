$(document).ready(function(){
	function squareImages() {
		var image = $('#articles.section .item .image');
		image.height(image.width());
	}
	squareImages();

	$('a').click(function(){
		$('#overlay').toggleClass('hidden-overlay');
	});

	$('.close').click(function(){
		$('#overlay').toggleClass('hidden-overlay');
	});
	
$(window).resize(function(){
	squareImages();
});

});
