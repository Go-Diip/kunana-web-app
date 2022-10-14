import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Container, Typography } from "@mui/material"
import Banana from "../../assets/banana-gafas.svg"
import Green from "../../assets/green.svg"
import Palm from "../../assets/palmera.svg"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: #fff6e2;
  padding-bottom: 0;
`

export const TitleWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
`

export const BananaIcon = styled(Banana)`
  margin-top: -50px;
`

export const Description = styled(Typography)`
  line-height: 160%;
  color: #46281f;
  letter-spacing: -0.005em;
`

export const BottomWrapper = styled.div`
  margin-top: -5rem;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: 0;
  }
`

export const GreenBanner = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: 3rem 0;
  position: relative;
  z-index: 3;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 5rem 0;
  }
`
export const GreenBg = styled(CustomImage)`
  margin-bottom: -2px;
`

export const GreenSection = styled(Green)`
  position: absolute;
  left: 50%;
  bottom: 190px;
  transform: translateX(-50%);
  max-width: unset;
`

export const ContactTitle = styled(Typography)`
  color: white;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  font-size: 40px;
  line-height: 120%;
`

export const ExternalLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.palette.tertiary.dark};
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 0.5em 1.5em;
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 600 !important;
  border-radius: 50px;
  text-decoration: none;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.5em 3em;
  }

  &:hover {
    background-color: #e1b800;
  }
`

export const CustomPalm = styled(Palm)`
  position: absolute;
  left: 0;
  bottom: -3rem;
  z-index: 2;
  ${({ theme }) => theme.breakpoints.down("md")} {
    left: -2rem;
    bottom: -5rem;
  }
`

export const CustomBottomContainer = styled(Container)`
  position: relative;
`

export const TextWrapper = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 28px;
`
