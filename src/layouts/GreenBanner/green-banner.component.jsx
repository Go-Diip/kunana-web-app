import React from "react"
import * as S from "./green-banner.styles"
import Container from "@mui/material/Container"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, useMediaQuery, useTheme } from "@mui/material"

const GreenBanner = ({ firstText, firstImg, secondText, secondImg }) => {
  const theme = useTheme()
  const isSM = useMediaQuery(theme.breakpoints.down("md"))
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
          <Grid
            container
            alignItems="center"
            direction={isSM ? "column-reverse" : ""}
            spacing={{ md: 0, xs: 8 }}
          >
            <Grid item md={7} xs={12}>
              <S.Text>{firstText}</S.Text>
            </Grid>
            <Grid item md={5} xs={12}>
              <S.Image className="first-img" img={firstImg} alt="Bananas" />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={{ md: 0, xs: 2 }}>
            <Grid item md={7} xs={12}>
              <S.Image
                className="second-img"
                img={secondImg}
                alt="Banana con gafas"
              />
            </Grid>
            <Grid item md={5} xs={12}>
              <S.Text className="second-text">{secondText}</S.Text>
            </Grid>
          </Grid>
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default GreenBanner
