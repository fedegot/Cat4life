import React, { useEffect, useState } from "react"

const GetCatPic = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1&page=1&order=Desc")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="pics2">
      {users.length > 0 && (
          <div className="pics2">
          {users.map(user => (
            <img className="pics2" src={user.url} alt="CatPicture" key={user.id}/>
          ))}
          </div>
          
      )}
    </div>
  )
}

export default GetCatPic