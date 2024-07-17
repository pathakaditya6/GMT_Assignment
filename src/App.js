import React, { useState } from "react";
import "./App.css";
import User from "./User";
import { ToastContainer } from 'react-toastify';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  if (currentPage === 0) {
    return (

      <div class="container1">
        <img
          src="https://s3-alpha-sig.figma.com/img/e088/8995/13a478aa6d3cc9bebac1c6fe29b1cf35?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=duz6dA7doe3wpqGBTvFXD7eSqCD1lBv39rMRvpbxVxWU-HwqrRREYNRE9el2I7LQ0kPjAVZa9CdyOW-EhrkuDHLn0Qw-X5F~mxs7hKcbyrgiXQbv6IbgDiAy8Eze4ErKeBRmZhXOjIUdhSN5SRgZaip8TlZe3--BCk-4yKi2c88lC~V73tXAVaV5xowjy6WYbeO5g-NSXxbY9PGnPx-t1pcidgKfTY-DojLcSVzrByxyw7gfGL5tdI0BsKbc12Ynu8MW4rnc-Ctmc0S3TE7ICdWL22FaTsKhQT0h7N6Nkd5SF6y8M7Lmp8fwbnH8AAPVWa0AtlqcLFrnTJg8ExaFVw__"
          alt="Burger"
          class="background-image"
        />
        <div class="overlay">
          <div class="content">
            <h1>We serve incomparable delicacies</h1>
            <p>
              All the best restaurants with their top menu waiting for you, they
              can’t wait for your order!!
            </p>
            <div
              id="carouselExampleIndicators"
              class="carousel slide mt-5"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
            </div>
            <div class="buttons">
              <button class="skip">Skip</button>
              <button class="next" onClick={handleNextClick}>
                Next <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
    
  } else if (currentPage === 1) {
    
    return <User />;
  }
}

export default App;

