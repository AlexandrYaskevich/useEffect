
import React, { useEffect, useContext } from "react";
import UsersContext from "../context/UsersContext";




export const List = () => {
  const { users, setUsers, setId } = useContext(UsersContext);
 
  useEffect(() => {
    const ac = new AbortController();
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', { signal: ac.signal })
    .then((response) => response.json())
    .then((data) => setUsers(data));

    return () => {
      ac.abort();
    };
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps

console.log(users);

  return (
    <div>
      <div className="btn-group-vertical">
        {users.map((o) => {
          return (
            <button
              key={o.id}
              type="button"
             
              onClick={() => setId(o.id)}
            >
              {o.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};