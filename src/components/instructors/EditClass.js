import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

import "../../css/Forms.css";
import styled from "styled-components";

function CreateClasses(props) {
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

  return (
    <>
      <section className="change-two between" id="classes">
        <div className="container">
          <div className="global-headline">
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">E</span>diting
              </h2>
            </div>
            <div className="animate-bottom">
              <h1 className="headline">"{classes.name}"</h1>
            </div>
          </div>
        </div>
      </section>

      <Form onSubmit={handleSubmit}>
        <BackLink to="/classes">Cancel</BackLink>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder={classes.name}
        />
        <Label>Type</Label>
        <Select
          type="select"
          name="type"
          onChange={handleChange}
          placeholder={classes.type}
        >
          <option value={classes.type}>Current: {classes.type}</option>
          <option value={"cardio"}>Cardio</option>
          <option value={"weights"}>Weights</option>
          <option value={"kickboxing"}>Kickboxing</option>
        </Select>
        <Label>Class Date</Label>
        <Input
          type="text"
          name="class_date"
          onChange={handleChange}
          placeholder={classes.class_date}
        />
        <Label>Start Time</Label>
        <Input
          type="text"
          name="start_time"
          onChange={handleChange}
          placeholder={classes.start_time}
        />
        <Label>Duration</Label>
        <Input
          type="text"
          name="duration"
          onChange={handleChange}
          placeholder={classes.duration}
        />
        <Label>Intensity</Label>
        <Input
          type="text"
          name="intensity"
          onChange={handleChange}
          placeholder={classes.intensity}
        />
        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder={classes.location}
        />
        <Label>Number of Attendees</Label>
        <Input
          type="text"
          name="number_of_attendees"
          onChange={handleChange}
          placeholder={classes.number_of_attendees}
        />
        <Label>Max Capacity</Label>
        <Input
          type="text"
          name="max_attendees"
          onChange={handleChange}
          placeholder={classes.max_attendees}
        />
        <button className="form-btn" type="submit">
          Save
        </button>
      </Form>
    </>
  );
}

export default CreateClasses;

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
const Select = styled.select`
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
