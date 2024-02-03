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
  overflow: hidden;
  padding-top: 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 4rem;
  } ;
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
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 12.5rem 0 7.2rem;
  }
`
export const GreenBg = styled(CustomImage)`
  margin-bottom: -2px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
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
  font-size: 2.5rem;
  line-height: 120%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 225px;
    display: block;
    margin-left: auto;
    margin-right: 0;
    font-size: 2rem;
    line-height: 120%;
  } ;
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
    left: -5rem;
    bottom: -5rem;
    height: 484px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    left: -5rem;
    bottom: -7.5rem;
    height: 484px;
  }
`

export const BananaRock = styled(CustomImage)`
  position: relative;
  bottom: -50px;
  height: 100%;
  max-height: 500px;
  max-width: 500px;
  display: flex;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    bottom: -70px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    img {
      object-fit: contain !important;
      max-height: 500px;
      max-width: 500px;
    }
    margin-left: auto;
    margin-right: 0;
    bottom: -75px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    bottom: 0;
    width: 125%;
    height: 125%;
    left: -2rem;
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

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-bottom: 3rem;
  } ;
`
