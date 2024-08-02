import React from 'react'
import BackButton from '../components/BackButton'

const GraphicsPage = () => {
  return (
    <>
      <section className="graphics-header--container">
        <div className="graphics-header--text">
          <BackButton/>
          <div className="graphics-scribble--text">
            <div className="scribble-text"/>
            <h2>made</h2>
          </div>
          <p>These hand-made graphic hoodies and t-shirts are designed by yours truly, using fabric paint, a syringe,
              and a whole lot of patience. Each piece embodies the unique and intricate style of cyber-sigilism,
              making wearable art that's truly one-of-a-kind. You'll be wearing a piece of art that’s been
              meticulously crafted with a personal touch, ensuring each item is as unique as you are. Thank you for
              supporting my passion and for letting my art become a part of your life!</p>
        </div>
        <div className="graphics-header--image"/>
      </section>

      <div className="projects-items--container">
        <div className="graphic-item">
            <div className="graphic-item--image"></div>
        </div>
        <div className="graphic-item">
            <div className="graphic-item--image"></div>
        </div>
        <div className="graphic-item">
            <div className="graphic-item--image"></div>
        </div>
        <div className="graphic-item">
            <div className="graphic-item--image"></div>
        </div>
      </div>
    </>
  )
}

export default GraphicsPage
