import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  } ;
`

export const SpotImg = styled(CustomImage)`
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: visible;

  width: 566%;
  height: 157%;

  bottom: 67%;
  left: 175%;

  transform: translate(-50%, 50%) rotate(-25deg) !important;

  ${({ theme }) => theme.breakpoints.up("md")} {
    transform: translate(-50%, 50%) rotate(-9deg) !important;
    bottom: 60%;
    left: 50%;
    width: 175%;
    height: 175%;
  }

  .gatsby-image-wrapper {
    overflow: visible;
  }
`
export const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  &.second {
    top: -25px;
    .text {
      max-width: 388px;
      text-align: center;
    }

    .img {
      min-width: 315px;
      max-width: 315px;
    }
  }
`

export const Text = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: 2.5rem;
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.pxToRem(49)};
  letter-spacing: -0.005em;
  text-align: left;
  color: #f9f9f9;
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }

  &.second-text {
    text-align: center;
  }
`
export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled(CustomImage)`
  display: flex;

  margin: auto;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-left: 5rem;
  }

  &.second-img {
    max-width: 313px;
    min-width: 313px;
  }

  &.first-img {
    max-width: 228px;
    min-width: 228px;

    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-right: 3rem;
    }
  }
`
