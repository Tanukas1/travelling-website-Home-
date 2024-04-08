import React from 'react'
import  './Header.css'
const Header = () => {
  return (
    <div id="main">
        <div className="container-fluid">
            <div className="container">
            <div className="row p-3">
                <div className="nav text-white">
                <div className="col-md-8">
                    <i className="bi bi-telephone-fill m-2">+01(977)259912</i>
                    <i className="bi bi-envelope-fill m-2">company@domain.com</i>
                    <i className="bi bi-geo-alt-fill m-2">
                    3146 Koontz Lane, California
                    </i>
                </div>
                <div className="col-md-4">
                    <i className="bi bi-facebook m-2" />
                    <i className="bi bi-twitter m-2" />
                    <i className="bi bi-instagram m-2" />
                    <i className="bi bi-linkedin m-2" />
                    <i className="bi bi-search m-2" />
                </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-2">
                <a className="navbar-brand" href="">
                    <img
                    src="assets/images/travele-logo.png"
                    alt=""
                    width=""
                    height=""
                    />
                </a>
                </div>
                <div className="col-md-8">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDarkDropdown"
                    >
                        <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <button
                            className="btn text-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            HOME
                            </button>
                            <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Another action
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                            className="btn text-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            TOUR
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item" href="#">
                                Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Something else here
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                            className="btn text-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            PAGES
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item" href="#">
                                Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Something else here
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                            className="btn text-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            SHOP
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item" href="#">
                                Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Something else here
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                            className="btn text-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            BLOG
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item" href="#">
                                Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Something else here
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                            className="btn text-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            DASHBOARD
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item" href="#">
                                Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Something else here
                                </a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
                <div className="col-md-2">
                <button tyle="button" className="btn btn-primary btn-lg">
                    BOOK NOW
                </button>
                </div>
            </div>
            <div className="row p-5">
                <div className=" my-auto mx-auto text-white text-center">
                <h1 className="m-5 fw-bold display-1">TRAVELLING AROUND THE WORLD</h1>
                <p className="m-5 text-justify">
                    Taciti quasi,sagittis excepture hymemaeos,id temporibus hic proident
                    ullam,eaque delectus tempor consectetur
                    <br /> nunc,purus congue?Rem volutpat sodales!Mollit.Minus
                    exercitationem wisi.
                </p>
                <button type="button" className="btn btn-danger btn-lg">
                    CONTINUE READING
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
    
  );
}

export default Header