import Head from 'next/head'
import './page.css'
export default function Home() {
  return (
    <>
      <div className="nav">
        <div className="navcontainer">
          <div className="logo">
            <a href="#" className="icon">
              <strong>chat</strong>app
            </a>
          </div>
          <div className="links">
            <a href='#' className="link">
              <h1 className="link-text">product</h1>
            </a>
            <a href='#' className="link">
              <h1 className="link-text">services</h1>
            </a>
            <a href='#' className="link">
              <h1 className="link-text">contact</h1>
            </a>
            <a href='#' className="link">
              <h1 className="link-text">log in</h1>
            </a>
            <a href="#" className="button w-button">
              Try it Free
            </a>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="herocontainer">
          <div className="text-area">
            <h1 className="heading">
              Have your
              <br />
              best call
            </h1>
            <p className="paragraph">
              Fast, easy and unlimited conference call services.
            </p>
            <div className="hero-buttons">
              <a href="#" className="button-4 w-button">
                Try it Free
              </a>
              <a href="#" className="button-3 w-button">
                Get a Demo
              </a>
            </div>
            <div className="line" />
          </div>
          <div className="img-area">
            <div className="imgcontain">
              <img
                src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b2223101e56aef3358e8e_mainPicture.png"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 40vw"
                srcSet="
              https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b2223101e56aef3358e8e_mainPicture-p-500.png 500w,
              https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b2223101e56aef3358e8e_mainPicture.png       614w
            "
                alt=""
                className="image"
              />
        </div>
      </div>
    </div>
  </div>
  <div className="info">
  <div className="infocontainer">
    <div className="div-block">
      <h1 className="heading-2">Instant conference calls</h1>
      <div className="div-block-2" />
    </div>
    <p className="paragraph-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
      sem vitae risus tristique posuere.
    </p>
    <a href="#" className="button-5 w-button">
      Learn more
    </a>
    <div className="info-img-contain">
      <img
        src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b29d5e081cdfc68129eb9_GroopChat.jpg"
        loading="lazy"
        sizes="(max-width: 479px) 198.75px, (max-width: 767px) 64vw, 72vw"
        srcSet="
        https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b29d5e081cdfc68129eb9_GroopChat-p-500.jpg   500w,
        https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b29d5e081cdfc68129eb9_GroopChat-p-800.jpg   800w,
        https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b29d5e081cdfc68129eb9_GroopChat-p-1080.jpg 1080w,
        https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b29d5e081cdfc68129eb9_GroopChat.jpg        1440w
      "
        alt=""
        />
      </div>
    </div>
  </div>
  <div className="phone">
  <div className="phonecontainer">
    <div className="phone-img-area">
      <div className="phone-img-contain">
        <img
          src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b36d07680e79aac64c25f_iphone.png"
          loading="lazy"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 73.515625px, 30vw"
          srcSet="
          https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b36d07680e79aac64c25f_iphone-p-500.png 500w,
          https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b36d07680e79aac64c25f_iphone-p-800.png 800w,
          https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b36d07680e79aac64c25f_iphone.png       896w
        "
          alt=""
        />
      </div>
    </div>
    <div className="phone-text-area">
      <h1 className="heading-3">
        Perfect solution
        <br />
        for small <br />
        businesses
      </h1>
      <p className="paragraph-4">Pricing plans that fit like a glove</p>
      <div className="phone-buttons">
        <a href="#" className="button-4 w-button">
          Try it Free
        </a>
        <a href="#" className="button-4-copy w-button">
          Get a Demo
        </a>
      </div>
      <div className="div-block-3">
        <div className="stars-contain">
          <img
            src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b396a9647494616e18101_stars.png"
            loading="lazy"
            alt=""
          />
        </div>
        <p className="paragraph-5">
          <strong className="bold-text">3.6 million calls</strong> completed
          with <br />a 96.8% 5 star rating
        </p>
      </div>
     </div>
    </div>
  </div>
  <div className="contact">
    <div className="contactcontainer">
      <div className="columns w-row">
        <div className="column w-col w-col-4">
          <div className="contact-logo">
            <h1 className="heading-4">
              <strong>chat</strong>app
            </h1>
            <p className="paragraph-6">
              The last team chat you <br />
              will ever need .
            </p>
          </div>
          <div className="copywrite-box">
            <div className="copywrite">
              <img
                src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b459452bbbf7b78d77fd4_Vector.png"
                loading="lazy"
                alt=""
              />
            </div>
            <p className="paragraph-8">Copyright Chatapp inc.</p>
          </div>
        </div>
        <div className="column-2 w-col w-col-4">
          <div className="services">
            <h1 className="heading-6">More on products</h1>
            <p className="paragraph-7">Reservationless conference calls</p>
            <p className="paragraph-7">Web conferencing</p>
            <p className="paragraph-7">Operator-Moderated events</p>
            <p className="paragraph-7">Webinar Platform</p>
          </div>
          <div className="services">
            <h1 className="heading-6">More on products</h1>
            <p className="paragraph-7">Reservationless conference calls</p>
            <p className="paragraph-7">Web conferencing</p>
            <p className="paragraph-7">Operator-Moderated events</p>
            <p className="paragraph-7">Webinar Platform</p>
          </div>
        </div>
        <div className="column-3 w-col w-col-4">
          <div className="services">
            <h1 className="heading-6">More on products</h1>
            <p className="paragraph-7">Reservationless conference calls</p>
            <p className="paragraph-7">Web conferencing</p>
            <p className="paragraph-7">Operator-Moderated events</p>
            <p className="paragraph-7">Webinar Platform</p>
            <p className="paragraph-7">Reservationless conference calls</p>
            <p className="paragraph-7">Web conferencing</p>
            <p className="paragraph-7">Operator-Moderated events</p>
            <p className="paragraph-7">Webinar Platform</p>
          </div>
          <div className="socialmedia">
            <div className="x">
              <img
                src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b40ef9029068c7b9a2877_Twitter.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="linkedin">
              <img
                src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b40f75b7b00835e0dceec_Linkedin.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="facebook">
              <img
                src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b40fe5b7b00835e0dd235_Facebook.png"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="instagram">
              <img
                src="https://assets-global.website-files.com/654b10f393dd10fac0c3f384/654b4104346a4789a0e76d8f_Instagram.png"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
