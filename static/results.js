letterValues = {'A': 1, 'C': 3, 'B': 2, 'E': 5, 'D': 4, 'G': 7, 'F': 6, 'I': 9, 'H': 8, 'K': 11, 'J': 10, 'M': 13, 'L': 12, 'O': 15, 'N': 14, 'Q': 17, 'P': 16
, 'S': 19, 'R': 18, 'U': 21, 'T': 20, 'W': 23, 'V': 22, 'Y': 25, 'X': 24, 'Z': 26, 'a': 1, 'c': 3, 'b': 2, 'e': 5, 'd': 4, 'g': 7, 'f': 6, 'i':
 9, 'h': 8, 'k': 11, 'j': 10, 'm': 13, 'l': 12, 'o': 15, 'n': 14, 'q': 17, 'p': 16, 's': 19, 'r': 18, 'u': 21, 't': 20, 'w': 23, 'v': 22, 'y':
25, 'x': 24, 'z': 26}; 

var displayValue = function() {
	console.log("calling displayValue");
	var word = document.getElementById("word").value.trim();
	word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

	var total = 0;
	var sumString = "";
	for (var i=0; i<word.length; i++){
		var letter = word.charAt(i);
		var value = letterValues[letter];
		if (letterValues.propertyIsEnumerable(letter)) {
			total += value;
			sumString += (value + " + ");
		}
	};
	if (total===0) return;

	sumString = sumString.slice(0, -2);
	sumString += ("= " + total);

	var results = document.getElementById("results");
	results.innerHTML = "";

	var sumDisplay = document.createElement("p");
	sumDisplay.innerHTML = (word + " = " + sumString);
	sumDisplay.id = "sumString";
	results.appendChild(sumDisplay);

	var response = document.createElement("p");
	if (total===100) {
		response.innerHTML = (word + " is a dollar word!");
	} else {
		response.innerHTML = (word + " is worth $" + (total/100).toFixed(2) + "." );
	}
	response.id = "response";
	results.appendChild(response);
};

// var go = document.getElementById('go');
// go.onclick = displayValue();

$(document).ready(function(){
	$("#go").click(displayValue);
	$("#word").keypress(function(e){
		if (e.keyCode===13) {
			displayValue();
		}
	});
	$("#word").focus();
});




