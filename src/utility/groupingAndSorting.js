export class GroupingAndSorting {
  static groupBy(data, value) {
    const priority = ["No priority", "Low", "Medium", "High", "Urgent"];
    const status = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

    const groupedData = {};

    if (value === "priority") {
      priority.forEach(
        (item, i) => (groupedData[priority[priority.length - (i + 1)]] = [])
      );
    } else if (value === "status") {
      status.forEach((status) => (groupedData[status] = []));
    }

    const tickets = data.tickets;
    const users = data.users;
    let key;

    tickets.forEach((ticket) => {
      if (value === "user") {
        const user = users.find((user) => user.id === ticket.userId);
        key = user ? user.name : "Unknown User";
      } else if (value === "priority") {
        key = priority[ticket.priority] || "Unknown priority";
      } else {
        key = ticket[value] || "Undefined";
      }

      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(ticket);
    });
    return groupedData;
  }

  static sortBy(groupedData, value) {
    const sortedData = {};

    const sortingFunction =
      value === "title"
        ? (a, b) => a.title.localeCompare(b.title)
        : (a, b) => b.priority - a.priority;

    Object.keys(groupedData).forEach((key) => {
      sortedData[key] = [...groupedData[key]].sort(sortingFunction);
    });

    return sortedData;
  }
}
