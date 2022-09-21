import React from "react";

function User({ users }) {
  return (
    <>
      user list
      {
        users.map((user) => {
        return (
          <div key={user.id}>
            <p> {user.name}</p>
            <p>{user.email}</p>
            <br />
          </div>
        );
      })
      
      }
    </>
  );
}

export default User;
