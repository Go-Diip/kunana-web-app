import styled from "styled-components"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const FlexContainer = styled.div`
  display: flex;
`

export const Image = styled(CustomImage)`
  width: 100%;
  max-width: 634px;
`

export const BgImage = styled(CustomBgImage)`
  width: 515px;

  height: 100%;
`
