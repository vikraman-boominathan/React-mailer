import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    jobTitle: "",
  });

  const options = [
    "Developer",
    "Designer",
    "Marketing",
    "Product Manager",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Constructing the form object manually
    const formObject = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      jobTitle: formData.jobTitle,
    };

    // Use the actual form element or selector here
    emailjs.sendForm('service_259khre', 'template_pnfs0g2', e.target, 'nF8MGtsIZxnunt4zH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            className="border-black border-2"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name
          <input
            className="border-black border-2"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            className="border-black border-2"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Job Title
          <select
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Message
          <input
            className="border-black border-2"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="border-black border-2"
        />
      </form>
    </div>
  );
}
