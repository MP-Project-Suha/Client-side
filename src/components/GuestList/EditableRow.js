import React from "react";
import "./style.css"

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
        className="input"
          type="text"
          required="required"
          placeholder="Enter a first name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
       />
      </td>
      <td>
      <input
           className="input"
          type="text"
          required="required"
          placeholder="Enter a last name..."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
          />
      </td>

      <td>
        <input
          className="input"
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          />
      </td>
      <td>
        <button  className="secondaryBtn"  type="submit">Save</button>
        <button className="secondaryBtn"  type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;