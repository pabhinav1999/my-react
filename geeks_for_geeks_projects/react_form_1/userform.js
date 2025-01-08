import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";

const UserForm = () => {
  const inputObject = {
    firstName: "Abhinav Kumar",
    lastName: "Pulijala",
    emailAddress: "pabhinav1999@gmail.com",
    contact: "8555968765",
    gender: "female",
    subject: { english: true, maths: false, physics: false },
    url: "https://www.cricbuzz.com/",
    fileLocation: "",
    selectChoice: "cricket",
    about: "Additional details goes here ....",
  };

  const genders = ["male", "female", "others"];
  const subjects = ["english", "maths", "physics"];

  const [formValues, setFormValues] = useState(inputObject);
  const [triggerSubmit, setTriggerSubmit] = useState(false);

  useEffect(() => {
    if (triggerSubmit) {
      console.log("We can post data");
      postData("http://localhost:3000/formSubmission", formValues);
    }
  }, [triggerSubmit]);

  const postData = async (url, body) => {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    const jsonResponse = await response.json();

    console.log(jsonResponse, "jsonResponse");
  };

  return (
    <>
      {console.log(triggerSubmit, "triggerSubmit")}

      <header>Form in React</header>
      <div className="formElements">
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            onChange={(event) => {
              setFormValues({ ...formValues, firstName: event.target.value });
            }}
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={formValues.firstName}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            onChange={(event) => {
              setFormValues({ ...formValues, lastName: event.target.value });
            }}
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={formValues.lastName}
          />
        </div>

        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <br />
          <input
            onChange={(event) => {
              setFormValues({
                ...formValues,
                emailAddress: event.target.value,
              });
            }}
            type="email"
            id="emailAddress"
            placeholder="Enter your email address"
            value={formValues.emailAddress}
            required
          />
        </div>

        <div>
          <label htmlFor="contact">Contact</label>
          <br />
          <input
            onChange={(event) => {
              setFormValues({
                ...formValues,
                emailAddress: event.target.value,
              });
            }}
            type="text"
            id="contact"
            placeholder="Enter contact e.g., 9123456789"
            value={formValues.contact}
            required
          />
        </div>

        <div>
          <p>Gender</p>
          <div className="radioCheckElements">
            {genders.map((gender) => {
              return (
                <>
                  <input
                    type="radio"
                    name="gender"
                    id={gender}
                    value={gender}
                    checked={formValues.gender === gender}
                    onChange={(event) => {
                      setFormValues({
                        ...formValues,
                        gender: event.target.value,
                      });
                    }}
                  />
                  <label htmlFor={gender}>{gender}</label>
                </>
              );
            })}
          </div>
        </div>

        <div>
          <p>Your Subject</p>
          <div className="radioCheckElements">
            {subjects.map((subject) => {
              return (
                <>
                  <input
                    type="checkbox"
                    name="subject"
                    id={subject}
                    value={subject}
                    checked={formValues.subject?.[subject]}
                    onChange={(event) => {
                      const updatedSubjects = {
                        ...formValues.subject,
                        [subject]: event.target.checked, // Update 'english' based on checkbox state
                      };
                      setFormValues({
                        ...formValues,
                        subject: updatedSubjects,
                      }); // Update the whole formValues state
                    }}
                  />
                  <label htmlFor={subject}>{subject}</label>
                </>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="myfile">Select a File:</label>
          <br />
          <input
            type="file"
            id="myfile"
            onChange={(event) => {
              setFormValues({
                ...formValues,
                fileLocation: event.target.value,
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="url">Enter URL</label>
          <br />
          <input
            type="text"
            id="url"
            value={formValues.url}
            onChange={(event) => {
              setFormValues({ ...formValues, url: event.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="selectChoice">Select Choice</label>
          <br />
          <select
            id="selectChoice"
            value={formValues.selectChoice}
            onChange={(event) => {
              setFormValues({
                ...formValues,
                selectChoice: event.target.value,
              });
            }}
          >
            <option value="selectAns">Select Answer</option>
            <option value="cricket">Cricket</option>
            <option value="volleyball">Volleyball</option>
          </select>
        </div>

        <div>
          <label htmlFor="about">About</label>
          <br />
          <textarea
            id="about"
            rows="10"
            value={formValues.about}
            onChange={(event) => {
              console.log(event.target.value);
              setFormValues({ ...formValues, about: event.target.value });
            }}
          ></textarea>
        </div>
      </div>

      <div className="btn-container">
        <button type="reset">Reset</button>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setTriggerSubmit((value) => {
              return !value;
            });
            console.log("Only called on click of submit");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("formContainer"));
root.render(<UserForm />);
