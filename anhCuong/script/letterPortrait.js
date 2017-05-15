	var page = $('.page');
	var main = $('main') ;
	var page_box = $('.page_box') ;
	var image_box = $('.image_box') ;

	
	function getImage(totalImage,imagesPerPage){

		function importImage(totalImage){
			var content = '' ;
			for (var i = 1 ; i<=totalImage ; i++ ){
				content += $(page_box).html();
				$(main).html(content);
			}
			var img = $('img');
			for (var j = 1 ; j<=totalImage ; j++ ){
				img[j-1].src = "images/"+j+".jpg" ;
				$('.imageNumber')[j-1].innerText = j ;
			}
			image_box = $('.image_box') ;
			img = $('.img');
			page = $('.page');
			for (var k=0 ; k<totalImage ; k++) {
				img[k].className += ' a'+(k+1) ;
			}
		}
		importImage(totalImage);
		img = $('.img');
		var allPage = $('.allPage');
		


		switch(imagesPerPage)	{
		// CHỌN HIỂN THỊ 1 ẢNH  -------------------------------------------------------------------------------------------------
			case 1 :
				for (var i=0 ; i<imagesPerPage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 2 ẢNH  -----------------------------------------------------------------------------------------------------
			case 2 :
				$(".a1,.a2").appendTo(image_box[0]);
				$(".a3,.a4").appendTo(image_box[1]);
				$(".a5,.a6").appendTo(image_box[2]);
				$(".a7,.a8").appendTo(image_box[3]);
				$(".a9,.a10").appendTo(image_box[4]);
				$(".a11,.a12").appendTo(image_box[5]);
				$(".a13,.a14").appendTo(image_box[6]);
				$(".a15,.a16").appendTo(image_box[7]);
				$(".a17,.a18").appendTo(image_box[8]);
				$(".a19,.a20").appendTo(image_box[9]);
				$(".a21,.a22").appendTo(image_box[10]);
				$(".a23,.a24").appendTo(image_box[11]);
				$(".a25,.a26").appendTo(image_box[12]);
				$(".a27,.a28").appendTo(image_box[13]);
				$(".a29,.a30").appendTo(image_box[14]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b2' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 3 ẢNH  -----------------------------------------------------------------------------------------------------
			case 3 : 
				$(".a1,.a2,.a3").appendTo(image_box[0]);
				$(".a4,.a5,.a6").appendTo(image_box[1]);
				$(".a7,.a8,.a9").appendTo(image_box[2]);
				$(".a10,.a11,.a12").appendTo(image_box[3]);
				$(".a13,.a14,.a15").appendTo(image_box[4]);
				$(".a16,.a17,.a18").appendTo(image_box[5]);
				$(".a19,.a20,.a21").appendTo(image_box[6]);
				$(".a22,.a23,.a24").appendTo(image_box[7]);
				$(".a25,.a26,.a27").appendTo(image_box[8]);
				$(".a28,.a29,.a30").appendTo(image_box[9]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b3' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 4 ẢNH  -----------------------------------------------------------------------------------------------------
			case 4 :
				$(".a1,.a2,.a3,.a4").appendTo(image_box[0]);
				$(".a5,.a6,.a7,.a8").appendTo(image_box[1]);
				$(".a9,.a10,.a11,.a12").appendTo(image_box[2]);
				$(".a13,.a14,.a15,.a16").appendTo(image_box[3]);
				$(".a17,.a18,.a19,.a20").appendTo(image_box[4]);
				$(".a21,.a22,.a23,.a24").appendTo(image_box[5]);
				$(".a25,.a26,.a27,.a28").appendTo(image_box[6]);
				$(".a29,.a30").appendTo(image_box[7]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b4' ;
				}
				displayPage()
				break;
			//CHỌN HIỂN THỊ 5 ẢNH  -----------------------------------------------------------------------------------------------------
			case 5 :
				$(".a1,.a2,.a3,.a4,.a5").appendTo(image_box[0]);
				$(".a6,.a7,.a8,.a9,.a10").appendTo(image_box[1]);
				$(".a11,.a12,.a13,.a14,.a15").appendTo(image_box[2]);
				$(".a16,.a17,.a18,.a19,.a20").appendTo(image_box[3]);
				$(".a21,.a22,.a23,.a24,.a25").appendTo(image_box[4]);
				$(".a26,.a27,.a28,.a29,.a30").appendTo(image_box[5]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b5' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 6 ẢNH  -----------------------------------------------------------------------------------------------------
			case 6 :
				$(".a1,.a2,.a3,.a4,.a5,.a6").appendTo(image_box[0]);
				$(".a7,.a8,.a9,.a10,.a11,.a12").appendTo(image_box[1]);
				$(".a13,.a14,.a15,.a16,.a17,.a18").appendTo(image_box[2]);
				$(".a19,.a20,.a21,.a22,.a23,.a24").appendTo(image_box[3]);
				$(".a25,.a26,.a27,.a28,.a29,.a30").appendTo(image_box[4]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b5' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 7 ẢNH  -----------------------------------------------------------------------------------------------------
			case 7 :
				$(".a1,.a2,.a3,.a4,.a5,.a6,.a7").appendTo(image_box[0]);
				$(".a8,.a9,.a10,.a11,.a12,.a13,.a14").appendTo(image_box[1]);
				$(".a15,.a16,.a17,.a18,.a19,.a20,.a21").appendTo(image_box[2]);
				$(".a22,.a23,.a24,.a25,.a26,.a27,.a28").appendTo(image_box[3]);
				$(".a29,.a30").appendTo(image_box[4]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b7' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 8 ẢNH  -----------------------------------------------------------------------------------------------------
			case 8 :
				$(".a1,.a2,.a3,.a4,.a5,.a6,.a7,.a8").appendTo(image_box[0]);
				$(".a9,.a10,.a11,.a12,.a13,.a14,.a15,.a16").appendTo(image_box[1]);
				$(".a17,.a18,.a19,.a20,.a21,.a22,.a23,.a24").appendTo(image_box[2]);
				$(".a25,.a26,.a27,.a28,.a29,.a30").appendTo(image_box[3]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b7' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 9 ẢNH  -----------------------------------------------------------------------------------------------------
			case 9 :
				$(".a1,.a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9").appendTo(image_box[0]);
				$(".a10,.a11,.a12,.a13,.a14,.a15,.a16,.a17,.a18").appendTo(image_box[1]);
				$(".a19,.a20,.a21,.a22,.a23,.a24,.a25,.a26,.a27").appendTo(image_box[2]);
				$(".a28,.a29,.a30").appendTo(image_box[3]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b9' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 10 ẢNH  -----------------------------------------------------------------------------------------------------
			case 10 :
				$(".a1,.a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10").appendTo(image_box[0]);
				$(".a11,.a12,.a13,.a14,.a15,.a16,.a17,.a18,.a19,.a20").appendTo(image_box[1]);
				$(".a21,.a22,.a23,.a24,.a25,.a26,.a27,.a28,.a29,.a30").appendTo(image_box[2]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b10' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 11 ẢNH  -----------------------------------------------------------------------------------------------------
			case 11 :
				$(".a1,.a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11").appendTo(image_box[0]);
				$(".a12,.a13,.a14,.a15,.a16,.a17,.a18,.a19,.a20,.a21,.a22").appendTo(image_box[1]);
				$(".a23,.a24,.a25,.a26,.a27,.a28,.a29,.a30").appendTo(image_box[2]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b10' ;
				}
				displayPage()
				break;
			// CHỌN HIỂN THỊ 12 ẢNH  -----------------------------------------------------------------------------------------------------
			case 12 :
				$(".a1,.a2,.a3,.a4,.a5,.a6,.a7,.a8,.a9,.a10,.a11,.a12").appendTo(image_box[0]);
				$(".a13,.a14,.a15,.a16,.a17,.a18,.a19,.a20,.a21,.a22,.a23,.a24").appendTo(image_box[1]);
				$(".a25,.a26,.a27,.a28,.a29,.a30").appendTo(image_box[2]);
				for (var i=0 ; i<totalImage ; i++) {
					img[i].className = img[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
					img[i].className += ' b10' ;
				}
				displayPage()
				break;
			}
		

		function displayPage(){
			for (var j=0 ; j<totalImage ; j++) {
				page[j].className = page[j].className.replace(" displayNone","");
				page[j].className += " displayNone" ;
			}
			var pages = totalImage/imagesPerPage ;
			if (pages-pages.toFixed(0)>0){pages=+pages.toFixed(0)+1} ;
			if (pages-pages.toFixed(0)<0){pages=+pages.toFixed(0)} ;
			var pageNumber = $('.pageNumber') ;
			for (var k=0 ; k<pages ; k++) {
				page[k].className = page[k].className.replace(" displayBlock","");
				page[k].className += " displayBlock" ;
				allPage[k].innerText = pages ;
				pageNumber[k].innerText = k+1 ;
			}	
		}
	}

	
	
	
	