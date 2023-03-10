import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({ apartments }) => {
  return (
    <main className="apartment-index-cards">
      <h1>Apartment App</h1>
      {apartments?.map((apartment, index) => {
        return (
          <Card
            style={{
              width: "18rem"
            }}
            key={index}
          >
            <CardBody>
              <CardTitle tag="h5">
                {apartment.street}
              </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
            {apartment.city}, {apartment.state}
            </CardSubtitle>
            </CardBody>
            <img
              alt={`Picture of ${apartment.street}`}
              src={apartment.image}
              width="100%"
            />
            <CardBody>
              <CardText>
               Bedrooms: {apartment.bedrooms}
               | ${apartment.price}/month
              </CardText>
              <Button>
                <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link">
                  See More Details
                </NavLink>
              </Button>
              <Button href="#">
                E-Mail Property
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default ApartmentIndex
