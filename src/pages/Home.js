import React from "react";
import { useStore } from "outstated";
import Lists from "../components/Lists";

const Home = ({ store }) => {
  const {
    increment,
    decrement,
    data,
    addFilteredData,
    removeFilteredData,
    activeClass
  } = useStore(store);

  const clicker = function(event) {
    event.preventDefault();

    const clickedId = event.target.dataset["id"];
    const filteredItem = data.filter(data => data.id === clickedId);
    const idx = activeClass.indexOf(clickedId);

    if (idx === -1) {
      increment();
      addFilteredData(event.target, filteredItem);
    } else {
      decrement();
      removeFilteredData(event.target, clickedId);
    }
  };

  return (
    <div className="container">
      <h2>This is Home page</h2>
      <Lists clickHandler={clicker} store={store} />
    </div>
  );
};

export default Home;
