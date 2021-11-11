import { createContext } from "react";
import UserContext from "./components/store/users-context";
import UserFinder from "./components/UserFinder";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  const userContext = createContext({
    users: DUMMY_USERS,
  });

  return (
    <div>
      <UserContext.Provider>
        <UserFinder value={userContext} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
