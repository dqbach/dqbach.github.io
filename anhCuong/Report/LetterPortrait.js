	let origin = $('#report').html() ; // gán biến origin là trạng thái HTML đầu tiên

	function getImage(data,imagesPerPage){
		const totalImage = data.length-21 ;
		
		//reset lại lúc đầu tiên
		$('#report').html(origin);

		// gọi ra số trang sẽ hiển thị
		let numberOfPage = Math.ceil(totalImage/imagesPerPage)
		//tạo số trang
		let content = ''
		for (let i=0 ; i<numberOfPage ; i++ ){
			content += $('#otherPages').html()
		}
		//tạo ảnh 
		for (let i=numberOfPage ; i<totalImage ; i++ ){
			content += $('.image_box').html();
		}
		$('#otherPages').html(content);

		//truyền thông tin vào ảnh và xóa class kích thước ảnh nếu có
		for (let i=0 ; i<totalImage ; i++ ){
			$('.image')[i].src = data[i].file ;
			$('.title')[i].innerText = data[i].desc;
			$('img')[i].className = $('img')[i].className.replace(" b2","").replace(" b3","").replace(" b5","").replace(" b7","").replace(" b10","");
		}

		// chia ảnh ra các trang
		let image_box = $('.image_box')
		for (let i=0 ; i<=numberOfPage ; i++){
			for(let j=0 ; j<imagesPerPage ; j++){
				let k = j+i*imagesPerPage ;
				$($('.image_info')[k]).appendTo(image_box[i]);
			}
		}

		//số trang
		let allPage =$('.allPage');
		let pageNumber =$('.pageNumber');
		for (let i=0 ; i<=numberOfPage+1 ; i++) {
			allPage[i].innerText = numberOfPage+2 ;
			pageNumber[i].innerText = i+1 ;
		}
		
		// Set kích thước cho ảnh 
		switch(imagesPerPage) {
			case 1 : break;
			case 2 : 
				for (let i=0 ; i<totalImage ; i++) {
					$('.image_info')[i].className += ' b2' ;
				}
				break;
			case 3 : 
			case 4 :
				for (let i=0 ; i<totalImage ; i++) {
					$('.image_info')[i].className += ' b3' ;
				}
				break;	
			case 5 :
			case 6 :
				for (let i=0 ; i<totalImage ; i++) {
					$('.image_info')[i].className += ' b5' ;
				}
				break;
			case 7 :
			case 8 :
			case 9 :
				for (let i=0 ; i<totalImage ; i++) {
					$('.image_info')[i].className += ' b7' ;
				}
				break;
			case 10 :
			case 11 :
			case 12 :
				for (let i=0 ; i<totalImage ; i++) {
					$('.image_info')[i].className += ' b10' ;
				}
				break;
		}

		//chiều cao của 2 ô nhận xét của bác sĩ phụ bằng nhau
		if ($('#bottomText1').height() - $('#bottomText2').height() > 0) {
			$('#bottomText2').height($('#bottomText1').height());
		}
		else if ($('#bottomText2').height() - $('#bottomText1').height() > 0){
			$('#bottomText1').height($('#bottomText2').height());
		}


		//Khi mấy ô trang 1 không có Text thì sẽ ẩn đi
		for ( var i =0 ; i<$('.text').length ; i++) {
			if ($($('.text')[i]).text()==''){$($('.text')[i]).css('display','none')} ;
		}

		//Khi 2 ô ảnh ở dưới ko có ảnh thì sẽ ẩn đi
		for ( var i =0 ; i<$('.bottomImage').length ; i++) {
			if( $('.bottomImage')[i].src.indexOf("jpg",'png','jpeg')==-1 ){
				$($('.bottomImageBox')[i]).css('display','none')
			}
		}


		//Giới hạn số lượng chữ cho từng ô
		
		if($('#bottomDoctorText').text().length >23) {
			$('#bottomDoctorText').html($('#bottomDoctorText').text().substring(0,23)+' ...');
		}
		if($('#greetingText').text().length >840) {
			$('#greetingText').html($('#greetingText').text().substring(0,840)+' ...');
		}
		if($('#surgeryInfoText').text().length >590) {
			$('#surgeryInfoText').html($('#surgeryInfoText').text().substring(0,590)+' ...');
		}
		if($('#bottomText1').text().length >260) {
			$('#bottomText1').html($('#bottomText1').text().substring(0,260)+' ...');
		}
		if($('#bottomText2').text().length >260) {
			$('#bottomText2').html($('#bottomText2').text().substring(0,260)+' ...');
		}
		if($('#bottomImageHeader1').text().length >38) {
			$('#bottomImageHeader1').html($('#bottomImageHeader1').text().substring(0,38)+' ...');
		}
		if($('#bottomImageHeader2').text().length >38) {
			$('#bottomImageHeader2').html($('#bottomImageHeader2').text().substring(0,38)+' ...');
		}
		if($('#bottomImageCaption1').text().length >38) {
			$('#bottomImageCaption1').html($('#bottomImageCaption1').text().substring(0,38)+' ...');
		}
		if($('#bottomImageCaption2').text().length >38) {
			$('#bottomImageCaption2').html($('#bottomImageCaption2').text().substring(0,38)+' ...');
		}
	}
 
 	

 	
	








