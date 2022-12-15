import Link from 'next/link'
import React from 'react'

const UserDetail = ({user}) => {
  return (
    <fieldset> 
      <legend>User Detail</legend>
      <ul>
        <li>
          <strong>Name: </strong>
          {user && user.name}
        </li>
        <li>
          <strong>Username: </strong>
          {user && user.username}
        </li>
        <li>
          <strong>Phone: </strong>
          {user && user.phone}
        </li>
        <li>
          <strong>Email: </strong>
          {user && user.email}
        </li>
        <li>
          <strong>Website: </strong>
          {user && user.website}
        </li>
        <li>
          <strong>Address: </strong>
          <ul>
          {user.address && (
            <li>{user.address.street} Street - {user.address.suite}</li>
            )}
             {user.address && (
            <li>{user.address.city} - Zipcode: {user.address.zipcode}</li>
            )}
          </ul>
        </li>
      </ul>
      <Link href={`/post/${user.id}`}>See Posts</Link>
      <Link href={`/album/${user.id}`}>See Albums</Link>
    </fieldset>
  )
}


export default UserDetail