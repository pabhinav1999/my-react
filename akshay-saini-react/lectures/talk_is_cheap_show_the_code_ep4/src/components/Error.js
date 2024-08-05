import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="errorContainer">
            <h1>Oops!! This is a error</h1>
            <h2>{err.status} : {err.data }</h2>
        </div>
    )
}

export default Error;