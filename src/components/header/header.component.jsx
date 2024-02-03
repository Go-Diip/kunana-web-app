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
    <S.Nav
      position="fixed"
      className={!scrollTrigger ? "transparent" : ""}
      elevation={0}
    >
      <Container style={{ height: "100%" }}>
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
                href="#homeHero"
                spy={true}
                smooth={true}
                offset={-100}
                to="homeHero"
              >
                Inicio
              </S.ScrollLink>
              <S.ScrollLink
                href="#ourStory"
                spy={true}
                offset={-100}
                smooth={true}
                to="ourStory"
              >
                Nuestra historia
              </S.ScrollLink>
              <S.ScrollLink
                href="#ourMilk"
                spy={true}
                smooth={true}
                offset={-100}
                to="ourMilk"
              >
                Nuestra bebida
              </S.ScrollLink>
              <S.ScrollLink
                href="#ourBenefits"
                spy={true}
                smooth={true}
                offset={-100}
                to="ourBenefits"
              >
                Beneficios
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
