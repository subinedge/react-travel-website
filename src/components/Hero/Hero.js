import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="hero-container">
      <video src="./assets/videos/explore.mp4" loop muted autoPlay></video>
      <p className="hero-h1">Adventures Fill Soul</p>
      <p className="hero-p">Boom Baby!!! Let's go</p>
      <div className="hero-btns">
        <button className="hero-btn hero-btn-primary">
          Explore the beauty
        </button>
        <button className="hero-btn hero-btn-outline">Recent Trips</button>
      </div>
    </div>
  )
}

export default Hero
