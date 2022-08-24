import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Container, useScrollTrigger, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import MobileIcon from "../../assets/icon-menu.svg"

import CustomLink from "../custom-link/custom-link.component"
import MobileHeader from "./mobile-header/mobile-header.component"

const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <S.Nav position="fixed" isDark={scrollTrigger} elevation={0}>
      <Container maxWidth="xl" style={{ height: "100%" }}>
        <S.Wrapper>
          <CustomLink url="/" style={{ display: "flex" }}>
            <S.Logo />
          </CustomLink>
          {isMobile ? (
            <S.MobileButton onClick={() => setIsActiveMenu(true)}>
              <MobileIcon />
            </S.MobileButton>
          ) : (
            <S.LinksWrapper>
              <S.ScrollLink
                spy={true}
                smooth={true}
                offset={-100}
                to="homeHero"
              >
                Home
              </S.ScrollLink>
              <S.ScrollLink
                spy={true}
                offset={-100}
                smooth={true}
                to="ourStory"
              >
                Our Story
              </S.ScrollLink>
              <S.ScrollLink spy={true} smooth={true} offset={-100} to="ourMilk">
                Our Milk
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
          )}
        </S.Wrapper>
        <MobileHeader
          // items={HEADER_ITEMS}
          isActiveMenu={isActiveMenu}
          setIsActiveMenu={setIsActiveMenu}
          handleClose={() => setIsActiveMenu(false)}
        />
      </Container>
    </S.Nav>
  )
}
export default Header
