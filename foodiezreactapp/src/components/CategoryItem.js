import React from "react";
import { Link } from "react-router-dom";
// import Moment from "react-moment";

function CategoryItem(props) {
  const category = props.category;
  return (
    <Link className="p-5 m-5 col-lg-4 col-sm-12 itemWrapper" to="/recipes">
      <div>
        <h4>{category.name}</h4>
        <img
          className="card-image-top"
          src={category.image}
          alt={category.name}
        />
      </div>
    </Link>
  );
}

export default CategoryItem;
