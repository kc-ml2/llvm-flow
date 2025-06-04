import React, { Dispatch, SetStateAction } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'
// import { makeStyles } from '@material-ui/core'

interface AlertProps {
  errorMessage: string
  openError: boolean
  openWarning: boolean
  setOpenError: Dispatch<SetStateAction<boolean>>
  setOpenWarning: Dispatch<SetStateAction<boolean>>
}

const WarningErrorAlert = ({
  errorMessage,
  openError,
  openWarning,
  setOpenError,
  setOpenWarning,
}: AlertProps) => {
  // const classes = useStyles()
  return (
    <>
      <Stack>
        <Collapse in={openError}>
          <Alert
            severity="error"
            variant="outlined"
            sx={{ backgroundColor: '#fdeded', mb: 2 }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenError(false)
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>
              <b>LLVM Command Error</b>
            </AlertTitle>
            {errorMessage}
          </Alert>
        </Collapse>
      </Stack>

      <Stack>
        <Collapse in={openWarning}>
          <Alert
            severity="warning"
            variant="outlined"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenWarning(false)
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>
              <b>Warning</b>
            </AlertTitle>
            User Name, File and Pass Option must be filled out!
          </Alert>
        </Collapse>
      </Stack>
    </>
  )
}

export default WarningErrorAlert
