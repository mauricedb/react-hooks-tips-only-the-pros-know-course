import React, { ReactElement } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import { PersonEditor } from "../person-editor"
import { KimrofPersonEditor } from "../kimrof-person-editor"
import { Counter } from "../rules-of-hooks"

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/person-editor">
        <PersonEditor />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/kimrof-person-editor">
        <KimrofPersonEditor />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}
