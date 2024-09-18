import React, { useState } from "react";

function Gen() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [Addre, setAddre] = useState("");
  const [Address, setAddress] = useState("");
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
      first,
      last,
      username,
      password,
      Dob,
      city,
      country,
      zip,
      Addre,
      Address,
      Agree,
      id: editId !== null ? editId : Date.now(), // Unique identifier or existing one for edit
    };

    handledetails(newData); // Call the handledetails function to save the data

    // Reset form fields after submission
    setFirst("");
    setLast("");
    setUsername("");
    setPassword("");
    setDob("");
    setCity("");
    setCountry("");
    setZip("");
    setAddre("");
    setAddress("");
    setAgree(false); // Reset checkbox
  };

  const handleEdit = (id) => {
    const detailToEdit = details.find((detail) => detail.id === id);
    setFirst(detailToEdit.first);
    setLast(detailToEdit.last);
    setUsername(detailToEdit.username);
    setPassword(detailToEdit.password);
    setDob(detailToEdit.Dob);
    setCity(detailToEdit.city);
    setCountry(detailToEdit.country);
    setZip(detailToEdit.zip);
    setAddre(detailToEdit.Addre);
    setAddress(detailToEdit.Address);
    setAgree(detailToEdit.Agree);
    setEditId(id); // Set the edit ID to track the item being edited
  };

  return (
    <div className="cv">
      <div className="form-container">
        <div className="first">
          <form action="#" onSubmit={handlesubmit}>
            <h1>General Information</h1>
            {/* Form inputs */}
            <div className="text">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="@Alvin"
              />
            </div>
            <div className="text">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="validationCustom01"
                value={Dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <div className="text">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="text">
              <label className="form-label">Country</label>
              <select
                className="form-select"
                id="validationCustom04"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Afghsnistan</option>
                <option>Austalia</option>
                <option>Brazil</option>
                <option>Benin</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Denmark</option>
                <option>Ghana</option>
                <option>Hungary</option>
                <option>Mexico</option>
                <option>Nigeria</option>
                <option>Philippines</option>
                <option>South Africa</option>
                <option>Thailand</option>
                <option>united Kingdom</option>
                <option>united State</option>
                <option>Vietnam</option>
                <option>Yemen</option>
                <option>Zambia</option>
              </select>
            </div>

            <div className="text">
              <label className="form-label">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>

            <div className="text">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                value={Addre}
                onChange={(e) => setAddre(e.target.value)}
                required
              />
            </div>

            <div className="text">
              <label className="form-label">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="check">
              <input
                className="form-check-input"
                type="checkbox"
                id="invalidCheck"
                checked={Agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              <label className="form-check-label">
                Agree to terms and conditions
              </label>
            </div>
            {/* Other input fields remain the same */}
            <div className="btn">
              <button className="btnn">Submit</button>
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
                  <strong>First Name:</strong> {detail.first} <br />
                  <strong>Last Name:</strong> {detail.last} <br />
                  <strong>Username:</strong> {detail.username} <br />
                  <strong>Password:</strong> {detail.password} <br />
                  <strong>Date of birth:</strong> {detail.Dob} <br />
                  <strong>City:</strong> {detail.City} <br />
                  <strong>Country:</strong> {detail.country} <br />
                  <strong>Zip:</strong> {detail.zip} <br />
                  <strong>Address 1:</strong> {detail.Addre} <br />
                  <strong>Address 2:</strong> {detail.Address} <br />
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

export default Gen;
