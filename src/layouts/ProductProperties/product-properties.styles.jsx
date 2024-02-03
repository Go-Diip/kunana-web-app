import styled from "styled-components"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const Image = styled(CustomImage)`
  height: 100%;
`

export const PointBgImage = styled(CustomBgImage)`
  width: 100%;
  height: 100%;
`

export const BgImage = styled(CustomBgImage)`
  max-width: 530px;

  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    img {
      object-fit: contain !important;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 3.8rem 1rem;
  }
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 29px;
  font-weight: 400;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.palette.tertiary.dark};
  font-family: ${({ theme }) => theme.fonts.tertiary};

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(32)};
    line-height: 38px;
  }
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 22px;
  font-weight: 325;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.palette.tertiary.dark};

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 25px;
  }
`
