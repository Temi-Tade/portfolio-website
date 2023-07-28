let i = 0;

let next = () => {
	i++;
	dyn_text.innerHTML = messages[i];
	if (i > messages.length - 1) {
		i = 0;
		dyn_text.innerHTML = messages[i];
	}
}
let j = setInterval(() => {
	dyn_text.animate(
		{
			transform: ['translateX(-50px)', 'translateX(0)'],
			opacity: [0,1],
		},
		{
			duration: 700,
		}
	)
}, 7000);

setInterval(next, 7000);