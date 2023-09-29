import { useEffect } from "react";
import { CartImages } from "../../Constants/Images";
import FooterShowTotalPrice from "../../components/Footer/Footer";
import HeaderCartPg from "../../components/Header/Header";
import { BoxContainer, ViewCartContainer } from "./CartPageStyle";

//get the data from LS
const getData = localStorage.getItem("DatasId");
const convertData = JSON.parse(getData);

//calculate the total price

export function TotalPrice() {
  let totalPrice = 0;
  convertData.map((datas) => {
    totalPrice += datas.price;
  });
  return "Total : " + totalPrice;
}

export function TotalItems(){
  let countItems = 0;
  convertData.map((datas) => {
    countItems += 1;
  });
  
  return countItems;
  
}
// //show the items
// function DisplayCart() {
 
//     );
//   });
// }

//Main method
function CartPage() {
  useEffect(() => {

  } , [getData])
  return (
    <div>
      <HeaderCartPg />
      <DisplayCart />
      <FooterShowTotalPrice />
    </div>
  );
}

export default CartPage;
