import styled from "styled-components"
import Logo from "../../assets/header-logo.svg"
import { Link } from "react-scroll"

export const Wrapper = styled.footer`
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

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterLogo = styled(Logo)`
  width: 121px;
  height: 170px;
`

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  border-bottom: 1px solid #bb9900;
  padding-bottom: 2rem;
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
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.dark};
  }
`

export const CustomScrollLink = styled(Link)`
  transition: 0.3s all ease;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.palette.primary.dark};
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

export const Label = styled.span``
