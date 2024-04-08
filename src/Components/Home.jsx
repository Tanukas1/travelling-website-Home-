import React from "react";
import "./Index.css";
import Slider from "./Slider";

export default function index() {
  return (
    <div>
      <div id="featured">
        <div className="container p-5">
          <div className="row">
            <div className="card p-5 shadow mb-5 bg-white rounded">
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Search Destination*
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      id="exampleInputSearch"
                      placeholder="Enter Destination"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPaxNumber"
                      className="form-label"
                    >
                      Pax Number*
                    </label>
                    <input
                      type="Paxnumber"
                      className="form-control"
                      id="exampleInputPaxNumber"
                      placeholder="No. of People"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="exampleInputCheckin" className="form-label">
                      Checkin Date*
                    </label>
                    <input
                      type="Checkin"
                      className="form-control"
                      id="exampleInputCheckin"
                      placeholder="Checkin"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputCheckoutDate"
                      className="form-label"
                    >
                      Checkout Date*
                    </label>
                    <input
                      type="Checkout"
                      className="form-control"
                      id="exampleInputCheckout"
                      placeholder="Checkout"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputCheckoutDate"
                      className="form-label"
                    >
                      Checkout Date*
                    </label>
                    <button type="button" className="btn btn-danger btn-lg">
                      INQUIRE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="row">
                <h5 className="text-danger">_______POPULAR DESTINATION</h5>
                <h1 className="fw-bold text-black">TOP NOTCH DESTINATION</h1>
                <div className="row p-2 mx-2 my-2">
                  <div className="card p-2" style={{ width: "22rem" }}>
                    <img
                      src="assets/images/c2.jpg"
                      className="card-img-top"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card p-2" style={{ width: "22rem" }}>
                    <img
                      src="assets/images/c2.jpg"
                      className="card-img-top"
                      alt="Card image cap"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <p className="text-justify">
                  Aperiam sociosqu urna praesent, tristique corrupti
                  <br /> condimentum asperiores platea ipsum adarcu. Nostrud.
                  Aut
                  <br /> nostrum, ornare quas provident laoreet nesciunt
                </p>
              </div>
              <div className="row">
                <div className=" card p-2" style={{ width: "25rem" }}>
                  <img
                    src="assets/images/c1.jpg"
                    className="card-img-top"
                    alt="Card image cap"
                  />
                </div>
                <div className=" card p-2" style={{ width: "25rem" }}>
                  <img
                    src="assets/images/c1.jpg"
                    className="card-img-top"
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row p-5">
            <div className="text-center">
              <button type="button" className="btn btn-danger btn-lg">
                MORE DESTINATION
              </button>
            </div>
          </div>
          {/* <h4>Explore GREATE places</h4> */}
          <div className="row text-center">
            <h5 className="text-danger">______EXPLORE GREATE PLACES</h5>
            <h1 className="fw-bold display-4">POPULAR PACKAGE</h1>
            <p className="">
              Mollit volutatem perspiciatis convallis elementum corporis quo
              veritatis aliquid blandit, blandit torquent
              <br />, odit placeat.Adipiscing repudiandae eius cursus? Nostrum
              magnis maxime cuae placeat.
            </p>
          </div>
          <div className="row p-5">
            <div className="col-md-4">
              <div
                className="card shadow-sm bg-white rounded"
                style={{ width: "22rem" }}
              >
                <img src="assets/images/c1.jpg" alt="" />
                <div
                  className="box"
                  style={{
                    width: "18rem",
                    height: 50,
                    backgroundColor: "rgb(27, 131, 215)",
                    marginTop: "-20px",
                    marginLeft: 28,
                  }}
                >
                  <i className="bi bi-clock text-white">7D/6N</i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Sunset view of beautiful lakeside resident
                  </h5>
                  <p className="">
                    25 reviews
                    <i className="bi bi-star-fill text-danger" />
                    <i className="bi bi-star-fill text-danger">
                      <i className="bi bi-star-fill text-danger" />
                      <i className="bi bi-star-fill text-danger" />
                      <i className="bi bi-star-fill text-danger" />
                    </i>
                  </p>
                  <p className="card-text">
                    Lorem ipsem dolar sit ament,consectetur adipiscing alit
                    luctus nec ullam.Ut elit tellus,luctus nec ullam alit
                    tellpus.
                  </p>
                  <hr />
                  <p className="">
                    Book Now
                    <i className="bi bi-arrow-right text-danger" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card shadow-sm bg-white rounded"
                style={{ width: "22rem" }}
              >
                <img src="assets/images/c1.jpg" alt="" />
                <div
                  className="box"
                  style={{
                    width: "18rem",
                    height: 50,
                    backgroundColor: "rgb(27, 131, 215)",
                    marginTop: "-20px",
                    marginLeft: 28,
                  }}
                >
                  <i className="bi bi-clock text-white">7D/6N</i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Sunset view of beautiful lakeside resident
                  </h5>
                  <p className="">
                    25 reviews
                    <i className="bi bi-star-fill text-danger" />
                    <i className="bi bi-star-fill text-danger">
                      <i className="bi bi-star-fill text-danger" />
                      <i className="bi bi-star-fill text-danger" />
                      <i className="bi bi-star-fill text-danger" />
                    </i>
                  </p>
                  <p className="card-text">
                    Lorem ipsem dolar sit ament,consectetur adipiscing alit
                    luctus nec ullam.Ut elit tellus,luctus nec ullam alit
                    tellpus.
                  </p>
                  <hr />
                  <p className="">
                    Book Now
                    <i className="bi bi-arrow-right text-danger" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card shadow-sm bg-white rounded"
                style={{ width: "22rem" }}
              >
                <img src="assets/images/c1.jpg" alt="" />
                <div
                  className="box"
                  style={{
                    width: "18rem",
                    height: 50,
                    backgroundColor: "rgb(27, 131, 215)",
                    marginTop: "-20px",
                    marginLeft: 28,
                  }}
                >
                  <i className="bi bi-clock text-white">7D/6N</i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Sunset view of beautiful lakeside resident
                  </h5>
                  <p className="">
                    25 reviews
                    <i className="bi bi-star-fill text-danger" />
                    <i className="bi bi-star-fill text-danger">
                      <i className="bi bi-star-fill text-danger" />
                      <i className="bi bi-star-fill text-danger" />
                      <i className="bi bi-star-fill text-danger" />
                    </i>
                  </p>
                  <p className="card-text">
                    Lorem ipsem dolar sit ament,consectetur adipiscing alit
                    luctus nec ullam.Ut elit tellus,luctus nec ullam alit
                    tellpus.
                  </p>
                  <hr />
                  <p className="">
                    Book Now
                    <i className="bi bi-arrow-right text-danger" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="text-center">
              <button type="button" className="btn btn-danger btn-lg">
                VIEW ALL PACKAGES
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="travel">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <div className="card p-1" style={{ marginRight: "-60px" }}>
                <img src="assets/images/c.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-9" style={{ width: "55rem" }}>
              <div
                className="card m-3 p-5"
                style={{ width: "100%", backgroundColor: "rgb(86, 181, 218)" }}
              >
                <div className="row text-center text-white">
                  <h5 className="">_____CALLBACK FOR MORE</h5>
                  <h1 className="">GO TRAVEL. DISCOVER, REMEMBER US</h1>
                  <p className="">
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut
                    elit tellus,luctus nec ullamcorperr mattis, pulvinar dapibus
                    leo.Eaque adipiscing, luctus eleifend.
                  </p>
                  <div className="row">
                    <div className="col">
                      <h4 className="">500K+</h4>
                      <h6 className="">Satisfied Clients</h6>
                    </div>
                    <div className="col">
                      <h4 className="">500K+</h4>
                      <h6 className="">Satisfied Clients</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <h4 className="">500K+</h4>
                      <h6 className="">Satisfied Clients</h6>
                    </div>
                    <div className="col">
                      <h4 className="">500K+</h4>
                      <h6 className="">Satisfied Clients</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card p-4 shadow bg-white rounded"
                style={{ width: "24rem", marginLeft: 250, marginTop: "-60px" }}
              >
                <p className="">Our24/7 Emergency Phone Services</p>
                <h4 className="text-danger">Call: 123-456-7890</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="activity">
        <div className="container">
          <div className="row m-3 p-5 text-center">
            <h5 className="text-danger">_____TRAVEL BY ACTIVITY</h5>
            <h2 className="fw-bold">ADVENTURE &amp; ACTIVITY</h2>
            <p className="">
              Mollit voluptatem perspiciatis elementum corporis quo veritatis
              aliquid blandit,blandit torquent,
              <br /> odit placent. Adipiscing repudiandae eius cursus? Nortrum
              magnis maxime curae placeat.
            </p>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="card">
                <div className="text-center">
                  <img src="assets/images/icon6.png" alt="" width="50%" />
                </div>
                <div className="card-body">
                  <h5 className="text-center">adventure</h5>
                  <p className="text-center">15 Destination</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="text-center">
                  <img src="assets/images/icon6.png" alt="" width="50%" />
                </div>
                <div className="card-body">
                  <h5 className="text-center">adventure</h5>
                  <p className="text-center">15 Destination</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="text-center">
                  <img src="assets/images/icon6.png" alt="" width="50%" />
                </div>
                <div className="card-body">
                  <h5 className="text-center">adventure</h5>
                  <p className="text-center">15 Destination</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="text-center">
                  <img src="assets/images/icon6.png" alt="" width="50%" />
                </div>
                <div className="card-body">
                  <h5 className="text-center">adventure</h5>
                  <p className="text-center">15 Destination</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="text-center">
                  <img src="assets/images/icon6.png" alt="" width="50%" />
                </div>
                <div className="card-body">
                  <h5 className="text-center">adventure</h5>
                  <p className="text-center">15 Destination</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card">
                <div className="text-center">
                  <img src="assets/images/icon6.png" alt="" width="50%" />
                </div>
                <div className="card-body">
                  <h5 className="text-center">adventure</h5>
                  <p className="text-center">15 Destination</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center m-5">
            <h5 className="text-danger">_____TRAVEL OFFER &amp; DISCOUNT</h5>
            <h2 className="fw-bold">SPECIAL TRAVEL OFFER</h2>
            <p className="">
              Mollit voluptatem perspiciatis convallis elementum corporis quo
              veritatis aliquid blandit, blandit torquent,odit placent.
              Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
              placeat.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="" style={{ width: "22rem" }}>
                <img
                  src="assets/images/c3.webp"
                  alt=""
                  className="card-img-top"
                />
                <div
                  className="card shadow bg-white rounded"
                  style={{ width: "18rem", marginTop: "-8rem", marginLeft: 24 }}
                >
                  <div className="card-body">
                    <h5 className="text-info">CANADA</h5>
                    <h5 className="">
                      Experience the nature beauty of glacier
                    </h5>
                    <p className="text-danger fw-bold">
                      Price:<del>$1500</del> $1200
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="" style={{ width: "22rem" }}>
                <img
                  src="assets/images/c3.webp"
                  alt=""
                  className="card-img-top"
                />
                <div
                  className="card shadow bg-white rounded"
                  style={{ width: "18rem", marginTop: "-8rem", marginLeft: 24 }}
                >
                  <div className="card-body">
                    <h5 className="text-info">CANADA</h5>
                    <h5 className="">
                      Experience the nature beauty of glacier
                    </h5>
                    <p className="text-danger fw-bold">
                      Price:<del>$1500</del> $1200
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="" style={{ width: "22rem" }}>
                <img
                  src="assets/images/c3.webp"
                  alt=""
                  className="card-img-top"
                />
                <div
                  className="card shadow bg-white rounded"
                  style={{ width: "18rem", marginTop: "-8rem", marginLeft: 24 }}
                >
                  <div className="card-body">
                    <h5 className="text-info">CANADA</h5>
                    <h5 className="">
                      Experience the nature beauty of glacier
                    </h5>
                    <p className="text-danger fw-bold">
                      Price:<del>$1500</del> $1200
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-5">
            <div className="col-md-5">
              <div className="row">
                <h5 className="text-danger">_____OUR TRAVEL GALLERY</h5>
                <h2 className="fw-bold display-6">
                  BEST TRAVEL'S SHARED PHOTOS
                </h2>
                <p className="">
                  Aperiam sociosqu urna praesent, tristique,corrupti condimentum
                  asperiores platea ad arcu. Nostrud.Esse? Ant nostrum, ornare
                  quas provident laoreet nesciunt odio voluptatess etiam, omnis.
                </p>
                <img
                  src="assets/images/c1.jpg"
                  className=""
                  alt=""
                  height="100%"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="" style={{ width: "20rem" }}>
                  <img
                    src="assets/images/c1.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="" style={{ width: "20rem" }}>
                  <img
                    src="assets/images/c1.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className=" p-3" style={{ width: "40rem" }}>
                  <img
                    src="assets/images/c1.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="card m-3"
            style={{ backgroundColor: "rgb(38, 93, 136)" }}
          >
            <div className="row p-5">
              <div className="col">
                <img src="assets/images/logo1.png" alt="" />
              </div>
              <div className="col">
                <img src="assets/images/logo2.png" alt="" />
              </div>
              <div className="col">
                <img src="assets/images/logo3.png" alt="" />
              </div>
              <div className="col">
                <img src="assets/images/logo4.png" alt="" />
              </div>
              <div className="col">
                <img src="assets/images/logo5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bg">
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-7">
              <div className="text-white">
                <h6 className="fw-bold">________HOLIDAY PACKAGE OFFER</h6>
                <h1 className="display-2 fw-bold">HOLIDAY SPECIAL 25% OFF</h1>
                <p className="m-3">
                  Sign up now to recieve hot special offers and information
                  about the best tour
                  <br /> packages, updates and discounts !!
                </p>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <button type="button" className="btn btn-danger btn-lg m-3">
                  SIGN UP NOW!
                </button>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                  <br /> mattis, pulvinar dapibus leo. Eaque adipiscing, luctus
                  eleifend temporibus occaecat luctus
                  <br /> eleifend tempo ribus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="blog">
        <div className="container">
          <div className="row text-center p-5">
            <h6 className="text-danger">_____FROM OUR BLOG</h6>
            <h2 className="fw-bold display-5">OUR RECENT POSTS</h2>
            <p className="">
              Mollit voluptatem perspiciatis convallis elementum corporis quo
              veritatis aliquid blandit, blandit torquent,
              <br /> odit placeat. Adipiscing repudiandae eius cursus? Nostrum
              magnis maxime curae placeat.
            </p>
          </div>
          <div className="row p-5">
            <div className="col-md-4">
              <div
                className="card shadow bg-white rounded"
                style={{ width: "22rem" }}
              >
                <img
                  src="assets/images/card1.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Life is beautiful journey not a destination
                  </h5>
                  <p className="text-muted">
                    <small>Demoteam August17,2017 No comments</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card shadow bg-white rounded"
                style={{ width: "22rem" }}
              >
                <img
                  src="assets/images/card1.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Life is beautiful journey not a destination
                  </h5>
                  <p className="text-muted">
                    <small>Demoteam August17,2017 No comments</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card shadow bg-white rounded"
                style={{ width: "22rem" }}
              >
                <img
                  src="assets/images/card1.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Life is beautiful journey not a destination
                  </h5>
                  <p className="text-muted">
                    <small>Demoteam August17,2017 No comments</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider/>
      <div id="card">
        <div className="container-fluid">
          <div className="section">
            <div className="row p-3">
              <div className="col-md-4" style={{ marginTop: "-9rem" }}>
                <div className="p-5">
                  <img
                    src="assets/images/c.jpg"
                    className="card-img-top"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="row p-5">
                  <div className="col-md-4">
                    <div className="">
                      <img src="assets/images/icon1.png" alt="" />
                    </div>
                    <div className="text-white">
                      <h6 className="">Support@gmail.com</h6>
                      <h6 className="">infoe@domain.com</h6>
                      <h6 className="">name@company.cpm</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <img src="assets/images/icon1.png" alt="" />
                    </div>
                    <div className="text-white">
                      <h6 className="">Support@gmail.com</h6>
                      <h6 className="">infoe@domain.com</h6>
                      <h6 className="">name@company.cpm</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <img src="assets/images/icon1.png" alt="" />
                    </div>
                    <div className="text-white">
                      <h6 className="">Support@gmail.com</h6>
                      <h6 className="">infoe@domain.com</h6>
                      <h6 className="">name@company.cpm</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="">
                      <h5 className="text-white fw-bold">
                        LET'S JOIN US FOR MORE UPDATE!!
                        <button
                          type="button"
                          className="btn btn-danger btm-lg m-2"
                        >
                          LEARN MORE
                        </button>
                      </h5>
                    </div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
