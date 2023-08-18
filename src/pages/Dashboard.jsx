import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./dashboard.scss";
import ListCard from "../components/ListCard";
import { userServices } from "../services/users.service";
import { GroupingAndSorting } from "../utility/groupingAndSorting";

function Dashboard() {
  const [data, setData] = useState(null);
  const [grouped, setGrouped] = useState(null);

  const [filter, setFilter] = useState(
    localStorage.getItem("display")
      ? JSON.parse(localStorage.getItem("display"))
      : {
          grouping: "status",
          ordering: "priority",
        }
  );

  useEffect(() => {
    async function fetchdata() {
      const resData = await userServices.getUsers();
      setData(resData);
      groupAndSort(filter.grouping, filter.ordering, resData);
    }
    fetchdata();
  }, []);

  function groupAndSort(group, sort, resData = data) {
    const groupdata = GroupingAndSorting.groupBy(resData, group);
    const sortedData = GroupingAndSorting.sortBy(groupdata, sort);
    setGrouped(sortedData);
  }

  function sortBy(sort) {
    const sortedData = GroupingAndSorting.sortBy(grouped, sort);
    setGrouped(sortedData);
  }

  return (
    <div>
      <Navbar
        filter={filter}
        setFilter={setFilter}
        groupAndSort={groupAndSort}
        sortBy={sortBy}
      />
      <div className="container">
        {grouped &&
          Object.keys(grouped).map((item) => {
            return <ListCard key={item} title={item} data={grouped[item]} />;
          })}
      </div>
    </div>
  );
}

export default Dashboard;
