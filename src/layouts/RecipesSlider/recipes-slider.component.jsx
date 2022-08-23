import React from "react"
import { Grid, useMediaQuery, useTheme } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import * as S from "./recipes-slider.styles.jsx"

const RecipesSlider = ({ title, recipes }) => {
  const theme = useTheme()
  const isSM = useMediaQuery(theme.breakpoints.down("sm"))

  if (!recipes) return null

  return (
    <S.Wrapper>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <S.ContentGrid item xs={12} md={5}>
          <S.Title>{title}</S.Title>
          {!isSM && <S.Button>view recipes</S.Button>}
        </S.ContentGrid>
        <Grid item xs={12} md={7}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
          >
            {recipes.map(({ image }, index) => (
              <SwiperSlide key={`slider-item-${index}`}>
                <S.SlideImage img={image} arPaddingPercentage={114} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        {isSM && (
          <S.ButtonGrid item xs={12}>
            <S.Button>view recipes</S.Button>
          </S.ButtonGrid>
        )}
      </Grid>
    </S.Wrapper>
  )
}
export default RecipesSlider
