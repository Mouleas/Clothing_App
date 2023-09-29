import { TotalPriceCartPgStyle } from "./FooterStyled";
import { TotalPrice } from "../../pages/CartPage/CartPage";

export default function FooterShowTotalPrice() {
  return (
    <div>
      <TotalPriceCartPgStyle>
        <TotalPrice />
      </TotalPriceCartPgStyle>
    </div>
  );
}
