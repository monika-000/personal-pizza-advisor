/** 
* @file Calculate best price   
* @function calculateThePrice()
* @description This fucntion calculates best price order type and price
* @returs {boolean} false
* @version 1.1.0
* @author Monika Przybylska
*/
//function checkNumberOfPeople(){

	let bestPrice, optionThree, reminderThree, optionTwo, reminderTwo, optionOne ;
	const onePizzaPriceSmall = 6.50;
	const onePizzaPriceLarge = 8.50;
	const twoPizzasPriceSmall = 9;
	const twoPizzasPriceLarge = 11;
	const threePizzasPriceSmall = 12;
	const threePizzasPriceLarge = 14;
	let numOfPizzas= document.getElementById("quantity").value;
	let calcBtn = document.getElementById("calcBtn");
	let radioBtn = document.getElementsByName("hungryValue");
	//radioBtn = false;
	
	calcBtn.addEventListener('click', ()=>{
		let  radioBtnValue;
		debugger;
		for(let i = 0; i< radioBtn.length; i++){
			if(radioBtn[i].checked){
				radioBtnValue = radioBtn[i].value;
			}
		}
		debugger;
		if (numOfPizzas == "" || isNaN(numOfPizzas) || numOfPizzas %  1 != 0 || numOfPizzas <= 0 || radioBtnValue == "undefined"){
			document.getElementById("message").textContent = `Please provide a number and choose how hungry you are`;
		}
		else{
			console.log("Hi")
			// //Calculate the best option for entered number of pizzas
			// 	optionThree = Math.floor(numOfPizzas / 3);
			// 	reminderThree = numOfPizzas % 3;
			// 	optionTwo = Math.floor(reminderThree / 2);
			// 	reminderTwo = reminderThree % 2;
			// 	optionOne = Math.floor(reminderTwo / 1);
			// 	bestPrice = (threePizzasPrice * optionThree) + (twoPizzasPrice * optionTwo) + (onePizzaPrice * optionOne);
			// //Display the best price for enetered number of pizzas
			// 	document.getElementById("message").textContent = `$${bestPrice}`;
			}
	});
	
		
		
		//return false;
//}	

function calculateThePrice(){

}