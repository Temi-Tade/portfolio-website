let j = 0;

let prev_prj = () => {
	j--

	if (j < 0){
		j = images.length - 1 ;
		projectsElement.innerHTML = `
		<a href=${projects[j]} title="Click to view the project"><img src=${images[j]}></a>
	`
	}
	projectsElement.innerHTML = `
		<a href=${projects[j]} title="Click to view the project"><img src=${images[j]}></a>
	`
}

let next_prj = () => {
	j++

	if (j >= images.length){
		j = 0;
		projectsElement.innerHTML = `
		<a href=${projects[j]} title="Click to view the project"><img src=${images[j]}></a>
	`
	}
	projectsElement.innerHTML = `
		<a href=${projects[j]} title="Click to view the project"><img src=${images[j]}></a>
	`
}

setInterval(next_prj, 7000);

