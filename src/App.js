import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserToList = (name, age) => {
    setUsersList((prev) => {
      return [...prev, { name: name, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser addUser={addUserToList} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
