import React, { useState, useEffect } from 'react'
import axios from 'axios'

// albums.map(album => <TableRows key={album.id} userId={album.userId} id={album.id} title={album.title} />)
const TableRows = ({ userId, id, title }) => {
  return (
    <tr>
      <td>{userId}</td>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  )
}

const ShowTable = ({ albums }) => { // Add albums as a prop
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">UserId</th>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {
          albums.map(album => <TableRows key={album.id} userId={album.userId} id={album.id} title={album.title} />)
        }
      </tbody>
    </table>
  )
}

const EmptyTable = () => {
  return (
    <div>
      <p>🔼 Click the button to show the table </p>
    </div>
  )
}

const TableView = () => {

  const [albums, setAlbums] = useState([]);
  

  const handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data)
      })
      .catch(error => {
        console.log(error)
      })  
  }

  return (
    <div className="container">
      <button className="btn btn-primary mt-3 mb-3" type="submit" onClick={handleClick}>Show Table</button>
      {albums.length > 0 ? <ShowTable albums={albums} /> : <EmptyTable />}
    </div>
  )
}

export default TableView