var request = await fetch('inside.json');
var entries = await request.json();

var mainElement = document.querySelector('main');

console.log(entries);

entries.forEach((entry) => {
	mainElement.innerHTML += `
		<div class="entry">
			<button class="entry-toggle">
				${ entry.month }
			</button>
			<div class="entry-body">
				<h2>${ entry.name }</h2>
				<h3>${ entry.holiday }</h3>
				<p>${ entry.description }</p>
                <img src="${entry.filename}" alt="${entry.name}" style="max-width: 50%; height: auto;">
			</div>
		</div>
	`
})

var entryToggles = document.querySelectorAll('.entry-toggle');

entryToggles.forEach((toggle) => {

    // add event listener to toggle
    toggle.addEventListener('click', () => {

        // hide all entry bodies
        var entryBodies = document.querySelectorAll('.entry-body');
        entryBodies.forEach((entryBody) => {
            entryBody.style.display = 'none';
        });

        // show the toggled body element
        var entryBody = toggle.parentElement.querySelector('.entry-body');        
        entryBody.style.display = 'block';

    });
});