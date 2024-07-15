import React, { useState } from "react";
import "./App.css";
import Admin from "./Admin";

function User() {
  const [currentPage, setCurrentPage] = useState(0);
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    };
    if (currentPage === 0) {
  return (
    <div class="container1">
      <img
        src="https://s3-alpha-sig.figma.com/img/c0c9/6d15/e5e4395b092732d5f35b7ca909a724a6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdQnt9aiLhTtsMCDaS9jJCGpxA4Dn6h74a4MLrwazUNIISrAFvCZTGxIWJiW7NVKRyiWWT6L~93novuektkTBQnytQKDThcXTTkMi6ILdNqj3htZ1zMQFp9jD6NHUd-~SONM-huHkreCP94pUzB-RMy0W1HuNS~OOMlmkr32WJAXUaqjWJvbpZ3106gqx9JOxPfaNyrPszI9dEWUyrGixNmaTtOFpbb3i65uoWUga410HhrVr8V~Wi8dp42ET6r1g3rIh6d4iwADGVRT0F7p1oahPIVDhcny75YNLTViB1xQeOvQblibaDJn73PDkAPnVMZ7TejSGOhK8hGa43UuAg__"
        alt="Burger"
        class="background-image2"
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
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                class="active"
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
              Next<i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} else if (currentPage === 1) {
  return <Admin />;
}
}

export default User;


