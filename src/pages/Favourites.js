import React from "react";
import { useStore } from "outstated";

//import Lists from '../components/Lists';

const Favourites = ({ store }) => {
  const { filteredData } = useStore(store);

  return (
    <div className="container">
      <h2>Your Favourites</h2>
      <ul className="grid grid--gutters small-grid--full med-grid--1of2 grid--1of3 gallery-list">
        {filteredData.map((filters, index) => {
          return filters.map((item, idx) => {
            return (
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
                </div>
              </li>
            );
          });
        })}
      </ul>
    </div>
  );
};

export default Favourites;
