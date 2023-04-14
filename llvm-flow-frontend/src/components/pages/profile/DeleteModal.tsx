import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styles from './modal.module.scss'
import buttons from '../../../styles/Button.module.scss'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '@/redux/hook'
import { setIsDeleteOpenFalse } from '@/redux/features/modal/deleteModalSlice'
import { useDispatch } from 'react-redux'
const { REACT_APP_API_URL } = process.env

interface DeleteProps {
  currentDate: string
  currentFile: string
  currentOption: string
  currentID: undefined | number
  currentFolder: string
}

const DeleteModal = ({
  currentDate,
  currentFile,
  currentOption,
  currentID,
  currentFolder,
}: DeleteProps) => {
  const { isDeleteOpen } = useAppSelector((state) => state.deleteModal)
  const dispatch = useDispatch()

  const deleteGraph = (currentID: any, currentFolder: any) => {
    const headers = {
      'Content-type': 'multipart/form-data',
    }

    axios
      .delete(`${REACT_APP_API_URL}/delete/`, {
        data: { filterID: currentID, folder: currentFolder },
        headers: headers,
      })
      .then(() => {
        dispatch(setIsDeleteOpenFalse())
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Modal
      isOpen={isDeleteOpen}
      className={styles.modal}
      backdropClassName={styles.backdrop}
      size="lg"
      style={{ width: '100%' }}
    >
      <ModalHeader>Are you sure you want to delete this data?</ModalHeader>
      <ModalBody className={styles.modalBody}>
        <table>
          <tr>
            <th>date</th>
            <th>file name</th>
            <th>LLVM's passes</th>
          </tr>
          <tr>
            <td>{currentDate}</td>
            <td>{currentFile}</td>
            <td>{currentOption}</td>
          </tr>
        </table>
      </ModalBody>
      <ModalFooter>
        <button
          className={buttons.mini}
          onClick={() => deleteGraph(currentID, currentFolder)}
        >
          Yes
        </button>
        <button
          className={buttons.mini}
          onClick={() => {
            dispatch(setIsDeleteOpenFalse())
          }}
        >
          No
        </button>
      </ModalFooter>
    </Modal>
  )
}

export default DeleteModal
