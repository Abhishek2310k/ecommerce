import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../Hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const subCatsQueryString = subCats.map(item => `&[filters][sub_categories][id][$in]=${item}`).join('');
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCatsQueryString}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
