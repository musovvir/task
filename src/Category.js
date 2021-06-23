import React, { useState } from "react";

function Category(props) {
  const [data, setData] = useState([]);

  const [disabled, setDisabled] = useState(false);

  const loadSubcategories = () => {
    setData(props.category.subcategory);
    toggleDisabled();
  };

  const toggleDisabled = () => {
    setDisabled(true);
  };

  return (
    <div>
      <button className="btn" onClick={loadSubcategories} disabled={disabled}>
        {props.category.category}
      </button>
      {data.map((item, i) => {
        return <button key={i}>{item}</button>;
      })}
    </div>
  );
}

export default Category;
