// src/PatientDetails.js

import React, { useState } from 'react';
import './PatientDetails.css';

function PatientDetails() {
  const [patientId, setPatientId] = useState('');
  const [patientInfo, setPatientInfo] = useState(null);


  function generatePatientData(){
    console.log(`http://localhost:8080/get/${patientId}`);
    fetch(`http://localhost:8080/get/${patientId}`)
    .then((response)=>{
      if (!response.ok) {
        throw new Error(`Patient with ID ${patientId} not found.`);
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      setPatientInfo(data);
    })
    .catch((error) => {
      alert(`Patient with ID ${patientId} not found.`);
    });

  }


  const handleInputChange = (event) => {
    
    setPatientId(event.target.value.toUpperCase());
  };

 

  return (
    <div className="container">
      <h1>Patient Details</h1>
      <div className="input-container">
        <label htmlFor="patientId">Enter Patient ID:</label>
        <input
          type="text"
          id="patientId"
          value={patientId}
          onChange={handleInputChange}
          placeholder="e.g., P001"
        />
      </div>
      <div className="generator">
        <button onClick={generatePatientData}>Generate</button>
      </div>
      {patientInfo && (
        <>
          <div id="patientInfo" className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Email</th>
                  <th>Prescription</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{patientInfo.name}</td>
                  <td>{patientInfo.email}</td>
                  <td>{patientInfo.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="medicinesInfo" className="table-container">
            <h2>Medicines Prescribed</h2>
            <table>
              <thead>
                <tr>
                  <th>Medicine</th>
                </tr>
              </thead>
              <tbody>
                {patientInfo.med.map((medicine, index) => (
                  <tr key={index}>
                    <td>{medicine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default PatientDetails;
