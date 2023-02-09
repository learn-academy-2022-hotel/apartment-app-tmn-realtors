require "rails_helper"

RSpec.describe "Apartments", type: :request do
    describe "GET /index" do
        it "gets a list of houses" do

            user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

            user.apartments.create(
                street: "123 Dreary Lane",
                city: "Muffin",
                state: "CA",
                manager: "The Muffin Man",
                email: "test@gmai.com",
                price: 1000,
                bedrooms: 2,
                bathrooms: 1,
                pets: "no",
                image: "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
                user_id: 1,
             )
        
            get '/apartments'

            apartment = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(apartment.length).to eq 1
        end
    end
end
