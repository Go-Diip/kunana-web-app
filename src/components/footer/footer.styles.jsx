import styled from "styled-components"
import Logo from "../../assets/header-logo.svg"
import { Link } from "react-scroll"
import CustomInput from "../custom-input/custom-input.component"
import CustomButton from "../custom-button/custom-button.component"
import CustomImage from "../custom-image/custom-image.component"
import { Container, Typography } from "@mui/material"

export const BgImage = styled(CustomImage)`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`

export const Wrapper = styled.footer`
  position: relative;
  z-index: 2;
  //color: white;
  padding: 4em 0 3em;
  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
  }
`
export const CustomContainer = styled(Container)`
  position: relative;
  z-index: 3;
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: center;
    gap: 42px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FooterTitle = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(40)};
  line-height: 120%;
  max-width: 635px;
  width: 100%;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    max-width: unset;
    text-align: center;
    margin-bottom: 33px;
  }
`

export const FormWrapper = styled.div`
  position: relative;
`

export const CustomForm = styled.form`
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Input = styled(CustomInput)`
  position: relative;

  .MuiInput-underline:before {
    border-bottom-color: #46281f !important;
  }

  .MuiFormHelperText-root {
    position: absolute;
    bottom: -30px;
  }
  input {
    padding-right: 6rem;
  }
`

export const SubmitButton = styled(CustomButton)`
  position: absolute;
  right: 0;
  top: -0.2rem;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  ${({ theme }) => theme.breakpoints.down("md")} {
    top: 0;
  }
`

export const ErrorMessage = styled(Typography)`
  color: red;
  position: absolute;
  bottom: -30px;
`

export const SuccessMessage = styled(Typography)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(25)};
  line-height: 120%;
  max-width: 635px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`

export const FooterLogo = styled(Logo)`
  width: 140px;
  height: 190px;
`

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  border-bottom: 1px solid #bb9900;
  padding-bottom: 2rem;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 42px;
  }
`

export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const ExternalLink = styled.a`
  display: flex;
  text-decoration: none;
  transition: 0.3s all ease;
  color: #332900;
  border-bottom: 3px solid transparent;
  padding-bottom: 3px;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.dark};
  }
  &.diip {
    font-size: 12px;
    line-height: 100%;
  }

  .MuiSvgIcon-root {
    width: 26px;
    height: 26px;
  }
`

export const CustomScrollLink = styled(Link)`
  cursor: pointer;
  transition: 0.3s all ease;
  border-bottom: 3px solid transparent;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  line-height: 100%;
  color: ${({ theme }) => theme.palette.secondary.main};
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.dark};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`

export const TermsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

export const Label = styled.span`
  font-size: 12px;
  line-height: 100%;
`
