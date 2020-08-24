import React from 'react'
import './shuvangi.css'

export default function patientFamily() {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-custom">
                    <div className="items">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item active">
                                <img src="search.png" alt="icon" className="icon1esp" />
                                <a className="nav-link">
                                    <p className="welclassf"> Data Security</p><br /> <p className="welclassf1">and others</p><span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active">

                                <img src="search.png" alt="icon" className="icon1esp" />
                                <a className="nav-link">
                                    <p className="welclassf"> For</p><br /> <p className="welclassf1">Business</p><span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active" style={{ display: 'contents' }}>


                                <img src="search.png" alt="icon" className="icon1esp" />
                                <a className="nav-link">
                                    <p className="welclass" > Welcome "Name"</p><br /> <p className="welclass1">My Account</p><span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="itemsleft">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item active">
                                <a className="nav-link">
                                    <p className="welclassf">Diagnostics</p><br /> <p className="welclassf1">Book tests</p><span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link">
                                    <p className="welclassf">Doctors</p><br /> <p className="welclassf1">Book appointments</p><span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link">
                                    <p className="welclassf">Pharmacy</p><br /> <p className="welclassf1">Order medicine</p><span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link">
                                    <p className="welclassf">Media</p><br /> <p className="welclassf1">Article</p><span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <hr className="navhr" />

            <div className="pb">
                <form action="#" className="pbform">
                    <ul>
                        <li className="active">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                            </svg>
                            <p>Select tests and labs</p>
                        </li>
                        <li>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                            </svg>
                            <p>Patient Details</p>
                        </li>
                        <li>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                            </svg>
                            <p>Payments</p>
                        </li>
                    </ul>
                </form>
            </div>
            <form className="detailstests">
                <h3>Choose From My Family</h3>
                <a href="#" className="family">Chandan Verma, <span>Son</span></a>
                <a href="#" className="family">Valmiki Sen, <span>Brother</span></a>
                <a href="#" className="family">Chandrika Mallik, <span>Wife</span></a>
            </form>
            <div className="patientaddress">
                <p className="pa-p1">Sample Pickup Address</p>
                <div className="address">
                    <p className="pa-p2">
                        Agnideep Sengupta Kedia Puram, VIP Colony Hojai, Assam - 782435 India
                </p>
                    <p className="pa-p3">
                        Contact : 8876967257
                </p>
                </div>
                <div className="changedit">
                    <a href="#" id="a1">Change</a>
                    <a href="#" id="a2">Edit</a>
                </div>
                <p className="pa-p4">Sample Pickup Date</p>
                <p className="pa-p4">Sample Pickup Time</p>
                <ul className="new">
                    <li  ><a href="#" className="activenew" >Morning</a></li> &nbsp;&nbsp;
                <li ><a href="#">Noon</a></li> &nbsp;&nbsp;
                <li ><a href="#">Evening</a></li>&nbsp;&nbsp;
                <hr />
                </ul>
                <div className="todcls">
                    <div className="btnclass">
                        <button>11:00 am</button>
                        <button id="unavailableslot" >11:00 am</button>
                        <button>11:00 am</button>
                        <button>11:00 am</button>
                        <button>11:00 am</button>
                        <button>11:00 am</button>
                        <button>11:00 am</button>
                        <button>11:00 am</button>
                    </div>
                </div>
            </div>
            <form action="#" className="rform">
                <h5>Laboratory</h5>
                <p className="labp">Laboratory Name</p>
                <h5>Sample Collection</h5>
                <div className="dnt1">
                    <p className="dntp">Date</p>
                    <p className="dntp">Time</p>

                </div>
                <div className="dnt">
                    <div className="dnt2">
                        <p className="dntp2">April 03, 2020</p>
                        <p className="dntp2">08:30AM</p>
                    </div>
                    <div className="rightdiv">
                        <h5>Billing Options</h5>
                        <span className="add">
                            <p className="rdp">Lipid Profile</p>
                            <p className="rdpn">350</p>
                        </span>
                        <hr className="formhrnew" />
                        <span className="add">
                            <p className="rdp">Thyroid Profile</p>
                            <p className="rdpn">450</p>
                        </span>
                        <span className="add">
                            <p className="rdp">Hb1Ac</p>
                            <p className="rdpn">400</p>
                        </span>
                        <span className="add">
                            <p className="rdp">Package</p>
                            <p className="rdpn">1120</p>
                        </span>
                        <hr className="formhrnew" />
                        <span className="add">
                            <p className="rdp">Total Price</p>
                            <p className="rdpn">2320</p>
                        </span>
                        <span className="add">
                            <p className="rdp">Delivery Charge</p>
                            <p className="rdpn">20</p>
                        </span>
                        <span className="add">
                            <p className="rdp">Membership Discount</p>
                            <p className="rdpn">-50</p>
                        </span>
                        <hr className="formhrnew" />
                        <span className="add">
                            <p className="rdp">Total amount</p>
                            <p className="rdpn">2290</p>
                        </span>
                    </div>
                </div>
            </form>
            <button className="rdbtn">Done</button>
        </div>
    )
}
