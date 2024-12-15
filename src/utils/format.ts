interface TFormatNumberOptions {
  withCurrency?: string;
  withDecimal?: number;
}

export const formatCurrency = (amount: number, currency: string = "IDR") => {
  if (!amount) {
    amount = 0;
  }

  return amount?.toLocaleString("id-ID", {
    style: "currency",
    currency: currency,
  });
};

export function formatNumber(value: number, options?: TFormatNumberOptions) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: options?.withCurrency ?? "IDR",
    minimumFractionDigits: options?.withDecimal ?? 0,
    maximumFractionDigits: options?.withDecimal ?? 0,
  });

  return options?.withCurrency
    ? formatter.format(value)
    : formatter
        .formatToParts(value)
        .filter(({ type }) => !["currency", "literal"].includes(type))
        .map(({ value }) => value)
        .join("");
}
