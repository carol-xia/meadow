import { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import { useAppDispatch } from '../reducers/hooks';
import { addReport } from '../reducers/slices/reportSlice'

const ModalAddReport = ({
  open,
  setOpen,
}) => {
  const dispatch = useAppDispatch();

  const [reportName, setReportName] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => {
    setOpen(false);
    setReportName('');
    setError('');
  };

  const handleSubmit = () => {
    // Validation check: must be a string and not empty
    if (!reportName || reportName.trim() === '') {
      setError('Must be a string and not empty');
      return;
    }
    
    setError('');
    dispatch(addReport({
      id: crypto.randomUUID(),
      name: reportName,
      purchases: [],
    }));
    // TO DO: Add POST request

    handleClose();
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    outline: 'none',
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="expense-report-modal"
      >
        <Box sx={modalStyle}>
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: 'text.primary',
              fontSize: '1.5rem'
            }}
          >
            ✕
          </IconButton>

          {/* Modal content */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                // fontFamily: 'monospace',
                fontSize: '1.5rem',
                textAlign: 'left'
              }}
            >
              Expense Report Name:
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'flex-start' }}>
              <TextField
                value={reportName}
                onChange={(e) => {
                  setReportName(e.target.value);
                  if (error) setError(''); // Clear error when user starts typing
                }}
                variant="outlined"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    height: '56px',
                    '& fieldset': {
                      border: '2px solid #000',
                    },
                  },
                }}
                error={!!error}
              />
              
              <Button
                variant="outlined"
                onClick={handleSubmit}
                sx={{
                  height: '56px',
                  px: 3,
                  borderRadius: '8px',
                  border: '2px solid #000',
                  color: '#000',
                  backgroundColor: 'white',
                  fontWeight: 'normal',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    border: '2px solid #000',
                  }
                }}
              >
                Submit
              </Button>
            </Box>

            {/* Validation message */}
            {error != '' && 
              <Typography
                variant="body2"
                sx={{
                  color: error ? 'red' : 'text.secondary',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                  mb: 2,
                }}
              >
                Please add a report name
              </Typography>}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalAddReport;