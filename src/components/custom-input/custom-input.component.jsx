import React from "react"
import * as S from "./custom-input.styles.jsx"
// import FormError from "../form-error/form-error.component"

const CustomInput = props => {
  const {
    children,
    name,
    className,
    errors,
    customError,
    isRequired,
    rows,
    register,
    rowsMax,
    label,
    type = "text",
  } = props

  const getError = () => {
    if (errors[name]) {
      if (customError) {
        return customError
      }
      return "This is a required field"
    }
  }

  return (
    <>
      <S.Wrapper
        fullWidth
        multiline={!!rows || !!rowsMax}
        error={!!errors[name]}
        variant="standard"
        rows={rows}
        rowsMax={rowsMax}
        required={!!isRequired}
        className={className}
        // placeholder={label}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">{children}</InputAdornment>
        //   ),
        // }}
        // variant="outlined"
        color="secondary"
        label={label}
        type={type}
        helperText={getError()}
        {...register(name, { required: isRequired })}
      />
    </>
  )
}
export default CustomInput
