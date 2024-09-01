const btnEl = document.getElementById("btn");
const bmiinputEl = document.getElementById("bmi-result");
const weightconditionEl = document.getElementById("weight-condition");


function calculateBMI(){
    const heightValue = document.getElementById("height").value/100;
    const weightValue = document.getElementById("weight").value;
    const bmiValue = weightValue / (heightValue * heightValue);
    bmiinputEl.value = bmiValue;


    if(bmiValue < 18.5){
        weightconditionEl.innerText = "Under weight"
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9)
    {
        weightconditionEl.innerText = "Normal weight"
    }
    else if(bmiValue >= 25 && bmiValue <= 29.9)
    {
        weightconditionEl.innerText = "Over weight "
    } 
    else if(bmiValue >= 30 )
    {
        weightconditionEl.innerText = "Obesity"
    }

}
btnEl.addEventListener("click",calculateBMI)