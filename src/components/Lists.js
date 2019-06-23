import React, { useEffect } from "react";
import { useStore } from "outstated";
import axios from "axios";
import Button from "./Button";

const Lists = ({ store, clickHandler }) => {
  const api = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_ACCESS_KEY;
  const { activeClass, data, setData } = useStore(store);

  //Fetch Images on Mount
  useEffect(() => {
    console.log(api);
    axios
      .get(api, {
        headers: { Authorization: `Client-ID ${apiKey}` }
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, [api, apiKey, setData]);

  return (
    <>
      <ul className="grid grid--gutters small-grid--full med-grid--1of2 grid--1of3 gallery-list">
        {data.map(item => (
          <li key={item.id} className="grid-cell gallery-list">
            <div className="gallery-container">
              <img
                src={item.urls.regular}
                alt={
                  item.alt_description === null
                    ? "image alt_text"
                    : item.alt_description
                }
                className="gallery-item"
              />
              <div className="gallery-button-wrapper">
                <div className="button-holder">
                  <Button
                    className={`gallery-button
                    ${activeClass.indexOf(item.id) >= 0 ? "active" : ""}`}
                    clickHandler={clickHandler}
                    dataid={item.id}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Lists;
