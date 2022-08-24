import styled from "styled-components"
import { TextField } from "@mui/material"

export const Wrapper = styled(TextField)`
  color: ${({ theme }) => theme.palette.text.content};
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .MuiFormLabel-root {
    color: ${({ theme }) => theme.palette.text.content};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    line-height: ${({ theme }) => theme.typography.pxToRem(27)};
  }

  .MuiInputBase-root {
    color: ${({ theme }) => theme.palette.text.content};
    padding-bottom: 9px;
  }

  .MuiOutlinedInput-input {
    padding: 13px 14px;
  }

  .MuiInputLabel-outlined,
  .MuiOutlinedInput-notchedOutline {
    color: ${({ theme }) => theme.palette.text.content} !important;
    border-color: ${({ theme }) => theme.palette.text.content} !important;
  }

  .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.palette.text.content};
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.42);
  }
  .MuiFormHelperText-root {
    color: red;
  }
`
