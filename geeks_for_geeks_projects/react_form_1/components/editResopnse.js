import React from "react";
import { useState } from "react"
import UserForm from "./userform";


const EditResponse = (props) => {

  /* Not using edit response as of now , will develop in future */
  console.log(props);
  console.log('is it rerenmdered')

  const [loadOldData, setLoadOldData] = useState(false)
 
  return (
    <div className="editResponseMessageContainer">
      <span> Your response is succesfully submitted</span>
      <span>
        {" "}
        <span onClick={() => {
            setLoadOldData((value) => !value)
        }}>Click here to edit the response again</span>
      </span>
    </div>
  );
};

export default EditResponse;
