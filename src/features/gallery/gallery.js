import React from "react";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store";

const Gallery = () => {
  // const action = { type: "Liuda", payload: { age: 80, birthday: "1.05.1941" } };
  // const dispatch = useDispatch();
  // dispatch(action);

  // const mom = useSelector((state) => state);
  const mom = store.getState().mom;
  return (
    <div>
      <h1>Gallery</h1>
      <div>
        On {mom.date} turned {mom.news} years old
      </div>
    </div>
  );
};

export default Gallery;
