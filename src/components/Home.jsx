import React from "react";
import Products from './Products'


const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="..." height="550px"/>
                <div className="box">
                <div className="card-img-overlay d-flex flex-column justify-content-center box">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    
                </div>
                </div>
                
            </div>
            <Products/>

        </div>
    )
}
export default Home;