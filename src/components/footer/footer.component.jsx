import React from "react"

import * as S from "./footer.styles"
import { Container } from "@mui/material"

const Footer = ({ className }) => {
  return (
    <S.Wrapper className={className}>
      <Container maxWidth="xl">
        <S.TopWrapper>
          <S.FooterLogo />
        </S.TopWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
