
const btnCalculate = document.querySelector('#calculate');
const btnNew = document.querySelector('#new-btn');
const panel = document.querySelector('.panel');

let nameInput;
let personHeightCm;
let personWeight;
let situation;
let BMIResult;
let resultMessage;
let errorMessage;


const HideAndShow = () => {
    panel.classList.remove("panelHidden");
}


const PanelMessage = () => {
    resultMessage = `${nameInput} your BMI is ${BMIResult}. <br> ${situation}`;
    errorMessage = 'Fill out all the fields!!!';
}

const SituationMessage = () => {
    
    if ( BMIResult < 18.5 ) {
        situation = "You're in the underweight range";
    } else if ( BMIResult > 18.5 && BMIResult < 25){
        situation = "you're in the healthy weight range";
    } else if ( BMIResult >= 25 && BMIResult < 30){
        situation = "you're in the overweight range";
    } else if ( BMIResult >= 30 && BMIResult < 40){
        situation = "you're in the obese range";
    }    
}

const BMICalc = () => {    
    const personHeightMeter = personHeightCm / 100;
    BMIResult = (personWeight / personHeightMeter**2).toFixed(2);
}

const BMI = () => {
    if (nameInput && personHeightCm && personWeight){
        
        BMICalc();
        SituationMessage();
        HideAndShow();
        PanelMessage();

        setTimeout(() => {
            panel.innerHTML = resultMessage;
        }, 600)

    } else {

        HideAndShow();
        PanelMessage();

        setTimeout(() => {
            panel.textContent = errorMessage;
        }, 600);
    }
}


const GetValue = () => {
    nameInput = document.getElementById('name').value;
    personHeightCm = document.getElementById('person-height').value;
    personWeight = document.getElementById('person-weight').value;
}


const Initialize = () => {
    GetValue();
    BMI();
}


btnCalculate.addEventListener('click', () => Initialize());
btnNew.addEventListener('click', () => location.reload());

   

