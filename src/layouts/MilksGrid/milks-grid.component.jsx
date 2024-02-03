import React from "react"
import { Grid } from "@mui/material"

import * as S from "./milks-grid.styles.jsx"

const MilksGrid = ({ items }) => {
  return (
    <S.Wrapper id="ourMilk">
      <Grid container>
        {items.map(({ image, title, background, spot }, index) => (
          <S.CustomGrid
            item
            xs={12}
            md={4}
            key={`milk-item-${index}`}
            background={background}
          >
            <S.ItemContainer>
              <S.Spot img={spot} />
              <S.Title>{title}</S.Title>
              <S.Image img={image} alt={title} />
            </S.ItemContainer>
          </S.CustomGrid>
        ))}
      </Grid>
    </S.Wrapper>
  )
}
export default MilksGrid
