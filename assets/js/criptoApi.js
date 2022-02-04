const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false}';

let nightModeActive = false;

/**
 * Para controlar los datos que se van mostrando de
 * las criptomonedas
 */
let from = 0;
let to = 3;
const add = 3;
const limit = 100;

const getAPI = async (url) => {
    try {
        const res = await fetch(url);
        const jsonData = await res.json();
        fillData(jsonData), pagination();
    } catch (er) {
        console.log("Hubo un error en la API, " + er);
    }

}

const fillData = (data) => {
    let html = "";
    let ids = ['One', 'Two', 'Three', 'Four', 'Five'];
    let j = 0;

    for (let i = from; i < to; i++) {

        if(i<limit){
            const element = data[i];
            html += `<div class="accordion-item ${(nightModeActive) ? "accordionContent" : ""}" id="accordion${j}">
                    <h2 class="accordion-header" id="heading${ids[j]}">
                    <button class="accordion-button collapsed ${(nightModeActive) ? "dark-mode3" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${ids[j]}" aria-expanded="false" aria-controls="collapse${ids[j]}" id="btnAccordion${j}">
                        <img src="${element.image}" alt="">
                        <h4>${element.name}</h4>
                    </button>
                    </h2>
                    <div id="collapse${ids[j]}" class="accordion-collapse collapse" aria-labelledby="heading${ids[j]}" data-bs-parent="#accordionExample">
                    <div class="accordion-body criptoInfo">
                        <ul>
                            <li>${element.name}</li>
                            <li>${element.symbol}</li>
                            <li>Rank: ${element.market_cap_rank}</li>
                            <li>$${element.current_price}</li>
                            <li>Equivale a 2000 PC</li>
                        </ul>
                    </div>
                    </div>
                </div>`;
        j++;
        }
    }

    document.getElementById("accordionExample").innerHTML=html;

}

const pagination = (goToPrev=null, goToNext=null) =>{
    let btn = "";
    let callFunction = false;

    if(goToPrev & goToNext==false){
        to = from;
        from -= add;
        callFunction=true;
    }else if(goToPrev==false & goToNext==true){
        from = to;
        to += add;
        callFunction=true;
    }

    if(callFunction){
        getAPI(API);
    }

    btn += `<li class="page-item ${(from<=0) ? "disabled" : ""} ${(localStorage.getItem("nightMode")==true) ? "prevNext" : ""} " id="prev"> <a class="page-link" onclick="pagination(true, false)">Prev</a> </li>`;

    btn += `<li class="page-item ${(to>=limit) ? "disabled" : ""} ${(localStorage.getItem("nightMode")==true) ? "prevNext" : ""} " id="next"> <a class="page-link" onclick="pagination(false, true)">Next</a> </li>`;

    document.getElementById("criptoPagination").innerHTML=btn;

}

getAPI(API);
