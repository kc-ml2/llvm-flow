import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hook'
import { useNavigate } from 'react-router-dom'
import { setGraphData } from '@/redux/features/graph/graphSlice'
import styles from './profile.module.scss'
import pagination from './pagination.module.scss'
import buttons from '@/styles/Button.module.scss'
import ReactPaginate from 'react-paginate'
import DeleteModal from '@/components/pages/profile/DeleteModal'
import { setIsDeleteOpenTrue } from '@/redux/features/modal/deleteModalSlice'
import PersonIcon from '@mui/icons-material/Person'
import { postFormData } from '@/api/http-post'

const ProfileTable = ({ items }: any) => {
  // const [currentID, setCurrentID] = useState<number>()
  // const [currentFolder, setCurrentFolder] = useState<string>('')
  // const [currentDate, setCurrentDate] = useState<string>('')
  // const [currentFile, setCurrentFile] = useState<string>('')
  // const [currentOption, setCurrentOption] = useState<string>('')

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const showGraph = (i: any) => {
    const payload = new FormData()
    payload.append('path', i[2].substring(0, i[2].indexOf('/')))
    payload.append('passOption', i[0])

    postFormData(payload, 'show')
      .then((response) => {
        dispatch(setGraphData(response.data))
        navigate('/llvmcfg')
      })
      .catch(() => {
        alert('Error, there is no data.')
      })
  }

  const convertDate = (date: string) => {
    return (
      date.slice(0, 4) +
      '.' +
      date.slice(4, 6) +
      '.' +
      date.slice(6, 8) +
      '/' +
      date.slice(9, 11) +
      ':' +
      date.slice(11, 13)
    )
  }

  function Items({ currentItems }: any) {
    return (
      <table>
        <thead>
          <tr>
            <td>date</td>
            <td>user name</td>
            <td>file</td>
            <td>LLVM's passes</td>
            <td>show graph</td>
            {/* <td>delete</td> */}
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((i: any) => (
              <tr key={i}>
                <td>{convertDate(i[2].substring(0, i[2].indexOf('/')))}</td>
                <td>
                  <PersonIcon /> &nbsp;
                  {i[3]}
                </td>
                <td id={styles.fileList}>
                  {i[2].substring(i[2].indexOf('/') + 1)}
                </td>
                <td id={styles.passOption}>{i[0]}</td>
                <td>
                  <button className={buttons.mini} onClick={() => showGraph(i)}>
                    start
                  </button>
                </td>
                {/* <td>
                  <button
                    className={buttons.mini_gray}
                    onClick={() => {
                      dispatch(setIsDeleteOpenTrue())
                      setCurrentID(i[1]),
                        setCurrentDate(
                          convertDate(i[2].substring(0, i[2].indexOf('/'))),
                        ),
                        setCurrentFile(i[2].substring(i[2].indexOf('/') + 1)),
                        setCurrentOption(i[0]),
                        setCurrentFolder(i[2].substring(0, i[2].indexOf('/')))
                    }}
                  >
                    delete
                  </button>

                  <DeleteModal
                    currentDate={currentDate}
                    currentFile={currentFile}
                    currentOption={currentOption}
                    currentID={currentID}
                    currentFolder={currentFolder}
                  />
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    )
  }

  function PaginatedItems({ itemsPerPage }: any) {
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
      if (items) {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(items.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(items.length / itemsPerPage))
      }
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length
      setItemOffset(newOffset)
    }

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          className={pagination.pagination}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={() => null}
          activeClassName={pagination.active}
        />
      </>
    )
  }

  return <PaginatedItems itemsPerPage={10} />
}

export default ProfileTable
