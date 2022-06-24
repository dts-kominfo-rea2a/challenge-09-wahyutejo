// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div className="card">
      <div className="picture">
        <img src={data.photo} alt={data.name} />
      </div>
      <div className="bio">
        <h3 className="id">{data.name}</h3>
        <p className="id">{data.phone}</p>
        <p className="id">{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
