import React from "react"
import { Grid } from "@mui/material"

import * as S from "./milks-grid.styles.jsx"

const MilksGrid = ({ items }) => {
  return (
    <S.Wrapper>
      <Grid container>
        {items.map(({ image, title, background }, index) => (
          <S.CustomGrid
            item
            xs={12}
            md={4}
            key={`milk-item-${index}`}
            background={background}
          >
            <S.ItemContainer>
              <S.Image img={image} />
              <S.Title>{title}</S.Title>
            </S.ItemContainer>
          </S.CustomGrid>
        ))}
      </Grid>
    </S.Wrapper>
  )
}
export default MilksGrid
