import React, { ReactElement } from "react"
import { BrowserRouter } from "react-router-dom"

import "./App.css"

import { AppNavbar, Routes } from "./components"

export function App(): ReactElement {
  return (
    <div className="container">
      <BrowserRouter>
        <AppNavbar />
        <Routes />
      </BrowserRouter>
    </div>
  )
}
