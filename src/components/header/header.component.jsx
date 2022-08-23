import React from "react"
import * as S from "./header.styles.jsx"
import { Container } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

const Header = () => {
  return (
    <S.Nav position="fixed" elevation={0}>
      <Container maxWidth="xl" style={{ height: "100%" }}>
        <S.Wrapper>
          <CustomLink url="/" style={{ display: "flex" }}>
            <S.Logo />
          </CustomLink>
          <S.LinksWrapper>
            <S.ScrollLink
              spy={true}
              smooth={true}
              offset={-100}
              className="active"
              to="homeHero"
            >
              Home
            </S.ScrollLink>
            <S.ScrollLink>Our Milk</S.ScrollLink>
            <S.ScrollLink>Our Story</S.ScrollLink>
            <S.ScrollLink>Benefits</S.ScrollLink>
          </S.LinksWrapper>
        </S.Wrapper>
      </Container>
    </S.Nav>
  )
}
export default Header
