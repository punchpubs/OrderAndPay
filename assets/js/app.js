$(function() {

$('#nav-toggle').click(function() {
 $('#content').toggleClass('pushed');
});

$('#food').click(function() {
	$(this).toggleClass('open-sub');
	$('#drink').removeClass('open-sub')
});

$('#drink').click(function() {
	$(this).toggleClass('open-sub');
	$('#food').removeClass('open-sub')
});

	
	
});




