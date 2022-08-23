import React from "react"
import * as S from "./hello-banner.styles"
import { Container, Grid } from "@mui/material"
import Banana from "../../assets/banana-gafas.svg"
import CustomButton from "../../components/custom-button/custom-button.component"

const HelloBanner = () => {
  return (
    <S.Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <S.TitleWrapper>
              <S.Title>Lucky for the planet, bananas don’t fart.</S.Title>
              <S.Description>
                Saving the world’s water supply, one banana at a time. Less CO2.
                Less Water. More BANANA. Bananas for the planet. We love the
                sound of it.
              </S.Description>
            </S.TitleWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <S.BananaIcon />
          </Grid>
        </Grid>
      </Container>
      <S.GreenBanner>
        <S.GreenSection />
        <S.CustomBottomContainer>
          <S.CustomPalm />
          <S.ContactTitle>
            Something good for yourself and the environment.
          </S.ContactTitle>
          <CustomButton className="yellow">Contact Us</CustomButton>
        </S.CustomBottomContainer>
      </S.GreenBanner>
    </S.Wrapper>
  )
}

export default HelloBanner