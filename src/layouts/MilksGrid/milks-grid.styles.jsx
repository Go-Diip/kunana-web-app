import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const CustomGrid = styled(Grid)`
  background-color: ${({ background }) => background};
  color: ${({ background }) =>
    background === "#FFD100" ? "#5B3529" : "#F9F9F9"};
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Spot = styled(CustomImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(37)};
  line-height: 29px;
  letter-spacing: -0.005em;
  align-items: center;
  margin-top: 3.9rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(48)};
    line-height: 57px;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  position: relative;
`
