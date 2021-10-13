import React, { InputHTMLAttributes, ReactElement } from "react"
import classNames from "classnames"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const LabeledInput = ({
  id,
  label,
  className,
  error,
  ...props
}: Props) => {
  return (
    <div className={classNames("form-group", className)}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      <input {...props} id={id} className="form-control" />
      {error ? <div className="invalid-feedback d-block">{error}</div> : null}
    </div>
  )
}

LabeledInput.displayName = "LabeledInput"
