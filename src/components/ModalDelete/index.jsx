import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './modalDelete.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalDelete({ children, user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" endIcon={children} onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> Tem certeza que deseja excluir {user.nome}</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <div className='modalDelete-actions'>
            <Button variant="contained" color="error" onClick={handleClose}>Não</Button>
            <Button variant="contained" color="success" onClick={handleClose}>Sim</Button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
