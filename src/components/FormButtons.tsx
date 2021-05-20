import React, { ReactElement } from "react"

interface Props {
  submitVisible?: boolean
  submitDisabled?: boolean
  cancelVisible?: boolean
  cancelDisabled?: boolean
  cancelFn?: () => void
}

export function FormButtons({
  submitVisible,
  cancelVisible,
  cancelDisabled,
  submitDisabled,
  cancelFn,
}: Props): ReactElement {
  return (
    <div className="btn-group">
      {cancelVisible ? (
        <button
          type="reset"
          className="btn btn-danger"
          disabled={cancelDisabled}
          onClick={cancelFn}
        >
          Cancel
        </button>
      ) : null}

      {submitVisible ? (
        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitDisabled}
        >
          Submit
        </button>
      ) : null}
    </div>
  )
}
