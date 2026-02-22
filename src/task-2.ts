type Currency = "USD" | "EUR" | "UAN";

interface CurrencyParams {
  amount: number;
  currency: Currency;
}

// function convertCurrency(currencyData: CurrencyParams): void {
//   console.log(`Converting ${currencyData.amount} to ${currencyData.currency}`);
// }

function convertCurrency({ amount, currency }: CurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: "USD" });
