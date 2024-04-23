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
              Por suerte para el planeta, las bananas no se tiran gases.
            </S.Subtitle>
            <S.Description>
              Las vacas producen metano durante la digestión, un gas de efecto invernadero que contribuye al calentamiento global y sea una fuente de contaminación ambiental.
            </S.Description>
            <S.Description>
              Nuestros tres sabores Kunana generan muchas menos emisiones de CO2 que la leche de vaca y utilizan menos agua que otras bebidas vegetales. ¡Bananas para el planeta! Nos encanta cómo suena.
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
