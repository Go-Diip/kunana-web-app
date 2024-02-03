import React from "react"
import { Grid } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"

import * as S from "./info-grid.styles.jsx"

const InfoGrid = ({ items }) => {
  if (!items) return null
  return (
    <S.Wrapper contained id="ourStory">
      {items.map(({ image, alt, title, description }, index) => (
        <S.CustomGrid
          container
          key={`info-item-${index}`}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          spacing={{ xs: 1.25, md: 0 }}
        >
          <Grid item xs={12} md={6}>
            <S.Image img={image} alt={alt} />
          </Grid>
          <Grid className="textGrid" item xs={12} md={6}>
            <S.DescriptionWrapper className={index % 2 === 0 && "spacing"}>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.DescriptionWrapper>
          </Grid>
        </S.CustomGrid>
      ))}
    </S.Wrapper>
  )
}
export default InfoGrid
