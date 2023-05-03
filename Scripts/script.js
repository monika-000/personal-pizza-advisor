/** 
* @file Calculate best price   
* @function checkQuantity()
* @description This fucntion calculates best price for entered number of pizzas
* @returs {boolean} false
* @version 1.1.0
* @author Monika Przybylska
*/
function checkQuantity(){

	let numOfPizzas, bestPrice, optionThree, reminderThree, optionTwo, reminderTwo, optionOne ;
	let onePizzaPrice = 6.45;
	let twoPizzasPrice = 12;
	let threePizzasPrice = 14;
	numOfPizzas= document.getElementById("quantity").value;
		if (numOfPizzas == ""){
			document.getElementById("message").textContent = `Please provide a number`;
		}
		else if(isNaN(numOfPizzas))
		{
			document.getElementById("message").textContent = `Please provide a number`;
		}
		else if(numOfPizzas %  1 != 0){
			document.getElementById("message").textContent = `Please provide a number`;
		}
		else if(numOfPizzas <= 0){
			document.getElementById("message").textContent = `Please provide a number`;
		}
		else{
		//Calculate the best option for entered number of pizzas
			optionThree = Math.floor(numOfPizzas / 3);
			reminderThree = numOfPizzas % 3;
			optionTwo = Math.floor(reminderThree / 2);
			reminderTwo = reminderThree % 2;
			optionOne = Math.floor(reminderTwo / 1);
		//Prices for deals can be stored in const variables if the code gets longer
			bestPrice = (threePizzasPrice * optionThree) + (twoPizzasPrice * optionTwo) + (onePizzaPrice * optionOne);
		
		//Display the best price for enetered number of pizzas
			//document.getElementById("message").innerHTML = `The ammount to pay is $ ${bestPrice}`;
			document.getElementById("message").textContent = `$${bestPrice}`;
		}
		return false;
}	