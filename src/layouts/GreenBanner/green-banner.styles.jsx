import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import Typography from "@mui/material/Typography"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
`

export const SpotImg = styled(CustomImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

  &.second-text {
    text-align: center;
  }
`
export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled(CustomImage)`
  display: flex;
  margin-left: 5rem;
  &.second-img {
    max-width: 313px;
    min-width: 313px;
  }

  &.first-img {
    max-width: 228px;
    min-width: 228px;
    margin-right: 3rem;
  }
`
