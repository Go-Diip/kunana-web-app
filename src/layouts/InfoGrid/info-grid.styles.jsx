import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  background-color: #fff6e2;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 0;
    .MuiContainer-root {
      padding-right: 0;
    }
  }
`

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 29px;
  letter-spacing: -0.005em;
  color: #46281f;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(32)};
    line-height: 38px;
  }
`

export const Description = styled.p`
  font-weight: 325;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 25px;
  letter-spacing: -0.005em;
  color: #281712;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 29px;
  }
`

export const CustomGrid = styled(Grid)`
  &:not(:last-child) {
    margin-bottom: 2.75rem;
  }
`

export const ImageGrid = styled(Grid)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`

export const DescriptionGrid = styled(Grid)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-left: 1.5rem;
  }
`
