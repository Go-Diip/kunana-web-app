import React from "react"
import * as S from "./brown-banner.styles"
import { Container } from "@mui/material"

const BrownBanner = () => {
  return (
    <S.Wrapper>
      <S.CustomContainer>
        <S.Sticker />
        <S.Description>
          We think Imperfect bananas make a pretty perfect drink. We upcycle a
          bunch of them.
        </S.Description>

        <S.StickerResponsive />
      </S.CustomContainer>
    </S.Wrapper>
  )
}

export default BrownBanner
