import { useAppDispatch } from '@/redux/hook'
import { useNavigate } from 'react-router-dom'
import { setGraphData } from '@/redux/features/graph/graphSlice'
import styles from './profile.module.scss'
import pagination from './pagination.module.scss'
import buttons from '@/styles/Button.module.scss'
import ReactPaginate from 'react-paginate'
import PersonIcon from '@mui/icons-material/Person'
import { postFormData } from '@/api/http-post'
import { OptimizationRecord } from '@/types/optimization'

interface ProfileTableProps {
  items: OptimizationRecord[]
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

interface PageClickEvent {
  selected: number
}

const ProfileTable = ({
  items = [],
  totalPages,
  currentPage,
  onPageChange,
}: ProfileTableProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const formatDateTime = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    
    return `${year}.${month}.${day} - ${hours}:${minutes}`
  }

  const showGraph = (i: { id: string }) => {
    const payload = new FormData()
    payload.append('optimization_record_id', i.id)

    postFormData(payload, 'show')
      .then((response) => {
        dispatch(setGraphData(response.data))
        navigate('/llvmcfg')
      })
      .catch(() => {
        alert('Error, there is no data.')
      })
  }

  const handlePageClick = (event: PageClickEvent) => {
    onPageChange(event.selected + 1) // ReactPaginate uses 0-based indexing
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>date</td>
            <td>user name</td>
            <td>file</td>
            <td>LLVM's passes</td>
            <td>LLVM's version</td>
            <td>show graph</td>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{formatDateTime(new Date(i.created_at))}</td>
              <td>
                <PersonIcon /> &nbsp;
                {i.user_name}
              </td>
              <td id={styles.fileList}>{i.file_names.join(',')}</td>
              <td id={styles.passOption}>{i.opt_passes.join(',')}</td>
              <td id={styles.llvm_version}>{i.llvm_version}</td>
              <td>
                <button className={buttons.mini} onClick={() => showGraph(i)}>
                  start
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <ReactPaginate
          className={pagination.pagination}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={() => null}
          activeClassName={pagination.active}
          forcePage={currentPage - 1} // ReactPaginate uses 0-based indexing
        />
      )}
    </>
  )
}

export default ProfileTable
