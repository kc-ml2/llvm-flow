/* eslint-disable camelcase */
import React, { Suspense, useEffect } from 'react'
import SwitchSelector from '@/components/pages/llvmcfg/SwitchSelector'
import SlidingGuide from './SlidingGuide'
import { useAppSelector } from '@/redux/hook'
import styles from './llvmcfg.module.scss'
import buttons from '@/styles/Button.module.scss'
import Loading from '@/components/modules/loading/Loading'
import FileSaver from 'file-saver'
// import UploadFileIcon from '@mui/icons-material/UploadFile'
import { UploadFile } from '@mui/icons-material'

function LLVMcfg() {
  const {
    file_pass,
    before_json,
    before_output,
    after_json,
    after_output,
    beforeg_data,
    afterg_data,
  } = useAppSelector((state) => state.graph)

  const { isFull } = useAppSelector((state) => state.mode)

  const LayoutFlow = React.lazy(
    () => import('@/components/modules/llvmcfg/LayoutFlow'),
  )
  const LayoutFlow2 = React.lazy(
    () => import('@/components/modules/llvmcfg/LayoutFlow2'),
  )
  const LayoutFlowFull = React.lazy(
    () => import('@/components/modules/llvmcfg/LayoutFlowFull'),
  )
  const LayoutFlowFull2 = React.lazy(
    () => import('@/components/modules/llvmcfg/LayoutFlowFull2'),
  )

  function downloadBeforeLLfile() {
    if (beforeg_data) {
      const blob = new Blob([beforeg_data], {
        type: 'text/plain;charset=utf-8',
      })
      FileSaver.saveAs(blob, 'initial.ll')
    } else {
      const a = document.createElement('a')
      a.href = '/files/beforeg.ll'
      a.download = 'initial.ll'
      a.click()
    }
  }

  function downloadAfterLLfile() {
    if (afterg_data) {
      const blob = new Blob([afterg_data], {
        type: 'text/plain;charset=utf-8',
      })
      FileSaver.saveAs(blob, 'optimized.ll')
    } else {
      const a = document.createElement('a')
      a.href = '/files/afterg.ll'
      a.download = 'optimized.ll'
      a.click()
    }
  }

  return (
    <section className={styles.llvmcfg}>
      <div className={styles.row}>
        <div className={styles.guide}>
          <SlidingGuide />
        </div>
        <div className={styles.mode}>
          <SwitchSelector />
        </div>
      </div>

      <div className={styles.cfgName}>
        <span>
          {before_json.name}
          <br></br>
          LLVM's passes = <i>{file_pass}</i>
        </span>
        <br></br>
        <button onClick={downloadBeforeLLfile} className={buttons.download}>
          <UploadFile /> Download <i>before.ll</i>
        </button>
        &nbsp;&nbsp;
        <button onClick={downloadAfterLLfile} className={buttons.download}>
          <UploadFile /> Download <i>after.ll</i>
        </button>
      </div>

      {isFull && (
        <Suspense fallback={<Loading />}>
          <section className={styles.layout}>
            <div className={styles.first}>
              <LayoutFlowFull
                llvmJson={before_json}
                llvmJson_compare={after_json}
                llvmOutput={before_output}
                title={'before'}
              />
            </div>
            <div className={styles.second}>
              <LayoutFlowFull2
                llvmJson={after_json}
                llvmJson_compare={before_json}
                llvmOutput={after_output}
                title={'after'}
              />
            </div>
          </section>
        </Suspense>
      )}
      {!isFull && (
        <Suspense fallback={<Loading />}>
          <section className={styles.layout}>
            <div className={styles.first}>
              <LayoutFlow
                llvmJson={before_json}
                llvmJson_compare={after_json}
                llvmOutput={before_output}
                title={'before'}
              />
            </div>
            <div className={styles.second}>
              <LayoutFlow2
                llvmJson={after_json}
                llvmJson_compare={before_json}
                llvmOutput={after_output}
                title={'after'}
              />
            </div>
          </section>
        </Suspense>
      )}
    </section>
  )
}

export default LLVMcfg as React.ComponentType
