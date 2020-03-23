import React, { useEffect, useState } from "react";
import api from "../utils/api";

import Image1 from "../images/cardio.jpg";

import cardioImg from "../images/cardio.jpg";
import kickboxingImg from "../images/kickboxing2.jpg";
import weightsImg from "../images/weights.jpg";

import styled from "styled-components";

function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    api()
      .get("/api/classes")
      .then(res => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch(err => {
        console.log("Error with GET classes", err);
      });
  }, []);

  return (
    <>
      {/* Change Starts Now2 Start */}
      <section className="change-two between" id="classes">
        <div className="container">
          <div className="global-headline">
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">A</span>vailable
              </h2>
            </div>
            <div className="animate-bottom">
              <h1 className="headline">Classes</h1>
            </div>
          </div>
        </div>
      </section>

      <ClassesContainer>
        {classes.map(classes => (
          <ClassCard key={classes.id}>
            <FlexCardSection>
              <p>{classes.type}</p>
              <p>{classes.class_date}</p>
            </FlexCardSection>
            <div>
              {classes.type === "cardio" ? (
                <CardImage src={cardioImg} />
              ) : classes.type === "weights" ? (
                <CardImage src={weightsImg} />
              ) : (
                <CardImage src={kickboxingImg} />
              )}
            </div>
            <div>
              <p>
                <CardTitles>{classes.name}</CardTitles>
              </p>
              <p>
                Starting at {classes.start_time} and scheduled for{" "}
                {classes.duration} hour(s). The intensity for this class is{" "}
                {classes.intensity} and will be located in {classes.location}.
              </p>
            </div>
            <FlexCardSection>
              <RegisterButton>Register</RegisterButton>
              <p>
                {classes.number_of_attendees === classes.max_attendees ? (
                  <ClassFull>FULL</ClassFull>
                ) : (
                  <p>
                    <CardTitles>Attendees:</CardTitles>{" "}
                    {classes.number_of_attendees} / {classes.max_attendees}
                  </p>
                )}
              </p>
            </FlexCardSection>
          </ClassCard>
        ))}
      </ClassesContainer>
    </>
  );
}

export default ClassesPage;

const ClassesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0 20px 0;
`;
const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: transparent;
  margin: 10px;
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 0 10px 0 10px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
`;
const CardTitles = styled.big`
  font-weight: bold;
  color: steelblue;
`;
const ClassFull = styled.big`
  font-weight: bold;
  color: red;
`;
const FlexCardSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RegisterButton = styled.button`
  margin: 5px;
  color: steelblue;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.5s ease;
  width: 100px;
  height: 45px;
  &:hover {
    background: steelblue;
    color: white;
  }
`;
const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;
