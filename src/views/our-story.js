import React from 'react'

import { Helmet } from 'react-helmet'

import './our-story.css'

const OurStory = (props) => {
  return (
    <div className="our-story-container">
      <Helmet>
        <title>
          Our-Story - Elevate Your Brand with Stunning Graphic Design | Graphic
          Design
        </title>
        <meta
          name="description"
          content="Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life."
        />
        <meta
          property="og:title"
          content="Our-Story -  Elevate Your Brand with Stunning Graphic Design | Graphic Design"
        />
        <meta
          property="og:description"
          content="Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨"
        />
      </Helmet>
      <div className="our-story-hero">
        <div className="our-story-container1">
          <h1 className="our-story-text">Magnificent things are very simple</h1>
          <p className="our-story-text01">
            <br></br>
            <span>
              This story begins not as a single voice, but as a chorus of
              creative minds. At Elecnovate, each of us brings not only
              technical expertise, but also a passion for the power of visual
              communication.
            </span>
            <br></br>
            <br></br>
            <span>
              It&apos;s not about creating an aesthetically pleasing design;
              It&apos;s about creating stories visually, touching the heart and
              inspiring action. We hope our designs leave a lasting impression
              on the audience and bridge the gap between ideas and reality.
            </span>
            <br></br>
            <br></br>
            <span>
              Our journey is not always easy. We face challenges, develop our
              skills together, and continue to push each other to reach new
              creative heights. We&apos;ve worked on [name some notable project
              or achievement] along the way, and each experience has
              strengthened our bond and shaped our design philosophy.
            </span>
            <br></br>
            <br></br>
            <span>
              Today, we stand as a dynamic force with a common goal:
              transforming the ordinary into the extraordinary. We believe that
              design has the power to move mountains, and we dedicate our
              collective experience to creating visual stories that resonate and
              leave a lasting impression.
            </span>
            <br></br>
            <br></br>
            <span>
              Explore our portfolio and learn how our passion is translated into
              effective design solutions.
            </span>
          </p>
          <div className="our-story-btn-group"></div>
        </div>
        <img
          alt="image"
          src="https://previews.dropbox.com/p/thumb/ACMRwo_uL0YPwJedMYazAFYd1ZQWojf2RvP_GgPS0aihTjhzaPg5znyrJ7n4yz4CZaeHPldNlMdF5DQrwuzdJDH7BvN9s-Z79AN9hgKkj9fWoTdLVsIgSy9JqFgtetUjSFPDN8GDB4yNhIFY1HbzAlpgb4rzS6CWMyI-eBFW050FQAh7MQj-08V-OcHsIC4iPejLJ_tfD1WqE2zx4xKPYAXkTG2rdgYAbCylEIa7R8KNo9Dch2Cd4i1nWm6A8XLEiPxyVYQ2ABRoA1VVgndIPgW1X6uTbR4MxsnCdBWjnovani3xdhmx0bL7cS92CQWkzUYa6IrAFqOMKVZ5dz8WBWUg/p.png"
          className="our-story-image"
        />
      </div>
    </div>
  )
}

export default OurStory
