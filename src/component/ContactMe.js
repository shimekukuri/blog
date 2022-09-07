import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./contactMe.css";

export default function ContactMe() {
  const [form, setForm] = useState({});
  const [submitTheForm, setSubmitTheForm] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (form === {}) return;
    fetch(`http://localhost:3300/contactme/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitTheForm]);

  const onSubmit = (data) => {
    setSubmitTheForm((prev) => !prev);
    setForm(data);
  };

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
              <form
                className="contact-me-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="contact-me-input"
                  {...register("name")}
                  type="text"
                  placeholder="test"
                />
                <input
                  className="contact-me-input"
                  {...register("email")}
                  type="email"
                  placeholder="email"
                />
                <input
                  className="contact-me-input"
                  {...register("phone")}
                  type="text"
                  placeholder="phone number"
                />
                <input
                  className="contact-me-input"
                  {...register("company")}
                  type="text"
                  placeholder="company"
                />
                <input type="submit" />
              </form>
            </div>
            <div className="contact-me-outro">test</div>
          </div>
        </div>
      </div>
    </>
  );
}
