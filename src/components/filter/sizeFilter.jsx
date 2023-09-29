import {
  SizeBtn,
  SizeStyle,
  ViewCartBtn,
  MainContainer,
} from "./SizeFilterStyled";
import {useNavigate} from 'react-router-dom'
function SizeFilter() {
  const navigate = useNavigate()
  return (
    <MainContainer>
      <SizeStyle>
        <p>Sizes : </p>
        <SizeBtn>S</SizeBtn>
        <SizeBtn>M</SizeBtn>
        <SizeBtn>L</SizeBtn>
        <SizeBtn>XL</SizeBtn>
      </SizeStyle>
      <ViewCartBtn onClick={()=>navigate('/view-cart')}>View Cart</ViewCartBtn>
    </MainContainer>
  );
}

export default SizeFilter;
