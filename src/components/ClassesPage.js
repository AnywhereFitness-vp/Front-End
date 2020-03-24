import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../utils/api";
import swal from "sweetalert";

import cardioImg from "../images/cardio.jpg";
import kickboxingImg from "../images/kickboxing2.jpg";
import weightsImg from "../images/weights.jpg";

import styled from "styled-components";

function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const history = useHistory();

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

  const deleteClass = (event, classes) => {
    // event.preventDefault();
    api()
      .delete(`/api/classes/${classes.id}`)
      .then(res => {
        console.log("Delete class", res);
        api()
          .get(`/api/classes`)
          .then(res => {
            console.log(res);
            setClasses(res.data);
          })
          .catch(err => {
            console.log("Error deleting class", err);
          });
      })
      .catch(err => {
        console.log("Error getting id to delete class", err);
      });
  };

  return (
    <>
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

      <AddClassDiv>
        <AddClassLink to="/createclass">Add Class</AddClassLink>
      </AddClassDiv>

      <ClassesContainer>
        {classes.map(classes => (
          <>
            <ClassCard key={classes.id}>
              <EditDeleteSpan>
                <EditLink to={`/classedit/${classes.id}`}>Edit</EditLink>
                {/* <DeleteLink onClick={e => deleteClass(e, classes)}> */}
                <DeleteLink
                  onClick={function() {
                    swal({
                      title: "DELETE",
                      text: "Are you sure you want to delete this class?",
                      icon: "warning",
                      buttons: true,
                      dangerMode: true
                    }).then(willDelete => {
                      if (willDelete) {
                        const deleteThisClass = e => deleteClass(e, classes);
                        deleteThisClass();
                        swal("Class deleted", {
                          icon: "success"
                        });
                      }
                    });
                  }}
                >
                  ❌
                </DeleteLink>
              </EditDeleteSpan>
              <FlexCardSection>
                <ClassType>{classes.type}</ClassType>
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
              <TextArea>
                <p>
                  <CardTitles>{classes.name}</CardTitles>
                </p>
                <p>
                  Starting at {classes.start_time} and scheduled for{" "}
                  {classes.duration}. The intensity for this class is{" "}
                  {classes.intensity} and will be located in {classes.location}.
                </p>
              </TextArea>
              <CardFooter>
                <RegisterButton>Register</RegisterButton>
                <p>
                  {classes.number_of_attendees === classes.max_attendees ||
                  classes.number_of_attendees > classes.max_attendees ? (
                    <ClassFull>FULL</ClassFull>
                  ) : (
                    <p>
                      <CardTitles>Attendees:</CardTitles>{" "}
                      {classes.number_of_attendees} / {classes.max_attendees}
                    </p>
                  )}
                </p>
              </CardFooter>
            </ClassCard>
          </>
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
  margin: 20px 0;
`;
const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: transparent;
  margin: 10px;
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 5px 10px;
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
  margin: 5px 0;
  height: 20px;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  height: 50px;
`;
const ClassType = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: steelblue;
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
    cursor: pointer;
  }
`;
const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
  height: 200px;
`;
const TextArea = styled.div`
  height: 125px;
`;
const EditDeleteSpan = styled.span`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.25px solid lightgrey;
`;
const EditLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
  color: goldenrod;
`;
const DeleteLink = styled.p`
  font-size: 1.4rem;
  &:hover {
    cursor: pointer;
  }
`;
const AddClassDiv = styled.div`
  margin-top: 25px;
  text-align: center;
`;
const AddClassLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
  color: green;
  opacity: 0.65;
  border-bottom: 1px solid white;
  transition: 0.5s ease;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid green;
    opacity: 1;
  }
`;
