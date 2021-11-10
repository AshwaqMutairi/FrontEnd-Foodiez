import React from "react";
import { Link } from "react-router-dom";
// import Moment from "react-moment";

function CategoryItem(props) {
  const category = props.category;
  return (
    // You dont have this route yet, the one in Link, don't add it here if you didn't add it there yet
    <Link
      className="p-5 m-5 col-lg-4 col-sm-12 itemWrapper"
      to={`/${category.slug}`}
    >
      <div>
        <p>{category.name}</p>
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
