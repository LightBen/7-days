  /* Add and remove classes if scroll into view */
  /* Add the class check-elem-in to add a class when scroll into view */
  /* Add the class check-elem-out to remove a class when scroll out of view */
  /*
  function isScrolledIntoView() {
    var docViewTop = $(window).scrollTop(); // how many px down the page is the current top of the viewport?
    var docViewBottom = docViewTop + $(window).height(); // how many px down is bottom of the viewport?

    $('.check-elem-in').each(function(){
    	var elemTop = $(this).offset().top;
    	var elemBottom = elemTop + $(this).height() / 2;
    	if(docViewBottom >= elemTop) {
    		$(this).addClass('in-view');
    	}
    });
    $('.check-elem-out').each(function(){
    	var elemTop = $(this).offset().top;
    	var elemBottom = elemTop + $(this).height() / 3;
    	if(docViewBottom < elemBottom) {
    		$(this).removeClass('in-view');
    	}
    });
  }

  $(document).ready(isScrolledIntoView);
  $(window).scroll(isScrolledIntoView);
  $(window).resize(isScrolledIntoView);
  */


