import React from "react";

const UserDetails = ({user, setUser}) => {
  return (
    <div>
      <img src={user.picture.large} alt="Users profile"></img>
      <h1>{user.name.title + " " + user.name.first + " " + user.name.last}</h1>
      <h3>Email:</h3>
      <p>{user.email}</p>
      <h3>Address:</h3>
      <p>{user.location.street.number + " " + user.location.street.name}</p>
      <p>
        {user.location.city +
          ", " +
          user.location.state +
          " " +
          user.location.postcode}
      </p>
      <p>{user.location.country}</p>
      <h3>Phone:</h3>
      <p>{user.phone}</p>
      <h3>Date of birth:</h3>
      <p>{user.dob.date}</p>
      <button onClick={() => setUser("")}>Back to list</button>
    </div>
  );
};

export default UserDetails;
