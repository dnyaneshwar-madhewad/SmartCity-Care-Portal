import React from "react";
import "./Aboutus.css";
import { Button, Card } from "react-bootstrap";
import dheeraj from "./images/team1.jpeg";
import dnyaneshwar from "./images/team2.jpeg";
import omkar from "./images/team3.jpeg";
import ajit from "./images/team4.png";
import sagar from "./images/team5.png";

export default function About() {
  return (
    <>
      <div className="container">
        <h2 className="text-start pb-2">About Us</h2>
        <h3>SmartCity Care Portal</h3>
        <p>
          This project Smart city care portal aims at to develop the software
          that covers all the aspects of management and operations of hospital.
          So, with the victim and proof of corona pandemic situation we are
          introducing this project. So, if further in future again pandemic
          situation like corona comes into human life at that time this software
          will help the peoples a lot in the procedure of finding facilities.
          This software enables the health providers to provide the operational
          health care availability, reduce time consumption and enhance delivery
          of quality of care. The main purpose of our project is to make
          hospital related task easy and saves the time of public while
          searching health care facilities. This project maintains helps to
          maintains the details of hospital related queries (like oxygen
          availability, Bed availability etc.) With this software people can get
          the information of nearby hospital location wise wherever they are.
        </p>
        <hr />
        <h3>Our Team</h3>
        <div class="wrapper">
          <div class="team">
            <div class="team_member">
              <div class="team_img">
                <img src={dheeraj} alt="Team_image" />
              </div>
              <h3>Dheeraj Ingale</h3>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img src={dnyaneshwar} alt="Team_image" />
              </div>
              <h3>Dnyaneshwar Madhewad</h3>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img src={ajit} alt="Team_image" />
              </div>
              <h3>Ajit Patil</h3>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img src={omkar} alt="Team_image" />
              </div>
              <h3>Omkar Gadakh</h3>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img src={sagar} alt="Team_image" />
              </div>
              <h3>Sagar Garate</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
