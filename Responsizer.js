(function() {

	// Copyright:
	// There is no copyright. I'm putting Responsizer.JS into the public domain in the spirit of
	// sharing and learning. Use Responsizer.JS in whatever way you wish. If you make it better
	// log a pull request. If you get rich let's do business!
	//
	// For More Info:
	//	* Reach out to me on Twitter @KenTabor
	//	* Read more at blog.katworksgames.com

	var breakPoints = [320, 480, 568, 768, 1024, 1600];
	var isBreakPointShown = false;
	var elStatus = $('<span>W x H</span>');

	StatusInit();

	function StatusInit() {
		elStatus.css('background-color', 'black');
		elStatus.css('color', 'white');
		elStatus.css('left', '50%');
		elStatus.css('margin-left', '-45px');
		elStatus.css('padding', '5px');
		elStatus.css('position', 'fixed');
		elStatus.css('text-align', 'center');
		elStatus.css('top', '0');
		elStatus.css('width', '90px');
		elStatus.css('z-index', '250');

		$('body').append(elStatus);
		StatusUpdate();

		$(window).resize(function() {
			StatusUpdate();
		});
	}

		function StatusUpdate() {
			var curWidth = window.innerWidth;
			var curHeight = window.innerHeight;

			elStatus.html(curWidth + ' x ' + curHeight);

			if (breakPoints.indexOf(curWidth) !== -1) {
				elStatus.css('color', 'yellow');
				elStatus.css('background-color', 'slateGray');
				isBreakPointShown = true;
			} else if (isBreakPointShown) {
				elStatus.css('color', 'white');
				elStatus.css('background-color', 'black');
				isBreakPointShown = false;
			}
	}

}) ();