import { HeaderCartPgStyle } from "./HeaderStyled";
import { TotalItems } from "../../pages/CartPage/CartPage";

export default function HeaderCartPg() {
  return <HeaderCartPgStyle>Total No.of Items : { <TotalItems />}</HeaderCartPgStyle>;
}
