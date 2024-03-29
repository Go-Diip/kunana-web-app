import React from "react"
import { Grid } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./product-properties.styles.jsx"

const ProductProperties = ({ productImage, proteinImage, properties }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      points: file(relativePath: { eq: "points.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  if (!properties) return null
  return (
    <S.Wrapper id="ourBenefits">
      <Grid container>
        <Grid item xs={12} md={6}>
          <S.Image img={productImage} alt="Jugo de banano" />
        </Grid>
        <Grid item xs={12} md={6}>
          <S.PointBgImage img={staticQuery.points} tag="div">
            <S.BgImage img={proteinImage} tag="div">
              {properties.map(({ title, description }, index) => (
                <div key={`property-item-${index}`}>
                  <S.Title>{title}</S.Title>
                  <S.Description>{description}</S.Description>
                </div>
              ))}
            </S.BgImage>
          </S.PointBgImage>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default ProductProperties
