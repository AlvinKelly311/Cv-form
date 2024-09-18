import React, { useState } from "react";

function Edu() {
  const [school, setschool] = useState("");
  const [Education, setEducation] = useState("");
  const [AdmissionDate, setAdmissionDate] = useState("");
  const [GraduationDate, setGraduationDate] = useState("");
  const [Courseoffered, setcourseoffered] = useState("");
  const [details, setdetails] = useState([]);
  const [editId, setEditId] = useState(null); // Track the ID of the data being edited

  const handledetails = (detail) => {
    if (editId !== null) {
      // Update the existing detail
      setdetails((details) =>
        details.map((item) =>
          item.id === editId ? { ...detail, id: editId } : item
        )
      );
      setEditId(null); // Reset edit ID after updating
    } else {
      // Add new data to the list
      setdetails((details) => [...details, detail]);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const newData = {
      school,
      Education,
      AdmissionDate,
      GraduationDate,
      Courseoffered,
      id: editId !== null ? editId : Date.now(), // Unique identifier or existing one for edit Date.now(), // Unique identifier
    };

    handledetails(newData); // Call the handledetails function to save the data

    // Reset form fields after submission
    setschool("");
    setEducation("");
    setAdmissionDate("");
    setGraduationDate("");
    setcourseoffered("");
  };

  const handleEdit = (id) => {
    const detailToEdit = details.find((detail) => detail.id === id);
    setschool(detailToEdit.school);
    setEducation(detailToEdit.Education);
    setAdmissionDate(detailToEdit.AdmissionDate);
    setGraduationDate(detailToEdit.GraduationDate);
    setcourseoffered(detailToEdit.Courseoffered);
    setEditId(id); // Set the edit ID to track the item being edited
  };

  return (
    <div className="cv">
      <div className="form-container">
        <div className="first">
          <form action="#" onSubmit={handlesubmit}>
            <h1>Education Experience</h1>
            <div className="text">
              <label className="form-label">School name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={school}
                onChange={(e) => setschool(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Education title</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={Education}
                onChange={(e) => setEducation(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Admission date</label>
              <input
                type="date"
                className="form-control"
                id="validationCustom01"
                value={AdmissionDate}
                onChange={(e) => setAdmissionDate(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Graduation date</label>
              <input
                type="date"
                className="form-control"
                id="validationCustom01"
                value={GraduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Course Offered</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={Courseoffered}
                onChange={(e) => setcourseoffered(e.target.value)}
                required
              />
            </div>

            <div className="btn">
              <button className="btnn">Submit</button>
            </div>
          </form>
        </div>

        <Info details={details} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

const Info = ({ details, handleEdit }) => {
  return (
    <div className="place">
      {details.map((detail) => (
        <div key={detail.id} className="detail">
          <h2>Submitted Information:</h2>
          <p>Shool: {detail.school} </p>
          <p>Education: {detail.Education}</p>
          <p>Admission Date: {detail.AdmissionDate}</p>
          <p>Graduation Date: {detail.GraduationDate}</p>
          <p>Course Offered: {detail.Courseoffered}</p>
          <button onClick={() => handleEdit(detail.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Edu;
