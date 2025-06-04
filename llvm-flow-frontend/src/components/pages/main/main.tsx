/* eslint-disable camelcase */
/* eslint-disable multiline-ternary */
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/redux/hook'
import styles from './main.module.scss'
import buttons from '@/styles/Button.module.scss'
import example from '@/gif/example.gif'
import exBefore from '../../../exData/exBefore.json'
import exAfter from '../../../exData/exAfter.json'
import { setGraphData } from '@/redux/features/graph/graphSlice'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import SchoolIcon from '@mui/icons-material/School'
import CodeIcon from '@mui/icons-material/Code'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

function Main() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleExample = () => {
    dispatch(
      setGraphData({
        before_json: exBefore,
        before_output: ['%12', '%14', '%15', '%34'],
        after_json: exAfter,
        after_output: ['%12', '%14', '%15', '%33'],
        file_pass: '-simplifycfg -dse -globalopt',
      }),
    )
    navigate('/tutorial')
  }

  const handleStart = () => {
    navigate('/upload')
  }

  return (
    <section className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>LLVM-FLOW</h1>
          <p className={styles.subtitle}>
            Visualize LLVM IR CFG interactively and compare optimization results at a glance
          </p>
          <div className={styles.actionButtons}>
            <button className={`${buttons.default} ${styles.primaryBtn}`} onClick={handleStart}>
              <UploadFileIcon />
              <span>Get Started</span>
            </button>
            <button className={`${buttons.transparent} ${styles.secondaryBtn}`} onClick={handleExample}>
              <SchoolIcon />
              <span>View Tutorial</span>
            </button>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className={styles.demoSection}>
        <div className={styles.demoContainer}>
          <button className={styles.demoButton} onClick={handleExample}>
            <img src={example} alt="LLVM-FLOW Interactive Demo" />
            <div className={styles.playOverlay}>
              <PlayArrowIcon />
              <span> tutorial</span>
            </div>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <CodeIcon />
            </div>
            <div className={styles.featureContent}>
              <h3>Open Source Research Tools</h3>
              <p>
                Both{' '}
                <a href="https://kc-ml2.gitbook.io/llvm-flow/" target="_blank" rel="noopener noreferrer">
                  LLVM-FLOW
                </a>{' '}
                and{' '}
                <a href="https://github.com/kc-ml2/llvm-block" target="_blank" rel="noopener noreferrer">
                  LLVM-BLOCK
                </a>{' '}
                are available as open source to help with compiler optimization research.
              </p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <UploadFileIcon />
            </div>
            <div className={styles.featureContent}>
              <h3>Web Demo & Local Setup</h3>
              <p>
                Try LLVM-FLOW easily through our web demo by uploading files and configuring pass options. 
                You can also git clone the repository to run it locally on your own environment.
              </p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <CompareArrowsIcon />
            </div>
            <div className={styles.featureContent}>
              <h3>Advanced Comparison Features</h3>
              <p>
                Various features for easy CFG comparison before and after optimization. 
                Download IR files and analyze optimization results interactively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Main
