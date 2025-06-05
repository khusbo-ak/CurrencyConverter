// const BASE_URL ="https://v6.exchangerate-api.com/v6/27f508d81862105c8acb44e0/latest/USD";
// const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";
const BASE_URL = "https://api.frankfurter.app/latest?";
const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
// console.log("🚀 ~ fromCurr:", fromCurr)
const toCurr = document.querySelector(".to select");
// console.log("🚀 ~ toCurr:", toCurr)
// for (code in countryList) {
//   console.log(code);
// }

for(let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "CNY") {
      newOption.selected = "selected";
    }
      else if (select.name === "to" && currCode === "BDT") {
        newOption.selected = "selected";
    }
    select.append(newOption);
}

select.addEventListener("change", (e) => {
  updateFlag(e.target);

});
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}

button.addEventListener("click", async(e) => {
  e.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  console.log(amountValue);

  if (amountValue === "" || amountValue <= 0) {
    alert("Please enter a valid amount");
   
    return;
  }
  // console.log(fromCurr.value, toCurr.value);
  
  console.log("🚀 ~ button.addEventListener ~ toCurr.value:", toCurr.value)
  console.log("🚀 ~ button.addEventListener ~ fromCurr.value:", fromCurr.value)
  const URL = `${BASE_URL}amount=${amountValue}&from=${fromCurr.value}&to=${toCurr.value}`;
  console.log("🚀 ~ button.addEventListener ~ URL:", URL)
// const URL = `https://latest.currency-api.pages.dev/v1/currencies/eur.json`;
 let response = await fetch(URL);
  console.log(response);
 const data = await response.json();
  console.log("🚀 ~ button.addEventListener ~ data:", data);
  let result = document.querySelector(".msg");
   console.log("🚀 ~ button.addEventListener ~ result:", result)
  result.innerText = `${amountValue} ${fromCurr.value} = ${data.rates[toCurr.value]} ${toCurr.value}`;
  // console.log(result);
  // console.log(data[toCurr.value]);
  // console.log(data[fromCurr.value]);
  // console.log(data[fromCurr.value][toCurr.value]);
  
});