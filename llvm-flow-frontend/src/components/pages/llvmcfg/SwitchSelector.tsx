import { useAppSelector, useAppDispatch } from '@/redux/hook'
import { setIsFullFalse, setIsFullTrue } from '@/redux/features/mode/modeSlice'
import styles from './SwitchSelector.module.scss'

export default function App() {
  //   isFullIndex 0 = simple / 1 = detailed
  const { isFullIndex } = useAppSelector((state) => state.mode)
  const dispatch = useAppDispatch()

  const handleToggle = () => {
    if (isFullIndex === 1) {
      dispatch(setIsFullFalse())
    } else if (isFullIndex === 0) {
      dispatch(setIsFullTrue())
    }
  }

  return (
    <div className={styles.switchContainer}>
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          id="toggle"
          checked={isFullIndex === 1}
          onChange={handleToggle}
          className={styles.toggleInput}
        />
        <label htmlFor="toggle" className={styles.toggleLabel}>
          <span className={styles.toggleText}>
            <span className={`${styles.option} ${isFullIndex === 0 ? styles.active : ''}`}>
              SIMPLE
            </span>
            <span className={`${styles.option} ${isFullIndex === 1 ? styles.active : ''}`}>
              DETAILED
            </span>
          </span>
          <span className={styles.toggleSlider}></span>
        </label>
      </div>
    </div>
  )
}
