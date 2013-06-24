/* 

-=-= BLOG ENTRY TOPPER =-=-

DESCRIPTION: 	Handles the blog entry topper images. Finds image in blog entries with an ALT tag of 'blogEntryTopper' and then moves image to the top of the entry. The theme's CSS autosizes the image to fit the blog entry's width.
				
AUTHOR: Adam Shiver
VERSION: 1.0b
DATE: May 9, 2011

*/

$(document).ready(function(){

	blogEntryTopperImg = $('.blog-entry img[alt^=blogEntryTopper]');
	blogEntryTopperImg.hide();
	blogEntryTopperImg.each(function() {
		/* Applies special class to the image */
		$(this).addClass('blogEntryTopperImg');  
		/* Moves topper image to the top of the blog entry and wraps it in a div with a class of blogEntryTopper_wrapper which can be styled via CSS. */
		$(this).prependTo($(this).parent().parent()).show().wrap('<div class="blogEntryTopper_wrapper" />');
	});

});
