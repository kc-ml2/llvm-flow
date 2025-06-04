import { useEffect, useState } from 'react'
import styles from './profile.module.scss'
import buttons from '@/styles/Button.module.scss'
import ProfileTable from './ProfileTable'
import { getJsonData } from '@/api/http-get'
import { OptimizationRecord } from '@/types/optimization'

const Profile = () => {
  const [userName, setUserName] = useState<string>('')
  const [items, setItems] = useState<OptimizationRecord[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [currentSearchUser, setCurrentSearchUser] = useState<string>('')

  const fetchData = async (page: number, searchUser?: string) => {
    setLoading(true)
    try {
      // Get paginated optimization history
      const response = await getJsonData('optimization-records', {
        page,
        page_size: 10,
        desc: true,
        user_name_filter: searchUser,
      })
      setItems(response.data.data)
      setTotalPages(Math.ceil(response.data.total_count / 10))
      setCurrentPage(page)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(1)
  }, [])

  const handleSubmit = () => {
    setCurrentSearchUser(userName)
    fetchData(1, userName)
  }

  const handlePageChange = (page: number) => {
    fetchData(page, currentSearchUser || undefined)
  }

  return (
    <section className={styles.profile}>
      <div className={styles.search}>
        <div className={styles.input}>
          <label htmlFor="input-text">User Name</label>
          <input
            type="text"
            name="userName"
            placeholder=""
            id="input-text"
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <div className={styles.submit}>
            <button
              onClick={handleSubmit}
              className={buttons.default_fill}
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ProfileTable
            items={items}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  )
}

export default Profile
