import React from "react"

import * as S from "./product-properties.styles.jsx"
import { Grid } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

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
    <S.Wrapper>
      {/* <S.FlexContainer>*/}
      <Grid container>
        <Grid item xs={12} md={5}>
          <S.Image img={productImage} />
        </Grid>
        <Grid item xs={12} md={7}>
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
      {/*</S.FlexContainer>*/}
    </S.Wrapper>
  )
}
export default ProductProperties
