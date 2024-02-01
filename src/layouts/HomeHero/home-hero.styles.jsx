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
  overflow: hidden;
  position: relative;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 5rem;
  }
`

export const DividerBg = styled.div`
  width: 100%;
  height: 335px;
  clip-path: polygon(0% 0%, 100% 42%, 100% 100%, 0% 100%);
  background-color: ${({ theme }) => theme.palette.primary.light};
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const Background = styled(CustomBgImage)`
  padding-top: 4rem;
  padding-bottom: 1rem;
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

export const CustomContainer = styled(Container)``

export const ImageGrid = styled(Grid)`
  position: relative;
  overflow: visible;
`

export const ProductImage = styled(CustomImage)`
  position: relative;
  left: -68px;
  width: 110%;
  z-index: 4;

  ${({ theme }) => theme.breakpoints.down("sm")} {
  }
`

export const Spots = styled(CustomImage)``

export const MainContainer = styled.div`
  overflow: visible;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 375px;
    margin-top: 6rem;
    margin-right: 0;
    margin-left: auto;
  } ;
`

export const Sticker = styled(CustomImage)`
  width: 288px;
  margin-left: 1rem;
  position: relative;
  z-index: 4;
`

export const LogoImage = styled(LogoHero)`
  max-width: 280px;
  width: 100%;
  height: auto;
`

export const Subtitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: ${({ theme }) => theme.typography.pxToRem(88)};
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.pxToRem(88)};
  letter-spacing: -0.005em;
  text-align: left;
  color: ${({ theme }) => theme.palette.tertiary.dark};
  margin-bottom: 1.25rem;

  span {
    color: #fffcf8;
  }
`

export const Description = styled(Typography)`
  text-transform: uppercase;
  color: #46281f;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 120%;
  letter-spacing: -0.005em;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  margin-bottom: ${({ theme }) => theme.typography.pxToRem(43)};

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(35)};
    line-height: 120%;
  }
`

export const TypewriterText = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-family: ${({ theme }) => theme.fonts.tertiary};
  margin-top: 0.5rem;
  white-space: nowrap;
  text-transform: uppercase;
  color: #46281f;
  .Typewriter {
    display: inline-block;
    color: #00b2e4;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(48)};
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
