$(document).ready(function(){
	$('.main_btna').on('click', function() {
		$('.overlay').fadeToggle("slow");
		$('.modal').slideDown('slow');
	});
	$('.main_btn').on('click', function(){
		$('.overlay').fadeToggle("slow");
		$('.modal').slideDown('slow');
	});
	$('a[href="#sheldure"]').on('click', function(){
		$('.overlay').fadeToggle("slow");
		$('.modal').slideDown('slow');
	});
	$('.close').on('click', function() {
		$('.overlay').fadeToggle("slow");
		$('.modal').slideUp('medium');
	})
})