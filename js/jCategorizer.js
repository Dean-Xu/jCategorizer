/*!
 * jQuery jCategorizer Plugin v1.0.1
 * https://github.com/dean-xu/jCategorizer
 *
 * Copyright 2015 Dean Xu
 * Released under the MIT license
 */
 
 ;(function($) {
	$.fn.jCategorizer = function( options) {
		var settings = $.extend({
				overlayType  : 'shadow',
				width        : '55px',
				height       : '55px',
				border       : '1px solid #969696',
				background   : '#5f5f5f',
				fontColor	 : '#000000',
				iconPerRow   : '4',
				iconMargin   : '1px'
			}, options),
		    setCategoryDesc = function ( elem, type ) {
				elem.append( "<span class='jC-"+type+"Desc'>" + elem.attr("jc-desc") + "</span>" );
			},
			expandCategBox = function() {
				
				$(this).addClass("jC-categPopup-active");
				$(this).css("background",settings.background);
				$(".jC-categPopup-active > div").css("top",window.pageYOffset + window.innerHeight*0.3 + "px");
				if(settings.overlayType === "blur")
				{
					$(".jC-categPopup-container").css("display","block");
					$(this).children('div').appendTo('.jC-categPopup-container');
					$('body > *:not(".jC-categPopup-container")').addClass("jC-blur");	
					$(".jC-overlay-blur").css("display","block");
				}
				else
					$(".jC-overlay-shadow").css("display","block");
				
			},
			collapsCategBox = function() {
				$(".jC-categPopup-active").css("background","");
				if(settings.overlayType === "blur")
				{
					$(".jC-categPopup-container").css("display","none");
					$('.jC-categPopup-container').children('div').appendTo('.jC-categPopup-active');
					$('body > *:not(".jC-categPopup-container")').removeClass("jC-blur");
					$(".jC-overlay-blur").css("display","none");
				}
				else
					$(".jC-overlay-shadow").css("display","none");
					
				$(".jC-categPopup-active > div").css("top",$(".jC-categPopup-active > div").attr("jc-top"));
				
				$(".jC-categPopup-active").removeClass("jC-categPopup-active");
			},
			createOverlay = function(myoverlayType) {
				if(myoverlayType === "blur")
				{
					if($(".jC-categPopup-container").length === 0)
					{
						$("body").append("<div class='jC-categPopup-container' style='display:none;'></div>");
						$(".jC-categPopup-container").css("width","100%").css("height","100%");	
					}
					
					if($(".jC-overlay-blur").length === 0)
					{
						$("body").append("<div class='jC-overlay jC-overlay-blur' style='display:none;'></div>");
						$(".jC-overlay-blur").css("width","100%").css("height","100%");
						$(".jC-overlay-blur").bind("click",collapsCategBox);		
					}
				}
				else
				{
					if($(".jC-overlay-shadow").length === 0)
					{
						$("body").append("<div class='jC-overlay jC-overlay-shadow' style='display:none;'></div>");
						$(".jC-overlay-shadow").css("width","100%").css("height","100%");
						$(".jC-overlay-shadow").bind("click",collapsCategBox);		
					}	
				}				

			};
		$(this).addClass("jC-container");
		
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
				$(this).find(".jc-categBox").css( 'width', settings.width );
			}
			if ( settings.height )
			{
				$(this).children("ul").children("li").css( 'height', settings.height );
				$(this).find(".jc-categBox").css( 'height', settings.height );
			}
			if ( settings.border )
			{
				$(this).children("ul").children("li").children(".jc-categBox").css( 'border', settings.border );
			}
			if ( settings.background)
			{
				$(this).children("ul").children("li").children(".jc-categBox").css("background", settings.background);
			}
			if ( settings.iconPerRow)
			{
				$(this).find(".jc-categBox img").css("width", ((parseInt(settings.width.replace("px","")))/parseInt(settings.iconPerRow) -  2*parseInt(settings.iconMargin ) - 0.5).toString() + "px");
				$(this).find(".jc-categBox img").css("height", ((parseInt(settings.width.replace("px","")))/parseInt(settings.iconPerRow) -  2*parseInt(settings.iconMargin ) - 0.5).toString() + "px");
			}
			if ( settings.iconMargin)
				$(this).find(".jc-categBox > ul > li").css("margin", settings.iconMargin);
			
			if (settings.overlayType)
				createOverlay(settings.overlayType);
				
			$(this).children("ul").children("li").children(".jc-categBox").each( function() {
				$(this).attr("jc-left",$(this).position().left+"px");
				$(this).attr("jc-top",$(this).position().top+"px");
				$(this).css("left",$(this).attr("jc-left"));
				$(this).css("top",$(this).attr("jc-top"));
			});

        });

    }
})(jQuery);