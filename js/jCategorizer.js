;(function($) {
	$.fn.jCategorizer = function( options) {
		var settings = $.extend({
				width        : '55px',
				height        : '55px',
				border       : '1px solid #969696',
				background   : '#5f5f5f',
				fontColor	 : '#ffffff',
				iconPerRow   : '4',
				iconMargin   : '1px'
			}, options),
			categBoxWidth = 0,
			restoreStyle = "",
		    setCategoryDesc = function ( category ) {
				category.append( "<span class='jC-categDesc'>" + category.attr("jc-desc") + "</span>" );
			},
			expandCategBox = function() {
				restoreStyle = $(this).children(".jc-categBox").attr("style");
				$(this).addClass("jC-categPopup-active");
				$("#jC-overlay").show();
				
			},
			collapsCategBox = function() {
				$("#jC-overlay").hide();
				$(".jC-categPopup-active > .jc-categBox").attr("style",restoreStyle);
				$(".jC-categPopup-active").removeClass("jC-categPopup-active");
			};
		$(this).append("<div id='jC-overlay'></div>");
		$("#jC-overlay").bind("click",collapsCategBox);
		collapsCategBox();
		
        this.each( function() {
		
			$(this).children("ul").children("li").each( function() {
				setCategoryDesc( $(this) );
			});
			
			$(this).children("ul").children("li").bind("click",expandCategBox);
			
			$(this).children("ul").children("li").each( function() {
				$(this).html("<div class='jc-categBox'>"+$(this).html()+"</div>");
			});
			
			if ( settings.fontColor )
				$(this).css( 'color', settings.fontColor );
            if ( settings.width )
			{
				$(this).children("ul").children("li").css( 'width', settings.width );
				$(".jc-categBox").css( 'width', settings.width );
			}
			if ( settings.height )
			{
				$(this).children("ul").children("li").css( 'height', settings.height );
				$(".jc-categBox").css( 'height', settings.height );
			}
			if ( settings.border )
				$(this).children("ul").children("li").css( 'border', settings.border );
			if ( settings.background)
				$(this).children("ul").children("li").css("background", settings.background);
			if ( settings.iconPerRow)
			{
				categBoxWidth = ((parseInt(settings.width.replace("px","")))/parseInt(settings.iconPerRow) -  2*parseInt(settings.iconMargin ) - 0.5);
				$(".jc-categBox img").css("width", categBoxWidth.toString() + "px");
				$(".jc-categBox img").css("height", categBoxWidth.toString() + "px");
			}
			if ( settings.iconMargin)
				$(".jc-categBox > ul > li").css("margin", settings.iconMargin);
			
			$(this).children("ul").children("li").children(".jc-categBox").each( function() {
				$(this).css("left",$(this).position().left+"px");
				$(this).css("top",$(this).position().top+"px");
			});
			/*
			$(this).children("ul").children("li").children(".jc-categBox").each(function(i){
				$(this).css("left",i*settings.width.replace("px","").toString()+"px").css("top","0px");
			})
*/
        });

    }
})(jQuery);