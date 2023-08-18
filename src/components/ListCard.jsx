import React from "react";
import "./listCard.scss";
import { BiCircle, BiPlus, BiDotsHorizontalRounded } from "react-icons/bi";
import Card from "./Card";
import pic from "../assets/human1.jpg";
import { BsFillCircleFill } from "react-icons/bs";

function ListCard({ title, data, filter }) {
  return (
    <div className="list">
      <div className="top">
        <div className="left">
          {filter.grouping === "user" ? (
            <div className="profile">
              <img src={pic} alt="profile" className="profile-img" />
              <BsFillCircleFill
                size={7}
                className="status border"
                color="green"
              />
            </div>
          ) : (
            <BiCircle className="icon icon1 fade" size={15} />
          )}
          {/* <BiCircle className="icon icon1 fade" size={15} /> */}
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
          return <Card key={item.id} data={item} filter={filter} />;
        })}
      </div>
    </div>
  );
}

export default ListCard;
