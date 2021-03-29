import React from 'react'
import { Button,ButtonGroup,Modal,Fade } from '@material-ui/core/';

function Header(){
    const body = (
        <div style={{top:200,left:300,
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          }}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      );    
    return(
        <div className="header">
            <ButtonGroup disableElevation aria-label="large" variant="contained" color="primary" style={{float:"right"}}>
                <Button >Login</Button>
                <Button >SignUP</Button>
            </ButtonGroup>
            <Modal
                open={true}
                // onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
                </Modal>
        </div>
        
    )

   

}

export default Header;