import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hook'
import { useNavigate } from 'react-router-dom'
import { setGraphData } from '@/redux/features/graph/graphSlice'
import styles from './upload.module.scss'
import buttons from '@/styles/Button.module.scss'
import NearMeIcon from '@mui/icons-material/NearMe'
import { setAuthData } from '@/redux/features/auth/authSlice'
import PassOption from './passOption'
import { postFormData } from '@/api/http-post'
import WarningErrorAlert from './warningErrorAlert'
import { AxiosError } from 'axios'

type FileType = 'C' | 'CPP' | 'LL'

interface FormData {
  files: FileList
  opt_passes: string
  user_name: string
  llvm_version: string
}

function Upload() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [fileType, setFileType] = useState<FileType>('C')
  const [pass, setPass] = useState<string>('')
  const [file, setFile] = useState<string>('')
  const [openWarning, setOpenWarning] = useState(false)
  const [openError, setOpenError] = useState(false)
  const { nickname } = useAppSelector((state) => state.auth)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const getFileAccept = () => {
    switch (fileType) {
      case 'C':
        return '.h, .c'
      case 'CPP':
        return '.h, .cpp'
      case 'LL':
        return '.ll'
      default:
        return '.h, .c'
    }
  }

  const getFileLabel = () => {
    switch (fileType) {
      case 'C':
        return '.c File Upload'
      case 'CPP':
        return '.cpp File Upload'
      case 'LL':
        return '.ll File Upload'
      default:
        return '.c File Upload'
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const profileLabel = (form[0] as HTMLInputElement).value
    const content = (form[1] as HTMLInputElement).files
    const transformpass = (form[2] as HTMLInputElement).value
    const llvm_version = (form[3] as HTMLSelectElement).value

    if (
      !content ||
      content.length === 0 ||
      transformpass.length === 0 ||
      profileLabel.length === 0
    ) {
      setOpenWarning(true)
    } else {
      const data = new FormData()
      for (let i = 0; i < content.length; i++) {
        data.append('files', content[i])
      }
      data.append('opt_passes', transformpass)
      data.append('user_name', profileLabel)
      data.append('llvm_version', llvm_version)

      postFormData(data, `upload/${fileType}`)
        .then((response) => {
          dispatch(setGraphData(response.data))
          localStorage.setItem('nickname', JSON.stringify(profileLabel))
          dispatch(setAuthData(profileLabel))
          navigate('/llvmcfg')
        })
        .catch((err: AxiosError) => {
          setOpenError(true)
          setErrorMessage(err.response?.data?.error || 'An error occurred')
        })
    }
  }

  return (
    <section className={styles.upload}>
      <div className={styles.Docker}>
        If you want to run it directly on local environment,
        <a
          href="https://kc-ml2.gitbook.io/llvm-flow/getting-started/docker-guide"
          target="_blank"
          rel="noreferrer"
        >
          <NearMeIcon></NearMeIcon>
          <b>click here !</b>
        </a>
      </div>
      <div className={styles.navlink}>
        <button
          onClick={() => setFileType('C')}
          id={fileType === 'C' ? styles.active : styles.deactive}
        >
          with .c file
        </button>
        <button
          onClick={() => setFileType('CPP')}
          id={fileType === 'CPP' ? styles.active : styles.deactive}
        >
          with .cpp file
        </button>
        <button
          onClick={() => setFileType('LL')}
          id={fileType === 'LL' ? styles.active : styles.deactive}
        >
          with .ll file
        </button>
      </div>

      {fileType === 'LL' && (
        <div className={styles.clang}>
          <span>
            ⚠️ <br></br>
            LLVM-FLOW searches the same basic blocks between IR modules using
            <b> debug information.</b> <br></br>
            So, when compiling with clang,{' '}
            <b>please include the following commands.</b>
          </span>
          <br></br>
          <span id={styles.clangex}>
            <i>
              clang <b>-O0 -g -Xclang -disable-O0-optnone</b> -emit-llvm -S
            </i>
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className={styles.userName}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="profileLabel"
            id="userName"
            defaultValue={nickname}
          />
        </div>
        <div className={styles.file}>
          <label htmlFor="input-file">{getFileLabel()}</label>
          <input
            type="file"
            name="content"
            multiple
            id="intput-file"
            accept={getFileAccept()}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFile(e.target.value)
            }}
          />
        </div>
        <div className={styles.pass}>
          <label htmlFor="pass">LLVM's passes</label>
          <input
            type="text"
            name="transformpass"
            placeholder="ex) -passes=simplifycfg,inline"
            id="pass"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPass(e.target.value)
            }}
            value={pass}
          />
        </div>
        <div className={styles.llvm_version}>
          <label htmlFor="llvm_version">LLVM Version</label>
          <select name="llvm_version" id="llvm_version">
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>

        <WarningErrorAlert
          errorMessage={errorMessage}
          openError={openError}
          openWarning={openWarning}
          setOpenError={setOpenError}
          setOpenWarning={setOpenWarning}
        />

        <div className={styles.cmd}>
          <h5>llvm 20</h5>
          <p>
            opt {fileType === 'LL' ? file : 'beforeg.ll'} -S -passes=
            <i>{pass}</i> -o afterg.ll
          </p>
        </div>

        <div id={styles.submit}>
          <input
            type="submit"
            value="submit"
            className={buttons.default_fill}
          ></input>
        </div>
      </form>

      <PassOption setPass_Props={setPass} />
    </section>
  )
}

export default Upload
