import React from "react"
import parse from "html-react-parser"

import { Grid, useMediaQuery, useTheme } from "@mui/material"

import * as S from "./benefits-section.styles.jsx"
import Container from "@mui/material/Container"

const BenefitsSection = ({ backgroundImage, tastyImg, benefits, title }) => {
  if (!benefits) return null

  return (
    <S.WrapperBackground>
      <Container>
        <S.Title>{title}</S.Title>
        <Grid
          container
          spacing={4}
          alignItems={"flex-start"}
          justifyContent="center"
        >
          {benefits.map(({ image, title, description }, index) => (
            <Grid item xs={12} sm={4} key={`benefit-item-${index}`}>
              <S.BenefitItem>
                <div>{image}</div>
                <S.Subtitle>{title}</S.Subtitle>
                <S.Description>{parse(description)}</S.Description>
              </S.BenefitItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </S.WrapperBackground>
  )
}
export default BenefitsSection
