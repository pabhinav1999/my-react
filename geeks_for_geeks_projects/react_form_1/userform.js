import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const UserForm = () => {
  
    const inputObject = {
        'firstName': 'Abhinav Kumar',
        'lastName': 'Pulijala',
        'emailAddress': 'pabhinav1999@gmail.com',
        'contact': '8555968765',
        'gender':'male',
        'subject': 'english',
        'selectChoice': 'cricket'
    }

    const [formValues, setFormValues] = useState(inputObject)



    return (
        <>
            <header>Form in React</header>
            <div className="formElements">
                <div>
                    <label htmlFor="firstName">First Name</label><br />
                    <input onChange={(event) => {
                        setFormValues({...formValues, 'firstName': event.target.value})
                    }} 
                    type="text" id="firstName" placeholder="Enter your first name" value={formValues.firstName}  required />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label><br />
                    <input  onChange={(event) => {
                        setFormValues({...formValues, 'lastName': event.target.value})
                    }} 
                      type="text" id="lastName" placeholder="Enter your last name" value={formValues.lastName} />
                </div>

                <div>
                    <label htmlFor="emailAddress">Email Address</label><br />
                    <input 
                     onChange={(event) => {
                        setFormValues({...formValues, 'emailAddress': event.target.value})
                    }} 
                    type="email" id="emailAddress" placeholder="Enter your email address" value={formValues.emailAddress} required />
                </div>

                <div>
                    <label htmlFor="contact">Contact</label><br />
                    <input
                     onChange={(event) => {
                        setFormValues({...formValues, 'emailAddress': event.target.value})
                    }} 
                    type="text" id="contact" placeholder="Enter contact e.g., 9123456789" value={formValues.contact} required />
                </div>

                <div>
                    <p>Gender</p>
                    <div className="radioCheckElements">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>

                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>

                        <input type="radio" name="gender" id="others" value="others" />
                        <label htmlFor="others">Others</label>
                    </div>
                </div>

                <div>
                    <p>Your Subject</p>
                    <div className="radioCheckElements">
                        <input type="checkbox" name="subject" id="english" value="english" />
                        <label htmlFor="english">English</label>

                        <input type="checkbox" name="subject" id="maths" value="maths" />
                        <label htmlFor="maths">Maths</label>

                        <input type="checkbox" name="subject" id="physics" value="physics" />
                        <label htmlFor="physics">Physics</label>
                    </div>
                </div>

                <div>
                    <label htmlFor="myfile">Select a File:</label><br />
                    <input type="file" id="myfile" />
                </div>

                <div>
                    <label htmlFor="url">Enter URL</label><br />
                    <input type="text" id="url" />
                </div>

                <div>
                    <label htmlFor="selectChoice">Select Choice</label><br />
                    <select id="selectChoice">
                        <option value="selectAns">Select Answer</option>
                        <option value="cricket">Cricket</option>
                        <option value="volleyball">Volleyball</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="about">About</label><br />
                    <textarea id="about" rows="10"></textarea>
                </div>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('formContainer'));
root.render(<UserForm />);
