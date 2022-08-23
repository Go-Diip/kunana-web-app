import React from "react"
import { Grid } from "@mui/material"

import * as S from "./product-properties.styles.jsx"

const ProductProperties = ({ productImage, proteinImage }) => {
  return (
    <S.Wrapper>
      <S.FlexContainer>
        <S.Image img={productImage} />
        <S.BgImage img={proteinImage} tag="div"></S.BgImage>
      </S.FlexContainer>
    </S.Wrapper>
  )
}
export default ProductProperties
