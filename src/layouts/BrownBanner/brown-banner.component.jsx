import React from "react"
import * as S from "./brown-banner.styles"
import { Container, Grid } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

const BrownBanner = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      sticker: file(relativePath: { eq: "sticker-2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      spot: file(relativePath: { eq: "spot-tree.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.Spot img={staticQuery.spot} />
      <Container>
        <Grid container spacing={5}>
          <Grid item md={8} xs={12}>
            <S.Subtitle>
              Por suerte para el planeta, los plátanos no se tiran gases.
            </S.Subtitle>
            <S.Description>
              Ecuador es el mayor exportador de banano del mundo.
            </S.Description>
            <S.Description>
              Utilizar bananas “feas” evita el desperdicio de alimentos y ayuda
              a los agricultores locales y sus comunidades a generar mayores
              ingresos.
            </S.Description>
          </Grid>
          <Grid item md={4} xs={12}>
            <S.Sticker
              img={staticQuery.sticker}
              alt="Absolutamente Nutritiva Absurdamente Inesperado"
            />
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default BrownBanner
