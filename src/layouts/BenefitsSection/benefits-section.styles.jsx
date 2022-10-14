import styled from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Container } from "@mui/material"
import CustomImage from "../../components/custom-image/custom-image.component"
import Sticker from "../../assets/sticker-green.svg"

export const WrapperBackground = styled(CustomBgImage)`
  background-color: #fff6e2;
  z-index: unset;
`

export const OverBackground = styled.div`
  background: linear-gradient(187deg, #ffd100 10%, transparent calc(10% + 2px));
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    background: linear-gradient(
      182deg,
      #ffd100 13%,
      transparent calc(13% + 2px)
    );
  }
`

export const Image = styled(CustomImage)`
  max-width: 190px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 210px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 240px;
  }
`

export const CustomSticker = styled(Sticker)`
  max-width: 250px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 270px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 300px;
  }
`

export const CustomContainer = styled(Container)`
  padding-top: 5em;
  padding-bottom: 3em;

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiGrid-root {
      display: flex;
      justify-content: center;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 6em;
    padding-bottom: 1em;
  }
`

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;

  width: 100%;
  max-width: 270px;

  svg {
    width: 40px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: 2rem;
  }
`

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 28px;
  letter-spacing: -0.005em;
  color: #46281f;
  text-align: center;
  margin: 0.5rem 0;
`

export const Description = styled.div`
  font-weight: 325;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.005em;
  margin: 0;
`
