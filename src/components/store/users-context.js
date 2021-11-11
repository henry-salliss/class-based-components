import { createContext } from "react";

const UserContext = createContext(() => {
  return {
    users: [],
  };
});

export default UserContext;
