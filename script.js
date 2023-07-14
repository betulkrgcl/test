
const baseURL = "./api.json"
const datas= fetch(baseURL).then((response)=>response.json()).then((data)=>(data));
document.addEventListener("DOMContentLoaded", () => {
    controlInput();
});

const controlInput = () => {
    const exchangeInput = document.querySelector(".exchange__input input");
    console.log(exchangeInput.innerText.length);

    exchangeInput.addEventListener("input", () => {
        if (!exchangeInput.innerText.length > 0) {
            removeDisabled();
            // changeUnit();
        }

    })
}
const removeDisabled = () => {

    const button = document.querySelector(".exchange__button");
    button.removeAttribute("disabled");

}
const startProcess = () => {
   
  

    const button = document.querySelector(".exchange__button");
    button.addEventListener("click", () => {
        
    })
}
const unitArray = ["USD", "EUR" , "GSP", "GA", "C", "GAG", "BTC","ETH", "XU100"];
const createOption = async ()=> {
    const data = await datas;
    let html = `<option value="seçiniz">seçiniz</option>`;
    unitArray.forEach((unit)=>{
       html+=  `<option value="${unit}">${unit}</option>`
    })
    const select1 = document.querySelector(".exchange__select__from");
    const select2 = document.querySelector(".exchange__select__to");
    select1.innerHTML = html;
    select2.innerHTML = html;
}

createOption();
startProcess();

// Emreye ait yeni kod ekleniyor

console.log("Starting emre code");