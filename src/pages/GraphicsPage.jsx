import React from 'react';
import BackButton from '../components/BackButton';
import { MdOutlineArrowOutward } from "react-icons/md";
import ContentSection from '../components/ContentSection';
import TextReveal from '../components/TextReveal';

const GraphicsPage = () => {
  return (
    <>
      <BackButton pageLink='/'/>

      <section id="blogResults" className="blog-container">
        <section className='content-section pinned-blog'>
          <ContentSection 
              title='Handmade' 
              includeSvg={false}
          />
          <div className='text-rev--cont-cent'>
            <div className='text-rev--cont small-rev--let'>
              <TextReveal text="My Arts & Crafts" />
            </div>
          </div>
          <div className='section-content--container minimised-container project-previews'>
          <p className='centre-text'>I don’t just build websites—I love creating things with my hands too! When I’m not 
            coding or designing, I’m painting one-of-a-kind hoodies and crafting little phone hippers (yep, those cute 
            mini accessories that hang off your phone). Everything is made from scratch, with a whole lot of love and creativity.
            <br/><br/>
              These hand-made graphic hoodies, t-shirts and phone hippers are designed by yours truly, using paint, custom moulds,
              and a whole lot of patience. Each clothing piece embodies the unique and intricate style of cyber-sigilism,
              making wearable art that's truly one-of-a-kind.</p>
          </div>
        </section>
      </section>

      <section className='content-section white-section graphics-items'>
        <div className="graphics-populated-items graphics-items">
          <div className="card">
              <img className="card__content" src='/images/hoodie-1-front.webp'/>
              <img className='back-img' src='/images/hoodie-1-back.webp'/>
          </div>

          <div className="card">
              <img className="card__content" src='/images/hoodie-2-front.webp'/>
              <img className='back-img' src='/images/hoodie-2-back.webp'/>
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

      <section className='content-section white-section graphics-items'>
        <div className="graphics-populated-items graphics-items">
        <div className="card cute-card">
              <img className="card__content" src='/images/bunny-1-front.jpg'/>
              <img className='back-img' src='/images/bunny-1-back.jpg'/>
          </div>

          <div className="card cute-card">
              <img className="card__content" src='/images/cat-1-front.jpg'/>
              <img className='back-img' src='/images/cat-1-back.jpg'/>
          </div>
        </div>
      </section>  
    </>
  )
}

export default GraphicsPage
