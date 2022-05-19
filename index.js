const items = document.querySelectorAll('.item');

function changeItems(){
	items.forEach(item =>  {
		const color = ['FD381C', '2D228C', 'EDA6D1', 'FFAB11', '62C1B3'][Math.floor(Math.random() * 9)];
		const rotation = Math.floor(Math.random() * 4) * 90;
		item.style.setProperty("--color", `#${color}`);
		item.style.setProperty("--rotation", `rotate(${rotation}deg)`);
	});
}
changeItems();
setInterval(changeItems, 2000);