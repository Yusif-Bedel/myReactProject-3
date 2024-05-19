import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="heroSection">
      <div className="container">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="salam">
              <div className="heroText">
                <h2>Wood & Cloth Sofa</h2>
                <p>
                  Incididunt ut labore et dolore magna aliqua quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra
                </p>
                <button>Buy Now</button>
              </div>
              <img
                src="https://aranoz.live/img/banner_img.png"
                class="d-block w-100"
                alt="..."
              />
              </div>
            </div>
            <div class="carousel-item">
            <div className="salam">
              <div className="heroText">
                <h2>Wood & Cloth Sofa</h2>
                <p>
                  Incididunt ut labore et dolore magna aliqua quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra
                </p>
                <button>Buy Now</button>
              </div>
              <img
                src="https://aranoz.live/img/banner_img.png"
                class="d-block w-100"
                alt="..."
              />
              </div>
            </div>
            <div class="carousel-item">
            <div className="salam">
              <div className="heroText">
                <h2>Wood & Cloth Sofa</h2>
                <p>
                  Incididunt ut labore et dolore magna aliqua quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra
                </p>
                <button>Buy Now</button>
              </div>
              <img
                src="https://aranoz.live/img/banner_img.png"
                class="d-block w-100"
                alt="..."
              />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
