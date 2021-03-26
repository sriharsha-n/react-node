import React from 'react'
import { Button,TextField } from '@material-ui/core/';

const CreateUser = ({onChangeForm, createUser }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create User</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <TextField id="firstname" name="firstname" onChange={(e) => onChangeForm(e)} label="First Name" variant="standard" /> 
                        </div>
                        <div className="form-group col-md-6">
                            <TextField id="lastname" name="lastname" onChange={(e) => onChangeForm(e)} label="Last Name" variant="standard" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <TextField error={false}
 id="email" name="email" onChange={(e) => onChangeForm(e)} label="Email" variant="standard" />
                        </div>
                    </div>
                    <Button variant="contained" onClick= {(e) => createUser()} color="secondary">
                        Submit
                    </Button>
                    {/* <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Create</button> */}
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser