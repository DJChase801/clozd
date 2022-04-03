import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [viewUsers, setViewUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      //perform two fetches because api only can get 5000 at a time.
      const result = await axios("https://randomuser.me/api/?results=5000");
      const moreResult = await axios("https://randomuser.me/api/?results=2000");
      const allResults = result.data.results.concat(moreResult.data.results);

      //Sort the data alphabetically by first name.
      allResults.sort(function (a, b) {
        const nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      //Set users and loading state.
      setUsers(allResults);
      setViewUsers(allResults);
      setIsLoading(false);

      //make sure it's not fetching when changing between details page.
      console.log("fetch occured");
    };

    fetchItems();
  }, []);

  //functions for navigation
  const filterView = (letters) => {
    if (letters === "All") {
      setViewUsers(users);
    } else {
      const viewPeople = users.filter(
        (user) =>
          String(user.name.last).startsWith(letters[0]) ||
          String(user.name.last).startsWith(letters[1]) ||
          String(user.name.last).startsWith(letters[2]) ||
          String(user.name.last).startsWith(letters[3]) ||
          String(user.name.last).startsWith(letters[4])
      );
      setViewUsers(viewPeople);
    }
  };

  const filterTyping = (val) => {
    if (val !== "") {
      const viewPeople = users.filter(
        (user) => user.name.last.indexOf(val) > -1
      );
      setViewUsers(viewPeople);
    } else {
      setViewUsers(users);
    }
  };

  const loadUser = (loginUuid) => {
    //set user to the matching login id
    const user = users.find((x) => x.login.uuid === loginUuid);
    console.log(user);
    setUser(user);
  };

  const backFromDetails = () => {
    setViewUsers(users);
    setUser("");
  };

  return user === "" ? (
    <div className="container">
      <Header count={users.length} />
      <Nav onClick={filterView} onChange={filterTyping} />
      <UserList
        isLoading={isLoading}
        users={viewUsers}
        userClick={loadUser}        
      />
    </div>
  ) : (
    <div>
      <UserDetails user={user} setUser={setUser} backOut={backFromDetails}/>
    </div>
  );
};

export default App;
