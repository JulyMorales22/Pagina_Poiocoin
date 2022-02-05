const DOLAR_API = "https://s3.amazonaws.com/dolartoday/data.json";
const POICOIN_EUR = 9519;
const POICOIN_COP =33037109;
const POICOIN_GBP =11272.5;
const POICOIN_USD =8350;

let inputNum = document.getElementById("numIngresado");
let  investment = document.getElementById("inversion");
let buttonCal = document.getElementById("Calcular");
let  investmentValue;

const showValue = (value) =>{
    investment.value=value;
}

const calculator =()=>{
    let total =0;
let cod = document.getElementById("moneda").value;
    if ((inputNum.value)!="" & cod !="Seleccione su moneda") {
        if (inputNum.value >0) {
            investmentValue=inputNum.value;
            if (cod=="EUR") {
                total = investmentValue / POICOIN_EUR;
                showValue(total);
            } else if(cod =="GBP"){
                total = investmentValue / POICOIN_GBP;
                showValue(total);
            } else if(cod="COP"){
                 total = investmentValue / POICOIN_COP;
                 showValue(total);
            }else if(cod=="USD"){
                total= investmentValue / POICOIN_USD;
                showValue(total);
            }
        }else{
            alert("Ingrese un valor valido");
        }
    }else{
        alert("Escriba un valor y escoja una moneda");
    }

}

buttonCal.onclick = function(){
    calculator();
    
}