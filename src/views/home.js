import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard11 from '../components/feature-card11'
import FeatureCard4 from '../components/feature-card4'
import GalleryCard1 from '../components/gallery-card1'
import GalleryCard11 from '../components/gallery-card11'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Elecnovate</title>
        <meta property="og:title" content="Elecnovate" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-sec1">
        <h1 className="home-text">Let&apos;s maintain visual harmony!</h1>
        <span className="home-text01">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="home-sec1-btn-group">
          <button className="home-button button">Get Started</button>
          <button className="home-button1 button">Contact us</button>
        </div>
      </div>
      <div className="home-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1588064643233-49210b27b82e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxmcmVlbGFuY2VyfGVufDB8fHx8MTcwOTM4MDY2N3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
          loading="lazy"
          className="home-image"
        />
        <div className="home-container01">
          <h1 className="home-text08">Who we are?</h1>
          <p className="home-text09">
            <span>
              We are passionate and versatile graphic designers with a keen eye
              for aesthetics and a commitment to delivering visually compelling
              solutions.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              With a background in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text13">Graphic Design &amp; Web Design</span>
            <span>
              , We try our best to bring a unique blend of creativity and
              technical proficiency to every project.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Whether it&apos;s crafting engaging brand identities, designing
              captivating marketing materials, or illustrating impactful
              visuals, our goal is to transform ideas into visually stunning
              realities.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Explore our portfolio to discover the diverse range of projects
              that showcase my skills, dedication, and love for the art of
              graphic design.
            </span>
          </p>
        </div>
      </div>
      <div className="home-our-missio-sec">
        <div className="home-container02">
          <h1 className="home-text19">Our Mission</h1>
          <span className="home-text20">
            Our goal is to seamlessly integrate human-centered design principles
            with the latest digital technologies, creating seamless and
            transformative experiences for users around the world.
          </span>
          <button className="home-button2 button">Get Started</button>
        </div>
        <img
          alt="Elecnovate Mission"
          src="/Home/blue%203d%20modern%20freelancer%20tips%20checklist%20instagram%20post1-1500h.png"
          loading="lazy"
          className="home-image1"
        />
      </div>
      <div className="home-features">
        <h1 className="home-text21">Our services</h1>
        <div className="home-container03">
          <FeatureCard11
            title="Logo &amp; Branding"
            rootClassName="rootClassName"
            imageSrc="/Home/logo%20and%20branding.svg"
          ></FeatureCard11>
          <FeatureCard11
            title="Photo Editing"
            rootClassName="rootClassName1"
            imageSrc="/Home/photo%20editing.svg"
          ></FeatureCard11>
          <FeatureCard11
            title="Print Design"
            rootClassName="rootClassName2"
            imageSrc="/Home/print%20design.svg"
          ></FeatureCard11>
          <FeatureCard11
            title="Marketing and Advertising"
            rootClassName="rootClassName3"
            imageSrc="/Home/marketing%20and%20advertisment.svg"
          ></FeatureCard11>
          <FeatureCard11
            title="Print on Demand"
            rootClassName="rootClassName7"
            imageSrc="/Home/print%20on%20demand.svg"
          ></FeatureCard11>
          <FeatureCard11
            title="UI/UX Design"
            rootClassName="rootClassName6"
            imageSrc="/Home/user%20interface%20and%20user%20experience.svg"
          ></FeatureCard11>
          <FeatureCard11
            title="Website Design"
            rootClassName="rootClassName5"
            imageSrc="/Home/website%20design.svg"
          ></FeatureCard11>
          <FeatureCard11
            title="Social Media Designing"
            rootClassName="rootClassName4"
            imageSrc="/Home/social%20media%20design.svg"
          ></FeatureCard11>
        </div>
      </div>
      <div className="home-features1">
        <h1 className="home-text22">
          Grow Your Business with Full-Service Graphics Designing
        </h1>
        <div className="home-separator"></div>
        <div className="home-container04">
          <div className="home-container05">
            <FeatureCard4
              title="Flexible work life"
              description="We operate beyond conventional hours; we work longer than normal. We know that the unexpected can happen, and we adapt accordingly."
              rootClassName="rootClassName1"
            ></FeatureCard4>
            <FeatureCard4
              title="Self-care &amp; wellness"
              description="At Elecnovate, I prioritize self-care and wellness, promoting balance and personal growth."
              rootClassName="rootClassName4"
            ></FeatureCard4>
            <FeatureCard4
              title="Your future"
              description="A world of endless possibilities waiting to be explored and embraced. Let's take this journey together, discover new possibilities."
              rootClassName="rootClassName3"
            ></FeatureCard4>
            <FeatureCard4
              title="A culture of belonging"
              description="At Elecnovate, we value inclusiveness by valuing each team member and creating an environment of respect and collaboration. It boosts engagement, creativity and well-being."
              rootClassName="rootClassName2"
            ></FeatureCard4>
          </div>
          <img
            alt="image"
            src="/Home/graphics%20design%20services-500h.png"
            className="home-image2"
          />
        </div>
      </div>
      <div className="home-banner">
        <div className="home-container06">
          <h1 className="home-text23">​Our Philosophy</h1>
          <span className="home-text24">
            <span className="home-text25">
              ​At the core of our philosophy lies a deep reverence for
              creativity, innovation, and human connection. We believe in the
              power of design to transcend mere functionality, enriching lives
              and sparking meaningful interactions.
            </span>
            <br className="home-text26"></br>
            <span className="home-text27">
              ​We champion a holistic approach that marries form with function,
              aesthetics with usability, and emotion with technology. Every
              project is a canvas where we blend artistry with precision,
              crafting experiences that resonate with authenticity and purpose.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-container07"></div>
        </div>
        <img
          alt="image"
          src="/Home/elecnovate%20philosophy.svg"
          className="home-image3"
        />
      </div>
      <div className="home-gallery">
        <GalleryCard1
          title="Branding &amp; Strategy"
          subtitle="Graphic Design"
          rootClassName="rootClassName"
        ></GalleryCard1>
        <GalleryCard1
          title="User Interface &amp; Experience"
          imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
          subtitle="Graphic Design"
          rootClassName="rootClassName1"
        ></GalleryCard1>
        <GalleryCard1
          title="Photo Editing"
          imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
          subtitle="Graphic Design"
          rootClassName="rootClassName2"
        ></GalleryCard1>
        <GalleryCard1
          title="Marketing &amp; Advertising"
          imageSrc="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
          subtitle="Graphic Design"
          rootClassName="rootClassName3"
        ></GalleryCard1>
        <GalleryCard1
          title="Print on Demand"
          imageSrc="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          subtitle="Graphic Design"
          rootClassName="rootClassName4"
        ></GalleryCard1>
        <GalleryCard1
          title="Print Design"
          imageSrc="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          subtitle="Graphic Design"
          rootClassName="rootClassName5"
        ></GalleryCard1>
        <GalleryCard11
          title="Website Design"
          imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
          subtitle="Graphic Design"
          rootClassName="rootClassName2"
        ></GalleryCard11>
        <GalleryCard11
          title="Wordpress Design"
          subtitle="Web Design"
          rootClassName="rootClassName"
        ></GalleryCard11>
        <GalleryCard11
          title="Social Media Design"
          imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
          subtitle="Graphic Design"
          rootClassName="rootClassName1"
        ></GalleryCard11>
      </div>
      <div className="home-banner1">
        <div className="home-container08">
          <h1 className="home-text30">About us</h1>
          <span className="home-text31">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis, ut tincidunt lectus. Mauris luctus
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              rutrum mi ut rhoncus. Integer in dignissim tortor, id egestas
              ante. Proin at enim purus. Mauris ut felis nisi.
            </span>
          </span>
          <div className="home-container09">
            <button className="home-button3 button">Subscribe</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=1000"
          className="home-image4"
        />
      </div>
    </div>
  )
}

export default Home
