import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Slider = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };
  return (
    <div id="slide">
      <div className="container">
        <div className="row">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="col-md-10 offset-md-1">
              <div className="">
                <div className="center">
                  <img
                    src="assets/images/p1.jpg"
                    className="rounded-circle m-5"
                    style={{ width: 150 }}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <p className="">
                    "Dolorum aenean dolarem minima! Voluptatum? Corporis
                    Condimentum acprimis fusce, atque! Vivamus. Non cupiditate
                    natus excepturi, quod quo, aute facere? Deserunt aliquip,
                    egestas ipsum, eu.Dolorum aenean dolorem minimal!?Corporis
                    candi mentum acpi! "
                  </p>
                  <h5 className="text-info">Johny English</h5>
                  <p className="text-muted">
                    <small>Travel Agent</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-1">
              <div className="text-center">
                <div className="">
                  <img
                    src="assets/images/p1.jpg"
                    className="rounded-circle m-5"
                    style={{ width: 150 }}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="">
                    "Dolorum aenean dolarem minima! Voluptatum? Corporis
                    Condimentum acprimis fusce, atque! Vivamus. Non cupiditate
                    natus excepturi, quod quo, aute facere? Deserunt aliquip,
                    egestas ipsum, eu.Dolorum aenean dolorem minimal!?Corporis
                    candi mentum acpi! "
                  </p>
                  <h5 className="text-info">Johny English</h5>
                  <p className="text-muted">
                    <small>Travel Agent</small>
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
