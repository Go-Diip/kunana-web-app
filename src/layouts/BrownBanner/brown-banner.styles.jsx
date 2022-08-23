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
`

export const CustomContainer = styled(Container)`
  position: relative;
`

export const Sticker = styled(BananaIcon)`
  position: absolute;
  bottom: 0;
  right: 21%;
  z-index: 2;
`
