type Currency = "USD" | "EUR" | "UAN";

interface account {
  amount: number;
  currency: Currency;
}

function convertCurrency(obj: account): void {
  console.log(`Converting ${obj.amount} to ${obj.currency}`);
}

convertCurrency({ amount: 100, currency: "USD" });
