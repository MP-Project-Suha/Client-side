import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./style.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { locale } from "moment";
import { Link, useLocation } from "react-router-dom";

const GuestList = () => {
  const { _id } = useParams();
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  useEffect(() => {
    myEventTickets();
  }, []);
  console.log("contacts", contacts);
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const myEventTickets = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/myEventTickets/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );

      console.log("myEventTickets:-----", result.data);
      const res = result.data.map((elem) => {
        return {
          id: elem.createdBy._id,
          firstName: elem.createdBy.firstName,
          lastName: elem.createdBy.lastName,
          email: elem.createdBy.email,
          isVerified: elem.isVerified,
        };
      });
      setContacts(res);
    } catch (error) {
      console.log(error.response);
    }
  };

  const sentGuests = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/guestList/${_id}`,
        { guests: contacts },
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      console.log(result.data);
      myEventTickets()
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {/* banner */}
      <div className="guestList">
        <div className="cont">
          <p>
            <Link to="/"> Home </Link> - {splitLocation[1]}
          </p>
          <span>Guest</span>
        </div>
      </div>
      {/* main */}
      <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>

        <h2>Add a Contact</h2>
        <form className="form" onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="firstName"
            required="required"
            placeholder="Enter first name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="lastName"
            required="required"
            placeholder="Enter last name..."
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter email..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>

        <button className="btn" onClick={sentGuests}>
          save and send tickets
        </button>
      </div>{" "}
    </div>
  );
};

export default GuestList;
