import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  // console.log(contact);
  return (
    <tr>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      {contact.isVerified ? (
        <td> Ticket sent and {contact.isUsed? "used": "did not used yet" } </td>
      ) : (
        <td>
          <button
            className="secondaryBtn"
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </button>
          <button
            className="secondaryBtn"
            type="button"
            onClick={() => handleDeleteClick(contact.id)}
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default ReadOnlyRow;
