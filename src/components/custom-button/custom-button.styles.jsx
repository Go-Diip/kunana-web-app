import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LoadingButton } from "@mui/lab"
import { darken } from "@mui/system"

export const CustomButton = styled(LoadingButton)`
  color: white;
  background-color: ${({ theme, color }) =>
    theme.palette[color]
      ? theme.palette[color].main
      : theme.palette.primary.main};
  padding: 0.5em 1.5em;
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 600 !important;
  border-radius: 50px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.5em 3em;
  }
  &.light {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.hero {
    &:hover {
      background-color: #715852;
    }
  }

  &.brown {
    background-color: #5b3529;
    &:hover {
      background-color: #715852;
    }
  }

  &.yellow {
    color: #46281f;
    background-color: #ffd100;
    &:hover {
      background-color: #e1b800;
    }
  }

  &.darkBorder {
    color: black;
    border: 1px black solid;
    background-color: transparent;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.lightBorder {
    color: white;
    border: 1px white solid;
    background-color: transparent;
  }

  &:not(.light):not(.darkBorder):not(.hero):not(.brown):not(.yellow):hover {
    background-color: ${({ theme, color }) =>
      darken(
        theme.palette[color]
          ? theme.palette[color].main
          : theme.palette.primary.main,
        0.1
      )};
    //border: 1px solid ${({ theme }) =>
      darken(theme.palette.primary.main, 0.1)};
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }

  .MuiCircularProgress-root {
    width: 22px !important;
    height: 22px !important;
  }
  .text {
    ${({ loading }) => (loading ? "opacity: 0" : "opacity: 1")};
  }
`

export const CustomButtonLink = styled(AniLink)`
  color: white;
  background-color: ${({ theme, color }) =>
    theme.palette[color]
      ? theme.palette[color].main
      : theme.palette.primary.main};
  padding: 0.5em 1.5em;
  text-transform: unset;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  min-height: 40px;

  &.light {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.darkBorder {
    color: ${({ theme }) => theme.palette.primary.main};
    border: 1px ${({ theme }) => theme.palette.primary.main} solid;
    background-color: transparent;

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }

  &.lightBorder {
    color: white;
    border: 1px white solid;
    background-color: transparent;
  }

  &:not(.light):not(.darkBorder):hover {
    background-color: ${({ theme, color }) =>
      darken(
        theme.palette[color]
          ? theme.palette[color].main
          : theme.palette.primary.main,
        0.1
      )};
    //border: 1px solid ${({ theme }) =>
      darken(theme.palette.primary.main, 0.1)};
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }
`
