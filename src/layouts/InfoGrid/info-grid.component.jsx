import React from "react"
import { Grid } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"

import * as S from "./info-grid.styles.jsx"

const InfoGrid = ({ items }) => {
  if (!items) return null
  return (
    <S.Wrapper contained>
      {items.map(({ image, title, description }, index) => (
        <S.CustomGrid
          container
          spacing={{ xs: 3, md: 4, lg: 10 }}
          key={`info-item-${index}`}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          alignItems={"center"}
        >
          <S.ImageGrid item xs={12} md={7}>
            <CustomImage img={image} />
          </S.ImageGrid>
          <S.DescriptionGrid item xs={12} md={5}>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.DescriptionGrid>
        </S.CustomGrid>
      ))}
    </S.Wrapper>
  )
}
export default InfoGrid
