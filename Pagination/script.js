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
var imagesPerPage = 4 ;



// Số trang sẽ phải có là :
var numberOfPage = Math.ceil(totalImage/imagesPerPage) 



//Tạo số ô chứa ảnh 
for (var i=0 ; i<imagesPerPage ; i++ ){
	$('.content').append('<div class="item"><img src="" alt=""></div>')	
}



//Tạo số trang cho thanh phân trang
for (var i=0 ; i<numberOfPage+4 ; i++ ){
	if (i==0){
      $('ul').append('<li><span> Đầu </span></li>')
    }
    else if (i==1){
      $('ul').append('<li><span> « </span></li>')
    }
    else if (i==2){
      $('ul').append('<li><span class="active">' + (i-1) + '</span></li>')
    }
    else if (i==numberOfPage+2){
      $('ul').append('<li><span> » </span></li>')
    }
    else if (i==numberOfPage+3){
      $('ul').append('<li><span> Cuối </span></li>')
    }
    else {
      	$('ul').append('<li><span class="">' + (i-1) + '</span></li>')
    }
}



// từ trang 3 trở đi thì ẩn
for (var i=5 ; i<numberOfPage+2 ; i++ ) {
	$($('span')[i]).css('display','none')
}



//hiện sẵn ra trang 1
for (var i=0 ; i<imagesPerPage ; i++){
	$('img')[i].src = data[i].file;
}
$($('span')[0]).css('visibility','hidden');
$($('span')[1]).css('visibility','hidden');



var n = 1 ;
//ấn vào từng ô
$('span').click(function() {

	if (+this.innerText > 0 ){ //ấn số
		n = +this.innerText ;
		displayNone() ;
		var current = +this.innerText ;
		displayBlock() ;	
	}
	else if (this.innerText == 'Đầu') { // ấn Đầu
		n = 1 ;
		displayNone() ;
		var current = 1 ;
		displayBlock() ;
	} 
	else if (this.innerText == '«'){ // ấn back
		n = n - 1 ;
		displayNone() ;
		var current = n ;
		displayBlock() ;
	} 
	else if (this.innerText == '»'){ // ấn next
		n = n + 1 ;
		displayNone() ;
		var current = n ;
		displayBlock() ;
	} 
	else if (this.innerText == 'Cuối') { // ấn Cuối
		n = numberOfPage ;
		displayNone() ;
		var current = numberOfPage ;
		displayBlock() ;	
	} 



	// ấn , hiện 2 cái đầu và cuối
	if(n==1) {
		$($('span')[0]).css('visibility','hidden');
		$($('span')[1]).css('visibility','hidden');
	}
	else {
		$($('span')[0]).css('visibility','visible');
		$($('span')[1]).css('visibility','visible');
	}
	if(n==numberOfPage ){
		$($('span')[numberOfPage+2]).css('visibility','hidden');
		$($('span')[numberOfPage+3]).css('visibility','hidden');
	}
	else {
		$($('span')[numberOfPage+2]).css('visibility','visible');
		$($('span')[numberOfPage+3]).css('visibility','visible');
	}	



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

			

	//bỏ active cũ
	for (var i=0 ; i<numberOfPage+2 ; i++){
		$('span')[i].className = $('span')[i].className.replace("active","");
	}
	// hiện active mới
	if (+this.innerText > 0 ){
		this.className += "active" ;
	}
	else if (this.innerText == '»' || this.innerText == '«') {
		$('span')[n+1].className += "active" ;
	}
	else if (this.innerText == '' && n == '1') {
		$('span')[2].className += "active"
	}
	else if (this.innerText == '' && n == numberOfPage) {
		$('span')[numberOfPage+1].className += "active"
	}



	// trang cuối chỉ hiển thị ô nào có ảnh
	for ( var i =0 ; i<$('img').length ; i++) {
		if( $('img')[i].src.indexOf('jpeg')==-1 ){
			$($('img')[i]).css('display','none')
		}
		else if ( $('img')[i].src.indexOf('jpeg')>-1 ){
			$($('img')[i]).css('display','block')
		}
	}



	function displayNone(){
		for (var i = 2 ; i <numberOfPage+2 ; i++ ){
			$($('span')[i]).css('display','none')
		}
	};
	function displayBlock(){
		for (var j = current-1 ; j <=current+3 ; j++ ){	 
			$($('span')[j]).css('display','block')
		}
	};
});

