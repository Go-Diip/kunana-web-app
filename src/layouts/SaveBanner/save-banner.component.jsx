import React from "react"
import { Grid } from "@mui/material"

import * as S from "./save-banner.styles.jsx"

const SaveBanner = ({ title, image }) => {
  if (!title && !image) return null

  return (
    <S.Wrapper contained>
      <Grid container spacing={2}>
        <S.TextGrid item xs={12} sm={8}>
          {title && <S.Title>{title}</S.Title>}
        </S.TextGrid>
        <S.ImageGrid item xs={12} sm={4}>
          {image && <S.Image img={image} />}
        </S.ImageGrid>
      </Grid>
    </S.Wrapper>
  )
}
export default SaveBanner
