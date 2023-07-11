import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/style.css";
import MyPicture from "../images/SarunasPicture.png";
import PictureBox1 from "../images/GradPicture.png";
import Project from "../images/Project.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectPic from "../images/ProjectPicture.png";
import HobbiesPic from "../images/HobiesPicture.png";
import Carousels from "../ContentPage/Carousels";

function MainPage() {
  const AccordionItem = ({ title, content, isActive, onItemClick }) => {
    return (
      <div className={`accordion-item ${isActive ? 'active' : ''}`} onClick={onItemClick}>
        {title}
      </div>
    );
  };
  
  

  const content = [
    {
      image:Project,
      text:"To do list: In React",
      language:["JavaScript, Html, React, Jess, Css"],
      date:"21/04/2023"
    },
    {
      image:"Project2",
      text:"Holiday Planner: FullStack",
      language:["JavaScript, Node.js, React, HTML"],
      date:"24/05/2000"
    },
    {
      image:"stuff",
      text:"Login Page: Cloud Development",
      language:["JavaScript, Node.js, React, JWT"],
      date:"24/05/2000"
    },
    {
      image:"Project2",
      text:"Holiday Planner: FullStack",
      language:["JavaScript, Node.js, React, HTML"],
      date:"24/05/2000"
    },
    {
      image:"stuff",
      text:"Login Page: Cloud Development",
      language:["JavaScript, Node.js, React, JWT"],
      date:"24/05/2000"
    },
    {
      image:"Project2",
      text:"Holiday Planner: FullStack",
      language:["JavaScript, Node.js, React, HTML"],
      date:"24/05/2000"
    },
    {
      image:"stuff",
      text:"Login Page: Cloud Development",
      language:["JavaScript, Node.js, React, JWT"],
      date:"24/05/2000"
    },
  ]
  
  useEffect(() => {
    const photoDetected = document.querySelector(".Photo");
    const textDetected = document.querySelector(".content-display");
    const photoImage = photoDetected.querySelector("img");
    textDetected.style.opacity = "0";
    photoImage.style.filter = "grayscale(100%)";

    const handleMouseOver = () => {
      textDetected.style.opacity = "1";
      photoImage.style.filter = "grayscale(0%)";
      console.log("increase size");
    };

    const handleMouseLeave = () => {
      textDetected.style.opacity = "0";
      photoImage.style.filter = "grayscale(100%)";
    };

    photoDetected.addEventListener("mouseover", handleMouseOver);
    photoDetected.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      photoDetected.removeEventListener("mouseover", handleMouseOver);
      photoDetected.removeEventListener("mouseleave", handleMouseLeave);
    };

  }, []);
  
  

  return (
    <div className="container-main">
      <div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#section1">Section 1</a>
            </li>
            <li>
              <a href="#section2">Section 2</a>
            </li>
            <li>
              <a href="#section3">Section 3</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="x mandatory-scroll-snapping always-stop">
        <div id="about">
          <div className="content-wrapper">
            <div className="Content-Title">
              <h1>Sarunas Ruzgis</h1>
              <h2>About Me</h2>
              <p>
                Hey, my name is Sarunas Ruzgis. I am a Junior Software
                developer. I am Junior Developer woh inspiring to become an
                software Engineer. Currently I recently graduated that kinda
                work.
              </p>
            </div>

            <div className="Content-wrap">
              <div className="Content-About">
                <h1></h1>
              </div>
            </div>
          </div>
          <div className="content-wrapper-photo">
            <div className="offset-border offset">
              <div className="Photo">
                <img
                  className="offset-border offset"
                  src={MyPicture}
                  alt="My picture"
                />
                <div className="img-content">
                  <div className="content-display">
                    <h2>My Links</h2>
                    <dl>
                      <dt>Linkin:</dt>
                      <dd>
                        <a href="https://www.linkedin.com/in/sarunas-ruzgis-55a37a244/">
                          https://www.linkedin.com/in/sarunas-ruzgis-55a37a244/
                        </a>
                      </dd>
                      <dt>Github:</dt>
                      <dd>SarunasRuz@Outlook.com</dd>
                      <dt>Email:</dt>
                      <dd>SarunasRuz@Outlook.com</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section1">
          <Carousels />
        </div>
        {/* <div class="card-wrapper">
    <div class="card-container flex grid-cols-1 gap-4">
      <div class="card-row-Left col-span-1 bg-gray-200 p-4">
        <div class="img-row h-20 bg-gray-400"></div>
        <p>Content Goes left</p>
      </div>
      <div class="card-row-Right col-span-1 bg-gray-200 p-4">
        <div class="img-row h-20 bg-gray-400"></div>
        <p>Content Goes Right</p>
      </div>
      <div class="card-row-Left col-span-1 bg-gray-200 p-4">
        <div class="img-row h-20 bg-gray-400"></div>
        <p>Content Goes left</p>
      </div>
      <div class="card-row-Right col-span-1 bg-gray-200 p-4">
        <div class="img-row h-20 bg-gray-400"></div>
        <p>Content Goes Right</p>
      </div>
    </div>
  </div>
</div> */}

        <div id="section2">
        {/* <div className="map-wrapper">
            <div className="map-container">
          
                {content.map((item, index) => (
                  <div className="map-box-wrapper">
                  <ul key={index}>
                    
              <div className="map-box">
                  <img alt={`cover of ${item.image}`} src={item.image} />
                <div className="map-content">
                    <p>{item.text}</p>
                    <h5>{item.language}</h5>
                    <h6>{item.date}</h6>
                    </div>
                </div>
           
                </ul>
                </div>
              ))}
            </div>
          </div> */}


        </div>
        <div id="section3">
   
    
        </div>
      </div>
    </div>
  );
}

