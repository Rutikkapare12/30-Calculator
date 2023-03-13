const inputFirstEl = document.getElementById("input-first");
const inputSecondEl = document.getElementById("input-second");
const operatorEl = document.querySelectorAll(".operator");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
const calculate = document.getElementById("calculation-btn");
const resetEl = document.getElementById("reset"); 

let selectedOperator = "";

operatorEl.forEach((operatorEl) => {
    operatorEl.addEventListener("click", (event)=>{
        removeActive();
        selectedOperator = event.target.innerText;
        event.target.classList.add("active");
        switch(selectedOperator){
            case "+":
                errorEl.classList.add("error");
                errorEl.innerText = "Addition"; 
                break;
            case "-":
                errorEl.classList.add("error");
                errorEl.innerText = "Subtration"; 
                break;
            case "x":
                errorEl.classList.add("error");
                errorEl.innerText = "Multiplication"; 
                break;
            case "/":
                errorEl.classList.add("error");
                errorEl.innerText = "Division"; 
                break;
        }
    })
})


calculate.addEventListener("click", ()=>{
    if(inputFirstEl.value == ""){
        errorEl.classList.add("error");
        errorEl.innerText = "Please enter data in field 1";
    } else if(inputSecondEl.value == ""){
        errorEl.classList.add("error");
        errorEl.innerText = "Please enter data in field 2";
    } else if(selectedOperator == ""){
        errorEl.classList.add("error");
        errorEl.innerText = "select operator + - * /";
    } else {
        console.log(selectedOperator);
        switch(selectedOperator){
            case "+":
                 resultEl.value = Number(inputFirstEl.value) + Number(inputSecondEl.value);
                 break;
            case "-":
                resultEl.value = Number(inputFirstEl.value) - Number(inputSecondEl.value);
                break;
            case "x":
                resultEl.value = Number(inputFirstEl.value) * Number(inputSecondEl.value);
                break;
            case "/":
                resultEl.value = Number(inputFirstEl.value) / Number(inputSecondEl.value);
                break;
        }
    }
})

function removeActive(){
    operatorEl.forEach((operatorEl) => {
        operatorEl.classList.remove("active");
    })
}

resetEl.addEventListener("click", ()=>{
    inputFirstEl.value = "";
    inputSecondEl.value = "";
    errorEl.innerText = "";
    errorEl.classList.remove("error");
    resultEl.value = "";
    operatorEl.forEach((operatorEl) => {
        operatorEl.classList.remove("active");
    });
})