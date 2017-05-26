var data = [
	{"file" : "01.jpeg"},
	{"file" : "02.jpeg"},
	{"file" : "03.jpeg"},
	{"file" : "04.jpeg"},
	{"file" : "05.jpeg"},
	{"file" : "06.jpeg"},
	{"file" : "07.jpeg"},
	{"file" : "08.jpeg"},
	{"file" : "09.jpeg"},
	{"file" : "10.jpeg"},
	{"file" : "11.jpeg"},
	{"file" : "12.jpeg"},
	{"file" : "13.jpeg"},
	{"file" : "14.jpeg"},
	{"file" : "15.jpeg"},
	{"file" : "16.jpeg"},
	{"file" : "17.jpeg"},
	{"file" : "18.jpeg"},
	{"file" : "19.jpeg"},
	{"file" : "20.jpeg"},
	{"file" : "21.jpeg"},
	{"file" : "22.jpeg"},
	{"file" : "23.jpeg"},
	{"file" : "24.jpeg"},
	{"file" : "25.jpeg"},
	{"file" : "26.jpeg"},
	{"file" : "27.jpeg"},
	{"file" : "28.jpeg"},
	{"file" : "29.jpeg"},
	{"file" : "30.jpeg"},
];

var totalImage = data.length ;


// số sản phẩm trên 1 trang
var imagesPerPage = 7 ;

// Số trang sẽ phải có là :
var numberOfPage = Math.ceil(totalImage/imagesPerPage) 




//Tạo số ô chứa ảnh 
for (var i=0 ; i<imagesPerPage ; i++ ){
	$('.content').append('<div class="item"><img src="" alt=""></div>')	
}





//Tạo số trang cho thanh phân trang
for (var i=0 ; i<numberOfPage+2 ; i++ ){
	if (i==0){
      $('ul').append('<li><span class="disabled"> « </span></li>')
    }
    else if (i==1){
      $('ul').append('<li><span class="active">' + i + '</span></li>')
    }
    else if (i==numberOfPage+1){
      $('ul').append('<li><span> » </span></li>')
    }
    else {
      $('ul').append('<li><span>' + i + '</span></li>')
    }
}


//hiện sẵn ra trang 1
for (var i=0 ; i<imagesPerPage ; i++){
	$('img')[i].src = data[i].file
}
var n = 1 ;



//ấn vào từng ô
$('span').click(function() {
			if (this.innerText != '«' && this.innerText != '»' ){ n = this.innerText ;} // khi ấn vào số
			else if (this.innerText == '«' && $('span')[1].className == 'active' ){ n = n ;} // ấn back khi 1 đang active
			else if (this.innerText == '«' && $('span')[1].className != 'active' ){ n = +n - 1 ;} // ấn back khi 1 ko active
			else if (this.innerText == '»' && $('span')[numberOfPage].className != 'active' ){ n = +n + 1 ;} // ấn next khi số cuối ko active
			else if (this.innerText == '»' && $('span')[numberOfPage].className == 'active' ){ n = n ; } // ấn next khi số cuối đang active
			





			//xóa hết ảnh đi
  			for (var i=0 ; i<imagesPerPage ; i++) {
				$('img')[i].src = '';
			}

			//cho link ảnh vào
	  		for (var i=0 ; i<imagesPerPage ; i++) {
	  			var j = i+((n-1)*imagesPerPage) ;
				if(j == totalImage) {
					break;
				}
				else {
					$('img')[i].src = data[j].file;
				}
			}

			//Khi ô ảnh ko có ảnh thì sẽ ẩn đi
			for ( var i =0 ; i<$('img').length ; i++) {
				if( $('img')[i].src.indexOf("jpg",'png','jpeg')==-1 ){
					$($('img')[i]).parent().css('display','none')
				}
			}






			//bỏ active thằng cũ
			for (var i=0 ; i<numberOfPage+1 ; i++){
				$('span')[i].className = $('span')[i].className.replace("active","");
			}
			// cho thằng ấn vào được active
			if (this.innerText != '«' && this.innerText != '»'){
				this.className += "active" ;
			}
			else if (this.innerText == '»' || this.innerText == '«') {
				$('span')[n].className += "active" ;
			}


			//Nút «
			if ( $('span')[1].className == 'active' ) {
				$('span')[0].className = $('span')[0].className.replace("disabled","");
				$('span')[0].className += "disabled"
			}	
			else if ( $('span')[1].className == '' ) {
				$('span')[0].className = $('span')[0].className.replace("disabled","");
			}


			//Nút »
			if ($('span')[numberOfPage].className == 'active') {
				$('span')[numberOfPage+1].className = $('span')[numberOfPage+1].className.replace("disabled","");
				$('span')[numberOfPage+1].className += "disabled";
			}
			if ($('span')[imagesPerPage-1].className == '') {
				$('span')[imagesPerPage].className = $('span')[imagesPerPage].className.replace("disabled","");
			}
  


  			

});
