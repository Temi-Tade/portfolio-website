const dyn_text = document.querySelector("#dynamic_text_wrap p span")
const skillsElement = document.querySelector("#skills")
const projectsElement = document.querySelector("#p_names") 
const imageElement = document.querySelector("#projects img")
const backToTop = document.querySelector('#to_top')

const skills = {
	icons: ["fa-brands fa-html5", "fa-brands fa-css3", "fa-brands fa-js", "fa-brands fa-python", "fa-solid fa-terminal"],
	name: ["html", "css", "javascript", "python", "command line", "graphics design"],
	level: [80, 75, 70, 40, 50, 75],
};