/*1. Take 2 numbers and print the smallest one amongst them*/

let firstNumber = 3;
let secondNumber = 4;
if(firstNumber > secondNumber)
	console.log(secondNumber);
else						//output: 3
	console.log(firstNumber);

/*2. Take 3 numbers and print the biggest one amongst them*/
let thirdNumber=6;

if(firstNumber > secondNumber){
  	if(firstNumber > thirdNumber)
		console.log(firstNumber);
	else
		console.log(thirdNumber);	
}else{
	if(secondNumber > thirdNumber)							
		console.log(secondNumber);
	else
		console.log(thirdNumber);
}

/*3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself)
Anything below 50 is F*/

let score;
switch(true){
	case (score<100 && score>90):
		console.log("A");
		break;
	case (score<90 && score>80):
		console.log("B");
		break;
	case (score<80 && score>70):
		consosle.log("C");
		break;
	case (score<70 && score >50):
		console.log("D");
		break;
	case (score <50):
		console.log("F");
		break;
	default:
		console.log(score);
}

