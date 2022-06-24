// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ kontak }) => {
  return (
    <div className="card">
      <div className="picture">
        <img src={kontak.photo} alt={kontak.name} />
      </div>
      <div className="bio">
        <h3 className="id">{kontak.name}</h3>
        <p className="id">{kontak.phone}</p>
        <p className="id">{kontak.email}</p>
      </div>
    </div>
  );
};

export default Contact;
