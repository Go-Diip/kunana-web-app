import React from "react"
import * as S from "./header.styles.jsx"
import { Container } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

const Header = () => {
  return (
    <S.Nav position="fixed" elevation={0}>
      <Container maxWidth="xl" style={{ height: "100%" }}>
        <S.Wrapper>
          <CustomLink url="/" style={{ display: "flex" }}>
            <S.Logo />
          </CustomLink>
          <S.LinksWrapper>
            <S.Link className="active">Home</S.Link>
            <S.Link>Our Milk</S.Link>
            <S.Link>Our Story</S.Link>
            <S.Link>Benefits</S.Link>
          </S.LinksWrapper>
        </S.Wrapper>
      </Container>
    </S.Nav>
  )
}
export default Header
