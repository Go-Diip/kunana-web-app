import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"
import Banana from "../../assets/banana-gafas.svg"

export const Wrapper = styled(SectionWrapper)`
  background-color: #fff6e2;
`

export const TitleWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
`

export const BananaIcon = styled(Banana)`
  margin-top: -50px;
`

export const Description = styled(Typography)`
  line-height: 160%;
  color: #46281f;
  letter-spacing: -0.005em;
`
