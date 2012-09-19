
(function($) {

	var numLikes = 0;

	// event delegation
	$('#gallery').on('click', '.like', function(e) {

		var $this = $(this); // cache the value of $(this) in a variable
		var $likeCount = $('.like-count');
		
		if( $this.html() != 'Liked')
		{
			numLikes++;
			$likeCount.html(numLikes);
		}
		$this.html('Liked');


		$this.parent().addClass('favorited'); // DOM traversal method .parent()
		e.preventDefault(); //prevent default behavior of the link so you dont jump to the top of the page
	});

})(jQuery);