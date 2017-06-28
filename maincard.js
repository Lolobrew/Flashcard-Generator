var clozeCard = require("./ClozeCard");
var basicCard = require("./BasicCard");


var args = process.argv;

var type = process.argv[2];
console.log("Type of Card: " + type);


var input = [];

//for loop to push user input to input array
for (var i = 3; i < args.length; i++) {
	input.push(args[i]);
}

//join input array data at spaces
var userInput = input.join(" ");
var splitArr = userInput.split(",");

//console.log("User Input: " + userInput);
//console.log("Split at , :" + splitArr[1]);



var baseCard = new basicCard();
var clozer = new clozeCard();

if(type === "basic"){
    var front = splitArr[0];
    var back = splitArr[1];
    baseCard.MakeCard(front, back);
} else if(type === "cloze"){
    var cloze = splitArr[0];
    var text = splitArr[1];
    clozer.MakeCard(text, cloze);
} else{
    console.log("\nPlease input either basic or cloze (after maincard.js) to tell the app which kind of card to make" +
    "\n\n If you are making a basic card just input a question and then the answer, separated by a comma following the basic input" +
    "\n\n If you are making a cloze card please input the cloze and then the partial text, separated by a comma following the cloze input");
}
