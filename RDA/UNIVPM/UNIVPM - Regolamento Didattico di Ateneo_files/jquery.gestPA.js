// Evento: pagina pronta
$(document).ready(function(){
	//console.log('Avvio. 3');
	ridimensionaSlideShow();
	LazyLoad();
	smoothScroll();
});

// evento: ridimensionamento
$(window).resize(function(){
	//console.log('Resize.');
	ridimensionaSlideShow();
	LazyLoad();
});

// evento: scroll pagina 
$(window).scroll(function(){
	//console.log('Scroll.');
	var scrollTop = $(window).scrollTop();
	ridimensionaTestata(scrollTop);
	LazyLoad();
});

function ridimensionaTestata(scrollTop)
{
	if($(window).width() > 992)
	//console.log('Scroll. '+scrollTop);
	if(scrollTop > 1)
	{
		if( ! $('header').hasClass('minimize'))
		{	
			$('header').addClass('minimize');
		}
		/*
		if(scrollTop + 76 < 190)
			$('#Inizio').css('paddingTop', scrollTop + 76);
		else
			$('#Inizio').css('paddingTop', 190);
		*/
	}
	else
	{
		if( $('header').hasClass('minimize'))
		{
			$('header').removeClass('minimize');
			/*
			$('#Inizio').css('paddingTop', 250);
			*/
		}
	}
}

function ridimensionaSlideShow()
{
	var larghezza = $(window).width();
	$('#ContenitoreSlide').width(larghezza);
	$('#ContenitoreSlide > div').width(larghezza);
	$('#ContenitoreSlide .LinkSlide').width(larghezza);
	$('#ContenitoreSlide .ImgSfondo').width(larghezza);
	$('#ContenitoreSlide .SintesiSlide').width(larghezza);
	
}


// Se l'immagine è visibile la carico
function LazyLoad()
{
	//*
	var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
	
	$('img[data-original]').each(function( index ) 
	{
		inizioImmagine = $( this ).offset().top
		//console.log( index + " img: " + inizioImmagine + " < " + docViewBottom);
		if(inizioImmagine < docViewBottom)
		{
			//console.log("Devo mostrare");
			
			src = $(this).attr("data-original")
			
			$( this ).attr("src", src);
			
			$( this ).removeAttr("data-original");
		}

	});
	//*/
}


function smoothScroll()
{
	$('a.RALinkAncore[href*=#],a.aTOP[href*=#]').click(function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			
			
			if ($target.length) {
				var targetOffset = $target.offset().top - 120;
				if($(window).scrollTop() <= 1)
					targetOffset = $target.offset().top - 170;
				
				//console.log("offset: "+$target.offset().top+" - puntamento: "+targetOffset);
				
				// time dinamico per rendere uniforme lo scorrimento
				/*
				var distanza = Math.abs(targetOffset - $(window).scrollTop());
				var time = distanza * 0.5;
				if(time < 500)
					time = 500;
				*/
				time = 1000;
				
				$('html,body').animate({scrollTop: targetOffset}, time);
				return false;
			}
		}
	});
}