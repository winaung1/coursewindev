console.log('Welcome to the Currency Converter!')

const exhangeRates = {
  USD : {EUR: 0.85, GBP: 0.65, JPY: 110.0},
  EUR : {USD: 1.18, GBP: 0.75, JPY: 130.0},
  GBP : {USD: 1.85, EUR: 1.65, JYP: 180.0},
  JPY : {USD: 0.0085, GBP: 0.0065, EUR: 0.0008},
}

function showCurrencies(){
  console.log("Available currencies: USD, EUR, GBP, JPY")
}

function convertCurrency(amount, fromCurrency, toCurrency){

  if(exhangeRates[fromCurrency] && exhangeRates[fromCurrency][toCurrency]){
    const rate = exhangeRates[fromCurrency][toCurrency]
    const convertedAmount =  amount * rate
    return convertedAmount;
  } else {
    return null;
  }
}

function currencyConverter(){
  showCurrencies()

  const fromCurrency = prompt("Enter the source: ex. USD").toUpperCase()
  const toCurrency = prompt("Enter the target currency: ex. (EUR)").toUpperCase()

  const amount = parseFloat(prompt("Enter the amount to convert:"))

  if(isNaN(amount) || amount <= 0){
    console.log("Invalid")
    return;
  }

  const result = convertCurrency(amount, fromCurrency, toCurrency)

  if(result !== null){
    console.log(`${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`)
  } else {
    console.log('Invalid Currency Pair, please check again')
  }
}

currencyConverter()