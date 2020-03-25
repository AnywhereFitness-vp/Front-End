import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import styled from "styled-components";

function ClassRegistration(props) {
  const [classes, setClasses] = useState({
    id: "",
    name: "",
    type: "",
    class_date: "",
    start_time: "",
    duration: "",
    intensity: "",
    location: "",
    number_of_attendees: "",
    max_attendees: ""
  });

  useEffect(() => {
    api()
      .get(`/api/classes/${props.match.params.id}`)
      .then(res => {
        setClasses(res.data);
      })
      .catch(err => {
        console.log("Error retrieving class to edit", err);
      });
  }, [props.match.params.id]);

  const handleChange = event => {
    setClasses({
      ...classes,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    api()
      .put(`/api/classes/${props.match.params.id}`, classes)
      .then(res => {
        props.history.push("/classes");
      })
      .catch(err => {
        console.log("Error editing class PUT", err);
      });
  };

  //   const RegisterMax = () => {
  //     function addAttendee() {
  //       return classes.number_of_attendees + 1;
  //     }
  //     return addAttendee;
  //   };

  return (
    <>
      <section className="change-two between" id="classes">
        <div className="container">
          <div className="global-headline">
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">R</span>egistering For
              </h2>
            </div>
            <div className="animate-bottom">
              <h1 className="headline">
                "{classes.name}" at {classes.start_time}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Form onSubmit={handleSubmit}>
        <BackLink to="/classes">Cancel</BackLink>
        <Label>Attendees</Label>
        <Input
          type="number"
          name="number_of_attendees"
          onChange={handleChange}
          placeholder={classes.number_of_attendees}
          value={classes.number_of_attendees}
          min={classes.number_of_attendees}
          max={classes.max_attendees}
          //   max={RegisterMax}
        />
        <br />
        <button className="form-btn" type="submit">
          Register
        </button>
      </Form>
    </>
  );
}

export default ClassRegistration;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 2px solid #212121;
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto;
  margin-top: 20px;
`;
const Label = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
  color: steelblue;
  margin-top: 5px;
`;
const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 2px solid #212121;
  border-radius: 5px;
`;
const BackLink = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: crimson;
  opacity: 0.5;
  margin: 0 auto;
  &:hover {
    opacity: 1;
  }
`;