export default MainPage;
  <div class="Card-main">
            <div class="card-wrapper">
              <div class="card-box">
                <div class="card-content">
                  <div class="card-img ">
                    <img src={PictureBox1} alt="My picture"></img>
                  </div>
                  <h1>Academic Experiance</h1>
                   <ul>

                    <li>
                      <h3>Staffordshire University</h3><strong>2020 - 2023</strong>
                    </li>
                    <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    "Proin dolor augue, varius in feugiat sit amet, lacinia eget
                    libero. Cras nunc lorem, cursus at elit non, fringilla
                    eleifend augue. Nunc pharetra sollicitudin orci, a convallis
                    sapien scelerisque ut. Suspendisse eget purus erat.
                    Vestibulum interdum dictum ipsum id porta. Fusce in varius
                    purus, nec consequat lorem. Etiam ipsum lectus, tincidunt
                    eget accumsan finibus, bibendum eget diam.
                    </li>
                   </ul>
                  <p>
                  
                  
                  </p>
                </div>
              </div>

              <div class="card-box">
                <div class="card-content">
                  <div class="card-img ">
                    <img src={ProjectPic} alt="My picture"></img>
                  </div>
                  <h1>Projects Developements</h1>
                   <ul>

                    <li>
                      <h4>Staffordshire University</h4><strong>2020 - 2023</strong>
                    </li>
                    <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    "Proin dolor augue, varius in feugiat sit amet, lacinia eget
                    libero. Cras nunc lorem, cursus at elit non, fringilla
                    eleifend augue. Nunc pharetra sollicitudin orci, a convallis
                    sapien scelerisque ut. Suspendisse eget purus erat.
                    Vestibulum interdum dictum ipsum id porta. Fusce in varius
                    purus, nec consequat lorem. Etiam ipsum lectus, tincidunt
                    eget accumsan finibus, bibendum eget diam.
                    </li>
                    </ul>
                </div>
              </div>
              {/* Content 4  */}
              <div class="card-box">
                <div class="card-content">
                  <div class="card-img ">
                    <img src={HobbiesPic} alt="My picture"></img>
                  </div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    "Proin dolor augue, varius in feugiat sit amet, lacinia eget
                    libero. Cras nunc lorem, cursus at elit non, fringilla
                    eleifend augue. Nunc pharetra sollicitudin orci, a convallis
                    sapien scelerisque ut. Suspendisse eget purus erat.
                    Vestibulum interdum dictum ipsum id porta. Fusce in varius
                    purus, nec consequat lorem. Etiam ipsum lectus, tincidunt
                    eget accumsan finibus, bibendum eget diam.
                  </p>
                </div>
              </div>
              {/* Content 4  */}
            </div>
          </div>