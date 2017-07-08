function squareImages() {
	var image = $('#articles.section .item .image');
	image.height(image.width());
}

function overlay() {

}

$(document).ready(function(){
	squareImages();

	$('a').click(function(){
		$('#overlay').toggleClass('hidden-overlay');
	});

	$('.close').click(function(){
		$('#overlay').toggleClass('hidden-overlay');
	});

});

$(window).resize(function(){
	squareImages();
});