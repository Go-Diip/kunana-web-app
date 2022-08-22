import styled from "styled-components"
import Logo from "../../assets/header-logo.svg"

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
  width: 138px;
  height: 170px;
`
