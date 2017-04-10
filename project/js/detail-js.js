$(document).ready(function () {
	var originalBigImgs = [];
	var attrOfBigImgs = $('img.showImageAfterOnclick');
		for (var i = 0; i < attrOfBigImgs.length; i++) {
			originalBigImgs.push(attrOfBigImgs[i].attributes.src.value);
		}

	$('.ClickEvent').on('click',function () {
		var imgSrc = $(this).attr('src');
		$('.showImageAfterOnclick').attr('src',imgSrc);
	});

	$('.onclickColor').on('click',function () {
		

		var productColor = $(this).attr('productColor');
		var thisCurrentBigImgNumber = productColor.match(/\d+$/)[0];
		for (var i = 0; i < attrOfBigImgs.length; i++) {
			attrOfBigImgs[i].attributes.src.value = originalBigImgs[i];
		}
		$('.mau').hide();
		$('.'+ productColor).show();
	});
}); 





