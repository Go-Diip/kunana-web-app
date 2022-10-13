import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const CustomGrid = styled(Grid)`
  background-color: ${({ background }) => background};
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: ${({ background }) =>
    background === "#FFD100" ? "#5B3529" : "#F9F9F9"};

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 5rem;
    padding-bottom: 6.5rem;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const Image = styled(CustomImage)`
  width: 100%;
  max-width: 115px;
  margin-bottom: 1rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 220px;
    margin-bottom: 1.9rem;
  }
`

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 29px;
  letter-spacing: -0.005em;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(48)};
    line-height: 57px;
  }
`
