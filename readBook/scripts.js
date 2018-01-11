document.addEventListener('DOMContentLoaded',function(){
	var titleAuthors = document.querySelector('.title-authors');
	var titleCategories = document.querySelector('.title-categories');
	var topAuthor = document.querySelector('.topAuthor');
	var categories = document.querySelector('.categories');

	
		titleAuthors.onclick = function(){
			if(window.innerWidth < 768){
				topAuthor.classList.toggle('hide')
			}
		}
		titleCategories.onclick = function(){
			if(window.innerWidth < 768){
				categories.classList.toggle('hide')
			}
		}

	
	








},false)