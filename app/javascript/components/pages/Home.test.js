import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
  it("it has a welcome message heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const home =screen.getByRole('heading', {
      name: /welcome to tbmn realtors!/i
    })
    expect(home).toBeInTheDocument()
  })
  it("it has description of app", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const paragraph =screen.getByText(
      /get the flexibility you need\. rent the home of dreams, and move immediately\. all possible with tmn realtors!/i
      )
      expect(paragraph).toBeInTheDocument()
    })
})
