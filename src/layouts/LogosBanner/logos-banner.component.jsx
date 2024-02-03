import React from "react"
import * as S from "./logos-banner.styles"
import Container from "@mui/material/Container"

const LogosBanner = ({ title, logos }) => {
  if (!logos) return null
  return (
    <S.Wrapper>
      <Container>
        <S.Title>{title}</S.Title>
        <S.Logos>
          {logos.map(({ logo, alt }, index) => (
            <S.Logo key={`logo-${index}`} img={logo} alt={alt} />
          ))}
        </S.Logos>
      </Container>
    </S.Wrapper>
  )
}

export default LogosBanner
