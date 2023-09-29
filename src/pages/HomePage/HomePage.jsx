import { Data } from "../../Data/ClothData";
import {
  ClothsContainer,
  ParentContainer,
  ProductContainer,
} from "./HomePageStyle";
import { AddToCartBtn } from "../../Constants/Button";
import SizeFilter from "../../components/filter/sizeFilter";
import { StyleImage } from "../../Constants/Images";

const storeClickedData = [];
let countItems = 0;

function HandleButtonClick(datas) {
  countItems += 1;
  storeClickedData.push(datas);
  localStorage.setItem("DatasId", JSON.stringify(storeClickedData));
}

export function FetchDatas() {
  return Data.map((datas) => {
    return (
      <ClothsContainer>
        <StyleImage
          src={datas.image_url}
          alt="picture is un-available"
          height="100px"
          width="100px"
        />
        <p>{datas.name}</p>
        <p>Rs : {datas.price}</p>
        <b>{datas.size}</b>

        <div className="addToCartBtn">
          <AddToCartBtn
            className="AddToCartButton"
            id={datas.id}
            onClick={() => {
              HandleButtonClick(datas);
            }}
          >
            Add To Cart
          </AddToCartBtn>
        </div>
      </ClothsContainer>
    );
  });
}

function HomePage() {
  return (
    <div>
      <ParentContainer>
        <SizeFilter />
        <ProductContainer>
          <FetchDatas />
        </ProductContainer>
      </ParentContainer>
    </div>
  );
}

export default HomePage;
