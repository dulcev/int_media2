
		//1. Setting and getting
		var largepic = $(".large img");
		var pic1 = $(".gallery .pic1");
		var pic2 = $(".gallery .pic2");
		var pic3 = $(".gallery .pic3");		
		//2. declaring function

		function image_swap(this_image) {
			//console.log(whichimage);

		var switchh = this_image.attr('data-large'); 

		function image_over() {
			//console.log("i am working!!");
		this_image.stop(true).animate({'top':'-10px'},500);
		largepic.attr('src', switchh);
	     }

		function image_out() {
			//console.log("i am working!!");
		this_image.stop(true).animate({'top':'0px'},500);
        }

		this_image.mouseover(image_over);
		this_image.mouseout(image_out);

		}
		//3. trigger or call
		image_swap(pic1); 
		image_swap(pic2);
		image_swap(pic3);

		 $(function() {
		 $( "#selectable" ).selectable();
		 });