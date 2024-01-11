import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentStatus?: boolean | null;
  paymeontIntent?: string | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
