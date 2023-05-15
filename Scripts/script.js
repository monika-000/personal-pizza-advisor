/** 
* @file Calculate best price   
* @function calculateThePrice()
* @description This fucntion calculates best price order type and price
* @returs {boolean} false
* @version 1.1.0
* @author Monika Przybylska
*/
//function checkNumberOfPeople(){
	let calcBtn = document.getElementById("calcBtn");
	let radioBtn = document.getElementsByName("hungryValue");
	
	calcBtn.addEventListener('click', ()=>{
		let  radioBtnValue;
		let smallPizza = 6;
		let mediumPizza = 8;
		let largePizza = 10;
		let recommendedNumber;
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
			let totalSlices;
			switch (radioBtnValue){
				case radioBtnValue = "Hungry":
					totalSlices = numOfPeople * 5;
				//5 slices of pizza for hungry
				
				case radioBtnValue = "Extra hungry":
				//6 slices ofpizza for extra hungry
					totalSlices = numOfPeople * 6;

			}
			 
			//Calculate the best option for entered number of pizzas
				optionThree = Math.floor(numOfPeople / 3);
				reminderThree = numOfPeople % 3;
				optionTwo = Math.floor(reminderThree / 2);
				reminderTwo = reminderThree % 2;
				optionOne = Math.floor(reminderTwo / 1);
				bestPrice = (threePizzasPrice * optionThree) + (twoPizzasPrice * optionTwo) + (onePizzaPrice * optionOne);
			//Display the best price for enetered number of pizzas
				document.getElementById("message").textContent = `$${bestPrice}`;
			}
	});
	
		
		
		//return false;
//}	

function calculateThePrice(){

}