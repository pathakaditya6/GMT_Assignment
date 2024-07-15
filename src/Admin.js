import React, {useState} from "react";
import "./App.css";
import Login from "./Login"

function Admin() {
    const [currentPage, setCurrentPage] = useState(0);
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    };
    if (currentPage === 0) {
  return (
    <div class="container1">
      <img
        src="https://s3-alpha-sig.figma.com/img/4ba4/23e2/47ab2f521db10f62ad59b289265a82d4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPr~HvJ2bGEyB0k~spJBmazbjLzQhuOGioFq-8GiigyKuuuUOwSt6A~AR63AecbBH~GtZWj1KFJTE6BfdsX15V-5OQcA~B6k~j4vPz~Ri7dGMyCcbT0sAgXrlZOVruMVWWF26Fnx74YxUPfkK2hbmFOE3TwGMUCF9ABoIEdiTVbwxrZx1oVFyN9ZTe-E8dyr71LknNcBLQ5sLFpRUkCkNsUYJ3~HT7dJk~9Ol1YaguwpuszfcNIG5gjcrdsJJxmV~pSdyBgcD-JmPyfjrHtncNT~lSr9sIm-Tz1QkX5hHdWhXt2eZS2lgVqOD18dg035eZ3DYXA0WTo51rigUJKDkA__"
        alt="Burger"
        class="background-image3"
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
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
                class="active"
              ></li>
            </ol>
          </div>
          <div class="buttons arrow" >
            <span onClick={handleNextClick}><i class="bi bi-arrow-right-circle-fill"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
} else if (currentPage === 1) {
    return <Login />;
  }
}

export default Admin;


