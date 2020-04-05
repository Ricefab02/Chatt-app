import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

const Contact = ({ avatar, name, status }) => {
  return (
    <div className="Contact">
      <img src={avatar} alt={name} className="avatar" />
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={status ? "status-online" : "status-offline"} />
          <p className="status-text">{status ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default Contact;



