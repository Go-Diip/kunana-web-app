import React from "react"

import * as S from "./footer.styles"
import { Container } from "@mui/material"

import InstagramIcon from "../../assets/insta.svg"
import FbIcon from "../../assets/fb.svg"
import YtIcon from "../../assets/yt.svg"

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <Container maxWidth="xl">
        <S.TopWrapper>
          <S.FooterLogo />
        </S.TopWrapper>
        <S.BottomWrapper>
          <S.SocialIconsWrapper>
            <S.ExternalLink href="/" target="_blank">
              <InstagramIcon />
            </S.ExternalLink>
            <S.ExternalLink href="/" target="_blank">
              <FbIcon />
            </S.ExternalLink>
            <S.ExternalLink href="/" target="_blank">
              <YtIcon />
            </S.ExternalLink>
          </S.SocialIconsWrapper>
          <S.LinksWrapper>
            <S.CustomScrollLink>Home</S.CustomScrollLink>
            <S.CustomScrollLink>Our Milk</S.CustomScrollLink>
            <S.CustomScrollLink>Our Story</S.CustomScrollLink>
            <S.CustomScrollLink>Our Benefits</S.CustomScrollLink>
          </S.LinksWrapper>
        </S.BottomWrapper>
        <S.TermsWrapper>
          <S.Label>Livekuna {new Date().getFullYear()}</S.Label>
          <S.ExternalLink href="https://godiip.com" target="_blank">
            Powered by DIIP
          </S.ExternalLink>
        </S.TermsWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
