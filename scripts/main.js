const dyn_text = document.querySelector("#dynamic_text p")
const skillsElement = document.querySelector("#skills")
const projectsElement = document.querySelector("#p_names") 
const imageElement = document.querySelector("#projects img")
const backToTop = document.querySelector('#to_top')

const messages = ['Front End Web developer', 'programmer', 'open source contributor', 'graphics designer', 'content writer']

const skills = {
	name: ["html", "css", "javascript", "python", "command line", "graphics design"],
	level: [80, 75, 70, 40, 50, 75],
};

const projects = ["https://password-checker-ver.vercel.app/", "https://temi-tade.github.io/love_calculator/", "https://temi-tade.github.io/countdown-timer/", "https://turbo-clickz.web.app"]

const projectNames = ["password checker", "love calculator", "countdown timer", "turbo clickz",]
						
const images = ["./assets/images/pass_check.png", "./assets/images/love_calc.png", "./assets/images/count_down.png", "./assets/images/turbo.jpg"]

dyn_text.innerHTML = messages[0].toUpperCase()

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
