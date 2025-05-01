var request = await fetch('outside.json');
var entries = await request.json();

var mainElement = document.querySelector('main');

console.log(entries);

entries.forEach((entry) => {
	mainElement.innerHTML += `
		<details>
			<summary>
				${ entry.month }
			</summary>
			<div>
				<h2>${ entry.name }</h2>
				<h3>${ entry.holiday }</h3>
				<p>${ entry.description }</p>
                <img src="${entry.filename}" alt="${entry.name}" style="max-width: 50%; height: auto;">
			</div>
		</details>
	`
})