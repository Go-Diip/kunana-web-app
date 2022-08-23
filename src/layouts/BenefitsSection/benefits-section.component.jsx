import React from "react"
import { Grid, useMediaQuery, useTheme } from "@mui/material"

import CustomImage from "../../components/custom-image/custom-image.component"

import * as S from "./benefits-section.styles.jsx"

const BenefitsSection = ({ backgroundImage, tastyImg, benefits }) => {
  const theme = useTheme()
  const isMD = useMediaQuery(theme.breakpoints.down("md"))
  const isSM = useMediaQuery(theme.breakpoints.down("sm"))

  if (!benefits) return null

  return (
    <S.WrapperBackground img={backgroundImage}>
      <S.OverBackground>
        <S.CustomContainer>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent="center"
            direction={{ xs: "row-reverse", md: "row" }}
          >
            {!isSM && (
              <Grid item xs={12} sm={6} md={3}>
                <S.Image img={tastyImg} />
              </Grid>
            )}
            {!isMD ? (
              <Grid
                item
                container
                xs={12}
                sm={6}
                md={9}
                spacing={2}
                justifyContent="center"
              >
                {benefits.map(({ image, title, description }, index) => (
                  <Grid item xs={12} md={4} key={`benefit-item-${index}`}>
                    <S.BenefitItem>
                      {image}
                      <S.Title>{title}</S.Title>
                      <S.Description>{description}</S.Description>
                    </S.BenefitItem>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <>
                {benefits.map(({ image, title, description }, index) => (
                  <Grid item xs={12} sm={6} key={`benefit-item-${index}`}>
                    <S.BenefitItem>
                      {image}
                      <S.Title>{title}</S.Title>
                      <S.Description>{description}</S.Description>
                    </S.BenefitItem>
                  </Grid>
                ))}
                {isSM && (
                  <Grid item xs={12}>
                    <S.Image img={tastyImg} />
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </S.CustomContainer>
      </S.OverBackground>
    </S.WrapperBackground>
  )
}
export default BenefitsSection
