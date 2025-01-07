import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const UserForm = () => {
  
    const inputObject = {
        'firstName': 'Abhinav Kumar',
        'lastName': 'Pulijala',
        'emailAddress': 'pabhinav1999@gmail.com',
        'contact': '8555968765',
        'gender':'female',
        'subject': { 'english' : true ,
                     'maths': false,
                     'physics': false},
        'url': 'https://www.cricbuzz.com/', 
        'fileLocation': '',       
        'selectChoice': 'cricket',
        'about': 'Additional details goes here ....'
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
                        <input type="radio" name="gender" id="male" value="male" checked= { formValues.gender === 'male'}
                            onChange={ (event) => {
                               setFormValues({ ...formValues, 'gender': event.target.value})
                            }}
                        />
                        <label htmlFor="male">Male</label>

                        <input type="radio" name="gender" id="female" value="female" checked={ formValues.gender === 'female'} onChange={ (event) => {
                               setFormValues({ ...formValues, 'gender': event.target.value})
                            }}  />
                        <label htmlFor="female">Female</label>

                        <input type="radio" name="gender" id="others" value="others" checked= { formValues.gender === 'others'} onChange={ (event) => {
                               setFormValues({ ...formValues, 'gender': event.target.value})
                            }} />
                        <label htmlFor="others">Others</label>
                    </div>
                </div>

                <div>
                    <p>Your Subject</p>
                    <div className="radioCheckElements">
                        <input type="checkbox" name="subject" id="english" value="english" checked={ formValues.subject?.english }
                         onChange={(event) => {
                            const updatedSubjects = {
                            ...formValues.subject,
                            english: event.target.checked, // Update 'english' based on checkbox state
                            };
                            setFormValues({ ...formValues, subject: updatedSubjects }); // Update the whole formValues state
                        }}
                    />
                        <label htmlFor="english">English</label>

                        <input type="checkbox" name="subject" id="maths" value="maths" checked={ formValues.subject?.maths}
                         onChange={ (event) => {
                            const updatedSubjects = {
                            ...formValues.subject,
                            maths: event.target.checked, // Update 'english' based on checkbox state
                            };
                            setFormValues({ ...formValues, subject: updatedSubjects });
                        }}  />
                        <label htmlFor="maths">Maths</label>

                        <input type="checkbox" name="subject" id="physics" value="physics" checked={ formValues.subject?.physics}
                        onChange={ (event) => {
                            const updatedSubjects = {
                            ...formValues.subject,
                            physics: event.target.checked, // Update 'english' based on checkbox state
                            };
                            setFormValues({ ...formValues, subject: updatedSubjects });
                        }}
                         />
                        <label htmlFor="physics">Physics</label>
                    </div>
                </div>

                <div>
                    <label htmlFor="myfile">Select a File:</label><br />
                    <input type="file" id="myfile" 
                    onChange={(event)=> {
                        setFormValues({ ...formValues, fileLocation:event.target.value})
                    }} />
                </div>

                <div>
                    <label htmlFor="url">Enter URL</label><br />
                    <input type="text" id="url" value={ formValues.url}
                    onChange={(event) => {
                        setFormValues({...formValues, url: event.target.value})
                    }} />
                </div>

                <div>
                    <label htmlFor="selectChoice">Select Choice</label><br />
                    <select id="selectChoice" value= {formValues.selectChoice} 
                    onChange={(event) => {
                      setFormValues({...formValues, selectChoice: event.target.value})
                    }}>
                        <option value="selectAns">Select Answer</option>
                        <option value="cricket">Cricket</option>
                        <option value="volleyball">Volleyball</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="about">About</label><br />
                    <textarea id="about" rows="10" value= {formValues.about}
                    onChange={(event) => {
                       console.log(event.target.value)
                       setFormValues({ ...formValues, about: event.target.value})
                    }}></textarea>
                </div>
            </div>

            <div className="btn-container">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>

            
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('formContainer'));
root.render(<UserForm />);
