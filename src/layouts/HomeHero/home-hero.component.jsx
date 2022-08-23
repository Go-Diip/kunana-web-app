import React from "react"

import * as S from "./home-hero.styles"
import { Container, Grid } from "@mui/material"

const HomeHero = ({
  backgroundImage,
  logoImage,
  productImage,
  description,
}) => {
  return (
    <S.Wrapper id="homeHero">
      <S.Background img={backgroundImage} tag="div">
        <Container>
          <Grid container>
            <S.ImageGrid item xs={7} md={6}>
              <S.ProductImage img={productImage} />
            </S.ImageGrid>
            <Grid item xs={5} md={6}>
              <S.MainContainer>
                <S.LogoImage img={logoImage} />
                <S.Description>
                  Plant-based milk made FROM UP-CYCLED BANANAS
                </S.Description>
                <S.Button className="hero">
                  watch our story <S.PlayIcon />{" "}
                </S.Button>
              </S.MainContainer>
            </Grid>
          </Grid>
        </Container>
      </S.Background>
    </S.Wrapper>
  )
}

export default HomeHero
