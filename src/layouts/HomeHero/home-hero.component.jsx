import React from "react"

import * as S from "./home-hero.styles"

const HomeHero = ({
  backgroundImage,
  logoImage,
  productImage,
  description,
}) => {
  return (
    <S.Wrapper>
      <S.ProductImage img={productImage} />
      <S.Background img={backgroundImage}>
        <S.MainContainer>
          <S.LogoImage img={logoImage} />
          <S.Description>
            Plant-based milk made FROM UP-CYCLED BANANAS
          </S.Description>
          <S.Button>
            watch our story <S.PlayIcon />{" "}
          </S.Button>
        </S.MainContainer>
      </S.Background>
    </S.Wrapper>
  )
}

export default HomeHero
