import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=100&order=DESC")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}><img src={user.url} alt=""/></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AsyncAwait