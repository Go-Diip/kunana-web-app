import React from "react"

import { Container, Grid } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"

import * as S from "./benefits-section.styles.jsx"

const BenefitsSection = ({ backgroundImage, tastyImg, benefits }) => {
  if (!benefits) return null

  return (
    <S.WrapperBackground img={backgroundImage}>
      <S.OverBackground>
        <S.CustomContainer>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            direction={{ xs: "row-reverse", md: "row" }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <CustomImage img={tastyImg} />
            </Grid>
            <Grid item container xs={12} sm={6} md={9} spacing={2}>
              {benefits.map(({ image, title, description }, index) => (
                <Grid item xs={12} lg={4} key={`benefit-item-${index}`}>
                  <S.BenefitItem>
                    {image}
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                  </S.BenefitItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </S.CustomContainer>
      </S.OverBackground>
    </S.WrapperBackground>
  )
}
export default BenefitsSection
