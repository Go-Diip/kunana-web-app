import React from "react"

import * as S from "./recipes-slider.styles.jsx"
import { Grid } from "@mui/material"

const RecipesSlider = () => {
  return (
    <S.Wrapper>
      <Grid container spacing={2}>
        <S.ContentGrid item xs={12} md={4}></S.ContentGrid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </S.Wrapper>
  )
}
export default RecipesSlider
