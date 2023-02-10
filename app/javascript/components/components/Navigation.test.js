import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Navigation from "./Navigation"
import '@testing-library/jest-dom'

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInTheDocument()
  })
  it("has clickable link to view listings", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )

    const listings = screen.getByRole('button', {
      name: /view listings/i
    })
    expect(listings).toBeInTheDocument()
  })
  it("has clickable link to sign in", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const sign_in = screen.getByRole('button', {
      name: /sign in/i
    })
    expect(sign_in).toBeInTheDocument()
  })
  it("has clickable link to sign out", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const sign_up = screen.getByRole('button', {
      name: /sign up/i
    })
    expect(sign_up).toBeInTheDocument()
  })
})
