import React from "react"
import * as S from "./header.styles.jsx"
import { Container, useScrollTrigger } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

const Header = () => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <S.Nav
      position="fixed"
      isDark={scrollTrigger}
      elevation={scrollTrigger ? 4 : 0}
    >
      <Container maxWidth="xl" style={{ height: "100%" }}>
        <S.Wrapper>
          <CustomLink url="/" style={{ display: "flex" }}>
            <S.Logo />
          </CustomLink>
          <S.LinksWrapper>
            <S.ScrollLink spy={true} smooth={true} offset={-100} to="homeHero">
              Home
            </S.ScrollLink>
            <S.ScrollLink spy={true} smooth={true} offset={-100} to="ourMilk">
              Our Milk
            </S.ScrollLink>
            <S.ScrollLink spy={true} offset={-100} smooth={true} to="ourStory">
              Our Story
            </S.ScrollLink>
            <S.ScrollLink
              spy={true}
              smooth={true}
              offset={-100}
              to="ourBenefits"
            >
              Benefits
            </S.ScrollLink>
          </S.LinksWrapper>
        </S.Wrapper>
      </Container>
    </S.Nav>
  )
}
export default Header
