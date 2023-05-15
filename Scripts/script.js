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
			let message = calculateThePrice(numOfPeople, radioBtnValue);
			// let totalSlices;
			// let large, medium, small, reminderLarge;
			// let message =[];
			// switch (radioBtnValue){
			// 	case radioBtnValue = "Hungry":
			// 		totalSlices = numOfPeople * 5;
			// 	//5 slices of pizza for hungry
			// 		large = Math.floor(totalSlices / largePizza);
			// 		reminderLarge = totalSlices % largePizza;
			// 		if(large > 0){

			// 			message.push(`${large} large pizza(s)`);
			// 			console.log(message)
			// 		}
			// 			if(reminderLarge > smallPizza){
			// 				medium = Math.ceil(reminderLarge / mediumPizza);
			// 				message.push(`${medium} medium pizza(s)`);
			// 			}
			// 			else{
			// 				small = Math.ceil(reminderLarge / smallPizza);
			// 				message.push(`${small} small pizza(s)`)
			// 			}
			// 		break;
			// 	case radioBtnValue = "Extra hungry":
			// 	//6 slices ofpizza for extra hungry
			// 		totalSlices = numOfPeople * 6;
			// 		large = Math.floor(totalSlices / largePizza);
			// 		reminderLarge = totalSlices % largePizza;
			// 			if(reminderLarge > smallPizza){
			// 				medium = Math.ceil(reminderLarge / mediumPizza);
			// 				small = 0;
			// 			}
			// 			else{
			// 				medium = 0;
			// 				small = Math.ceil(reminderLarge / smallPizza);
			// 			}
			// 		break;
			// }
			//message = message.join(", ")
			document.getElementById("message").textContent = `We recommend buing ${message}`
			}
	});
	
		
		
		//return false;
//}	

function calculateThePrice(n,v){
	const slices = v == "Hungry" ? 5 : 6;
	let totalSlices;
	let largePizza = 10;
	let mediumPizza = 8;
	let smallPizza = 6;
	let large, medium, small, reminderLarge;
	let message =[];

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