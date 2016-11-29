// Paste the code below into your HTML file.

// Take the contents of the sonnet div and place it in a variable

//var sonnet = document.getElementById("sonnet").textContent;

var theSonnet = document.getElementById("sonnet").innerHTML;
console.log(theSonnet);


// Find and output the starting position of the word "orphans"
console.log(theSonnet.indexOf("orphans"));


// Output the number of characters in the sonnet
console.log(theSonnet.length);



// Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = theSonnet.replace("winter", "yuletide");
//console.log(theSonnet.replace("winter", "yuletide"));
console.log(newSonnet);




// Replace all occurances of the string "the" with "a large"
var newerSonnet = newSonnet.split(' with ').join(" a large ");
console.log(newerSonnet);

/* 
var string = "There is thee apple in the apple pie"
string.split(' the ').join(' omg ')

// outputs if console.log: "There is thee apple in omg apple pie" 
*/





// Set the content of the sonnet div with the new string

document.getElementById("sonnet").innerHTML = newerSonnet;

document.getElementById("sonnet").innerHTML = "<h1>IM HANGRY</h1>";