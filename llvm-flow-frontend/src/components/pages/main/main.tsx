/* eslint-disable camelcase */
/* eslint-disable multiline-ternary */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/redux/hook'
import styles from './main.module.scss'
import buttons from '@/styles/Button.module.scss'
import example from '@/gif/example.gif'
import exBefore from '../../../exData/exBefore.json'
import exAfter from '../../../exData/exAfter.json'
import { setGraphData } from '@/redux/features/graph/graphSlice'
import check from '@/images/check.png'
import feature1 from '@/images/feature1.png'
import feature2 from '@/images/feature2.png'
import feature3 from '@/images/feature3.png'
import feature1_1 from '@/images/feature1_1.png'
import feature2_1 from '@/images/feature2_1.png'
import feature3_1 from '@/images/feature3_1.png'

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

  return (
    <section className={styles.main}>
      <section className={styles.title}>
        <h1>LLVM-FLOW</h1>
        <h3>Visualize the LLVM CFG interactively.</h3>
        <button className={buttons.default} onClick={handleExample}>
          <img src={check} height="18.3" width="25" /> &nbsp; Tutorial
        </button>
      </section>
      <section className={styles.example}>
        <button className={buttons.transparent} onClick={handleExample}>
          <img src={example} />
        </button>
      </section>
      <section className={styles.feature}>
        <div id={styles.box}>
          <img src={feature1} />
          <br></br>
          <div id={styles.text}>
            Both{' '}
            <a href="https://kc-ml2.gitbook.io/llvm-flow/" target="_blank">
              LLVM-FLOW
            </a>
            and{' '}
            <a href="https://github.com/kc-ml2/llvm-block" target="_blank">
              LLVM-BLOCK
            </a>{' '}
            are available as open source to help with compiler optimization
            research.
          </div>
        </div>
        <div id={styles.box}>
          <img src={feature2} />
          <br></br>
          <div id={styles.text2}>
            To create an interactive cfg, simply enter the pass option and
            upload the file. It also offers tutorials and documentation guides.
          </div>
        </div>
        <div id={styles.box}>
          <img src={feature3} />
          <br></br>
          <div id={styles.text2}>
            Various features have been developed to allow easy comparison of
            CFGs before and after optimization. Also, you can download IR files.
          </div>
        </div>
      </section>
    </section>
  )
}

export default Main as React.ComponentType
