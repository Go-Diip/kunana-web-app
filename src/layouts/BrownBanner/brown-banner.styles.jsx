import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Container, Typography } from "@mui/material"
import BananaIcon from "../../assets/sticker-banana.svg"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.typography.pxToRem(50)} 0;
  }

  .MuiContainer-root {
    position: relative;
    z-index: 4;
  }
`

export const Subtitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  max-width: 470px;
  font-weight: 400;
  font-size: 40px;
  line-height: 140%;
  color: white;
  letter-spacing: -0.03em;
  margin-bottom: 2.5rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: unset;
  }
`

export const Description = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 325;
  line-height: 2rem;
  text-align: left;
  color: white;
`

export const Sticker = styled(CustomImage)`
  max-width: 349px;
  margin: auto;
  display: block;
`

export const StickerResponsive = styled(BananaIcon)`
  width: 100%;
  max-width: 180px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`

export const Spot = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
