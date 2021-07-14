import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Home = () => {
  const action = { type: "Masha", payload: { age: 39, birthday: "21.05.82" } };
  const dispatch = useDispatch();
  dispatch(action);
  const selector = (state) => state;
  const me = useSelector(selector);

  return (
    <div>
      <h1>Home</h1>

      <div> I am {me.news} y.o.</div>
    </div>
  );
};

export default Home;
