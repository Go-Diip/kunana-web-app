import styled from "styled-components"
import { Box } from "@mui/material"
import { Link } from "react-scroll"

export const HeaderMobile = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 2rem 1rem 2.875rem 2.875rem;
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
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.8rem;
  height: 100%;
  padding-top: 2rem;
`

export const ScrollLink = styled(Link)`
  font-weight: bold;
  line-height: 100%;
  color: #332900 !important;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  transition: 0.3s all ease;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.dark};
  }
`
