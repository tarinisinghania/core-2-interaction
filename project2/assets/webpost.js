// get the entries 
var request = await fetch ('assets/notes.json');
var notes = await request.json();

console.log(notes);

// get the input elements 
var occasionSelect = document.querySelector('select[name="occasion"]');
var toSelect = document.querySelector('select[name="to"]');
var dateSelect = document.querySelector('.date')
var fileInput = document.querySelector('input[type="file"]');
var fileInput1 = document.querySelector('input[name="image2"]')

console.log(occasionSelect, toSelect, dateSelect);

// get the submit button
var captureButton = document.querySelector('button[name="capture"]');

console.log(captureButton);

// get the output element 
var output = document.querySelector('.output');

console.log(output);

// add event listener to the button
captureButton.addEventListener('click', () => {

    // get the active settings 
    var occasion = occasionSelect.value;
    var to = toSelect.value;
    var storyDate = document.querySelector('input[name="storydate"]').value;
    var file = fileInput.files[0];
    var stampFile = fileInput1.files[0]; 

    console.log(occasion, to, storyDate, file, stampFile);

    // get the matching entry
    var matchingEntry = notes.find((entry) => {
        return entry.occasion == occasion 
            && entry.to == to;
    });

    console.log(matchingEntry);


	// if the file and matchiong entry exists...
	if (matchingEntry && file && stampFile) {

		// make a "file reader"
		var reader1 = new FileReader();
        var reader2 = new FileReader();

		// when the file is done being loaded...
		reader1.onload = (e1) => {
            reader2.onload = (e2) => {

			// put the file in the output
            output.innerHTML = `
                <div class= "box" style="background-color: white">
                <div class="postcard" style="border-image-source: url('${ matchingEntry.filename }')"> 
                    <img class="photo" src="${ e1.target.result }">
                    <img class="stamp" src="${ e2.target.result }">
                    <div class="date-display">${storyDate}</div> 
                    <div class="note">${ matchingEntry.note }</div>
                </div>
                <div class="message" style= "margin-left: 140px; margin-top:10px;"> press command P to print your postcard!</div>
                </div>
            `;

		};
        reader2.readAsDataURL(stampFile);

        };

		// read the file
		reader1.readAsDataURL(file);

	} else {
        output.innerHTML = `<div class= "box" style="background-color: red">
                                <div class="message" style="color: bisque"> Nothing Found :( </div>
                            </div>`;
    }

})
