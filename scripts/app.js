window.addEventListener('scroll', (e) => {
	if (document.body.getBoundingClientRect().y <= -25){
		backToTop.style.transform = 'scale(1)'
		backToTop.querySelector('button').onclick = () => {
			document.body.scrollIntoView()
		}
	}else{
		backToTop.style.transform = 'scale(0)'
	}
})

if (window.innerWidth < 600) {
	document.querySelector("#ham_btn").onclick = () => {
		document.querySelector("header nav").classList.toggle('open')
		document.querySelector("header #socials_nav").classList.toggle('open')
	}
}
