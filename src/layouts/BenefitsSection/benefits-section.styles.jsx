import styled from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { Container } from "@mui/material"

export const WrapperBackground = styled(CustomBgImage)`
  background-color: #fff6e2;
`

export const OverBackground = styled.div`
  background: linear-gradient(182deg, #ffd100 13%, transparent calc(13% + 2px));
  width: 100%;
  height: 100%;
`

export const CustomContainer = styled(Container)`
  padding-top: 3em;
  padding-bottom: 3em;
`

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 270px;

  svg {
    width: 40px;
  }
`

export const Title = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 28px;
  letter-spacing: -0.005em;
  color: #46281f;
  text-align: center;
  margin: 0.5rem 0;
`

export const Description = styled.p`
  font-weight: 325;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.005em;
  margin: 0;
`
