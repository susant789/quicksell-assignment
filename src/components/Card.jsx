import React from "react";
import { BiCircle } from "react-icons/bi";
import { TbAlertSquareFilled } from "react-icons/tb";
import "./card.scss";
import pic from "../assets/human1.jpg";
import { BsFillCircleFill } from "react-icons/bs";

function Card({ data }) {
  return (
    <div className="card">
      <div className="header">
        <span>CAM-5</span>
        <div className="profile">
          <img src={pic} alt="profile" />
          <BsFillCircleFill size={7} className="status border" color="green" />
        </div>
      </div>
      <div className="body">
        <BiCircle size={14} className="icon" />
        <p className="header-content">{data.title}</p>
      </div>
      <div className="footer">
        <TbAlertSquareFilled className="icon left" size={14} color="#1119" />
        <div className="right">
          <BsFillCircleFill size={11} className="icon" />
          {data.tag.map((tag) => {
            return (
              <span key={data.id} className="fade3">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
