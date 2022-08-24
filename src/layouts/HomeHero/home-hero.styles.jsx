import styled from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import Play from "../../assets/icons/play-icon.svg"
import { Grid } from "@mui/material"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import LogoHero from "../../assets/logo-hero.svg"

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
  overflow: visible;
  position: relative;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 5rem;
  }
`

export const Background = styled(CustomBgImage)`
  padding-top: 2.5em;
  padding-bottom: 3.3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: visible;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 0;
    padding-bottom: 1rem;

    .gatsby-image-wrapper {
    }
  }
`

export const CustomContainer = styled(Container)`
  padding-top: 4rem;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 0;
  }
`

export const ImageGrid = styled(Grid)`
  position: relative;
  overflow: visible;
`

export const ProductImage = styled(CustomImage)`
  max-width: 480px;
  width: 100%;
  position: absolute;
  z-index: 4;
  right: -25px;
  bottom: -220px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    bottom: -150px;
    width: 263px;
  }
`

export const MainContainer = styled.div`
  max-width: 350px;
  overflow: visible;
`

export const LogoImage = styled(LogoHero)`
  max-width: 280px;
  width: 100%;
`

export const Description = styled(Typography)`
  text-transform: uppercase;
  color: #46281f;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 120%;
  letter-spacing: -0.005em;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(35)};
    line-height: 120%;
  }
`

export const Button = styled(CustomButton)`
  background-color: #46281f;
  border-radius: 16px;
  padding: 1rem;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 16px;

  &:hover {
    background-color: #715852;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 24px;
  }
`

export const PlayIcon = styled(Play)`
  width: 48px;
  margin-left: 0.75rem;
`
