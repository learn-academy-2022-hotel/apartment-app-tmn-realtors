import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"

const ProtectedApartmentIndex = ({ apartments, current_user }) => {
    const userApartments = apartments?.find((apartment) => {
        return apartment.user_id === current_user.id
    })
  return (
    <main className="apartment-index-cards">
      <h1>My Listings:</h1>
      {userApartments?.map((apartment, index) =>{
        return (
          <Card
            style={{
            width: '18rem'
            }}
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
              <Button href="#">
                More Info
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

export default ProtectedApartmentIndex
