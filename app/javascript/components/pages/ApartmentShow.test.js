import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import "@testing-library/jest-dom"
import mockApartments from "../mockApartments"

const renderShow = () => {
  render(
  <MemoryRouter initialEntries={["/apartmentshow/1"]}>
    <Routes>
      <Route path="apartmentshow/:id" element={<ApartmentShow apartments={mockApartments}/>} />
    </Routes>
  </MemoryRouter>
  )
}
describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentShow apartments={mockApartments}/>, div)
  })
  it("has a heading with a street", () => {
    console.log("mockApartments", mockApartments)
    renderShow()
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(`${mockApartments[0].street}`)).toBeInTheDocument()
  })
})
