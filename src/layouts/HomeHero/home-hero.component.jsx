import React, { useState } from "react"

import * as S from "./home-hero.styles"
import { Container, Grid } from "@mui/material"

import LoadableModalVideo from "../../components/loadable-modal-video/loadable-modal-video"
import "react-modal-video/css/modal-video.css"

const HomeHero = ({
  backgroundImage,
  logoImage,
  productImage,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper id="homeHero">
      <h1 class="visuallyhidden">Kunana</h1>
      <S.Background img={backgroundImage} tag="div" loading="eager">
        <S.CustomContainer>
          <Grid container>
            <S.ImageGrid item xs={7} md={6}>
              <S.ProductImage
                loading="eager"
                img={productImage}
                alt="Kunana milk"
              />
            </S.ImageGrid>
            <Grid item xs={5} md={6}>
              <S.MainContainer>
                <S.LogoImage />
                <S.Description>
                  Plant-based milk made FROM UP-CYCLED BANANAS
                </S.Description>
                <S.Button className="hero" onClick={() => setIsOpen(true)}>
                  watch our story <S.PlayIcon />
                </S.Button>
              </S.MainContainer>
            </Grid>
          </Grid>
        </S.CustomContainer>
      </S.Background>
      <LoadableModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="mtstgBB4XeA"
        autoplay={1}
        onClose={() => setIsOpen(false)}
      />
    </S.Wrapper>
  )
}

export default HomeHero
