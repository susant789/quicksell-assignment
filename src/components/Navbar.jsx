import React, { useState, useRef } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./navbar.scss";

function Navbar({ filter, setFilter, groupAndSort, sortBy }) {
  const [toggle, setToggle] = useState(false);

  function saveLocaly(data) {
    localStorage.setItem("display", JSON.stringify(data));
  }

  function onGroupChange(value) {
    setFilter({ ...filter, grouping: value });
    groupAndSort(value, filter.ordering);
    saveLocaly({ ...filter, grouping: value });
  }
  function onSortChange(value) {
    setFilter({ ...filter, ordering: value });
    sortBy(value);
    saveLocaly({ ...filter, ordering: value });
  }

  return (
    <nav className="nav-wrapper">
      <div
        className="display"
        onClick={() => setToggle(!toggle)}
        // onMouseEnter={() => setToggle(true)}
        // onMouseLeave={() => setToggle(false)}
      >
        <GiSettingsKnobs
          className="icon icon-rotate"
          size={15}
          style={{ color: "#999", fontWeight: "600" }}
        />
        <span>Display</span>
        <MdKeyboardArrowDown
          className="icon"
          style={{ marginTop: ".1rem", color: "#999", fontWeight: "600" }}
          size={15}
        />
      </div>
      {toggle && (
        <div className="dropdown">
          <div>
            <span className="fade2">Grouping</span>
            <select
              value={filter.grouping}
              onChange={(e) => onGroupChange(e.target.value)}
              name="grouping"
              className="display"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <span>Ordering</span>
            <select
              value={filter.ordering}
              onChange={(e) => onSortChange(e.target.value)}
              name="ordering"
              className="display"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
