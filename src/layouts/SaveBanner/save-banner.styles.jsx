import styled from "styled-components"
import Container from "@mui/material/Container"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding-top: 1rem;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.palette.primary.light};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 3rem;

    .MuiContainer-root {
      padding-right: 0;
    }
  }
`

export const TextGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(48)};
  line-height: 58px;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.palette.primary.dark};
  text-align: center;
  max-width: 275px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(64)};
    line-height: 76px;
    max-width: 100%;
    width: 100%;
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  max-width: 310px;
`
