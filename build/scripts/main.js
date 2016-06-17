	
	$("#option_home, .card__footer--link-home").click(function(){
		$("div[class^=card__main--]").hide();
		$(".card__main--front").show();
		
		$("a[id^=option_]").removeClass('active');
		$("#option_home").addClass('active');
	});

	$("#option_article").click(function(){
		$("div[class^=card__main--]").hide();
		$(".card__main--content").show();
		
		$("a[id^=option_]").removeClass('active');
		$("#option_article").addClass('active');
	});	

	$("#option_comments, .card__footer--link-comments").click(function(){
		$("div[class^=card__main--]").hide();
		$(".card__main--comments").show();

		$("a[id^=option_]").removeClass('active');
		$("#option_comments").addClass('active');
	});		
