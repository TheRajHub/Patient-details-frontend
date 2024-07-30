import React, { useState } from 'react';
import './App.css';

function App() {
  const [med, setmed] = useState([]);
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    phone: '',
    email: '',
    description: '',
    med: []
  });
  const addField = () => {
    setmed([...med, ""]);
  };
  const handleAdditionalFieldChange = (index, value) => {
    const newmed = [...med];
    newmed[index] = value;
    setmed(newmed);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };





  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = { ...formData, med };
    console.log(dataToSend);
    fetch('http://localhost:8080/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };






















  return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">ID:</label>
            <input type="text" id="ID" name="id" required  onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required  onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone no.:</label>
            <input type="tel" id="phone" name="phone" required  onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required  onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="prescription">Prescription:</label>
            <textarea id="prescription" name="description" rows="4" required  onChange={handleChange}/>
          </div>
          <div id="additional-fields">
            {med.map((field, index) => (
              <div className="form-group" key={index}>
                <label>Additional Medicine:</label>
                <input
                  type="text"
                  value={field}
                  onChange={(e) => handleAdditionalFieldChange(index, e.target.value)}
                  required
                />
              </div>
            ))}
          </div>
          <div className="form-group">
            <button type="button" id="add-button" onClick={addField}>
              Add Medicine
            </button>
          </div>
          <div className="form-group submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  );
}

export default App;
