import { useState } from "react";

const Store = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [activeClass, setActiveClass] = useState([]);

  const increment = () => setCount(count + 1);
  const decrement = () => (count > 0 ? setCount(count - 1) : false);

  const handleClick = (clickedItem, id) => {
    const idx = activeClass.indexOf(id);
    if (idx === -1) {
      setActiveClass([...activeClass, id]);
      clickedItem.classList.add("active");
    } else {
      activeClass.splice(idx, 1);
      setActiveClass(activeClass);
      clickedItem.classList.remove("active");
    }
  };

  const addFilteredData = (clickedItem, item) => {
    setFilteredData([...filteredData, item]);
    handleClick(clickedItem, item[0].id);
  };

  const removeFilteredData = (clickedItem, id) => {
    setFilteredData(filteredData.filter(item => item[0].id !== id));
    handleClick(clickedItem, id);
  };

  const newFilteredData = () => {
    setNewData([...newData, filteredData]);
  };

  return {
    count,
    increment,
    decrement,
    data,
    setData,
    filteredData,
    addFilteredData,
    removeFilteredData,
    newData,
    activeClass,
    newFilteredData
  };
};

export default Store;
