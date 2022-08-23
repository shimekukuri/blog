import React, { useState, useEffect, useReducer } from "react";
import "./contactMe.css";

export default function ContactMe() {
  const [form, setForm] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    fetch(`https://localhost::3300`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(form)
    })
  }, [submit]);

  return (
    <>
      <div className="contact-me-screentainer">
        <div className="contact-me-maintainer">
          <div className="contact-me-innertainer">
            <div className="contact-me-description contact-me-fully-center-column contact-me-align-text-center">
              <h1>Thank you for your time!</h1>
              <p>
                If you would like to contact me for any reason feel free to
                place your contact information here. Your data will not be
                persisted and will be deleted very shortly after it is sent.
              </p>
            </div>
            <div className="contact-me-form-container">
              <form></form>
            </div>
            <div className="contact-me-outro">test</div>
          </div>
        </div>
      </div>
    </>
  );
}
