import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({alert,setAlert}) {
  const [open, setOpen] = React.useState(false);
    
  React.useEffect(
      ()=>{
          setOpen(true)
        }
        ,[alert]
        )


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setAlert({})
  };

if(Object.keys(alert).length===0) return <></>

  return (<>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={alert.cat} sx={{ width: '100%' }}>
          {alert.msg}
        </Alert>
        </Snackbar>     
    </>
  );
}
