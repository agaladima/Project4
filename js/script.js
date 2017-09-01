//Hide current page
$('.board').hide();

//Show the startup screen
const html = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>';
$('body').append(html);

//Show the board when the button is clicked and hide the startup screen
const showBoard = () => {
	$('#start').hide();
	$('.board').show();
};
$('.button').click(showBoard);

//make player1 default to active
$('#player1').addClass('active');

//do something when mouseover happens
$('.boxes').mouseover(function() {
	console.log('moused');
	const imageURLO = 'img/o.svg';
	const imageURLX = 'img/x.svg';
	$('.boxes').css('background-image', 'url(' + imageURLO + ')');
});