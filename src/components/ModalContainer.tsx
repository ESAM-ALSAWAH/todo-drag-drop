import * as React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Modal from '@mui/material/Modal'

export const ModalContainer: React.VFC<any> = ({
  children,
  open,
  handleClose,
}) => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          margin: '0 1rem',
        }}
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '799px',
            width: '100%',
            height: '403px',
            borderRadius: '37px',
            border: 0,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            bgcolor: `${theme.palette.primary.main}`,
            outline: 'none',
          }}
        >
          {children}
        </Box>
      </Modal>
    </React.Fragment>
  )
}
