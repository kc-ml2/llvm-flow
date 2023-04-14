import { useEffect, useState } from 'react'
import styles from './Nickname.module.scss'
import buttons from '@/styles/Button.module.scss'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'
import { setAuthData } from '@/redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { postJsonData } from '@/api/http-post'

const Helper = () => {
  const [nickname, setNickname] = useState<any>()
  const [openWarning, setOpenWarning] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (nickname.length == 0) {
      alert('please fill out this form ')
    } else {
      const data = { Identifier: nickname }

      postJsonData(data, 'identify').then((response) => {
        if (response.status === 0) {
          localStorage.setItem('nickname', nickname)
          dispatch(setAuthData(nickname))
          navigate(-1)
        } else {
          setOpenWarning(true)
        }
      })
    }
  }

  const handleSubmitAgain = async (e: any) => {
    e.preventDefault()
    if (nickname.length == 0) {
      alert('please fill out this form ')
    } else {
      localStorage.setItem('nickname', JSON.stringify(nickname))
      dispatch(setAuthData(JSON.stringify(nickname)))
      navigate(-1)
    }
  }

  return (
    <section className={styles.nickname}>
      <h1>User Name</h1>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <input
          type="text"
          name="nickname"
          placeholder=""
          id="input-text"
          onChange={(e) => {
            setNickname(e.target.value)
          }}
        />

        <input type="submit" value="submit" className={buttons.default}></input>
      </form>
      <br></br>
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
            The same nickname already exists.
            <br></br>
            <button onClick={handleSubmitAgain}>It's me!</button>
          </Alert>
        </Collapse>
      </Stack>
    </section>
  )
}
export default Helper
