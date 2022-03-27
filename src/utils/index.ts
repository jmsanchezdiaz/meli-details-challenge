export const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1);
export const uuid = () => Math.random().toString(36).substring(2, 9);
export const parsePrice = (price: number) =>
  Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(price);
export const parseCondition = (cond: string) =>
  ({new: "Nuevo", reaconditioned: "Reacondicionado", used: "Usado"}[cond]);
