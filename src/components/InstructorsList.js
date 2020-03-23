import React, { useState, useEffect } from "react";
import api from "../utils/api";
import styled from "styled-components";

function InstructorsList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api()
      .get("/api/users")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => {
        console.log("Error with GET users", err);
      });
  }, []);

  return (
    <>
      <h1>Instructors:</h1>
      <ClassesContainer>
        {users.map(user => (
          <>
            {user.role_id === 1 ? (
              <ClassCard key={user.id}>
                <CardSpan>
                  <Instructors>Instructor:</Instructors>
                  <p>{user.username}</p>
                </CardSpan>
                <h4>Classes I teach:</h4>
                <ul>
                  <li>class</li>
                  <li>class</li>
                  <li>class</li>
                  <li>class</li>
                  <li>class</li>
                  <li>class</li>
                </ul>
              </ClassCard>
            ) : null}
          </>
        ))}
      </ClassesContainer>
    </>
  );
}

export default InstructorsList;

const ClassesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0 20px 0;
`;
const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 350px;
  background-color: transparent;
  margin: 10px;
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 0 10px 0 10px;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
`;
const CardSpan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Instructors = styled.big`
  color: steelblue;
  font-weight: bold;
`;
