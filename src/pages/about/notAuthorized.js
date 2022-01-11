import React from "react";

const NotAuthorized = ({tryMethod}) => {
    return(
        <>
        <div>You are not authorized</div>
        <button onClick = {tryMethod}>Return</button>
        </>
    )
}
export default NotAuthorized;