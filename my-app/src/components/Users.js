import React from 'react'
import { Delete } from "@material-ui/icons"
import { IconButton } from '@material-ui/core';
export const Users = ({users,deleteuser}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <IconButton aria-label="delete" id={user._id}  onClick={(e) => {deleteuser(user._id)}}>
                        <Delete fontSize="medium" color="danger" />
                    </IconButton>    
                  </td>
              </tr>
          )
    }

    const userTable = users.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered table-hover table-striped">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>User Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}