import React from 'react'

function CartComponent(props) {
    const datas = props.datas
    return convertData.map((datas) => {

        return (
          <ViewCartContainer>
            <BoxContainer>
              <div>
              <CartImages src={datas.image_url} alt="picture is un-available" />
            </div>
            <div>
              <p>{datas.name}</p>
              <p>{datas.size}</p>   
            </div>
            </BoxContainer>
            
          </ViewCartContainer>
        );
    }
    )
}

export default CartComponent