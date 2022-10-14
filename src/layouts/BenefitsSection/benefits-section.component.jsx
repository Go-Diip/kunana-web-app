import React from "react"
import parse from "html-react-parser"

import { Grid, useMediaQuery, useTheme } from "@mui/material"

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
            <S.MobileSMGrid item xs={12} sm={6} md={3} className="down-sm">
              <S.CustomSticker />
            </S.MobileSMGrid>
            <>
              {benefits.map(({ image, title, description }, index) => (
                <Grid item xs={12} sm={6} md={3} key={`benefit-item-${index}`}>
                  <S.BenefitItem>
                    <div>{image}</div>
                    <S.Title>{title}</S.Title>
                    <S.Description>{parse(description)}</S.Description>
                  </S.BenefitItem>
                </Grid>
              ))}
              <S.MobileSMGrid item xs={12} className="up-sm">
                <S.Image img={tastyImg} />
              </S.MobileSMGrid>
            </>
          </Grid>
        </S.CustomContainer>
      </S.OverBackground>
    </S.WrapperBackground>
  )
}
export default BenefitsSection
