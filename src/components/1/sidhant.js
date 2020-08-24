import React from 'react'
import './style.css'

export default function sidhant() {
    return (
        <div>
            <div class="container mt-sm-5 mb-5">
                <div class="row cont-style">
                    <div class="col-12">
                        <div class="section1">
                            <ul class="progressbar">
                                <li id="step1" class="progress-step">
                                    <p>Select Test and Lab</p>
                                </li>
                                <li id="step2" class="progress-step">
                                    <p>Patient Details</p>
                                </li>
                                <li id="step2" class="progress-step">
                                    <p>Payment</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-2 ml-n1 mt-sm-5 mt-2">
                        <div class="input-group mb-sm-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text border- pb-1 input-box" id="basic-addon1">
                                    <svg aria-hidden="true" focusable="false" height="1.5em" width="1.5em" class="input-icon"
                                        data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                        </path>
                                    </svg></span>
                            </div>
                            <input type="text" class="form-control border input-box1" placeholder="Enter PIN Code" aria-label="number"
                                aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div class="col-sm-2 offset-1 ml-n1 mt-sm-5 mt-2 new-to">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text border- pb-1 input-box" id="basic-addon1"><svg aria-hidden="true"
                                    focusable="false" height="1.5em" width="1.5em" class="input-icon" data-prefix="fas"
                                    data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                    </path>
                                </svg></span>
                            </div>
                            <input type="text" class="form-control border- input-box1" aria-label="Text input with dropdown button"
                                placeholder="All Tests" style={{ borderRight: '0px' }} />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary dropdown-toggle border input-box1" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div class="dropdown-menu">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 offset-1 ml-n1 mt-sm-5 mt-2">
                        <div class="input-group mb-sm-3">
                            <input type="text" class="form-control border-gray input-box" placeholder="+Add More Tests"
                                aria-label="number" aria-describedby="basic-addon1" />
                            <div class="input-group-append">
                                <span class="input-group-text border-gray pb-1 input-box1">
                                    <svg aria-hidden="true" focusable="false" height="1.5em" width="1.5em" class="input-icon"
                                        data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                        </path>
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 offset-1 ml-n1 mr-3 mt-sm-5 mt-1">
                        <div class="input-group mb-sm-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text border-gray pb-1 input-box" id="basic-addon1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" height="1.5em" width="1.5em"
                                        class="input-icon" data-icon="building" class="svg-inline--fa fa-building fa-w-14" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                            d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <input type="text" class="form-control border-gray input-box1" placeholder="Select Lab" aria-label="number"
                                aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div class="mt-5 ml-sm-auto mx-sm-0 mx-4 new-to">
                        <button class="btn" type="button" style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}>
                            <div class="row">
                                <div class="col-2">
                                    <svg aria-hidden="true" focusable="false" height="1.5em" width="1.5em" data-prefix="fas"
                                        data-icon="user-check" class="svg-inline--fa fa-user-check fa-w-20" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path fill="currentColor"
                                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="col-8" style={{ fontSize: '12px', lineHeight: '15px' }}>
                                    <div style={{ textAlign: 'left' }}>Try Prime</div>
                                    <div>Enjoy Benefits</div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div class=" dropdown cart  mt-sm-5 mt-2 ml-auto">
                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" style={{ padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}>
                            <div class="row">
                                <div class="col-2">
                                    <svg aria-hidden="true" focusable="false" height="1.5em" width="1.5em" data-prefix="fas"
                                        data-icon="cart-plus" class="svg-inline--fa fa-cart-plus fa-w-18" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z">
                                        </path>
                                    </svg>

                                </div>
                                <div class="col-8" style={{ fontSize: '12px', lineHeight: '15px' }}>
                                    0 Items
                                    <div>My Cart</div>
                                </div>
                            </div>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <div class="card border-light" style={{ width: '300px' }}>
                                <div class="card-body mx-4 my-4">
                                    <div class="card-title heading" style={{ lineHeight: '10px' }}>My Cart</div>
                                    <div class="text-muted" style={{ lineHeight: '5px' }}>Tests Selected<hr />
                                    </div>
                                    <div class=""
                                        style={{ fontSize: '15px', border: '1px dotted blue', padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }}>
                                        <b>Lab</b> Dr Lal Path Labs</div>
                                    <div class="d-flex mt-4" style={{ fontWeight: '600' }}>
                                        <div class="">Thyroid Profile</div>
                                        <div class="ml-auto">Rs. 499</div>
                                    </div>
                                    <div class="d-flex mt-2" style={{ fontWeight: '600' }}>
                                        <div class="">Thyroid Profile</div>
                                        <div class="ml-auto">Rs. 499</div>
                                    </div>
                                    <div class="d-flex mt-5" style={{ fontWeight: '600' }}>
                                        <div class="">Grand Total</div>
                                        <div class="ml-auto">Rs. 499</div>
                                    </div>
                                    <div class="mt-4 text-center">
                                        <button type="button" class="btn btn-warning btn-block">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="card card-style border-light mt-4    mx-sm-0 mx-4 cat-card">
                        <div class="card-body mx-sm-4 mx-2">
                            <div class="heading mx-4 my-4">
                                Thyroid Profile, total</div>
                            <div class="sub-heading mx-4 mb-2">
                                Select Lab from results</div>
                            <div class="col-sm-12">
                                <div class="card card-style mb-2">
                                    <div class="card-body  ">
                                        <div class="card-title heading mx-4 mt-4 d-flex" style={{ lineHeight: '15px' }}>
                                            <div>
                                                Dr Lal Path Labs</div>
                                            <div class="ml-auto" style={{ fontSize: '20px' }}>
                                                Rs. 499</div>
                                        </div>
                                        <div class="mx-4" style={{ fontWeight: '600' }}>
                                            NABL, CAP, ISO</div>
                                        <div class="mx-4 mt-4">
                                            <div class="small-text mb-1 d-flex" >
                                                <div class="text-muted">
                                                    Report</div>
                                                <div class="ml-auto"
                                                    style={{ border: '1px dotted', padding: '3px 3px 3px 3px', fontSize: '12px', color: '#34e35a' }}>
                                                    40% Off</div>
                                            </div>
                                            <div class="" style={{ fontWeight: '600', fontSize: '14px' }}>
                                                24 hrs-48 hrs</div>
                                        </div>
                                        <div class="mx-4 mt-4 mb-1 ">
                                            <div class="">
                                                <img src="LalPathLabs.png" alt="" style={{ height: '100px', width: '100px', padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }} />
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </div>

                                        </div>
                                        <div class="mx-4 mb-4 d-flex">
                                            <div class=""></div>
                                            <div class="ml-auto">
                                                <div class="ml-auto">
                                                    <button type="button" class="btn btn-outline-primary btn-sm mt-2" style={{ width: '100px' }}>Add to Cart</button>
                                                    <button type="button" class="btn btn-warning btn-sm ml-sm-2 mt-2" style={{ width: '100px' }}>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-style mb-2">
                                    <div class="card-body  ">
                                        <div class="card-title heading mx-4 mt-4 d-flex" style={{ lineHeight: '15px' }}>
                                            <div>
                                                Dr Lal Path Labs
                                            </div>
                                            <div class="ml-auto" style={{ fontSize: '20px' }}>
                                                Rs. 499
                                            </div>
                                        </div>
                                        <div class="mx-4" style={{ fontWeight: '600' }}>
                                            NABL, CAP, ISO
                                            </div>
                                        <div class="mx-4 mt-4">
                                            <div class="small-text mb-1 d-flex">
                                                <div class="text-muted">
                                                    Report
                                                    </div>
                                                <div class="ml-auto"
                                                    style={{ border: '1px dotted', padding: '3px 3px 3px 3px', fontSize: '12px', color: '#34e35a' }}>
                                                    40% Off
                                                </div>
                                            </div>
                                            <div class="" style={{ fontWeight: '600', fontSize: '14px' }}>
                                                24 hrs-48 hrs
                                                </div>
                                        </div>
                                        <div class="mx-4 mt-4 mb-1 d-flex">
                                            <div class="">
                                                <img src="LalPathLabs.png" alt="" style={{ height: '100px', width: '100px', padding: '0px 0px 0px 0px', margin: '0px 0px 0px 0px' }} />
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </div>

                                        </div>
                                        <div class="mx-4 mb-4 d-flex">
                                            <div class=""></div>
                                            <div class="ml-auto">
                                                <div class="ml-auto">
                                                    <button type="button" class="btn btn-outline-primary btn-sm mt-2" style={{ width: '100px' }}>Add to Cart</button>
                                                    <button type="button" class="btn btn-warning btn-sm ml-sm-2 mt-2" style={{ width: '100px' }}>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="card card-style border-light mt-4 ml-4" style={{ width: '280px' }}>
                                <div class="card-body mx-4 my-4">
                                    <div class="card-title heading" style={{ lineHeight: '10px' }}>Tests Selected</div>
                                    <hr />
                                    <div class="text-muted small-text mt-n2">0 Tests Selected</div>
                                    <div class="mt-3" style={{ color: '#34e35a' }}>+ Add More Tests</div>
                                    <div class="mt-4 d-flex" style={{ fontWeight: '600' }}>
                                        <div class="div">Lab Selected</div>
                                        <div class="ml-auto">

                                        </div>
                                    </div>
                                    <div class="mt-3 text-center">
                                        <button type="button" class="btn btn-dark">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="card card-style border-light mt-4 ml-4" style={{ width: '300px' }}>
                                <div class="card-body mx-4 my-4">
                                    <div class="card-title heading font-24-2" style={{ lineHeight: '10px' }}>Other Lab Price</div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-6 ml-n2">
                                            <div class="row">
                                                <div class="col shadow p-3 mb-5 bg-white rounded ml-3 font-10">Laboratory Name
                                                    <div class="row">
                                                        <div class="col">
                                                            <button type="button" class="btn btn-sm btn-secondary px-4 ml-3"><img
                                                                url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqmHWbvCFuFktB83EWS0990EzUV6uITAU-ghFYwVn0mPWN6T2X&usqp=CAU" /></button>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col ml-xl-5 ml-n4" style={{ textAlign: 'right' }}>
                                                                <svg aria-hidden="true" height="0.5em" width="0.5em" focusable="false" data-prefix="fas"
                                                                    data-icon="rupee-sign" class="svg-inline--fa fa-rupee-sign fa-w-10" role="img"
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                    <path fill="currentColor"
                                                                        d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z">
                                                                    </path>
                                                                </svg>
                                                                <b>660</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="row">
                                                <div class="col shadow p-3 mb-5 bg-white rounded ml-3 font-10">Laboratory Name
                                                    <div class="row">
                                                        <div class="col">
                                                            <button type="button" class="btn btn-sm btn-secondary px-4 ml-3"><img
                                                                url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqmHWbvCFuFktB83EWS0990EzUV6uITAU-ghFYwVn0mPWN6T2X&usqp=CAU" /></button>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col ml-xl-5 ml-n5" style={{ textAlign: 'right' }}>
                                                                <svg aria-hidden="true" height="0.5em" width="0.5em" focusable="false" data-prefix="fas"
                                                                    data-icon="rupee-sign" class="svg-inline--fa fa-rupee-sign fa-w-10" role="img"
                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                    <path fill="currentColor"
                                                                        d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z">
                                                                    </path>
                                                                </svg>
                                                                <b>660</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
