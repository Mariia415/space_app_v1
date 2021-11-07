import React from "react";

const NotAuthorized = ({tryMethod}) => {
    return(
        <>
        <div>You are not authorized</div>
        <button onClick = {tryMethod}>Try again</button>
        </>
    )
}
export default NotAuthorized;