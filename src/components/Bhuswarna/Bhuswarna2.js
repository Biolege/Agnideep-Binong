import React from 'react'
import './Bhuswarna2.css'

export default function Bhuswarna2() {
    return (
        <div>
            <div class="container my-5 p-3 mb-5 bg-white rounded">
                <div class="row">
                    <div class="col-12">
                        <div class="card border-0 outer-card">
                            <div class="row mt-2 mb-n3">
                                <div class="col text-center text-lg-left"><h3>Select Laboratory</h3></div>
                            </div>


                            <div class="row my-5 pb-5">
                                <div class="col col-lg-3 offset-0 offset-lg-1">
                                    <div class="rectangle mx-auto"></div>
                                    <p class="text-center mt-4">Laboratory Name</p>
                                    <p class="text-center">Price</p>
                                </div>
                                <div class="col col-lg-3 ml-lg-4 justify-content-center">
                                    <div class="rectangle mx-auto">
                                        <div class="corner"></div>
                                        <div class="recommend ml-n2">Recommended</div>
                                    </div>
                                    <p class="text-center mt-4">Laboratory Name</p>
                                    <p class="text-center">Price</p>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-3 col-sm-2 col-lg-1 text-center ml-auto mr-3 mt-5 justify-content-end rounded-pill next">
                                    <div type="button" class="btn btn-sm justify-content-end border-0">Next</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
