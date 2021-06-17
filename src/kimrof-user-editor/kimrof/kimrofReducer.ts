import { KimrofObject, KimrofProperty } from "./Types"

interface SetPropertyAction {
  type: "set-property"
  payload: { name: string; value: KimrofProperty }
}

type SomeAction = SetPropertyAction

export interface Metadata {
  isDirty: boolean
  isValid: boolean
}

interface ReducerState {
  values: KimrofObject
  metadata: Metadata
}

export function kimrofReducer(
  state: ReducerState,
  action: SomeAction
): ReducerState {
  return state
}
