import React from "react"
import { Grid } from "@mui/material"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as S from "./recipes-slider.styles.jsx"
import CustomImage from "../../components/custom-image/custom-image.component"

const RecipesSlider = ({ title, recipes }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (!recipes) return null
  console.log(recipes)

  return (
    <S.Wrapper>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <S.ContentGrid item xs={12} md={5}>
          <S.Title>{title}</S.Title>
          <S.Button>view recipes</S.Button>
        </S.ContentGrid>
        <Grid item xs={12} md={7}>
          <S.CustomSlider {...settings}>
            {recipes.map(({ image }, index) => (
              <S.SlideItem key={`slider-item-${index}`}>
                <S.SlideImage img={image} arPaddingPercentage={114} />
              </S.SlideItem>
            ))}
          </S.CustomSlider>
        </Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default RecipesSlider
