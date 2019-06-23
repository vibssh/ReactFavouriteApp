import React from "react";

import { useStore } from "outstated";

const Counter = ({ store }) => {
  const { count } = useStore(store);

  return (
    <>
      <div className={`counter ${count > 0 ? "active" : ""}`}>
        <span>{count}</span>
      </div>
    </>
  );
};

export default Counter;
