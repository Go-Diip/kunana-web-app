import styled from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import Play from "../../assets/icons/play-icon.svg"

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
  overflow: visible;
  position: relative;
`

export const Background = styled(CustomBgImage)`
  padding-top: 2.5em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: visible;
`

export const MainContainer = styled.div`
  max-width: 350px;
  overflow: visible;
`

export const LogoImage = styled(CustomImage)`
  max-width: 280px;
`

export const ProductImage = styled(CustomImage)`
  width: 550px;
  position: absolute;
  z-index: 4;
  bottom: -68px;
`

export const Description = styled.p`
  text-transform: uppercase;
  color: #46281f;
  font-size: ${({ theme }) => theme.typography.pxToRem(35)};
  line-height: 120%;
  letter-spacing: -0.005em;
`

export const Button = styled(CustomButton)`
  background-color: #46281f;
  border-radius: 16px;
  padding: 1rem;
`

export const PlayIcon = styled(Play)`
  width: 48px;
  margin-left: 0.75rem;
`
