import { Person } from "./person"
import { KimrofProperty } from "../kimrof-user-editor/kimrof/Types"

export interface IndexedPerson extends Person {
  [key: string]: KimrofProperty
}
