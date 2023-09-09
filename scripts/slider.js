let i = 0;

let next = () => {
	i++;
	slide(dyn_text)
	if (i >= messages.length) {
		i = 0;
		dyn_text.innerHTML = messages[i].toUpperCase();
	}
	slide(dyn_text)
	dyn_text.innerHTML = messages[i].toUpperCase();
}

let slide = (el) => {
	el.animate(
		{
			transform: ['translateX(-50px)', 'translateX(0)',],
			opacity: [0,1],
		},
		{
			duration: 700,
		}
	)
}


setInterval(() => {
	slide(dyn_text)
}, 4500);

setInterval(next, 4500);