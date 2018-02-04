
document.body.onload = function () {
	
	//Enter to page
	setTimeout(function(){
		var preloader = document.getElementById('preloader');
		if(!preloader.classList.contains('done') ){
			preloader.classList.add('done');
		}
	}, 2000);

	// Scroll page
	window.onscroll = function() {
	  var scrolled = window.pageYOffset ||  
	  				 document.documentElement.scrollTop,
	  	   	block =  document.getElementsByClassName('offer-container')[0];
  
  		if (block.scrollTop + 150 < scrolled) {
  			block.classList.add('box-our-offer__fade-out');
  			setTimeout(function(){
  				block.classList.add('right');
  			}, 1000);		
	  	}
	}
}