const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor em real
    const currencyValueConverted = document.querySelector(".currency-value"); //valor convertido em outras moedas

    const dolarToday = 5.2 // Example conversion rate
    const euroToday = 6.2 // Example conversion rateinputCurrencyValue / dolarToday
    const libraToday = 7.2 // Example conversion rate


    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".EUA");

    if (currencySelect.value === "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/estados-unidos (1) 1.png";
    }

    if (currencySelect.value === "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/europa.png";
    }

    if (currencySelect.value === "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1.png";
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)