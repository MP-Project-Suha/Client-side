import React from "react";
import {AiFillEdit} from "react-icons/ai"
import {TiDelete} from "react-icons/ti"

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
          <label
           className="icon"
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            <AiFillEdit/>
          </label>
          <label
     className="icon"
            type="button"
            onClick={() => handleDeleteClick(contact.id)}
          >
           <TiDelete/>
          </label>
        </td>
      )}
    </tr>
  );
};

export default ReadOnlyRow;
