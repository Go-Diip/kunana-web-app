import React from "react"
import * as S from "./green-banner.styles"
import Container from "@mui/material/Container"
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "@mui/material"

const GreenBanner = ({ firstText, firstImg, secondText, secondImg }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      spot: file(relativePath: { eq: "spot-blue.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  return (
    <S.Wrapper>
      <S.SpotImg img={staticQuery.spot} />
      <Container>
        <S.ContentWrapper>
          <Grid container alignItems="center">
            <Grid item md={7}>
              <S.Text>{firstText}</S.Text>
            </Grid>
            <Grid item md={5}>
              <S.Image className="first-img" img={firstImg} />
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item md={7}>
              <S.Image className="second-img" img={secondImg} />
            </Grid>
            <Grid item md={5}>
              <S.Text className="second-text">{secondText}</S.Text>
            </Grid>
          </Grid>
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default GreenBanner
