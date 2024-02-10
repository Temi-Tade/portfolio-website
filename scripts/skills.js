skills.name.forEach ((val, ind) => {
	skillsElement.innerHTML += `
		<p>
		<label>${val.toUpperCase()}<i class=${skills.icons[ind]}></i></label>
		<progress min="0" max="100" value=${skills.level[ind]} title=${val.toUpperCase()}></progress> 
		</p>
	`
});