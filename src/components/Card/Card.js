import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
  return (
    <>
      <div className="cards">
        <h1>My Recent Trips</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                path="/services"
                src="./assets/images/img-9.jpg"
                label="Adventure"
                text="Explore the hidden waterfall deep inside the amazon jungle"
              />

              <CardItem
                path="/services"
                src="./assets/images/img-5.jpg"
                label="Fantasy"
                text="Travel through the Islands of Bali in a Private Cruise"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="./assets/images/img-3.jpg"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src="./assets/images/img-4.jpg"
                text="Experience Football on Top of the Himilayan Mountains"
                label="Adventure"
                path="/products"
              />
              <CardItem
                src="./assets/images/img-8.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
