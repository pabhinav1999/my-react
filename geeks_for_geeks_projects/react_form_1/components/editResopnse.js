import React from "react";

const EditResponse = (props) => {
  console.log(props);
  return (
    <div className="editResponseMessageContainer">
      <span> Your response is succesfully submitted</span>
      <span>
        {" "}
        <a>Click here to edit the response again</a>
      </span>
    </div>
  );
};

export default EditResponse;
