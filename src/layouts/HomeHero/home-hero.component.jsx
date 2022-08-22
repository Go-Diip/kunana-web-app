import React from "react"

import * as S from "./home-hero.styles"
import { Grid } from "@mui/material"

const HomeHero = ({
  backgroundImage,
  logoImage,
  productImage,
  description,
}) => {
  return (
    <S.Wrapper>
      <S.Background img={backgroundImage}>
        <Grid container>
          <S.ImageGrid item xs={6}>
            <S.ProductImage img={productImage} />
          </S.ImageGrid>
          <Grid item xs={6}>
            <S.MainContainer>
              <S.LogoImage img={logoImage} />
              <S.Description>
                Plant-based milk made FROM UP-CYCLED BANANAS
              </S.Description>
              <S.Button>
                watch our story <S.PlayIcon />{" "}
              </S.Button>
            </S.MainContainer>
          </Grid>
        </Grid>
      </S.Background>
    </S.Wrapper>
  )
}

export default HomeHero
