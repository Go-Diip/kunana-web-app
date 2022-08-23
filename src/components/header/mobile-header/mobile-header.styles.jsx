import styled from "styled-components"
import { Box } from "@mui/material"
import { Link } from "react-scroll"

export const HeaderMobile = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 1.5rem;
  z-index: 9999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }

  svg {
    margin-right: 0;
    margin-left: auto;
  }
`

export const LinksWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  height: 100%;
`

export const ScrollLink = styled(Link)`
  font-weight: 400;
  line-height: 100%;
  color: #332900;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  transition: 0.3s all ease;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.dark};
  }
`
