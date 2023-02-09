import React from "react"
import { Button, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            <Button>Home</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">
            <Button>View Listings</Button>
          </NavLink>
        </NavItem>
        {logged_in && (
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              <Button>Sign Out</Button>
            </a>
          </NavItem>
        )}
        {logged_in && (
          <>
            <NavItem>
              <NavLink to="/apartmentshow/:id" className="nav-link">
                <Button>My Listings</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentcreate" className="nav-link">
                <Button>Create Listing</Button>
              </NavLink>
            </NavItem>
          </>
        )}
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              <Button>Sign In</Button>
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={new_user_route} className="nav-link">
              <Button>Sign Up</Button>
            </a>
          </NavItem>
        )}
      </Nav>
    </>
  )
}

export default Navigation
