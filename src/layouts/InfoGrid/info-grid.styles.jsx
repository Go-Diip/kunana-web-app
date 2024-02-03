import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: #fff6e2;
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
  margin-bottom: 0;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 29px;
  }
`

export const Image = styled(CustomImage)`
  height: 100%;
`

export const CustomGrid = styled(Grid)`
  &:not(:last-child) {
    ${({ theme }) => theme.breakpoints.down("md")} {
      margin-bottom: 2.75rem;
    }
  }

  .textGrid {
    display: flex;
  }
`

export const ImageGrid = styled(Grid)``

export const DescriptionWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 2rem 3.8rem 2rem 0;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 3rem 4.8rem 3rem 0;
  }

  margin: auto;

  &.spacing {
    ${({ theme }) => theme.breakpoints.up("md")} {
      padding: 2rem 0 2rem 3.8rem;
    }
    ${({ theme }) => theme.breakpoints.up("lg")} {
      padding: 3rem 0 3rem 4.8rem;
    }
  }
`
