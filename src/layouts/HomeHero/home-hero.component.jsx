import React, { useState } from "react"

import * as S from "./home-hero.styles"
import { Container, Grid } from "@mui/material"

import LoadableModalVideo from "../../components/loadable-modal-video/loadable-modal-video"
import "react-modal-video/css/modal-video.css"
import Typewriter from "typewriter-effect"
import { TypewriterText } from "./home-hero.styles"
import { graphql, useStaticQuery } from "gatsby"

const HomeHero = ({
  backgroundImage,
  logoImage,
  productImage,
  stickerImage,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const staticQuery = useStaticQuery(graphql`
    query {
      spots: file(relativePath: { eq: "spots-hero.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper id="homeHero">
      <h1 class="visuallyhidden">Kunana</h1>

      <S.Background img={backgroundImage} />
      <S.CustomContainer maxWidth="md">
        <Grid container>
          <Grid item xs={12} md={6}>
            <S.MainContainer>
              {/*<S.LogoImage />*/}
              {/* <div>
                  <S.TypewriterText>
                    A PLANT-BASED
                    <Typewriter
                      options={{
                        strings: ["water,", "oatmilk,", "cow milk,"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </S.TypewriterText>
                </div>*/}
              <S.Subtitle>
                RESCATAMOS <span>BANANAS</span>
              </S.Subtitle>
              <S.Description>
                ¡LA PRIMERA BEBIDA DE BANANA SIN LÁCTEOS!
              </S.Description>
              <S.Sticker img={stickerImage} alt="100% Ecuatoriana 100% Deli" />
              {/*<S.Button className="hero" onClick={() => setIsOpen(true)}>*/}
              {/*  watch our story <S.PlayIcon />*/}
              {/*</S.Button>*/}
            </S.MainContainer>
          </Grid>
          <S.ImageGrid item xs={12} md={6}>
            <S.ProductImage
              loading="eager"
              img={productImage}
              alt="Kunana milk"
            />
            <S.Sticker
              className="mobile"
              img={stickerImage}
              alt="100% Ecuatoriana 100% Deli"
            />
          </S.ImageGrid>
        </Grid>
      </S.CustomContainer>
      <S.DividerBg>
        <S.Spots img={staticQuery.spots} />
      </S.DividerBg>
      {/*<LoadableModalVideo*/}
      {/*  channel="youtube"*/}
      {/*  isOpen={isOpen}*/}
      {/*  videoId="mtstgBB4XeA"*/}
      {/*  autoplay={1}*/}
      {/*  onClose={() => setIsOpen(false)}*/}
      {/*/>*/}
    </S.Wrapper>
  )
}

export default HomeHero
