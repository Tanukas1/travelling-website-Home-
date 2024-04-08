import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="section">
        <div className="container-fluid text-white">
          <div className="row py-5 mx-5">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="">ABOUT TRAVEL</h5>
              <p className="">
                Lorem ipsem dolor sit amet consectetur adipiscing elit.Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <img src="assets/images/footerimg.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="">CONTACT INFORMATION</h5>
              <p className="">
                Lorem ipsem dolor sit amet consectetur adipiscing elit.
              </p>
              <p>
                <i className="bi bi-telephone-fill text-danger" />
                +01(977)259912
              </p>
              <p>
                <i className="bi bi-envelope-fill text-danger" />
                company@domain.com
              </p>
              <p>
                <i className="bi bi-geo-alt-fill text-danger" />
                3146 koontz, California
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="">LATEST POST</h5>
              <p className="">
                Lorem ipsem dolor sit amet consectetur adipiscing elit.Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <p className="">
                <small>August 17,2021 No comments</small>
              </p>
              <hr />
              <h6 className="">Take only memories,leave only footprints</h6>
              <p className="">
                <small>August 17,2021 No comments</small>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="">SUBSCIBE US</h5>
              <p className="">
                Lorem ipsem dolor sit amet consectetur adipiscing elit.Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>
              <input
                type="email"
                className="form-control p-2"
                id="exampleInputEmail1"
                placeholder="Your Email"
              />
              <button type="button" className="btn btn-danger m-3">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p className="">Privacy Policy trem &amp; Condition FAQ</p>
              </div>
              <div className="col-md-4">
                <img
                  src="assets/images/travele-logo.png"
                  alt=""
                  className="text-center"
                />
              </div>
              <div className="col-md-4">
                <p className="">Copyright©2021 Travel.All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
