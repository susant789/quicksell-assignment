const api = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const userServices = {
  getUsers: async () => {
    const res = await fetch(api);
    const users = res.json();
    return users;
  },
};
