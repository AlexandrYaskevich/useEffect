import React, { useEffect, useState, useContext } from "react";
import UsersContext from "../context/UsersContext";

export function Detalis () {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { id } = useContext(UsersContext);
  
  useEffect(() => {
    const ac = new AbortController();
    if (id) {
      setLoading(true);
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`, { signal: ac.signal })
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data);
          setLoading(false);
          
        });
    }
    return () => {
      ac.abort();
    };
  }, [id]);  



return (    <div className='details-container'>
<h2>User Details</h2>

{loading && <div>Loading...</div>}

{id && (
  <>
  {id == userDetails?.id && <img src={userDetails?.avatar} alt="User Avatar" id={id}/>} 
    <p className='details-userName'>{userDetails?.name}</p>
    <p>City: {userDetails?.details.city}</p>
    <p>Company: {userDetails?.details.company}</p>
    <p>Position: {userDetails?.details.position}</p>
  </>
)}
</div>);
};