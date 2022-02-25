const ROLE = {
  ADMIN: "admin",
  CUSTOMER: "customer",
  MODERATOR: "moderator",
};
module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Sumit", role: ROLE.ADMIN },
    { id: 2, name: "Sumit", role: ROLE.CUSTOMER },
    { id: 3, name: "Sumit", role: ROLE.MODERATOR },
  ],
  projects: [
    { id: 1, name: "Sumit's Project", userId: 1 },
    { id: 2, name: "Sumit's Project", userId: 2 },
    { id: 3, name: "Sumit's Project", userId: 3 },
  ],
};
