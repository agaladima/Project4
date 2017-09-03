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
$('.boxes .box').each(function() {
	const imageURLO = 'img/o.svg';
	const imageURLX = 'img/x.svg';
	$(this).mouseover(function() {
		if($('#player1').hasClass('active')) {
		$(this).css('background-image', 'url(' + imageURLO + ')');
		} else if($('#player2').hasClass('active')) {
			$(this).css('background-image', 'url(' + imageURLX + ')');
		}
	})
	.mouseout(function() {
		if($('#player1').hasClass('active')) {
		$(this).css('background-image', '');
		} else if($('#player2').hasClass('active')) {
			$(this).css('background-image', '');
		}
	});
});

//switch player
function switchPlayer() {
	if($('#player1').hasClass('active')) {
		$('#player1').removeClass('active');
		$('#player2').addClass('active');
	} else if($('#player2').hasClass('active')) {
		$('#player2').removeClass('active');
		$('#player1').addClass('active');
	}
}

//count for number of moves
let count = 0;

//check if box is empty
$('.boxes .box').click(function() {
	if($(this).hasClass('box-filled') === false
	&& $('#player1').hasClass('active')) {
		$(this).addClass('box-filled-1');
		$(this).off('click');
	} else if($(this).hasClass('box-filled') === false
	&& $('#player2').hasClass('active')) {
		$(this).addClass('box-filled-2');
		$(this).off('click');
	}
	switchPlayer();

	//count to see if it's a tie
	count += 1;
	if(count === 9) {
		alert('Issa Tie!');
	}

	//see if player 1 is a winner
	//across winner
	else if($(this).hasClass('box-filled-1') && $(this).attr('id') === 'pos1' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') === 'pos2' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') === 'pos3') {
		alert('Player 1 is the winner!');
	} else if($(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos4' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos6') {
		alert('Player 1 is the winner!');
	} else if($(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos7' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos8' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos9') {
		alert('Player 1 is the winner!');
	}
	//vertical winner
	else if($(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos1' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos4' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos7') {
		alert('Player 1 is the winner!');
	} else if($(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos2' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos8') {
		alert('Player 1 is the winner!');
	} else if($(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos3' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos6' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos9') {
		alert('Player 1 is the winner!');
	}
	//diagonal winner
	else if($(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos1' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos9') {
		alert('Player 1 is the winner!');
	} else if($(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos3' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-1') && $(this).attr('id') == 'pos7') {
		alert('Player 1 is the winner!');
	}
	//see if player 2 is a winner
	//across winner
	if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos1' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos2' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos3') {
		alert('Player 2 is the winner!');
	} else if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos4' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos6') {
		alert('Player 2 is the winner!');
	} else if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos7' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos8' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos9') {
		alert('Player 2 is the winner!');
	}
	//vertical winner
	else if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos1' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos4' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos7') {
		alert('Player 2 is the winner!');
	} else if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos2' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos8') {
		alert('Player 2 is the winner!');
	} else if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos3' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos6' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos9') {
		alert('Player 2 is the winner!');
	}
	//diagonal winner
	else if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos1' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos9') {
		alert('Player 2 is the winner!');
	} else if($(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos3' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos5' &&
		$(this).hasClass('box-filled-2') && $(this).attr('id') == 'pos7') {
		alert('Player 2 is the winner!');
	}
});



