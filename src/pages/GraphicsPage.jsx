import React from 'react';
import BackButton from '../components/BackButton';
import { MdOutlineArrowOutward } from "react-icons/md";

const GraphicsPage = () => {
  return (
    <>
      <BackButton/>
      <section className='single-page--header--container graphics-header'>
        <div className='single-page--header'>
          <div className='row'>
            <img src='/images/hand-scribble.png'/>
            <h1>Made</h1>
          </div>
            <p>These hand-made graphic hoodies and t-shirts are designed by yours truly, using fabric paint, a syringe,
              and a whole lot of patience. Each piece embodies the unique and intricate style of cyber-sigilism,
              making wearable art that's truly one-of-a-kind. You'll be wearing a piece of art that’s been
              meticulously crafted with a personal touch, ensuring each item is as unique as you are. Thank you for
              supporting my passion and for letting my art become a part of your life!</p>
            <div className="main-button">
                <a>I sell stuff </a>
                <MdOutlineArrowOutward />
            </div>
        </div>
        <div className='image-wrapper'><img src='/images/pins.webp'/></div>
      </section>

      <section className='content-section white-section extended-title graphics-items'>
        <div className="graphics-populated-items graphics-items">
        <div className="card">
              <img className="card__content" src='/images/hoodie-1-front.webp'/>
              <img className='back-img' src='/images/hoodie-1-back.webp'/>
          </div>

          <div className="card">
              <img className="card__content" src='/images/hoodie-1-front.webp'/>
              <img className='back-img' src='/images/hoodie-1-back.webp'/>
          </div>

          <div className="card">
              <img className="card__content" src='/images/top-1-front.webp'/>
              <img className='back-img' src='/images/top-1-back.webp'/>
          </div>

          <div className="card">
              <img className="card__content" src='/images/top-2-front.webp'/>
              <img className='back-img' src='/images/top-2-back.webp'/>
          </div>
        </div>
      </section>   
    </>
  )
}

export default GraphicsPage
