import React from "react";
import Spinner from "./Spinner";

const UserList = ({ users, isLoading, userClick, backOut }) => {
  return isLoading ? (
      <>
        <h1>Loading...</h1>
        <Spinner />
      </>
    
  ) : (
    <ul>
      {users.map((user) => (
        //row needs Full name, email and city/country
        <li key={user.login.uuid} >
            {user.name.last + ', ' + 
                user.name.first + ' | ' + 
                user.email + ' | ' + 
                user.location.city + '/' + user.location.country}
            <button onClick={() => userClick(user.login.uuid)} >Details</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
