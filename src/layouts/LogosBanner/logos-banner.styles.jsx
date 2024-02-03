import styled from "styled-components"
import CustomImage from "../../components/custom-image/custom-image.component"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: white;
  padding-top: 3.5rem;
  padding-bottom: 4rem;
`

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.375rem;
  letter-spacing: -0.005em;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 2.5rem;
    line-height: 3rem;
  } ;
`

export const Logos = styled.div`
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Logo = styled(CustomImage)`
  width: 100%;
  max-width: 261px;
  height: 131px;
  img {
    height: 131px;
    object-fit: contain !important;
  }
`
