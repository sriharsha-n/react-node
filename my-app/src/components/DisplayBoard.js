import React from 'react'
import { Button,TextField } from '@material-ui/core/';

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {
    
    return(
        <div className="display-board">
            <h4>Users Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <Button variant="contained" onClick={(e) => getAllUsers()}  color="primary">
                    Get ALL Users
                </Button>
            </div>
        </div>
    )
}