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
			let large, medium, small, reminderLarge;
			switch (radioBtnValue){
				case radioBtnValue = "Hungry":
					totalSlices = numOfPeople * 5;
				//5 slices of pizza for hungry
					large = Math.floor(totalSlices / largePizza);
					reminderLarge = totalSlices % largePizza;
					// if(reminderLarge != 0){
						debugger;
						if(reminderLarge > smallPizza){
							medium = Math.ceil(reminderLarge / mediumPizza)
							small = 0;
							//reminderMedium = reminderLarge % mediumPizza;
						}
						else{
							medium = 0;
							small = Math.ceil(reminderLarge / smallPizza);
						}
					break;
					// }
				case radioBtnValue = "Extra hungry":
				//6 slices ofpizza for extra hungry
					totalSlices = numOfPeople * 6;
					large = Math.floor(totalSlices / largePizza);
					reminderLarge = totalSlices % largePizza;
						if(reminderLarge > smallPizza){
							medium = Math.ceil(reminderLarge / mediumPizza);
							small = 0;
						}
						else{
							medium = 0;
							small = Math.ceil(reminderLarge / smallPizza);
						}
					break;
			}
			document.getElementById("message").textContent = `We recommend buying ${large} large pizza(s), ${medium} medium pizza(s) and ${small} small pizza(s)`
			}
	});
	
		
		
		//return false;
//}	

function calculateThePrice(){

}