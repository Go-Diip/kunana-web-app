import styled from "styled-components"
import { AppBar } from "@mui/material"
import HeaderLogo from "../../assets/header-logo.svg"
import { Link } from "react-scroll"

export const Nav = styled(AppBar)`
  //background-color: ${({ theme }) => theme.palette.primary.main};
  height: ${({ theme }) => theme.navHeight}px;
  a {
    color: ${({ theme }) => theme.palette.text.tertiary};
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.palette.text.tertiary};
    }
  }
  &.transparent {
    background-color: transparent;
    a {
      color: ${({ theme }) => theme.palette.text.light};
      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.palette.text.light};
      }
    }
  }

  transition: all 0.3s ease;
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
  font-weight: 400;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.light};
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 100%;
  transition: 0.3s all ease;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.text.light};
  }
`

export const MobileButton = styled.div``
