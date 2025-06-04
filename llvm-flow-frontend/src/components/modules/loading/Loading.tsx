import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <section className={styles.loading}>
      <div className={styles.spinner}></div>
      <h2>Loading ...</h2>
    </section>
  )
}

export default Loading
