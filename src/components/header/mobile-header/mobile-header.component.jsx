import { Fade, useTheme } from "@mui/material"
import React from "react"
import * as S from "./mobile-header.styles"
import CloseIcon from "../../../assets/close-icon.svg"
// import HeaderMobileItem from "./header-mobile-item/header-mobile-item.component"
import { use100vh } from "react-div-100vh"
// import { useLocation } from "@reach/router"

const MobileHeader = ({
  isActiveMenu,
  items,
  children,
  setIsActiveMenu,
  handleClose,
}) => {
  const height = use100vh()
  const theme = useTheme()
  const wrapperHeight = height
    ? `${height - theme.navHeight}px`
    : `calc(100vh - ${theme.navHeight}px)`

  const removeSlash = string => {
    return string.replace("/", "")
  }
  return (
    <Fade in={isActiveMenu} mountOnEnter unmountOnExit>
      <S.HeaderMobile>
        <CloseIcon onClick={() => setIsActiveMenu(false)} />
        <S.LinksWrapper>
          <S.ScrollLink
            spy={true}
            smooth={true}
            offset={-100}
            to="homeHero"
            onClick={() => setIsActiveMenu(false)}
          >
            Inicio
          </S.ScrollLink>
          <S.ScrollLink
            spy={true}
            offset={-100}
            smooth={true}
            to="ourStory"
            onClick={() => setIsActiveMenu(false)}
          >
            ¿Por qué Kunana?
          </S.ScrollLink>
          <S.ScrollLink
            spy={true}
            smooth={true}
            offset={-100}
            to="ourMilk"
            onClick={() => setIsActiveMenu(false)}
          >
            Sabores
          </S.ScrollLink>

          <S.ScrollLink
            spy={true}
            smooth={true}
            offset={-100}
            to="ourBenefits"
            onClick={() => setIsActiveMenu(false)}
          >
            Nutrición
          </S.ScrollLink>
        </S.LinksWrapper>
      </S.HeaderMobile>
    </Fade>
  )
}

export default MobileHeader
