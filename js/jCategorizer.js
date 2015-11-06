;(function($) {
	$.fn.jCategorizer = function( options) {
		var settings = $.extend({
				width        : '55px',
				height        : '55px',
				border       : '1px solid #969696',
				background   : '#5f5f5f',
				fontColor	 : '#000000',
				iconPerRow   : '4',
				iconMargin   : '1px'
			}, options),
			restoreStyle = "",
		    setCategoryDesc = function ( elem, type ) {
				elem.append( "<span class='jC-"+type+"Desc'>" + elem.attr("jc-desc") + "</span>" );
			},
			expandCategBox = function() {
				restoreStyle = $(this).children(".jc-categBox").attr("style");
				$(this).addClass("jC-categPopup-active");
				$("#jC-overlay").css("display","block");	
			},
			collapsCategBox = function() {
				$("#jC-overlay").css("display","none");
				$(".jC-categPopup-active > .jc-categBox").attr("style",restoreStyle);
				$(".jC-categPopup-active").removeClass("jC-categPopup-active");
			};
		$(this).append("<div id='jC-overlay' style='display:none;'></div>");
		$("#jC-overlay").bind("click",collapsCategBox);
		//collapsCategBox();
		
        this.each( function() {
		
			$(this).children("ul").children("li").each( function() {
				setCategoryDesc( $(this),"categ" );
				$(this).children("ul").children("li").each( function() {
					setCategoryDesc( $(this),"icon" );
				});
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
				$(".jc-categBox img").css("width", ((parseInt(settings.width.replace("px","")))/parseInt(settings.iconPerRow) -  2*parseInt(settings.iconMargin ) - 0.5).toString() + "px");
				$(".jc-categBox img").css("height", ((parseInt(settings.width.replace("px","")))/parseInt(settings.iconPerRow) -  2*parseInt(settings.iconMargin ) - 0.5).toString() + "px");
			}
			if ( settings.iconMargin)
				$(".jc-categBox > ul > li").css("margin", settings.iconMargin);
			
			$(this).children("ul").children("li").children(".jc-categBox").each( function() {
				$(this).css("left",$(this).position().left+"px");
				$(this).css("top",$(this).position().top+"px");
			});

        });

    }
})(jQuery);