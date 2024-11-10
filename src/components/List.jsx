
import React, { useEffect, useState } from "react";



export const List = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then((response) => response.json())
        .then((data) => setUsers(data));

    }, []);
    const handleSelectUser = (user) => {
        setSelectedUserId(user.id);
      };

  return <div>
  <div className="btn-group-vertical">
    {users.map((o) => {
      return (
        <button
          key={o.id}
          type="button"
          
          onClick={() => handleSelectUser(o)}
          className={selectedUserId === o.id ? 'selected-user' : ''}
        >
          {o.name}
        </button>
      );
    })}
  </div>
</div>
};

