const PROJECT_LIST = document.querySelector("#p_list ul")
const NO_RES = document.querySelector("#no-result")
let i = 0;

const searchProjects = (q) => {
    let project_names = [...PROJECT_LIST.querySelectorAll("li h4")]

    project_names.forEach((val, ind) => {
        if (val.innerHTML.includes(q)) {
            val.parentElement.style.display = "flex"
        } else {
            val.parentElement.style.display = "none"
        }
    })

    if ([...PROJECT_LIST.querySelectorAll("li")].every((val) => val.style.display === "none")) {
        NO_RES.style.display = "block"
    } else {
        NO_RES.style.display = "none"
    }
}

function getRepoInfo(name, link, img) {
     fetch(`https://api.github.com/repos/Temi-Tade/${name}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(JSON.stringify(data))
        PROJECT_LIST.innerHTML += `
            <li>
                <h4>${data.name}</h4><br>
                <p class="img">
                    <img src=${img} width="500">
                </p>

                <p class="links">
                    <a href=${link}>Check it Out <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <a href=${data.html_url}>Check GitHub repo</a>
                </p>
            </li>
        `
        ++i
    })
}

getRepoInfo("password_checker", "https://password-checker-ver.vercel.app/", "../assets/images/pass_check.png")
getRepoInfo("love_calculator", "https://temi-tade.github.io/love_calculator/", "../assets/images/love_calc.png")
getRepoInfo("countdown-timer", "https://temi-tade.github.io/countdown-timer/", "../assets/images/count_down.png")
getRepoInfo("fastest_finger_game", "https://turbo-clickz.web.app", "../assets/images/turbo.jpg")
getRepoInfo("svg_editor", "https://web-svg-edit.web.app/", "../assets/images/editor.png")
getRepoInfo("Todo-list", "https://to-do-app-5106d.web.app/", "../assets/images/todo.png")