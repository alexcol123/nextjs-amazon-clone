import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "paymeontIntent";

export const OrderTitle = (record: TOrder): string => {
  return record.paymeontIntent?.toString() || String(record.id);
};
