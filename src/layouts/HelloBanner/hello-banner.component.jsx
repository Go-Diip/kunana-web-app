import React from "react"
import * as S from "./hello-banner.styles"
import { Container, Grid } from "@mui/material"
import Banana from "../../assets/banana-gafas.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"

const HelloBanner = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "hello-bg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
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
      <S.BottomWrapper>
        <S.GreenBg img={staticQuery.backgroundImage} />
        <S.GreenBanner>
          {/*<S.GreenSection />*/}
          <S.CustomBottomContainer>
            <S.CustomPalm />
            <S.TextWrapper>
              <S.ContactTitle>
                Something good for yourself and the environment.
              </S.ContactTitle>
              <CustomButton className="yellow">Contact Us</CustomButton>
            </S.TextWrapper>
          </S.CustomBottomContainer>
        </S.GreenBanner>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}

export default HelloBanner
