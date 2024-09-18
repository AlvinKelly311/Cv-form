import React, { useState } from "react";

function Exp() {
  const [company, setcompany] = useState("");
  const [Position, setPosition] = useState("");
  const [Skills, setSkills] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [City, setcity] = useState("");
  const [state, setstate] = useState("");
  const [Reasons, setReasons] = useState("");
  const [Agree, setAgree] = useState(false); // Boolean for checkbox
  const [details, setDetails] = useState([]);
  const [editId, setEditId] = useState(null); // Track the ID of the data being edited

  const handledetails = (detail) => {
    if (editId !== null) {
      // Update the existing detail
      setDetails((details) =>
        details.map((item) =>
          item.id === editId ? { ...detail, id: editId } : item
        )
      );
      setEditId(null); // Reset edit ID after updating
    } else {
      // Add new data to the list
      setDetails((details) => [...details, detail]);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const newData = {
      company,
      Position,
      Skills,
      StartDate,
      EndDate,
      City,
      state,
      Reasons,
      Agree,
      id: editId !== null ? editId : Date.now(), // Unique identifier or existing one for edit Date.now(), // Unique identifier
    };

    handledetails(newData); // Call the handledetails function to save the data

    // Reset form fields after submission
    setcompany("");
    setPosition("");
    setSkills("");
    setStartDate("");
    setEndDate("");
    setcity("");
    setstate("");
    setReasons("");
    setAgree(false); // Reset checkbox
  };

  const handleEdit = (id) => {
    const detailToEdit = details.find((detail) => detail.id === id);
    setcompany(detailToEdit.company);
    setPosition(detailToEdit.Position);
    setSkills(detailToEdit.Skills);
    setStartDate(detailToEdit.StartDate);
    setEndDate(detailToEdit.EndDate);
    setcity(detailToEdit.City);
    setstate(detailToEdit.state);
    setReasons(detailToEdit.Reasons);
    setAgree(detailToEdit.Agree);
    setEditId(id); // Set the edit ID to track the item being edited
  };

  return (
    <div className="cv">
      <div className="form-container">
        <div className="first">
          <form action="#" onSubmit={handlesubmit}>
            <h1>Practical Experience</h1>
            <div className="text">
              <label className="form-label">Company name</label>
              <input
                type="text"
                className="form-control"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Position title</label>
              <input
                type="text"
                className="form-control"
                value={Position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Skills</label>
              <input
                type="text"
                className="form-control"
                value={Skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Start date</label>
              <input
                type="date"
                className="form-control"
                value={StartDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">End date</label>
              <input
                type="date"
                className="form-control"
                value={EndDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                value={City}
                onChange={(e) => setcity(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                value={state}
                onChange={(e) => setstate(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">
                Reasons why you left your previous company
              </label>
              <textarea
                placeholder="Please enter a message."
                value={Reasons}
                onChange={(e) => setReasons(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={Agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              <label className="form-check-label">
                Agree to terms and conditions
              </label>
            </div>
            <div className="btn">
              <button className="btnn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Display submitted details */}
        <div className="submitted-data">
          <h2>Submitted Information:</h2>
          {details.length === 0 ? (
            <p>No details submitted yet.</p>
          ) : (
            <ul>
              {details.map((detail) => (
                <li key={detail.id}>
                  <strong>Company:</strong> {detail.company} <br />
                  <strong>Position:</strong> {detail.Position} <br />
                  <strong>Skills:</strong> {detail.Skills} <br />
                  <strong>Start Date:</strong> {detail.StartDate} <br />
                  <strong>End Date:</strong> {detail.EndDate} <br />
                  <strong>City:</strong> {detail.City} <br />
                  <strong>State:</strong> {detail.state} <br />
                  <strong>Reasons:</strong> {detail.Reasons} <br />
                  <strong>Agreed to Terms:</strong>{" "}
                  {detail.Agree ? "Yes" : "No"}
                  <br />
                  <button
                    className="btnn1"
                    onClick={() => handleEdit(detail.id)}
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exp;
