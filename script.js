const convertButton = document.querySelector(".convert-button");


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor em real
    const currencyValueConverted = document.querySelector(".currency-value"); //valor convertido em outras moedas
    
    const dolarToday = 5.25; // Example conversion rate
    
    const convertedValue = inputCurrencyValue / dolarToday

    console.log(convertedValue);
}

convertButton.addEventListener("click", convertValues)