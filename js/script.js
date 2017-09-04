(function () {
	//Hide current page
	$('.board').hide();

	//Show the startup screen
	const html = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>';
	$('body').append(html);
	//Show the board when the button is clicked and hide the startup screen
	const showBoard = (playerName) => {
		$('#start').hide();
		$('.board').show();
		//display player name
		let html = '<div class="playerName"><p>Welcome '+ playerName + '</p></div>';
		$('header').append(html);
	};
	//store player globally
	let user;
	$('.button').click(function() {
		let playerName = '';
		//can't accept a blank name
		while($.trim(playerName).length === 0) {
			playerName = prompt('Please enter your name before you start.');
			user = playerName;
			if($.trim(playerName).length > 0) {
				showBoard(playerName);
				break;
			}
		}
	});

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
			//make a move and then remove the active
			$('#player2').removeClass('active');
			$('#player1').addClass('active');
		}
	}


	//count for number of moves
	let count = 0;

	 let winnerHTML = '<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p>';
	 winnerHTML += '<a href="index.html" class="button">New game</a></header></div>';
	//function for horizontal winner
	function winnerH(player) {
		let thePlayer;
		let playerName;
		if(player.includes('1')) {
			thePlayer = 'screen-win-one';
			playerName = user;
		} else if(player.includes('2')) {
			thePlayer = 'screen-win-two';
			playerName = 'Computer';
		}

		//horizontal winner
		if($('#pos1').hasClass(player) &&
			$('#pos2').hasClass(player) &&
			$('#pos3').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		} else if($('#pos4').hasClass(player) &&
			$('#pos5').hasClass(player) &&
			$('#pos6').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		} else if($('#pos7').hasClass(player) &&
			$('#pos8').hasClass(player) &&
			$('#pos9').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		} else if (count === 9) {
			//tie game page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass('screen-win-tie');
			$('.message').text(playerName + ' Wins!');
		}
	}
	//check for vertical win
	function winnerV(player) {
		let thePlayer;
		let playerName;
		if(player.includes('1')) {
			thePlayer = 'screen-win-one';
			playerName = user;
		} else if(player.includes('2')) {
			thePlayer = 'screen-win-two';
			playerName = 'Computer';
		}
		//vertical winner
		if($('#pos1').hasClass(player) &&
			$('#pos4').hasClass(player) &&
			$('#pos7').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		} else if($('#pos2').hasClass(player) &&
			$('#pos5').hasClass(player) &&
			$('#pos8').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		} else if($('#pos3').hasClass(player) &&
			$('#pos6').hasClass(player) &&
			$('#pos9').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		}
	}
	//check for diagonal win
	function winnerD(player) {
		let thePlayer;
		let playerName;
		if(player.includes('1')) {
			thePlayer = 'screen-win-one';
			playerName = user;
		} else if(player.includes('2')) {
			thePlayer = 'screen-win-two';
			playerName = 'Computer';
		}
		//horizontal winner
		if($('#pos1').hasClass(player) &&
			$('#pos5').hasClass(player) &&
			$('#pos9').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		} else if($('#pos3').hasClass(player) &&
			$('#pos5').hasClass(player) &&
			$('#pos7').hasClass(player)) {
			//winning page
			$('.board').hide();
			$('body').append(winnerHTML);
			$('.screen').addClass(thePlayer);
			$('.message').text(playerName + ' Wins!');
		}
	}
	//check if box is empty and add play spot
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
		count += 1;
		console.log(count);
		//call win functions
		winnerH('box-filled-1');
		winnerH('box-filled-2');
		winnerV('box-filled-1');
		winnerV('box-filled-2');
		winnerD('box-filled-1');
		winnerD('box-filled-2');
	});
}());
