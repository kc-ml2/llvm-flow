import { Dispatch, SetStateAction, useRef } from 'react'
import styles from './passOption.module.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import passes from '@/locale/passes'

interface PassOptionProps {
  setPass_Props: Dispatch<SetStateAction<string>>
}

const PassOption = ({ setPass_Props }: PassOptionProps) => {
  const analysisRef = useRef<HTMLElement>(null)
  const transformRef = useRef<HTMLElement>(null)

  const handleDisplayA = () => {
    if (analysisRef.current) {
      const isHidden = analysisRef.current.style.display === 'none' || !analysisRef.current.style.display
      analysisRef.current.style.display = isHidden ? 'block' : 'none'
    }
  }

  const handleDisplayT = () => {
    if (transformRef.current) {
      const isHidden = transformRef.current.style.display === 'none' || !transformRef.current.style.display
      transformRef.current.style.display = isHidden ? 'block' : 'none'
    }
  }

  const handleSetPass = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    const text = target.textContent
    const spanText = target.querySelector('span')?.textContent || ''
    const plainText = text?.replace(spanText, '') || ''
    setPass_Props((prev) => {
      if (prev) {
        return prev + ',' + plainText
      } else {
        return plainText
      }
    })
  }

  const analysisPasses = Object.values(passes.analysis)
  const transformPasses = Object.values(passes.transform)

  return (
    <section className={styles.container}>
      {/* analysis */}
      <section id={styles.title}>
        <button onClick={handleDisplayA}>
          LLVM's <i>Analysis</i> Passes <ExpandMoreIcon />
        </button>
      </section>
      <section id={styles.pass_a} ref={analysisRef}>
        {analysisPasses.map(({ pass, description }) => (
          <button className={styles.tooltip} key={pass} onClick={handleSetPass}>
            {pass}
            <span className={styles.tooltip_text}>{description}</span>
          </button>
        ))}
      </section>
      <br></br>
      {/* transform */}
      <section id={styles.title}>
        <button onClick={handleDisplayT}>
          LLVM's <i>Transform</i> Passes <ExpandMoreIcon />
        </button>
      </section>
      <section id={styles.pass_t} ref={transformRef}>
        {transformPasses.map(({ pass, description }) => (
          <button className={styles.tooltip} key={pass} onClick={handleSetPass}>
            {pass}
            <span className={styles.tooltip_text}>{description}</span>
          </button>
        ))}
      </section>
      {/* */}
      <section id={styles.reference}>
        <a href="https://llvm.org/docs/Passes.html" target="_blank" rel="noopener noreferrer">
          <MenuBookIcon /> Reference Documentation
        </a>
      </section>
    </section>
  )
}

export default PassOption
