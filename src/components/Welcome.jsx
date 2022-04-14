import React from "react";
import { useState } from "react";
import "./Welcome.css";

function Welcome() {
  const [clinic, setClinic] = useState(true);
  const [location, setLocation] = useState("");
  const [dr, setDr] = useState([]);
  const [drName, setdrName] = useState();
  const [slot, setSlot] = useState(false);
  const [timing, setTimeing] = useState("");

  var doctors;
  let locationFn = (city) => {
    if (city == "delhi") {
      doctors = [
        {
          name: "Mr.Verma",
          special: "Brain",
        },
        {
          name: "Mrs.Menon",
          special: "Heart",
        },
        {
          name: "Mr.Khan",
          special: "Skin",
        },
      ];
    }

    if (city == "bangalore") {
      doctors = [
        {
          name: "Mr.V",
          special: "Brain",
        },
        {
          name: "Mrs.M",
          special: "Heart",
        },
        {
          name: "Mr.Khan",
          special: "Skin",
        },
      ];
    }
    setDr(doctors);
    console.log(doctors);
  };
  let doctorFn = (drData) => {
    console.log(drData);
    setdrName(drData);
  };
  let patientDetailsFn = () => {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;
    let symptoms = document.getElementById("symptoms").value;

    let patientForm = {
      name: name,
      number: number,
      age: age,
      date: date,
      time: timing,
      symptoms: symptoms,
      drName: drName.name,
      city: location,
    };

    let patients = JSON.parse(localStorage.getItem("doctors")) || [];
    patients.push(patientForm);
    localStorage.setItem("patientForm", JSON.stringify(patients));
    console.log(patientForm);
  };
  let timeFn = (t) => {
    setTimeing(t);
  };
  return (
    <div>
      {clinic && (
        <button
          className="booking"
          onClick={() => {
            setClinic(false);
          }}
        >
          Start Booking
        </button>
      )}

      {!clinic && !location && (
        <div className="locationDiv">
          <h1 className="chooseLocation">Choose Clinic Location</h1>

          <button
            onClick={() => {
              locationFn("delhi");
              setLocation("delhi");
            }}
          >
            Delhi
          </button>

          <button
            onClick={() => {
              locationFn("bangalore");
              setLocation("bangalore");
            }}
          >
            Bangalore
          </button>
        </div>
      )}

      {!clinic && location && !drName && (
        <div className="drListDiv">
          <h1>Choose Doctor</h1>
          <div className="drList">
            {dr.map((e) => (
              <button
                key={e.name}
                onClick={() => {
                  doctorFn(e);
                }}
              >
                Name:{e.name} Specalization:{e.special}
              </button>
            ))}
          </div>
        </div>
      )}

      {!clinic && location && drName && (
        <div className="drListDiv">
          <h1>Add Patient Details</h1>
          <div className="patientList">
                      <form action="">
                          <tbody>
                              <tr>
                                  <td ><label className="inputL" htmlFor="">Patient name:</label></td>
                                  <td ><input className="inputR" id="name"  type="text" /></td>
                              </tr>
                              <tr>
                                  <td ><label className="inputL" htmlFor="">Phone No.:</label></td>
                                  <td ><input className="inputR" id="number" type="number" /></td>
                              </tr>
                              <tr>
                                  <td ><label className="inputL" htmlFor="">Age:</label></td>
                                  <td ><input className="inputR" id="age" type="number" /></td>
                              </tr>
                              <tr>
                                  <td ><label className="inputL" htmlFor="">Choose Date:</label></td>
                                  <td ><input className="inputR" id="date" type="date" /></td>
                              </tr>
                             <tr>
                                  <td><label className="inputL" htmlFor="">Symptoms:</label></td>
                                  <td><textarea className="inputR" name="" id="symptoms" cols="30" rows="10"></textarea></td>
                              </tr>
                              <tr>
                                  <td></td>
                                  <td><button className="mainSubmit"
                onClick={(e) => {
                  e.preventDefault();
                  setSlot(true);
                }}
              >
                Check Availability
              </button></td>
                              </tr>
                              
                              
                          </tbody>
             
              
            </form>
            <button className="mainSubmit"
              onClick={() => {
                patientDetailsFn();
              }}
            >
              submit
            </button>
          </div>
        </div>
      )}
      {slot && (
        <div className="schedule_btn">
          <button
            onClick={() => {
              timeFn("09:00-09:20");
            }}
          >
            09:00 - 09:20
          </button>

          <button
            onClick={() => {
              timeFn("10:00-10:20");
            }}
          >
            10:00 - 10:20
          </button>

          <button
            onClick={() => {
              timeFn("10:30-10:50");
            }}
          >
            10:30 - 10:50
          </button>

          <button
            onClick={() => {
              timeFn("05:00-05:20");
            }}
          >
            05:00 - 05:20
          </button>

          <button
            onClick={() => {
              timeFn("06:00-06:20");
            }}
          >
            06:00 - 06:20
          </button>

          <button
            onClick={() => {
              timeFn("06:30-06:50");
            }}
          >
            06:30 - 06:50
          </button>
        </div>
      )}
    </div>
  );
}

export default Welcome;
