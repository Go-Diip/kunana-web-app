import styled from "styled-components"
import { AppBar } from "@mui/material"
import HeaderLogo from "../../assets/header-logo.svg"
import CustomLink from "../custom-link/custom-link.component"
import { Link } from "react-scroll"

export const Nav = styled(AppBar)`
  //background-color: ${({ theme }) => theme.palette.primary.main};
  height: ${({ theme }) => theme.navHeight}px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    ${({ theme, isDark }) =>
      isDark
        ? `
    background-color: ${theme.palette.primary.main};
   `
        : `
    background-color: transparent;
   `};
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Logo = styled(HeaderLogo)`
  width: 37px;
  height: 52px;
`

export const LinksWrapper = styled.div``

export const ScrollLink = styled(Link)`
  cursor: pointer;
  padding: 15px;
  font-weight: bold;
  color: #332900;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 100%;
  transition: 0.3s all ease;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.dark};
  }
`
