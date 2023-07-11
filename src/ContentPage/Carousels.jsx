import React from "react";
import "../css/style.css";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Carousels() {
  const couraselContent = [
    {
      id: 0,
      title: "Stuff",
      description: "insert here 1",
      image: {},
      author: "desc"
    },
    {
      id: 1,
      title: "stuff2",
      description: " insert content 2",
      image: {},
      author: ""
    },
    {
      id: 2,
      title: "Stuff",
      description: "insert here 1",
      image: {},
      author: ""
    },
    {
      id: 3,
      title: "stuff2",
      description: " insert content 2",
      image: {},
      author: ""
    },
  ];
  return (
    <div className="Carousel-wrap">
      <div className="Carousel-Content carousel slide" data-bs-ride="carousel">
        <Carousel>
          {couraselContent.map((couraselContent) => (
            <Carousel.Item key={couraselContent.id}>
              <div className="Carousel-wrap">
                <div className="Carousel-box">
                  <div className="Carousel-text">
                    <div className="Carousel-title">
                        <h1>{couraselContent.title}</h1>
                    </div>
                    <div className="Carousel-texts">
                        <p>{couraselContent.description}</p>
                    </div>
                  </div>
                  <div className="Carousel-image">
                    <img className="d-block w-0.5"
                    src={couraselContent.image}
                    alt={couraselContent.author}
                    />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
          ;
        </Carousel>
      </div>
    </div>
  );
}
export default Carousels;
