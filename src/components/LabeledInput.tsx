import React, { forwardRef, InputHTMLAttributes, ReactElement } from "react"
import classNames from "classnames"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const LabeledInput = forwardRef<HTMLInputElement, Props>(
  ({ id, label, className, error, ...props }, ref): ReactElement => {
    return (
      <div className={classNames("form-group", className)}>
        <label htmlFor={id} className="form-label">
          {label}
        </label>

        <input {...props} id={id} className="form-control" ref={ref} />
        {error ? <div className="invalid-feedback d-block">{error}</div> : null}
      </div>
    )
  }
)

LabeledInput.displayName = "LabeledInput"
