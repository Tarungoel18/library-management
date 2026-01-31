import { useState, useEffect } from "react";
import { getUsers } from "./service.js";
import UserCard from "../../components/user-card/Index.jsx";
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
 return (
    <div className="container my-4">
      <div className="row g-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
