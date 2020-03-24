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
        <Input type="text" name="name" onChange={handleChange} placeholder="" />
        <Label>Type</Label>
        <Select
          type="select"
          name="type"
          onChange={handleChange}
          placeholder=""
        >
          <CurrentOption value="">Please Select...</CurrentOption>
          <Option value={"Cardio"}>Cardio</Option>
          <Option value={"Weights"}>Weights</Option>
          <Option value={"Kickboxing"}>Kickboxing</Option>
        </Select>
        <Label>Class Date</Label>
        <Input
          type="date"
          name="class_date"
          onChange={handleChange}
          placeholder=""
        />
        <Label>Start Time</Label>
        <Select
          type="select"
          name="start_time"
          onChange={handleChange}
          placeholder=""
        >
          <CurrentOption value="">Please Select...</CurrentOption>
          <Option value={"12:00 AM"}>12:00 AM</Option>
          <Option value={"1:00 AM"}>1:00</Option>
          <Option value={"2:00 AM"}>2:00</Option>
          <Option value={"3:00 AM"}>3:00</Option>
          <Option value={"4:00 AM"}>4:00</Option>
          <Option value={"5:00 AM"}>5:00</Option>
          <Option value={"6:00 AM"}>6:00</Option>
          <Option value={"7:00 AM"}>7:00</Option>
          <Option value={"8:00 AM"}>8:00</Option>
          <Option value={"9:00 AM"}>9:00</Option>
          <Option value={"10:00 AM"}>10:00</Option>
          <Option value={"11:00 AM"}>11:00</Option>
          <Option value={"12:00 PM"}>12:00 PM</Option>
          <Option value={"1:00 PM"}>1:00</Option>
          <Option value={"2:00 PM"}>2:00</Option>
          <Option value={"3:00 PM"}>3:00</Option>
          <Option value={"4:00 PM"}>4:00</Option>
          <Option value={"5:00 PM"}>5:00</Option>
          <Option value={"6:00 PM"}>6:00</Option>
          <Option value={"7:00 PM"}>7:00</Option>
          <Option value={"8:00 PM"}>8:00</Option>
          <Option value={"9:00 PM"}>9:00</Option>
          <Option value={"10:00 PM"}>10:00</Option>
          <Option value={"11:00 PM"}>11:00</Option>
        </Select>
        <Label>Duration</Label>
        <Select
          type="select"
          name="duration"
          onChange={handleChange}
          placeholder=""
        >
          <CurrentOption value="">Please Select...</CurrentOption>
          <Option value={30}>30 Minutes</Option>
          <Option value={1}>1 Hour</Option>
          <Option value={1.5}>1.5 Hours</Option>
          <Option value={2}>2 Hours</Option>
          <Option value={2.5}>2.5 Hours</Option>
          <Option value={3}>3 Hours</Option>
        </Select>
        <Label>Intensity</Label>
        <Select
          type="select"
          name="intensity"
          onChange={handleChange}
          placeholder=""
        >
          <CurrentOption value="">Please Select...</CurrentOption>
          <Option value={"Low"}>Low</Option>
          <Option value={"Moderate"}>Moderate</Option>
          <Option value={"High"}>High</Option>
          <Option value={"Very High"}>Very High</Option>
        </Select>
        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder=""
        />
        <Label>Attendees</Label>
        <Input
          type="text"
          name="number_of_attendees"
          placeholder="0"
          value={0}
          disabled
        />
        <Label>Max Capacity</Label>
        <Select
          type="select"
          name="max_attendees"
          onChange={handleChange}
          placeholder=""
        >
          <CurrentOption value="">Please Select...</CurrentOption>
          <Option value={5}>5</Option>
          <Option value={10}>10</Option>
          <Option value={15}>15</Option>
          <Option value={20}>20</Option>
          <Option value={25}>25</Option>
          <Option value={30}>30</Option>
          <Option value={35}>35</Option>
        </Select>
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
