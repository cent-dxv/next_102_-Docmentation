import User from "../components/user";

function Users({ users }) {
  // console.log(users)


  // isr
  return (
    <div className="card">
      <h1>Users List</h1>
      
      <User users={users}></User>
      {/* {
        users.map((user) => {
          return(<div key = {user.id}>

            <p> {user.name}</p>
            <p>{user.email}</p>
            <br />
          </div>)
        })
      } */}
    </div>
  );
}

export default Users;

export async function getServerSideProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await responce.json();

  return { props: { users: data } };
}
