type Currency = "USD" | "EUR" | "UAN";

interface ConvertedSum {
  amount: number;
  currency: Currency;
}

function convertCurrency(convertedSum: ConvertedSum): void {
  console.log(`Converting ${convertedSum.amount} to ${convertedSum.currency}`);
}

convertCurrency({ amount: 100, currency: "USD" });
