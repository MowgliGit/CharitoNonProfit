import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function OfficeInfo() {
  const officeInf = [
    {
      name: "Address",
      info: "[not allowed to share info]",
      text: "[not allowed to share info]",

      icon: faMapMarkerAlt,
    },
    {
      name: "Email Us",
      icon: faEnvelope,
      info: "[not allowed to share info]",
      text: "[not allowed to share info]",
    },
    {
      name: "Call Now",
      icon: faPhoneAlt,
      info: "[not allowed to share info]",
      text: "[not allowed to share info]",
    },
  ];

  return (
    <section className="officeInfoSection">
      <div className="containerOfficeInfo">
        <div className="officeInfoBox">
          {officeInf.map((data, index) => (
            <div className="officeCard" key={index}>
              <div className="infIconBox">
                <FontAwesomeIcon icon={data.icon} className="officeIcon" />
              </div>
              <div className="officeInfoBoxData">
                <h2 className="officeTitle">{data.name}</h2>
                <div className="officeInfoDetails">
                  <p className="officeInfo">{data.info}</p>
                  <p className="officeText">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
