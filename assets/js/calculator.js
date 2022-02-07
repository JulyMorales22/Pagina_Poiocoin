const DOLAR_API = "https://s3.amazonaws.com/dolartoday/data.json";
const POICOIN_EUR = 9519;
const POICOIN_COP =33037109;
const POICOIN_GBP =11272.5;
const POICOIN_USD =8350;

let inputNum = document.getElementById("numIngresado");
let  investment = document.getElementById("inversion");
let buttonCal = document.getElementById("Calcular");
let cod = document.getElementById("moneda");
let  investmentValue;

const showValue = (value) =>{
    investment.value=value;
}

const calculator =()=>{
    let total =0;
   let select = cod.value;
    if ((inputNum.value)!="" & select !="Seleccione su moneda") {
        if (inputNum.value >0) {
            investmentValue=inputNum.value;
            if (select=="EUR") {
                total = investmentValue / POICOIN_EUR;
                showValue(total);
            } else if(select =="GBP"){
                total = investmentValue / POICOIN_GBP;
                showValue(total);
            } else if(cod=="COP"){
                 total = investmentValue / POICOIN_COP;
                 showValue(total);
            }else if(select=="USD"){
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

const clean =() =>{
    inputNum.value ="";
    investment.value="";
}

buttonCal.onclick = function(){
    calculator();
    
}

cod.onchange= function(){
    clean();
}