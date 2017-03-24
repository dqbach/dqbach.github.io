$(document).ready(function(){
    $(".menu-button").click(function(){
        $(".main-menu-box").toggleClass("main-menu-box-click");
    });

    $(".greater-than").click(function(){
       $(".view-box").addClass("view-box-move-right-1");
    });
  

// 	var slideIndex = 1;
// 		showDivs(slideIndex);

// 		function plusDivs(n) {
// 		  showDivs(slideIndex += n);
// 		}

// 		function showDivs(n) {
// 		  var i;
// 		  var x = document.getElementsByClassName("product-box");
// 		  if (n > x.length) {slideIndex = 1}    
// 		  if (n < 1) {slideIndex = x.length}
// 		  for (i = 0; i < x.length; i++) {
// 		     x[i].style.display = "none";  
// 		  }
// 		  x[slideIndex-1].style.display = "block";  
// 		}
});