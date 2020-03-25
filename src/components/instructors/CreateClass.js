import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

import styled from "styled-components";

function CreateClass(props) {
  const [data, setData] = useState([]);

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault(props);
    api()
      .post("/api/classes", data)
      .then(res => {
        console.log(res.data);
        props.history.push("/classes");
      })
      .catch(err => {
        console.log("Error creating new class", err);
      });
  };

  return (
    <>
      <section className="change-two between" id="classes">
        <div className="container">
          <div className="global-headline">
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">C</span>reating
              </h2>
            </div>
            <div className="animate-bottom">
              <h1 className="headline">"{data.name}"</h1>
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
          placeholder="name"
        />
        <Label>Type</Label>
        <Select
          type="text"
          name="type"
          onChange={handleChange}
          placeholder="type"
        >
          <Option value="">Please Select...</Option>
          <Option value={"Cardio"}>Cardio</Option>
          <Option value={"Weights"}>Weights</Option>
          <Option value={"Kickboxing"}>Kickboxing</Option>
        </Select>
        <Label>Class Date</Label>
        <Input
          type="text"
          name="class_date"
          onChange={handleChange}
          placeholder="dd/mm/yyyy"
        />
        <Label>Start Time</Label>
        <Select
          type="text"
          name="start_time"
          onChange={handleChange}
          placeholder="start_time"
        >
          <Option value="">Please Select...</Option>
          <AMOption value={"5:00AM"}>5:00 AM</AMOption>
          <AMOption value={"6:00AM"}>6:00 AM</AMOption>
          <AMOption value={"7:00AM"}>7:00 AM</AMOption>
          <AMOption value={"8:00AM"}>8:00 AM</AMOption>
          <AMOption value={"9:00AM"}>9:00 AM</AMOption>
          <AMOption value={"10:00AM"}>10:00 AM</AMOption>
          <AMOption value={"11:00AM"}>11:00 AM</AMOption>
          <PMOption value={"12:00PM"}>12:00 PM</PMOption>
          <PMOption value={"1:00PM"}>1:00 PM</PMOption>
          <PMOption value={"2:00PM"}>2:00 PM</PMOption>
          <PMOption value={"3:00PM"}>3:00 PM</PMOption>
          <PMOption value={"4:00PM"}>4:00 PM</PMOption>
          <PMOption value={"5:00PM"}>5:00 PM</PMOption>
          <PMOption value={"6:00PM"}>6:00 PM</PMOption>
          <PMOption value={"7:00PM"}>7:00 PM</PMOption>
          <PMOption value={"8:00PM"}>8:00 PM</PMOption>
          <PMOption value={"9:00PM"}>9:00 PM</PMOption>
          <PMOption value={"10:00PM"}>10:00 PM</PMOption>
          <PMOption value={"11:00PM"}>11:00 PM</PMOption>
        </Select>
        <Label>Duration</Label>
        <Input
          type="number"
          name="duration"
          onChange={handleChange}
          placeholder="duration"
        />
        <Label>Intensity</Label>
        <Select
          type="text"
          name="intensity"
          onChange={handleChange}
          placeholder="intensity"
        >
          <Option value="">Please Select...</Option>
          <Option value={"Low"}>Low</Option>
          <Option value={"Medium"}>Medium</Option>
          <Option value={"High"}>High</Option>
          <Option value={"Very High"}>Very High</Option>
        </Select>
        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder="location"
        />
        <Label>Attendees</Label>
        <Input
          type="number"
          name="number_of_attendees"
          onChange={handleChange}
          placeholder="0"
        />
        <Label>Maximum Attendees</Label>
        <Input
          type="number"
          name="max_attendees"
          onChange={handleChange}
          placeholder="max_attendees"
        />
        <button className="form-btn" type="submit">
          Save
        </button>
      </Form>
    </>
  );
}

export default CreateClass;

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
const CurrentOption = styled.option`
  background-color: steelblue;
  color: white;
  font-size: 1.8rem;
`;
const Option = styled.option`
  font-size: 1.8rem;
`;
const AMOption = styled.option`
  font-size: 1.8rem;
`;
const PMOption = styled.option`
  font-size: 1.8rem;
  background-color: lightgrey;
`;
