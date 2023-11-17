import { currency } from "remask";

export const maskMoney = (money: number) => {
  return currency.mask({ locale: "pt-BR", currency: "BRL", value: money });
};
