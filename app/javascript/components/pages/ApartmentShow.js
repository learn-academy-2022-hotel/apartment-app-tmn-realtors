import React from "react"
import { useParams } from "react-router-dom"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)
  console.log(id)
  console.log("currentApartment", currentApartment)
  return (
    <main className="apartment-show-cards" >
        {currentApartment && (
          <>
            <img
              alt={`profile of an apartment named ${currentApartment.street}`}
              src={currentApartment.image}
              className="apartment-show-img"
            />
            <div className="apartment-info">
                <h1> Apartment Information: </h1>
                <br></br>
                <h1 className="apartment-address">{currentApartment.street}</h1>
                <h1>{currentApartment.city}, {currentApartment.state}</h1>
                <br></br>
                <h1>Property Manager: {currentApartment.manager}</h1>
                <h1>Email: {currentApartment.email}</h1>
                <br></br>
                <h1>Price: {currentApartment.price}/ month</h1>
                <br></br>
                <h1>Bedrooms: {currentApartment.bedrooms}</h1>
                <br></br>
                <h1>Bathrooms: {currentApartment.bathrooms}</h1>
                <br></br>
                <h1>Pets: {currentApartment.pets}</h1>
            </div>
          </>
        )}
    </main>
  )
}

export default ApartmentShow
