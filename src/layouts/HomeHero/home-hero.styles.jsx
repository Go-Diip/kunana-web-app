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
  padding-top: 3rem;
  position: relative;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 7.5rem;
  }
`

export const DividerBg = styled.div`
  width: 100%;
  height: 620px;
  clip-path: polygon(0% 0%, 100% 16%, 100% 100%, 0% 100%);
  background-color: ${({ theme }) => theme.palette.primary.light};
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: -5px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 335px;
    clip-path: polygon(0% 0%, 100% 42%, 100% 100%, 0% 100%);
  }
`

export const Background = styled(CustomImage)`
  position: absolute;
  width: 450%;
  height: 400%;
  display: flex;
  justify-content: center;
  overflow: visible;
  bottom: 74%;
  left: 16%;

  transform: translate(-50%, 50%) rotate(-32deg) !important;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 200%;
    height: 200%;
    bottom: 70%;
    left: 50%;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    bottom: 50%;
    left: 41%;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    bottom: 39%;
    left: 41%;
  }

  .gatsby-image-wrapper {
    overflow: visible;
  }

  img {
    object-fit: contain !important;
  }
`

export const CustomContainer = styled(Container)`
  position: relative;
  z-index: 4;
`

export const ImageGrid = styled(Grid)`
  position: relative;
  overflow: visible;
`

export const ProductImage = styled(CustomImage)`
  position: relative;
  left: -68px;
  width: 110%;
  z-index: 4;

  ${({ theme }) => theme.breakpoints.down("md")} {
    left: 0;
    width: 110%;
    transform: rotate(-5deg);
    img {
      //max-height: 600px;
      object-fit: contain !important;
    }

    .gatsby-image-wrapper {
      div:first-child {
        padding-top: 100% !important;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 150%;
    left: -70px;
    img {
      //max-height: 475px;
      object-fit: contain !important;
    }
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

  display: none;
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: block;
  }

  &.mobile {
    display: block;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 155px;
    }
  }
`

export const LogoImage = styled(LogoHero)`
  max-width: 280px;
  width: 100%;
  height: auto;
`

export const Subtitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: ${({ theme }) => theme.typography.pxToRem(64)};
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.pxToRem(64)};
  letter-spacing: -0.005em;
  text-align: left;
  color: ${({ theme }) => theme.palette.tertiary.dark};
  margin-bottom: 1.25rem;

  span {
    color: #fffcf8;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(88)};
    line-height: ${({ theme }) => theme.typography.pxToRem(88)};
  } ;
`

export const Description = styled(Typography)`
  text-transform: uppercase;
  color: #46281f;
  font-size: ${({ theme }) => theme.typography.pxToRem(32)};
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
