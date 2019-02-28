var stickies = [];
var addButton = document.querySelector("#addButton");
var subtractButton = document.querySelector("#subtractButton");
var counter;



if (localStorage.getItem(localStorage.key('counter')) === null) {
	localStorage.setItem('counter', 0);
	counter = 0;
	console.log(counter);
} else {
	counter = parseInt(localStorage.getItem(localStorage.key('counter')));
	console.log(counter);
}

$('#reduce-font').on('click', function() {
	var headerPix = $('.card-title').css('font-size');
	headerPix.replace('px', '');
	headerPix = parseInt(headerPix);
	headerPix -= 1;
	var bodyPix = $('.card-text').css('font-size');
	bodyPix.replace('px', '');
	bodyPix = parseInt(bodyPix);
	bodyPix -= 1;
	$('.card-text').css('font-size', `${bodyPix}px`);
	$('.card-title').css('font-size', `${headerPix}px`);
});
$('#increase-font').on('click', function() {
	var headerPix = $('.card-title').css('font-size');
	headerPix.replace('px', '');
	headerPix = parseInt(headerPix);
	headerPix += 1;
	var bodyPix = $('.card-text').css('font-size');
	bodyPix.replace('px', '');
	bodyPix = parseInt(bodyPix);
	bodyPix += 1;
	$('.card-text').css('font-size', `${bodyPix}px`);
	$('.card-title').css('font-size', `${headerPix}px`);
});








// on keyup functions to store the entered data in the array
$('.card-columns').on('keyup', '.card-title', function() {
	cardIndex = $(this).attr('id');
	console.log(cardIndex);
	cardText = $(this).text();

	// store the data in local storage
	localStorage.setItem(cardIndex, $(this).text());
});

$('.card-columns').on('keyup', '.card-text', function() {
	// alert('pressed key');
	cardIndex = $(this).attr('id');
	console.log(cardIndex);
	cardText = $(this).text();
	// store the updated info in user data
	localStorage.setItem(cardIndex, $(this).text());
});




function checkEdits() {
	for (var i = 0; i < parseInt(localStorage.getItem(localStorage.key('counter'))); i++) {
		addNewStickyNote(i);
	}
	for (var i = 1; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		// console.log(localStorage.key(i));

		if (key.indexOf('header-') === 0 ) {
			console.log(key);
			$(`#${key}`).text(localStorage.getItem(localStorage.key(i))); 
		} else if (key.indexOf('text-') === 0 ) {
			console.log(key);
			$(`#${key}`).text(localStorage.getItem(localStorage.key(i))); 
		}
	}
};


function addNewStickyNote(counter) {
	// create sticky note elements
	var newStickyNote = $('<div>').attr('class', 'card');
	var newStickyNoteBody = $('<div>').attr('class', 'card-body');
	var newStickyNoteHeader = $('<h5>').attr('id', `header-${counter}`).attr('spellcheck', 'false').attr('class', 'card-title').attr('contenteditable', 'true').text('stickynote');
	var newStickyNoteText = $('<p>').attr('id', `text-${counter}`).attr('class', 'card-text').attr('contenteditable', 'true').text('Click Here To Edit');
	// append header and paragraph element to body div
	$(newStickyNoteBody).append(newStickyNoteHeader, newStickyNoteText);
	// append body div to sticky note
	$(newStickyNote).append(newStickyNoteBody);
	// add stickynote to DOM
	$('.card-columns').append(newStickyNote);
	// add stickynote to stickies array
	stickies.push(newStickyNote);
};



// add button functionality
addButton.addEventListener("click", function() {
	addNewStickyNote(counter);
	counter++;
	localStorage.setItem('counter', counter);
});

// subtract button functionality
subtractButton.addEventListener("click", function() {
	if (counter >= 0) {
		// remove last sticky note from list
		stickies.pop();
		// empty card columns div
		$('.card-columns').text('');
		// repopulate card columns div based on stickies array
		stickies.forEach(function(sticky) {
			$('.card-columns').append(sticky);
		});
		counter--;
		localStorage.setItem('counter', counter);
		localStorage.removeItem(`header-${counter}`);
		localStorage.removeItem(`text-${counter}`);
	} else {
		alert("No more stickies to remove!");
		counter = 0;
	}
});


function resetStorage() {
	localStorage.clear();
	location.reload();
}

checkEdits();