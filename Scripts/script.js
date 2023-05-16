/** 
* @file Recommend the best pizza order (number and size of pizzas)   
* @function calculateThePizzaReq()
* @description This fucntion calculates recommended number of pizzas for entered numberof people
* @returs {array} string
* @version 1.1.1
* @author Monika Przybylska
*/

let calcBtn = document.getElementById("calcBtn");
let radioBtn = document.getElementsByName("hungryValue");

calcBtn.addEventListener('click', ()=>{
	let radioBtnValue;
	let numOfPeople= document.getElementById("quantity").value;
	for(let i = 0; i< radioBtn.length; i++){
		if(radioBtn[i].checked){
			radioBtnValue = radioBtn[i].labels[0].innerText;	
		}
	}
	if (numOfPeople == "" || isNaN(numOfPeople) || numOfPeople %  1 != 0 || numOfPeople <= 0 || radioBtnValue == "undefined"){
		document.getElementById("message").textContent = `Please provide a number and choose how hungry you are`;
	}
	else{
		let message = calculateThePizzaReq(numOfPeople, radioBtnValue);
		document.getElementById("message").textContent = `Based on standard pizza sizes, we recommend buing ${message}`
		}
});	

function calculateThePizzaReq(n,v){
	const slices = v == "Hungry" ? 5 : 6;
	let message =[];
	let largePizza = 10;
	let mediumPizza = 8;
	let smallPizza = 6;
	let large, medium, small, reminderLarge, totalSlices;
	
	totalSlices = n * slices;
	large = Math.floor(totalSlices / largePizza);
	reminderLarge = totalSlices % largePizza;
	if(large > 0){
		message.push(`${large} large pizza(s)`);
	}
	if(reminderLarge > smallPizza){
		medium = Math.ceil(reminderLarge / mediumPizza);
		message.push(`${medium} medium pizza(s)`);
	}
	else{
		small = Math.ceil(reminderLarge / smallPizza);
		if(small > 0){
			message.push(`${small} small pizza(s)`)
		}
	}
	message = message.join(", ")
	return message;
}