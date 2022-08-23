import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
`

export const ContentGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2``
