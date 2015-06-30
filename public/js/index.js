var countdown = {
  init: function() {
  	this.updateCountdown();

  	setTimeout(function(){
  		countdown.init();
  	}, 50);
  },

  updateCountdown: function(){
  	var year = 2015;
	var joysBirthday = new Date(year, 5, 30);
	var now = new Date();
	var countdown = joysBirthday - now;
	var oneDay = 1000 * 60 * 60 * 24;

	while(countdown < -1 * oneDay){
		year++;
		joysBirthday = new Date(year, 5, 30);
		countdown = joysBirthday - now;
	}

	if(countdown <= 0){
		this.changeColor();
		$('#message').empty();
		$('#message').append('HAPPY BIRTHDAY JOY!!!');
		$('#confetti').css('display', 'block');
	}
	else{
		$('#message').empty();
		$('#message').append('NO :(');
		$('#confetti').css('display', 'none');
	}

	var days = Math.floor(countdown / 1000 / 60 / 60 / 24);
	var hours = Math.floor(countdown / 1000 / 60 / 60) - days * 24;
	var mins = Math.floor(countdown / 1000 / 60) - days * 24 * 60 - hours * 60;
	var secs = Math.floor(countdown / 1000) - days * 24 * 60 * 60 - hours * 60 * 60 - mins * 60;
	var str;

	if(days > 0){
		str = days + " <span>DAYS</span> &nbsp&nbsp&nbsp";
		str += hours + " <span>HOURS</span> &nbsp&nbsp&nbsp";
		str += mins + " <span>MINUTES</span>";
	}
	else{
		str = hours + " <span>HOURS</span> &nbsp&nbsp&nbsp";
		str += mins + " <span>MINUTES</span> &nbsp&nbsp&nbsp";
		str += secs + " <span>SECONDS</span>";
	}

	$('.container #countdown').empty();
	$('.container #countdown').append(str);
  },

  changeColor: function(){
  	$('#message').css('color', (function(m,s,c){return (c ? arguments.callee(m,s,c-1) : '#') +
  s[m.floor(m.random() * s.length)]})(Math,'0123456789ABC',5));
  }
}

countdown.init();