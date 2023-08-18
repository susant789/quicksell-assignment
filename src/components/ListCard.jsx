import React from "react";
import "./listCard.scss";
import { BiCircle, BiPlus, BiDotsHorizontalRounded } from "react-icons/bi";
import Card from "./Card";

function ListCard({ title, data }) {
  return (
    <div className="list">
      <div className="top">
        <div className="left">
          <BiCircle className="icon icon1 fade" size={15} />
          <span className="header-content">
            {title} <span className="fade3">{data.length}</span>
          </span>
        </div>
        <div className="right">
          <BiPlus className="icon icon1" size={18} />
          <BiDotsHorizontalRounded className="icon" size={18} />
        </div>
      </div>
      <div className="card-wrapper">
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default ListCard;
