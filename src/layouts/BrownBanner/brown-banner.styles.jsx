import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Container, Typography } from "@mui/material"
import BananaIcon from "../../assets/sticker-banana.svg"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
`

export const Description = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  max-width: 685px;
  font-weight: 400;
  font-size: 40px;
  line-height: 140%;
  color: white;
  letter-spacing: -0.03em;

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 280px;
  }
`

export const CustomContainer = styled(Container)`
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Sticker = styled(BananaIcon)`
  position: absolute;
  display: none;
  bottom: 0;
  right: 15%;
  z-index: 2;

  @media (min-width: 900px) {
    right: 0;
    display: block;
  }

  @media (min-width: 1000px) {
    right: 5%;
  }

  @media (min-width: 1150px) {
    right: 21%;
  }
`

export const StickerResponsive = styled(BananaIcon)`
  width: 100%;
  max-width: 180px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`
