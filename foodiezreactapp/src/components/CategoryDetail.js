import React from "react";
import { Redirect, useParams } from "react-router";
import CategoryCateg from "../categs/CategoryCateg";

const CategoryDetail = () => {
  const { CategorySlug } = useParams();
  const Category = CategoryCateg.Categories.find(
    (Category) => Category.slug === CategorySlug
  );
  if (!Category) return <Redirect to="/Categories" />;
  return (
    <div className="detail">
      <img className="detail-img" src={Category.image} alt={Category.name} />
      <h2 className="title">{Category.name}</h2>
    </div>
  );
};

export default CategoryDetail;
