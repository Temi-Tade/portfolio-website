let i = 0;

let next = () => {
	i++;
	slide(dyn_text)
	if (i >= messages.length) {
		i = 0;
		dyn_text.innerHTML = messages[i];
	}
	slide(dyn_text)
	dyn_text.innerHTML = messages[i];
}

let slide = (el) => {
	el.animate(
		{
			transform: ['translateX(-50px)', 'translateX(0)'],
			opacity: [0,1],
		},
		{
			duration: 700,
		}
	)
}


setInterval(() => {
	slide(dyn_text)
}, 7000);

setInterval(next, 7000);