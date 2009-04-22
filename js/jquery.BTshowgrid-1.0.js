/*
 * @ description: Plugin to display blueprint/bluetrip gridlines See http://www.blueprintcss.org or http://bluetrip.org
 * @author: noel_g(twitter) based on badlyDrawnToy sharp / http://www.badlydrawntoy.com
 * @license: Creative Commons License - ShareAlike http://creativecommons.org/licenses/by-sa/3.0/
 * @version: 1.0 22th April 2009
 * @params:
 *	 options - Default options are as follows. They may be overridden by passing in this param
 *	   var defaults = {
 *		 z_index: 999,
 *		 img_path: '/img/',
 *		 opacity:.6,
 *		 margin:'0 auto'
 *	   };
*/

(function ($) {
	$.fn.addGrid = function (options) {
		var defaults = {
			z_index: 999,
			img_path: '/img/',
			opacity:.6,
			margin:'0 auto'
		};

		// Extend our default options with those provided.
		var opts = $.extend(defaults, options);
					
		return this.each(function () {
			var $el = $(this);
			var height = $el.height();

			var wrapper = $('<div id="grid_overlay"/>')
				.appendTo($el)
				.css({
					'display':'none',
					'position':'absolute',
					'top':0,
					'z-index':(opts.z_index -1),
					'height':height,
					'opacity':opts.opacity,
					'width':'100%'});

			$('<div/>')
				.addClass('container_24')
				.css({
					'margin':opts.margin,
					'width':'950px',
					'height':height,
					'background-image': 'url('+opts.img_path+ 'grid.png)'})
				.appendTo(wrapper);

				// add toggle
				$('<div>grid on</div>')
					.appendTo($el)
					.css({
						'position':'absolute',
						'top':0,
						'left':0,
						'z-index':opts.z_index,
						'background': '#222',
						'color':'#fff',
						'padding': '3px 6px',
						'width': '40px',
						'text-align':'center'
					})
					.hover( function() {
						$(this).css("cursor", "pointer");
					}, function() {
						$(this).css("cursor", "default");
					})
					.toggle( function () {
						$(this).text("grid off");
						$('#grid_overlay').slideDown();
					},
					function() {
						$(this).text("grid on");
						$('#grid_overlay').slideUp();
					});
		});
	};
})(jQuery);