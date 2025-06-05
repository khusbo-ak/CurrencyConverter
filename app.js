const BASE_URL ="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hsGM9ASe16VrvbHriYS6nqRhRbNayakUYCsfItyV";
const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
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
    console.log(fromCurr.value, toCurr.value);

 const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
 let response = await fetch(URL);
  console.log(response);

  
});