import React from "react";
import { Button, Carousel } from "react-bootstrap";
import image1 from "./images/1.png";
import bed from "./images/bed7.jpg";
import image2 from "./images/blood1.jpg";

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3500}>
          <img className="d-block w-100" src={image1} alt="First slide" />

          <Carousel.Caption>
            <h3 className="text-muted">Check Bed Availability and Book Bed</h3>
            <p>Book Bed Instantly and save the Time of Searching </p>
            <Button
              className="btn btn-lg btn-primary"
              variant="outline-light"
              href="/login"
            >
              Login
            </Button>
            <Button
              className="btn btn-lg btn-primary mx-2"
              variant="outline-light"
              href="/usersignup"
            >
              SignUp
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-muted">Check Blood and Oxygen Availability</h3>
            <p>
              Get the information of blood and oxygen Availability at Hospitals
              Instantly.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img className="d-block w-100" src={bed} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-muted">Check Specialist Doctors Available</h3>
            <p>
              Get the information of all specialist Doctors Available at
              Different Hospitals Instantly.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
