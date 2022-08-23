import styled from "styled-components"
import Slider from "react-slick"
import { Grid } from "@mui/material"

import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import CustomImage from "../../components/custom-image/custom-image.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 2.8rem;
    padding-bottom: 5.8rem;
  }

  .swiper {
    width: 100%;
    padding: 1.5rem 5rem;
    display: block;
    overflow: visible;

    @media (min-width: 400px) {
      padding: 2.5rem 8rem;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding: 0;
      overflow: hidden;
    }
  }
`

export const ContentGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(32)};
  line-height: 120%;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  color: ${({ theme }) => theme.palette.text.light};
  max-width: 280px;
  letter-spacing: -0.005em;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(48)};
  }
`

export const ButtonGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`

export const Button = styled(CustomButton)`
  color: ${({ theme }) => theme.palette.tertiary.dark};
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 140%;
  border-radius: 100px;
  padding: 0.75rem 5.1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 1.3rem 4.6rem;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  }
`

export const SlideItem = styled.div`
  max-width: 290px;
  width: 100%;
`

export const SlideImage = styled(CustomImage)`
  height: 100%;
  width: 100%;
`
